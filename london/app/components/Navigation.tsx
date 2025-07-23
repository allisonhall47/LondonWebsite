'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Cafes', path: '/cafes' },
    { name: 'Pubs', path: '/pubs' },
    { name: 'Restaurants', path: '/restaurants' },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.navBackground} />
      <div className={styles.navContent}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`${styles.navLink} ${
              pathname === item.path ? styles.active : styles.inactive
            }`}
          >
            <span className={styles.linkText}>{item.name}</span>
            {pathname === item.path && <div className={styles.underline} />}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
