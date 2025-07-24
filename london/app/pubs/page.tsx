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



export default function Pubs() {
  const markers: MarkerData[] = [
    { position: [51.52578609894164, -0.10966756524723513], popup: "Exmouth Arms" },
    { position: [51.473739408730594, -0.05858797348921873], popup: "Beer Rebellion" },
    { position: [51.467531563537534, -0.04942339151030584], popup: "Skehans" },
    { position: [51.44694941657519, -0.14895890793267832], popup: "The Devonshire" },
    { position: [51.463960230862305, -0.13266958469081047], popup: "The Ox" },
    { position: [51.52432310219643, -0.1044283167124118], popup: "The Sekforde" },
    { position: [51.470721966286796, -0.0683754774822067], popup: "Frank's Cafe at Bold Tendencies" },
    { position: [51.48623033777878, -0.16308538378071352], popup: "The Surprise" },
    { position: [51.51409124378157, -0.07704320624247034], popup: "Aldgate Tap" },
    { position: [51.5216595918529, -0.07568385273487092], popup: "Commercial Tavern" },
    { position: [51.519347605616325, -0.07431600735739531], popup: "The Ten Bells" },
    { position: [51.5043569738802, -0.0223977376171636], popup: "The Henry Addington" },
    { position: [51.54210172949344, -0.05830857297382516], popup: "Pub on the Park" },
    { position: [51.54372903437896, -0.02261657729277206], popup: "Grow" },
    { position: [51.54868468048567, -0.07606547920543058], popup: "Dalston Jazz Bar" },
    { position: [51.546144136605555, -0.0755005673842174], popup: "Crown & Castle" },
    { position: [51.54824250558413, -0.07265632716776413], popup: "Ridley Road Market Bar" },
    { position: [51.537471709925605, -0.10371088717476304], popup: "Humble Grape Islington" },
    { position: [51.53279097630583, -0.09858968376992193], popup: "Galata Restaurant & Bistro" },
    { position: [51.537235240923394, -0.10041204744038931], popup: "The Old Queens Head" },
    { position: [51.52808353835173, -0.0778063470965825], popup: "Dream Bags Jaguar Shoes" },
    { position: [51.511028246013154, -0.12277172994747033], popup: "Maple Leaf" },
    { position: [51.51840515834303, -0.10739017363031789], popup: "Ye Olde Mitre" },
    { position: [51.5245228411059, -0.07628200818926019], popup: "Boundary Bar and Brasserie" },
    { position: [51.53709655535489, -0.1412184001707139], popup: "The Blues Kitchen Camden" },
    { position: [51.519236255876315, 0.004086516692851808], popup: "FOLD" },
    { position: [51.51781214483523, -0.08376231588624115], popup: "Los Mochis" },
  ]

  // Add a description for each marker (same order)
  const descriptions: string[] = [
    "One of my local pubs and located in Exmouth Market, I think this place is top tier. Picnic benches setup outside, gorgeous interior with stain glass windows, and people spilling all out into the surrounding street each night - it's always guaranteed to be buzzing but still with a laid back vibe.",
    "Came here my first time going to Peckham! Very chill vibes, with many picnic tables outside the pub. Located super conviently right next to the tube station and packed with the cool (gentrified) peckham crowd.",
    "Absolute gem of an Irish pub in Peckham - lots of lager selection and rumoured great Guinness (however I have yet to try). I'm just obsessed with the vines covering the building and the large, yet still cozy, beer garden out back. Would happily sit in the leafy oasis outside any summer night.",
    "",
    "",
    "The ultimate hidden gem in Clerkenwell. Located in the residential streets, making it so peacful and quaint. Is the absolute number 1 location if you are looking just to relax with a pint and a friend without being disturbed.",
    "I would have to give this the award for best rooftop in London (I mean I don't have much comparison, but I can't imagine anything beating this). It's a giant concrete space with tables covering one half and empty space to stand about on the other half. Views of the city are insane, the vibes are impeccable, the only downside is the outhouse washrooms.",
    "",
    "Yes this is a finance pub for post-work drinks, but I would say its slightly more lowkey and cute then the city finance bro hotspots. To find it look for a weird shaped building with a small grassy square surrounding it."
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={style.cafesTitleBox}>
          <h1 className={`${playfair.className} ${style.cafesTitle}`}>LONDON PUBS & BARS</h1>
        </div>
        <p className={style.cafesDescription}>
          A list of some pubs, bars, and night outs venues I visited in London! Despite the occasional annoyance when the pub closes its doors and kicks you to the curb at 11pm, I think London nightlife is amazing. There is a pub at every turn with delicious pints, local wine bars, and great places for a lil boogie!
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
      <div className={style.photoGridSection}>
        <div className={style.photoGrid}>
          {[
            { src: "/tenbells.jpg", name: "The Ten Bells", desc: "London Pride Pints" },
            { src: "/franks.jpg", name: "Frank's Cafe at Bold Tendencies", desc: "Rooftop view of the city from Peckham" },
            { src: "/gelata.jpg", name: "Galata Restaurant & Bistro", desc: "Aperol spritz and pimms next to the canal" },
            { src: "/pubpark.jpg", name: "Pub on the Park", desc: "Maddy having her first pint next to London fields" },
            { src: "/exmouth.jpg", name: "Exmouth Arms", desc: "Fresh Asahi pints" },
            { src: "/grow.jpg", name: "Grow", desc: "Outside terrace on the canal" },
            { src: "/commercial.jpg", name: "Commercial Tavern", desc: "Margaritas!" },
            { src: "/exmouth2.jpg", name: "Exmouth Arms", desc: "Interior of the pub" },
            { src: "/hotel.jpg", name: "Boundary Bar and Brasserie", desc: "Cocktail at the hotel bar" },
            { src: "/mapleleaf.jpg", name: "Maple Leaf", desc: "Canadian pub on Canada day" },
            { src: "/oldqueens.jpg", name: "The Old Queens Head", desc: "Pints and crispy chicken sandwiches" },
            { src: "/yeold.jpg", name: "Ye Olde Mitre", desc: "Back alley courtyard outside the pub" },

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