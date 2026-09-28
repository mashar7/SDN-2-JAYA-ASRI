/**
 * Comprehensive Document Repository View
 */

import { useState } from 'react';
import { FileText, FileSpreadsheet, Download, ExternalLink, Filter, Folder, Search } from 'lucide-react';
import { DriveFolderConfig, DocumentItem } from '../data/schoolData';

interface DocumentsTabProps {
  folders: DriveFolderConfig[];
  customUrls: Record<string, string>;
  onSelectFolder: (folder: DriveFolderConfig) => void;
}

export function DocumentsTab({ folders, customUrls, onSelectFolder }: DocumentsTabProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Flatten all documents
  const allDocs = folders.flatMap((f) =>
    f.documents.map((d) => ({
      ...d,
      folderTitle: f.title,
      folderId: f.id,
      folderColor: f.color,
      folderUrl: customUrls[f.id] || f.defaultUrl
    }))
  );

  const filteredDocs = allDocs.filter((doc) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      (selectedCategory === 'ks' && doc.folderId === 'ks') ||
      (selectedCategory === 'kelas' && doc.folderId.startsWith('kelas')) ||
      (selectedCategory === 'mapel' && doc.folderId.startsWith('mapel'));

    const q = searchTerm.toLowerCase();
    const matchesSearch =
      !searchTerm.trim() ||
      doc.name.toLowerCase().includes(q) ||
      doc.description.toLowerCase().includes(q) ||
      doc.category.toLowerCase().includes(q) ||
      doc.folderTitle.toLowerCase().includes(q);

    return matchesCategory && matchesSearch;
  });

  const handleDownload = (docName: string) => {
    setToastMessage(`Mengunduh berkas "${docName}"... Berhasil disimpan.`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-block px-2.5 py-0.5 rounded text-xs font-bold bg-blue-50 text-blue-700 uppercase tracking-wider mb-1.5">
            Repositori Dokumen Digital
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Semua Perangkat Ajar & Arsip Sekolah
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Akses cepat ke seluruh berkas Modul Ajar, ATP, CP, Penilaian, dan Laporan Manajemen.
          </p>
        </div>

        {/* Filter Category Buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl flex-wrap">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              selectedCategory === 'all'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Semua Berkas
          </button>
          <button
            onClick={() => setSelectedCategory('ks')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              selectedCategory === 'ks'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Manajemen / KS
          </button>
          <button
            onClick={() => setSelectedCategory('kelas')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              selectedCategory === 'kelas'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Guru Kelas 1 - 6
          </button>
          <button
            onClick={() => setSelectedCategory('mapel')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              selectedCategory === 'mapel'
                ? 'bg-teal-700 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Guru Mapel
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Filter berdasarkan nama dokumen, mata pelajaran, atau kategori..."
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs"
        />
      </div>

      {/* Toast Notice */}
      {toastMessage && (
        <div className="p-3 bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs sm:text-sm rounded-xl flex items-center justify-between">
          <span>{toastMessage}</span>
          <button onClick={() => setToastMessage(null)} className="font-bold hover:text-emerald-950">✕</button>
        </div>
      )}

      {/* Document Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
                <th className="py-3.5 px-4 sm:px-6">Nama Dokumen</th>
                <th className="py-3.5 px-4">Kategori / Folder</th>
                <th className="py-3.5 px-4 hidden sm:table-cell">Ukuran</th>
                <th className="py-3.5 px-4 hidden md:table-cell">Pembaruan</th>
                <th className="py-3.5 px-4 sm:px-6 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredDocs.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-slate-400">
                    Tidak ada dokumen yang sesuai dengan pencarian.
                  </td>
                </tr>
              ) : (
                filteredDocs.map((doc) => {
                  const targetFolder = folders.find((f) => f.id === doc.folderId);
                  return (
                    <tr key={`${doc.folderId}-${doc.id}`} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-900">
                        <div className="flex items-center gap-2.5">
                          {doc.type === 'xlsx' ? (
                            <FileSpreadsheet className="w-4 h-4 text-emerald-600 shrink-0" />
                          ) : (
                            <FileText className="w-4 h-4 text-blue-600 shrink-0" />
                          )}
                          <div>
                            <p className="font-semibold text-slate-900 leading-snug">{doc.name}</p>
                            <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">{doc.description}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-block font-semibold text-[11px] text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                          {doc.folderTitle}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-500 font-mono text-xs hidden sm:table-cell">
                        {doc.size}
                      </td>
                      <td className="py-3.5 px-4 text-slate-500 text-xs hidden md:table-cell">
                        {doc.updatedAt}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-right">
                        <div className="inline-flex items-center gap-1.5">
                          <button
                            onClick={() => handleDownload(doc.name)}
                            className="p-1.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Unduh Berkas"
                          >
                            <Download className="w-4 h-4" />
                          </button>
                          {targetFolder && (
                            <button
                              onClick={() => onSelectFolder(targetFolder)}
                              className="p-1.5 text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
                              title="Buka Folder Ini"
                            >
                              <Folder className="w-4 h-4" />
                            </button>
                          )}
                          <a
                            href={doc.folderUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Buka di Google Drive"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
