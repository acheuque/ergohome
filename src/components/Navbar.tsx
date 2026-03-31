"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getImageUrl } from '@/utils/imagePath';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Proyectos', href: '/proyectos' },
    { name: 'Ergo-logía', href: '/ergologia' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <>
      <nav className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md fixed top-0 w-full z-50 shadow-sm">
        <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-screen-2xl mx-auto">
          {/* Logo */}
          <div className="z-50">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center">
              <img
                src={getImageUrl("/images/HOME_web/Ergohome_Logo_Negro_Limpio-500.png")}
                alt="Ergohome Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-headline text-sm font-medium tracking-tight">
            {navLinks.map((link) => {
              const normalizedPath = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
              const isActive = normalizedPath === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors py-1 ${isActive
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center w-10 h-10 z-[60] relative focus:outline-none"
          >
            <span className="material-symbols-outlined text-3xl text-primary transition-transform duration-300 flex items-center justify-center">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white dark:bg-zinc-900 z-40 flex flex-col items-center justify-start pt-32 pb-12 overflow-y-auto transition-transform duration-500 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-y-0 opacity-100 pr-0' : '-translate-y-full opacity-0'
          }`}
      >
        <div className="flex flex-col items-center gap-10 font-headline text-3xl font-semibold tracking-tight w-full px-8">
          {navLinks.map((link) => {
            const normalizedPath = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
            const isActive = normalizedPath === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`transition-all ${isActive ? 'text-primary scale-110' : 'text-zinc-600 dark:text-zinc-400 hover:text-primary'
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
