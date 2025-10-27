'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Far Left */}
          <Link href="/" className="flex items-center h-full py-2 group">
            <div className="relative h-10 w-40 md:h-12 md:w-48">
              <Image 
                src="/images/logo.png" 
                alt="Honest Traveler Logo" 
                fill
                className="object-contain object-left transition-opacity group-hover:opacity-90"
                priority
              />
            </div>
          </Link>

          {/* Location Indicator - Next to Logo */}
          <div className="hidden md:flex items-center bg-slate-800/40 rounded-full px-3 py-1.5 text-sm text-white/90 ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>You are now in Tromsø</span>
          </div>
          
          {/* Desktop Navigation - Right side */}
          <nav className="hidden md:flex items-center space-x-1 h-full">
            <a 
              href="https://www.yr.no/nb/andre-varsler/1-305409/Norge/Troms/Troms%C3%B8/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-white transition-colors rounded-md hover:bg-slate-800/50"
            >
              Aurora Forecast
            </a>
            <NavItem href="/companies">Companies</NavItem>
            <NavItem href="/about">About</NavItem>
            <div className="h-6 w-px bg-slate-700 mx-3"></div>
            <NavItem href="/submit" className="ml-1 px-5 text-slate-900 bg-white hover:bg-slate-100 hover:text-slate-900 rounded-full shadow-sm">
              Submit Business
            </NavItem>
          </nav>
          
          {/* Mobile menu button */}
          <button className="md:hidden p-2 -mr-2 text-white hover:text-slate-200 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

function NavItem({ 
  href, 
  children, 
  className = '' 
}: { 
  href: string; 
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link 
      href={href}
      className={`px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-white transition-colors rounded-md hover:bg-slate-800/50 ${className}`}
    >
      {children}
    </Link>
  );
}
