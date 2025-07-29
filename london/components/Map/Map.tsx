import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import style from '../../app/Home.module.css'
import L from 'leaflet';

export type MarkerData = {
  position: [number, number];
  popup?: string;
  type?: ("beer" | "wine" | "dance")[];
};

type MapProps = {
  markers: MarkerData[];
  selectedIdx: number | null;
  setSelectedIdx: Dispatch<SetStateAction<number | null>>;
};

function PanAndOpenPopup({ position, popupRef }: { position: [number, number] | null, popupRef: L.Popup | null }) {
  const map = useMap();
  useEffect(() => {
    if (position && Array.isArray(position) && position.length === 2) {
      let opened = false;
      const handleMoveEnd = () => {
        if (popupRef && !opened) {
          popupRef.openOn(map);
          opened = true;
        }
        map.off('moveend', handleMoveEnd);
      };
      map.on('moveend', handleMoveEnd);
      map.setView(position, map.getZoom(), { animate: true });
      // Fallback: if already at position, open immediately
      if (map.getCenter().lat === position[0] && map.getCenter().lng === position[1]) {
        if (popupRef) popupRef.openOn(map);
        map.off('moveend', handleMoveEnd);
      }
      return () => {
        map.off('moveend', handleMoveEnd);
      };
    }
  }, [position, popupRef, map]);
  return null;
}

export default function Map({ markers, selectedIdx, setSelectedIdx }: MapProps) {
  const customIcon = L.icon({
    iconUrl: '/pin.png', 
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  const popupRefs = useRef<(L.Popup | null)[]>([]);

  useEffect(() => {
    if (selectedIdx !== null && popupRefs.current[selectedIdx]) {
      popupRefs.current[selectedIdx]?.openPopup();
    } else if (selectedIdx === null) {
      // Close all popups
      popupRefs.current.forEach(popup => popup && popup.isOpen() && popup.close());
    }
  }, [selectedIdx]);

  return (
    <MapContainer className={style.map} center={[51.5072, -0.09]} zoom={12} scrollWheelZoom={true}>
      <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {selectedIdx !== null && markers[selectedIdx] && (
        <PanAndOpenPopup position={markers[selectedIdx].position} popupRef={popupRefs.current[selectedIdx]} />
      )}
      {markers.map((marker, idx) => (
        <Marker
          key={idx}
          position={marker.position}
          icon={customIcon}
          eventHandlers={{
            click: () => setSelectedIdx(idx),
          }}
        >
          {marker.popup && (
            <Popup
              ref={(ref) => {
                popupRefs.current[idx] = ref;
              }}
              autoPan={true}
              eventHandlers={{
                add: () => setSelectedIdx(idx),
                remove: () => setSelectedIdx(null),
              }}
            >
              {marker.popup}
            </Popup>
          )}
        </Marker>
      ))}
    </MapContainer>
  );
}
