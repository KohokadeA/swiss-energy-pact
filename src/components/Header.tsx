'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';
import Magnetic from '@/components/Magnetic';
import { type Locale, getDictionary } from '@/lib/dictionary';

const languages = [
  { code: 'fr', name: 'FR' },
  { code: 'de', name: 'DE' },
  { code: 'it', name: 'IT' },
  { code: 'en', name: 'EN' },
];

export const Header = ({ lang }: { lang: Locale }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const dict = getDictionary(lang);

  const navLinks = [
    { name: dict.nav.home, href: `/${lang}` },
    { name: dict.nav.initiative, href: `/${lang}/initiative` },
    { name: dict.nav.sign, href: `/${lang}/sign` },
    { name: dict.nav.media, href: `/${lang}/media` },
    { name: dict.nav.partners, href: `/${lang}/partners` },
    { name: dict.nav.association, href: `/${lang}/association` },
    { name: dict.nav.support, href: `/${lang}/support` },
    { name: dict.nav.contact, href: `/${lang}/contact` },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to switch locale
  const redirectedPathName = (locale: string) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-smooth scroll-blur',
        isScrolled
          ? 'bg-white/80 dark:bg-black/70 backdrop-blur-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] py-3 border-b border-white/10'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-8 flex items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center gap-3 group">

          {/* Logo container */}
          {/* <div className="w-12 h-12 flex items-center justify-center rounded-xl overflow-hidden group-hover:scale-110 transition-all duration-300">
            <img
              src="/new_logo.png"
              alt="Swiss Digital Pact Logo"
              className="w-full h-full object-contain"
            />
          </div> */}

          {/* Text */}
          <div className="flex flex-col">
            <span className={clsx(
              "font-bold text-xl tracking-tight leading-none group-hover:text-primary transition-colors whitespace-nowrap",
              isScrolled ? "text-gray-900 dark:text-white" : "text-white"
            )}>
              {dict.title.toUpperCase()}
            </span>
            <span className={clsx(
              "text-[10px] uppercase font-semibold tracking-[0.05em] leading-tight mt-1 hidden lg:block max-w-[350px]",
              isScrolled ? "text-gray-600 dark:text-gray-400" : "text-white/80"
            )}>
              {dict.subtitle.split(':').map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part.trim()}{i < arr.length - 1 ? ':' : ''}
                  {i < arr.length - 1 && <br />}
                </React.Fragment>
              ))}
            </span>
          </div>

        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
                <Link
                  href={link.href as string}
                  className={clsx(
                    'nav-link relative font-medium text-sm whitespace-nowrap px-2 py-2 transition-colors',
                    pathname === link.href 
                      ? 'text-primary font-bold' 
                      : (isScrolled ? 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white' : 'text-white/90 hover:text-white')
                  )}
                >
                  {link.name}
                  {pathname === link.href && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
            </div>
          ))}

          <div className="h-4 w-[1px] bg-gray-200 dark:bg-gray-800 mx-1 xl:mx-3" />

          <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-900/80 p-1 rounded-lg border border-gray-200 dark:border-white/10">
            {languages.map((l) => (
              <Link
                key={l.code}
                href={redirectedPathName(l.code)}
                className={clsx(
                  'px-2.5 py-1.5 text-[10px] font-bold rounded-md transition-all',
                  lang === l.code ? 'bg-white dark:bg-white text-black shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
                )}
              >
                {l.name}
              </Link>
            ))}
          </div>

          <Link href={`/${lang}/sign`} className="ml-3 bg-primary hover:bg-red-600 text-white font-bold rounded-lg flex items-center justify-center py-2 px-5 text-sm whitespace-nowrap transition-colors shadow-sm">
            {dict.common.signCta}
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-zinc-900 border-t border-gray-100 dark:border-gray-800 p-6 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <React.Fragment key={link.name}>
                  <Link
                    href={link.href as string}
                    className={clsx(
                      'text-lg font-bold px-4 py-3 rounded-xl transition-all',
                      pathname === link.href ? 'bg-primary/10 text-primary' : 'text-gray-600 hover:bg-gray-50'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
              </React.Fragment>
            ))}
            <div className="flex items-center justify-center gap-3 pt-4 border-t border-gray-100 mt-2">
              {languages.map((l) => (
                <Link
                  key={l.code}
                  href={redirectedPathName(l.code)}
                  className={clsx(
                    'px-4 py-2 text-sm font-black rounded-xl border-2 transition-all',
                    lang === l.code ? 'border-primary text-primary bg-primary/5' : 'border-gray-100 text-gray-400'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {l.name}
                </Link>
              ))}
            </div>
            <Link
              href={`/${lang}/sign`}
              className="mt-4 swiss-button text-center py-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {dict.common.signCta}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
