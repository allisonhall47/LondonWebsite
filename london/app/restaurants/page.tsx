"use client";

import Map from "../../components/Map";
import type { MarkerData } from "../../components/Map/Map";
import style from "../Home.module.css";
import { useState, useEffect, useRef } from "react";
import { Playfair_Display } from 'next/font/google';


const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
});



export default function Restaurants() {
  const markers: MarkerData[] = [
    { position: [51.540216245825896, -0.0898230335037724], popup: "Goodbye Horses" },
    { position: [51.52617276400843, -0.1088187133792752], popup: "Ken's" },
    { position: [51.526295000171736, -0.10849483664064319], popup: "Santore" },
    { position: [51.525887598066795, -0.10899062912377988], popup: "Moro" },
    { position: [51.524658341407765, -0.10993440750198319], popup: "Quality Wines" },
    { position: [51.5197555588988, -0.07421958423848365], popup: "St. John Bread and Wine" },
    { position: [51.53777135038084, -0.05755048281064898], popup: "Bambi" },
    { position: [51.46968574972911, -0.0692611834666783], popup: "Bar Levan" },
    { position: [51.52423130504071, -0.0769776096231985], popup: "Smoking Goat" },
    { position: [51.52450531853701, -0.07658710946529054], popup: "Dishoom Shoreditch" },
    { position: [51.53576837583575, -0.10298399038766347], popup: "Afghan Kitchen" },
    { position: [51.511742016881314, -0.13839368426288332], popup: "Nopi" },
    { position: [51.52425883202755, -0.07674218129102413], popup: "BRAT Restaurant" },
    { position: [51.52019249013376, -0.07782688872932483], popup: "Galvin Bistrot & Bar" },
    { position: [51.513636147491106, -0.13176015450785986], popup: "Koya" },
    { position: [51.51512419077533, -0.1333571192992584], popup: "Pizza Express" },
    { position: [51.52371571486321, -0.07293668318657937], popup: "SMOKESTAK" },
    { position: [51.524421213319556, -0.0774917114146259], popup: "Lina Stores Shoreditch" },
    { position: [51.498246088924404, -0.13540406787264014], popup: "Chez Antoinette Victoria" },
    { position: [51.50494522384651, -0.09041120891043147], popup: "Tapas Brindisa London Bridge" },
    { position: [51.52453523219868, -0.10259875442343286], popup: "Dragonfly Cafe" },
    { position: [51.52435249655286, -0.10294140662510516], popup: "Bocas" },
    { position: [51.52616837118019, -0.08229046176047602], popup: "YAYACAS" },
    { position: [51.50484298703188, -0.019079725831616646], popup: "Wahaca Canary Wharf" },
    { position: [51.53796962339435, -0.10292338740047487], popup: "Chubby Bowl" },
    { position: [51.53710360036898, -0.06155196300212603], popup: "Bella Vita" },
    { position: [51.51366209272775, -0.12741015927303823], popup: "Rosa's Thai" },
  ]

  const descriptions: string[] = [
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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className={style.cafesTitleBox}>
        <h1 className={`${playfair.className} ${style.cafesTitle}`}>LONDON RESTAURANTS</h1>
      </div>
      <p className={style.cafesDescription}>
        A list of some of the lovely restaurants I had the pleasure of dining at! Some are cozy wine bars serving delicious small plates - my personal favourite, some more upscale places, and some casual as well. Honestly I loved tried some modern British cuisine, especially a good British fusion restaurant, so keep an eye out for many of those on this list.
      </p>
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

      <div className={style.photoGridSection}>
        <div className={style.photoGrid}>
          {[
            { src: "/bambi.jpg", name: "Bambi", desc: "Margaritas at bar seats" },
            { src: "/quality.jpg", name: "Quality Wines", desc: "Appetizers and wine" },
            { src: "/stjohn.jpg", name: "St. John Bread and Wine", desc: "Beet salad appetizer" },
            { src: "/nopi.jpg", name: "Nopi", desc: "Burrata, rhubarb, and foccacia" },
            { src: "/kens.jpg", name: "Ken's", desc: "Wine and bread" },
            { src: "/goodbye.jpg", name: "Goodbye Horses", desc: "Interior of the restaurant" },
            { src: "/koya.jpg", name: "Koya", desc: "Cold udon noodles" },
            { src: "/smokestak.jpg", name: "SMOKESTAK", desc: "Salmon Crudo Appetizer" },
            { src: "/spitalfields.jpg", name: "Galvin Bistrot & Bar", desc: "Shishito peppers and croquetas" },
            { src: "/bambi2.jpg", name: "Bambi", desc: "Vinyl DJ setup at bar" },
            { src: "/nopi2.jpg", name: "Nopi", desc: "Pisco Sour and Kier Royale" },
            { src: "/bocas.jpg", name: "Bocas", desc: "Selection of tapas" },
            { src: "/borough.jpg", name: "Tapas Brindisa London Bridge", desc: "View of the Shard from the patio" },
            { src: "/afghan.jpg", name: "Afghan Kitchen", desc: "Selection of sharing dishes" },
            { src: "/chez.jpg", name: "Chez Antoinette Victoria", desc: "Hugo Spritz and Champagne" },

          ].map((item, idx) => (
            <div key={idx} className={style.photoCard}>
              <img src={item.src} alt={item.name} className={style.gridImage} />
              <div className={style.overlay}>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className={style.footer}>
        <p>&copy; {new Date().getFullYear()} Allison Hall</p>
      </footer>
    </div>
  );
} 