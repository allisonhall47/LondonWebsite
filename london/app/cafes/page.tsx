"use client";

import Map from "../../components/Map";
import type { MarkerData } from "../../components/Map/Map";
import style from "../Home.module.css";
import { useState, useEffect, useRef } from "react";


export default function Cafes() {
  const markers: MarkerData[] = [
    { position: [51.5222174101289, -0.11415575407339987], popup: "Fred Coffee & Bakery" },
    { position: [51.54683906431931, -0.161149486534121], popup: "England's Lane" },
    { position: [51.52441599474721, -0.07684408242589684], popup: "Blank Street Coffee" },
    { position: [51.50550501829388, -0.0914541739493827], popup: "Monmouth Coffee Company" },
    { position: [51.52457150949189, -0.07430027281612028], popup: "Jolene Redchurch Street" },
    { position: [51.52445698734945, -0.07425112430214922], popup: "Allpress Espresso Bar Shoreditch" },
    { position: [51.52576227823025, -0.12523460497673466], popup: "Store Street Espresso" },
    { position: [51.528635730665336, -0.14890921920012284], popup: "Espresso Bar" },
    { position: [51.53418293299645, -0.10449222248395189], popup: "Redemption Roasters" },
    { position: [51.5332776342106, -0.11126832854477979], popup: "Tudee's Coffee & Wine" },
    { position: [51.51542351764135, -0.11924947455873264], popup: "Sontag" },
    { position: [51.53845487353074, -0.10263812052648315], popup: "Selv Roastery" },
    { position: [51.521714734285865, -0.21048317056057944], popup: "Layla Bakery" },
    { position: [51.53931727616611, -0.09830547422654849], popup: "Sourdough Sophia" },
    { position: [51.5187976894892, -0.15463672553178104], popup: "The Monocle Cafe" },
    { position: [51.547089482389, -0.07416590616742032], popup: "The Dusty Knuckle Bakery" },
    { position: [51.54184899022031, -0.15691272276789373], popup: "Little Bread Pedlar" },
    { position: [51.453119247148514, -0.10216568371872538], popup: "Perks & White Coffee" },
    { position: [51.515504664075735, -0.07907010621899542], popup: "WatchHouse" },
    { position: [51.515233717706465, -0.08004873588573246], popup: "Caffe Nero" },
    { position: [51.516359893027726, -0.08223451675898638], popup: "Urban Baristas" },
    { position: [51.51720930250585, -0.08732596430363367], popup: "Nkora Coffee" },
    { position: [51.52464913335123, -0.10249461703219898], popup: "Clerkenwell, Coffee & Book Shop" },
    { position: [51.52468599844884, -0.10238239786373177], popup: "Sofu Coffee" },
    { position: [51.52643508381276, -0.10833627984700804], popup: "Briki" },
    { position: [51.52596325855268, -0.10933863361955605], popup: "Gail's Bakery" },
    { position: [51.53476599941938, -0.10424803451406851], popup: "The Neva London" },
    { position: [51.53501405101444, -0.10390771853320982], popup: "Crumb" },
    { position: [51.53209351268522, -0.10641496809448887], popup: "The German Bakery" },
    { position: [51.4739449491494, -0.059402559979509405], popup: "Well & Fed" },
    { position: [51.518171215164415, -0.07816762462148201], popup: "ZeroToOne Coffee" },
  ]

  const descriptions: string[] = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "This small Japanese cafe is right at the end of my street and has some fabulous, strong matcha. I like my matcha unsweetened and they deliver it perfectly smooth to complement the flavour. They also have scrumptious looking onigiri, but at the time of writing this I haven't been lucky enough to try them yet.",
    "",
    "If you haven't heard of Gail's you either don't live in London or just hate leaving your flat. It's everywhere, the coffee is average, the baked goods are hit or miss. I solely included this location since the interior is quite nice for studying/working in, looking onto Exmouth market and having a cheeky little sunroof. If you are going to visit Gail's I would choose the cinnamon bun - it's unexpectedly good.",
    "",
    "",
    "",
    "",
  ];

  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (selectedIdx !== null) {
      setExpandedIdx(selectedIdx);
      itemRefs.current[selectedIdx]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      setExpandedIdx(null);
    }
  }, [selectedIdx]);

  return (
    <div className="min-h-screen bg-gray-50 py-15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={style.cafesTitleBox}>
          <h1 className={style.cafesTitle}>LONDON CAFES</h1>
        </div>
        <p className={style.cafesDescription}>
          A list of majority of cafes I tried in London! After living here I consider going to a new cafe and indulging in a little coffee and sweet treat on a weekend morning a hobby. Post run or hungover from the pub, these cafes never failed to make me feel 1000x better. Please enjoy and I hope you find somewhere new to add to your list.
        </p>
      </div>
      <div className={style.mapContainer}>
        <div className={style.scrollableList}>
          {markers.map((marker, idx) => (
            <div
              key={idx}
              ref={el => { itemRefs.current[idx] = el; }}
              className={
                style.scrollableListItem +
                (selectedIdx === idx ? ' ' + style.selectedListItem : '')
              }
              onClick={() => {
                if (expandedIdx === idx) {
                  setExpandedIdx(null);
                  setSelectedIdx(null);
                } else {
                  setSelectedIdx(idx);
                  setExpandedIdx(idx);
                }
              }}
              tabIndex={0}
              role="button"
              style={{ outline: 'none' }}
            >
              {marker.popup}
              {expandedIdx === idx && (
                <div className={style.scrollableListDescription}>
                  {descriptions[idx]}
                </div>
              )}
            </div>
          ))}
        </div>
        <Map
          markers={markers}
          selectedIdx={selectedIdx}
          setSelectedIdx={setSelectedIdx}
        />
      </div>
    </div>
  );
} 