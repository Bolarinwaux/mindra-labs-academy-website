'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, User } from 'lucide-react';

export const TopNavigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
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
          <Link
            href="/"
            className="text-emerald-700 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-emerald-600"
          >
            Home
          </Link>
          <a href="#programmes" className="hover:text-emerald-700 transition-colors">
            Programmes
          </a>
          <a href="#schools" className="hover:text-emerald-700 transition-colors">
            For Schools
          </a>
          <a href="#pathways" className="hover:text-emerald-700 transition-colors">
            Pathways
          </a>
          <a href="#method" className="hover:text-emerald-700 transition-colors">
            About
          </a>
          <a href="#enrol" className="hover:text-emerald-700 transition-colors">
            Contact
          </a>
        </nav>

        {/* Action Area */}
        <div className="flex items-center gap-3">
          <a
            href="#enrol"
            className="bg-brand-orange hover:bg-brand-orangeHover text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
          >
            <span>Enrol Now</span>
          </a>

          {/* Account/Portal button */}
          <button
            type="button"
            className="w-9 h-9 rounded-full bg-slate-100 hidden sm:flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors border border-slate-200"
            title="Admissions Portal"
            onClick={() => {
              const el = document.getElementById('enrol');
              el?.scrollIntoView({ behavior: 'smooth' });
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
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-emerald-700"
          >
            Home
          </Link>
          <a
            href="#programmes"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-600 hover:text-emerald-700"
          >
            Programmes
          </a>
          <a
            href="#schools"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-600 hover:text-emerald-700"
          >
            For Schools
          </a>
          <a
            href="#pathways"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-600 hover:text-emerald-700"
          >
            Pathways
          </a>
          <a
            href="#method"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-600 hover:text-emerald-700"
          >
            About
          </a>
          <a
            href="#enrol"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-600 hover:text-emerald-700"
          >
            Contact
          </a>
          <div className="pt-2">
            <a
              href="#enrol"
              onClick={() => setMobileMenuOpen(false)}
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
