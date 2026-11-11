'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, User } from 'lucide-react';

// Map each nav item to its section id ('' = top/home, no section id)
const NAV_ITEMS = [
  { label: 'Home',        href: '/',           sectionId: ''           },
  { label: 'Programmes',  href: '#programmes', sectionId: 'programmes' },
  { label: 'For Schools', href: '#schools',    sectionId: 'schools'    },
  { label: 'Pathways',    href: '#pathways',   sectionId: 'pathways'   },
  { label: 'About',       href: '#method',     sectionId: 'method'     },
  { label: 'Contact',     href: '#enrol',      sectionId: 'enrol'      },
];

export const TopNavigation: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // activeId: '' means Home (top of page), otherwise matches a sectionId
  const [activeId, setActiveId] = useState<string>('');
  // Track whether the user just clicked a link so scroll-spy doesn't immediately override it
  const clickLockRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isClickingRef = useRef(false);

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((n) => n.sectionId).filter(Boolean);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    // rootMargin: fire when a section reaches roughly the top 30% of the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickingRef.current) return; // respect click lock

        // Pick the entry that is intersecting and closest to the top
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-10% 0px -60% 0px', threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));

    // Also watch scroll position to detect "back to top" (Home active)
    const handleScroll = () => {
      if (isClickingRef.current) return;
      if (window.scrollY < 80) {
        setActiveId('');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (sectionId: string) => {
    // Immediately set active on click; lock scroll-spy for 1 s
    setActiveId(sectionId);
    isClickingRef.current = true;
    if (clickLockRef.current) clearTimeout(clickLockRef.current);
    clickLockRef.current = setTimeout(() => {
      isClickingRef.current = false;
    }, 1000);
    setMobileMenuOpen(false);
  };

  const navigationHref = (href: string) =>
    href.startsWith('#') && pathname !== '/' ? `/${href}` : href;

  // Shared class builders
  const desktopLinkClass = (sectionId: string) => {
    const isActive = activeId === sectionId;
    return isActive
      ? 'text-emerald-700 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-emerald-600'
      : 'relative py-1 hover:text-emerald-700 transition-colors after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-emerald-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left';
  };

  const mobileLinkClass = (sectionId: string) => {
    const isActive = activeId === sectionId;
    return isActive
      ? 'block py-2 text-sm font-bold text-emerald-700'
      : 'block py-2 text-sm font-semibold text-slate-600 hover:text-emerald-700';
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group" onClick={() => handleNavClick('')}>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-forest to-emerald-800 flex items-center justify-center text-white font-extrabold text-xl shadow-md">
              <span className="text-brand-lime">M</span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl text-brand-dark tracking-tight leading-tight">
                Mindra<span className="text-brand-orange">Labs</span>
              </span>
              <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-widest -mt-0.5">
                Academy
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[14px] font-semibold text-slate-600">
          {NAV_ITEMS.map(({ label, href, sectionId }) =>
            href === '/' ? (
              <Link
                key={label}
                href="/"
                className={desktopLinkClass(sectionId)}
                onClick={() => handleNavClick(sectionId)}
              >
                {label}
              </Link>
            ) : (
              <a
                key={label}
                href={navigationHref(href)}
                className={desktopLinkClass(sectionId)}
                onClick={() => handleNavClick(sectionId)}
              >
                {label}
              </a>
            )
          )}
        </nav>

        {/* Action Area */}
        <div className="flex items-center gap-3">
          <a
            href={navigationHref('#enrol')}
            className="bg-brand-orange hover:bg-brand-orangeHover text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            onClick={() => handleNavClick('enrol')}
          >
            <span>Enrol Now</span>
          </a>

          {/* Account/Portal button */}
          <button
            type="button"
            className="w-9 h-9 rounded-full bg-slate-100 hidden sm:flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors border border-slate-200"
            title="Admissions Portal"
            onClick={() => {
              handleNavClick('enrol');
              const el = document.getElementById('enrol');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.assign('/#enrol');
              }
            }}
          >
            <User className="w-4 h-4" />
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-150">
          {NAV_ITEMS.map(({ label, href, sectionId }) =>
            href === '/' ? (
              <Link
                key={label}
                href="/"
                onClick={() => handleNavClick(sectionId)}
                className={mobileLinkClass(sectionId)}
              >
                {label}
              </Link>
            ) : (
              <a
                key={label}
                href={navigationHref(href)}
                onClick={() => handleNavClick(sectionId)}
                className={mobileLinkClass(sectionId)}
              >
                {label}
              </a>
            )
          )}
          <div className="pt-2">
            <a
              href={navigationHref('#enrol')}
              onClick={() => handleNavClick('enrol')}
              className="w-full text-center block bg-brand-orange text-white py-2.5 rounded-full font-bold text-sm"
            >
              Enrol Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
