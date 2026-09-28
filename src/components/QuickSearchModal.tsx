/**
 * Quick Search Modal for all School Documents across classes and management
 */

import { useState, useMemo } from 'react';
import { X, Search, FileText, FileSpreadsheet, Folder, ExternalLink, ArrowRight } from 'lucide-react';
import { DriveFolderConfig, DocumentItem } from '../data/schoolData';

interface QuickSearchModalProps {
  folders: DriveFolderConfig[];
  customUrls: Record<string, string>;
  onClose: () => void;
  onSelectFolder: (folder: DriveFolderConfig) => void;
}

interface SearchResult {
  folder: DriveFolderConfig;
  document: DocumentItem;
}

export function QuickSearchModal({
  folders,
  customUrls,
  onClose,
  onSelectFolder
}: QuickSearchModalProps) {
  const [searchTerm, setSearchTerm] = useState('');

  // Collect all searchable documents
  const allResults = useMemo(() => {
    const list: SearchResult[] = [];
    folders.forEach((folder) => {
      folder.documents.forEach((doc) => {
        list.push({ folder, document: doc });
      });
    });
    return list;
  }, [folders]);

  const filteredResults = useMemo(() => {
    if (!searchTerm.trim()) return allResults.slice(0, 10);
    const q = searchTerm.toLowerCase();
    return allResults.filter(
      (item) =>
        item.document.name.toLowerCase().includes(q) ||
        item.document.description.toLowerCase().includes(q) ||
        item.document.category.toLowerCase().includes(q) ||
        item.folder.title.toLowerCase().includes(q)
    );
  }, [allResults, searchTerm]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 bg-slate-50 gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari modul ajar, ATP, CP, P5, ANBK, atau dokumen lainnya..."
            className="flex-1 bg-transparent text-sm sm:text-base text-slate-800 placeholder-slate-400 focus:outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-xs text-slate-400 hover:text-slate-600 px-2 py-1 rounded bg-slate-200"
            >
              Hapus
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Filter Tags */}
        <div className="px-4 py-2 border-b border-slate-100 bg-white flex items-center gap-2 overflow-x-auto text-xs text-slate-600">
          <span className="font-semibold text-slate-400 shrink-0">Populer:</span>
          {['Modul Ajar', 'IPAS', 'Matematika', 'ANBK', 'P5', 'RKAS', 'PAI', 'PJOK'].map((tag) => (
            <button
              key={tag}
              onClick={() => setSearchTerm(tag)}
              className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-blue-50 hover:text-blue-700 transition-colors shrink-0"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="p-4 overflow-y-auto flex-1 divide-y divide-slate-100">
          {filteredResults.length === 0 ? (
            <div className="py-12 text-center text-slate-400">
              <p className="text-sm">Tidak ditemukan dokumen untuk "{searchTerm}"</p>
              <p className="text-xs text-slate-500 mt-1">
                Coba gunakan kata kunci lain seperti "Modul", "Fase A", atau "Kelas 1".
              </p>
            </div>
          ) : (
            filteredResults.map(({ folder, document: doc }) => {
              const driveUrl = customUrls[folder.id] || folder.defaultUrl;
              return (
                <div
                  key={`${folder.id}-${doc.id}`}
                  className="py-3 px-2 flex items-center justify-between gap-3 hover:bg-slate-50 rounded-lg transition-colors group"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="p-2 rounded bg-slate-100 text-slate-600 group-hover:bg-white group-hover:text-blue-600 border border-slate-200 mt-0.5">
                      {doc.type === 'xlsx' ? (
                        <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <FileText className="w-4 h-4 text-blue-600" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                        {doc.name}
                      </h4>
                      <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
                        <span className="font-medium text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded">
                          {folder.title}
                        </span>
                        <span>·</span>
                        <span>{doc.size}</span>
                        <span>·</span>
                        <span>{doc.category}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => {
                        onClose();
                        onSelectFolder(folder);
                      }}
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
                      title="Buka Folder Ini"
                    >
                      <Folder className="w-3.5 h-3.5 text-slate-500" />
                      <span className="hidden sm:inline">Folder</span>
                    </button>
                    <a
                      href={driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                      title="Buka di Google Drive"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>Menampilkan {filteredResults.length} dokumen</span>
          <button
            onClick={onClose}
            className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-md font-medium transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
