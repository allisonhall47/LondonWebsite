'use client';

import Image from "next/image";
import { Playfair_Display } from 'next/font/google';
import { useEffect, useState } from 'react';
import styles from './Home.module.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
});

const images = [
  "/DSC_0013.jpg",
  "/DSC_0106.jpg",
  "/DSC_0169.jpg",
  "/DSC_0039.jpg",
  "/DSC_0174.jpg",
  "/DSC_0056.jpg",
  "/DSC_0165.jpg",
  "/DSC_0015.jpg",
  "/DSC_0044.jpg",
  "/DSC_0063.jpg",
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={`${playfair.className} ${styles.heading}`}>
          LDN
        </h1>
        <div className={styles.imageWrapper}>
          <Image
            src="/DSC_0030.jpg"
            alt="London"
            width={550}
            height={700}
            className={styles.image}
            priority
          />
        </div>
      </main>

      <section className={styles.slideshow}>
        <div className={styles.slide}>
          <Image
            src={images[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            fill
            className={styles.slideImage}
            priority
          />
        </div>
      </section>

      <section className={styles.description}>
        <p>
          Welcome to my little London guide! I am living here from May - November 2025 and wanted to remember all the fun places I discovered, either to revisit when I come back or to give recommendations to friends who visit!
          I would be so honoured if anyone read this and actually took a recommendation from me. In no way do I think I managed to go to all the best places in the city, but I do pride myself on knowing good small plate restaurants, aesthetic wine bars, and delicious pints.
          Please enjoy either learning about my time in London or finding yourself a recommendation.
        </p>
      </section>

      <section className={styles.buttonGroup}>
        <a href="/cafes" className={styles.navButton}>CAFES</a>
        <a href="/pubs" className={styles.navButton}>PUBS & BARS</a>
        <a href="/restaurants" className={styles.navButton}>RESTAURANTS</a>
      </section>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Allison Hall</p>
      </footer>

    </div>
  );
}
