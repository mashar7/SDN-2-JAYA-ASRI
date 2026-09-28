/**
 * Pusat Data & Akses Dokumen Google Drive Section
 * Faithfully matches the right-hand panel of the reference layout
 */

import { useState } from 'react';
import { Folder, Settings, Search, BookOpen, ExternalLink, Sparkles } from 'lucide-react';
import { DriveFolderConfig } from '../data/schoolData';

interface DriveCenterSectionProps {
  folders: DriveFolderConfig[];
  customUrls: Record<string, string>;
  onOpenFolder: (folder: DriveFolderConfig) => void;
  onOpenLinkSettings: (folderId?: string) => void;
  onOpenSearch: () => void;
}

export function DriveCenterSection({
  folders,
  customUrls,
  onOpenFolder,
  onOpenLinkSettings,
  onOpenSearch
}: DriveCenterSectionProps) {
  const [activeCategory, setActiveCategory] = useState<'kelas' | 'mapel'>('kelas');

  // Segregate folder types
  const ksFolder = folders.find((f) => f.id === 'ks') || folders[0];
  const kelasFolders = folders.filter((f) => f.category === 'guru_kelas');
  const mapelFolders = folders.filter((f) => f.category === 'guru_mapel');

  return (
    <div className="bg-slate-100/90 rounded-2xl border border-slate-200/80 p-5 sm:p-7 shadow-xs">
      {/* Main Section Header */}
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight uppercase">
          PUSAT DATA & AKSES DOKUMEN (GOOGLE DRIVE)
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl mx-auto">
          Arsip digital perangkat ajar Kurikulum Merdeka, administrasi guru, dan manajemen sekolah
        </p>

        {/* Quick Toolbar */}
        <div className="mt-3.5 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          <button
            onClick={onOpenSearch}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-medium shadow-xs transition-colors"
          >
            <Search className="w-3.5 h-3.5 text-slate-500" />
            <span>Cari Dokumen Cepat</span>
          </button>

          <button
            onClick={() => onOpenLinkSettings()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-medium shadow-xs transition-colors"
          >
            <Settings className="w-3.5 h-3.5 text-blue-600" />
            <span>Kelola Link Drive Sekolah</span>
          </button>
        </div>
      </div>

      {/* MANAJEMEN & KEPALA SEKOLAH CARD */}
      <div className="mb-7 bg-white rounded-xl border border-slate-200/90 shadow-sm p-6 text-center hover:border-blue-400 transition-all">
        <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-wider uppercase mb-3">
          MANAJEMEN & KEPALA SEKOLAH
        </h3>

        {/* The Big Blue KS Button */}
        <button
          onClick={() => onOpenFolder(ksFolder)}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
        >
          <Folder className="w-5 h-5 fill-white text-blue-600 shrink-0" />
          <span className="tracking-wide">{ksFolder.buttonText}</span>
        </button>

        <p className="text-xs text-slate-500 mt-3 font-medium">
          {ksFolder.subtext}
        </p>

        {/* Small metadata bar */}
        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-center gap-4 text-[11px] text-slate-500">
          <span>{ksFolder.documents.length} Dokumen Resmi</span>
          <span>·</span>
          <span>Update TA 2025/2026</span>
          <span>·</span>
          <a
            href={customUrls[ksFolder.id] || ksFolder.defaultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline inline-flex items-center gap-0.5"
            onClick={(e) => e.stopPropagation()}
          >
            Buka Langsung <ExternalLink className="w-3 h-3 ml-0.5" />
          </a>
        </div>
      </div>

      {/* Category Toggle (Guru Kelas 1-6 vs Guru Mapel & Penunjang) */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-wide uppercase">
          PERANGKAT & DOKUMEN GURU (KELAS 1 - 6)
        </h3>

        <div className="inline-flex p-1 bg-slate-200/70 rounded-lg text-xs font-semibold">
          <button
            onClick={() => setActiveCategory('kelas')}
            className={`px-3 py-1 rounded-md transition-colors ${
              activeCategory === 'kelas'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Guru Kelas 1 - 6
          </button>
          <button
            onClick={() => setActiveCategory('mapel')}
            className={`px-3 py-1 rounded-md transition-colors ${
              activeCategory === 'mapel'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Guru Mapel (PAI & PJOK)
          </button>
        </div>
      </div>

      {/* GURU KELAS 1 - 6 GRID */}
      {activeCategory === 'kelas' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {kelasFolders.map((folder) => {
            const docCount = folder.documents.length;
            return (
              <div
                key={folder.id}
                className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 sm:p-5 flex flex-col justify-between hover:border-emerald-400 hover:shadow-md transition-all text-center group"
              >
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">
                    {folder.title}
                  </h4>

                  {/* The Green Button exactly as shown in screenshot */}
                  <button
                    onClick={() => onOpenFolder(folder)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-bold text-xs sm:text-sm shadow-xs transition-all transform group-hover:scale-[1.02] cursor-pointer"
                  >
                    <Folder className="w-4 h-4 fill-white text-emerald-700 shrink-0" />
                    <span className="truncate">{folder.buttonText}</span>
                  </button>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="truncate">{folder.subtext.split(',')[0]}</span>
                  <span className="font-semibold text-emerald-700 shrink-0">
                    {docCount} Berkas
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* GURU MATA PELAJARAN (PAI & PJOK) */
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {mapelFolders.map((folder) => (
            <div
              key={folder.id}
              className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 flex flex-col justify-between hover:border-teal-400 hover:shadow-md transition-all text-center group"
            >
              <div>
                <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-teal-700 mb-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  Mata Pelajaran Khusus
                </div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 uppercase tracking-wide mb-3">
                  {folder.title}
                </h4>

                <button
                  onClick={() => onOpenFolder(folder)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs sm:text-sm shadow-xs transition-all transform group-hover:scale-[1.02] cursor-pointer"
                >
                  <Folder className="w-4 h-4 fill-white text-teal-700 shrink-0" />
                  <span className="truncate">{folder.buttonText}</span>
                </button>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="truncate">{folder.subtext}</span>
                <span className="font-semibold text-teal-700 shrink-0">
                  {folder.documents.length} Berkas
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Helpful banner for teachers at the bottom */}
      <div className="mt-6 bg-white/80 rounded-xl p-3.5 border border-slate-200 flex items-center justify-between flex-wrap gap-2 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
          <span>
            <strong>Kurikulum Merdeka Mandiri Berubah:</strong> Semua modul pembelajaran telah disesuaikan dengan Capaian Pembelajaran (CP) dan P5 terbaru.
          </span>
        </div>
        <button
          onClick={() => onOpenLinkSettings()}
          className="text-blue-600 hover:text-blue-800 font-semibold underline shrink-0 cursor-pointer"
        >
          Kustomisasi Tautan Folder
        </button>
      </div>
    </div>
  );
}
