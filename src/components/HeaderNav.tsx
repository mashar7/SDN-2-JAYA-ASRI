/**
 * Header Navigation Bar matching the top bar of the reference screenshot
 */

import { useState } from 'react';
import { Menu, X, Link2, Search, Share2, Check } from 'lucide-react';
import { TutWuriHandayaniLogo } from './TutWuriHandayaniLogo';
import { SCHOOL_INFO } from '../data/schoolData';

interface HeaderNavProps {
  activeTab: 'beranda' | 'profil' | 'dokumen' | 'kontak';
  onSelectTab: (tab: 'beranda' | 'profil' | 'dokumen' | 'kontak') => void;
  onOpenLinkSettings: () => void;
  onOpenSearch: () => void;
}

export function HeaderNav({
  activeTab,
  onSelectTab,
  onOpenLinkSettings,
  onOpenSearch
}: HeaderNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const navItems: Array<{ id: 'beranda' | 'profil' | 'dokumen' | 'kontak'; label: string }> = [
    { id: 'beranda', label: 'BERANDA' },
    { id: 'profil', label: 'PROFIL' },
    { id: 'dokumen', label: 'DOKUMEN' },
    { id: 'kontak', label: 'KONTAK' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200/90 shadow-xs backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22 gap-4">
          {/* Left Zone: Brand Lockup matching screenshot */}
          <div className="flex items-center gap-3.5 sm:gap-4 shrink-0 cursor-pointer" onClick={() => onSelectTab('beranda')}>
            <TutWuriHandayaniLogo className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 drop-shadow-xs" />
            <div className="min-w-0">
              <h1 className="text-base sm:text-xl font-extrabold tracking-tight text-slate-900 leading-tight uppercase truncate">
                {SCHOOL_INFO.name}
              </h1>
              <p className="text-xs sm:text-sm font-medium text-slate-600 truncate mt-0.5">
                Moto: <span className="italic">{SCHOOL_INFO.motto}</span>
              </p>
            </div>
          </div>

          {/* Middle Zone: Clean text navigation links matching screenshot */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-bold text-sm tracking-wide">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectTab(item.id)}
                  className={`relative py-2 transition-colors cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-blue-600'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Zone: Primary Actions */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <button
              onClick={onOpenSearch}
              className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              title="Cari Dokumen"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={handleShare}
              className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              title="Bagikan Tautan Microsite"
            >
              {copiedLink ? <Check className="w-5 h-5 text-emerald-600" /> : <Share2 className="w-5 h-5" />}
            </button>

            <button
              onClick={onOpenLinkSettings}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              <Link2 className="w-4 h-4 text-blue-600" />
              <span>Atur Link Drive</span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 animate-in slide-in-from-top-2 duration-150">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onSelectTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-colors ${
                activeTab === item.id
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {item.label}
            </button>
          ))}

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLinkSettings();
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg"
            >
              <Link2 className="w-4 h-4 text-blue-600" />
              <span>Atur Link Drive</span>
            </button>
            <button
              onClick={() => {
                handleShare();
              }}
              className="p-2 text-slate-600 bg-slate-100 rounded-lg text-xs"
              title="Bagikan Microsite"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
