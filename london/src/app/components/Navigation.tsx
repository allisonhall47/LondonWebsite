'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Cafes', path: '/cafes' },
    { name: 'Pubs', path: '/pubs' },
    { name: 'Restaurants', path: '/restaurants' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 z-50">
      <div className="h-full bg-white/10 backdrop-blur-sm border-b border-white/10" />
      <div className="absolute top-0 left-0 h-full flex items-center px-8">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`relative group px-6 py-2 transition-colors ${
              pathname === item.path
                ? 'text-white'
                : 'text-white/60 hover:text-white'
            }`}
          >
            <span className="block text-sm tracking-wider font-medium">
              {item.name}
            </span>
            {pathname === item.path && (
              <div className="absolute left-0 bottom-0 w-full h-0.5 bg-white" />
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation; 