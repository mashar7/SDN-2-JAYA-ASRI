/**
 * Modal to preview and access Google Drive Folder Documents
 */

import { useState } from 'react';
import { X, ExternalLink, Copy, Check, FileText, FileSpreadsheet, FileBox, Folder, Download, Settings, Info } from 'lucide-react';
import { DriveFolderConfig, DocumentItem } from '../data/schoolData';

interface DriveFolderModalProps {
  folder: DriveFolderConfig | null;
  customUrl?: string;
  onClose: () => void;
  onEditUrl: (folderId: string) => void;
}

export function DriveFolderModal({ folder, customUrl, onClose, onEditUrl }: DriveFolderModalProps) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'modul' | 'asesmen' | 'lainnya'>('all');
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  if (!folder) return null;

  const targetUrl = customUrl || folder.defaultUrl;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(targetUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulateDownload = (doc: DocumentItem) => {
    setDownloadNotice(`Mengunduh berkas "${doc.name}"... Berkas siap digunakan.`);
    setTimeout(() => setDownloadNotice(null), 3500);
  };

  const getFileIcon = (type: DocumentItem['type']) => {
    switch (type) {
      case 'pdf':
        return <FileText className="w-5 h-5 text-red-500 shrink-0" />;
      case 'docx':
        return <FileText className="w-5 h-5 text-blue-600 shrink-0" />;
      case 'xlsx':
        return <FileSpreadsheet className="w-5 h-5 text-emerald-600 shrink-0" />;
      default:
        return <FileBox className="w-5 h-5 text-amber-500 shrink-0" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Google Drive Style */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white ${
              folder.color === 'blue' ? 'bg-blue-600' : 'bg-emerald-700'
            }`}>
              <Folder className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Pusat Data Google Drive
                </span>
                <span className="text-xs text-slate-300">·</span>
                <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  Kurikulum Merdeka
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 leading-tight">
                {folder.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onEditUrl(folder.id)}
              title="Atur Tautan Google Drive"
              className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition-colors"
            >
              <Settings className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Action ribbon */}
        <div className="px-6 py-3 bg-blue-50/70 border-b border-blue-100 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-slate-700">
            <Info className="w-4 h-4 text-blue-600 shrink-0" />
            <span className="font-medium text-slate-700 truncate max-w-xs sm:max-w-md">
              {folder.subtext}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 font-medium transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-500" />
                  <span>Salin Tautan</span>
                </>
              )}
            </button>

            <a
              href={targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-white font-semibold transition-colors shadow-xs ${
                folder.color === 'blue'
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-emerald-700 hover:bg-emerald-800'
              }`}
            >
              <span>Buka di Google Drive</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Download notice toast */}
        {downloadNotice && (
          <div className="mx-6 mt-3 p-3 bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs sm:text-sm rounded-lg flex items-center justify-between">
            <span>{downloadNotice}</span>
            <button onClick={() => setDownloadNotice(null)} className="text-emerald-700 font-bold hover:text-emerald-900">
              ✕
            </button>
          </div>
        )}

        {/* Content list */}
        <div className="p-6 overflow-y-auto flex-1">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
              Daftar Dokumen & Perangkat Ajar ({folder.documents.length} Berkas)
            </h4>
            <span className="text-xs text-slate-500">
              Tahun Ajaran 2025/2026
            </span>
          </div>

          <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
            {folder.documents.map((doc) => (
              <div
                key={doc.id}
                className="p-4 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors group"
              >
                <div className="flex items-start gap-3 min-w-0">
                  <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-white border border-slate-200 mt-0.5">
                    {getFileIcon(doc.type)}
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-sm font-semibold text-slate-900 truncate group-hover:text-blue-600 transition-colors">
                      {doc.name}
                    </h5>
                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                      {doc.description}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-slate-400 mt-1">
                      <span className="font-medium text-slate-600">{doc.category}</span>
                      <span>·</span>
                      <span>{doc.size}</span>
                      <span>·</span>
                      <span>Diperbarui {doc.updatedAt}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => handleSimulateDownload(doc)}
                    className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    title="Unduh Berkas"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                  <a
                    href={targetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
                    title="Buka Langsung di Drive"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Quick note on Google Drive Link config */}
          <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-dashed border-slate-300 text-xs text-slate-600 flex items-start gap-3">
            <Settings className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-800">
                Punya Tautan Folder Google Drive Sendiri?
              </p>
              <p className="mt-0.5 text-slate-600">
                Bapak/Ibu dewan guru atau operator dapat mengaitkan tautan Google Drive sekolah asli dengan menekan tombol pengaturan di kanan atas. Tautan akan tersimpan secara otomatis di peramban ini.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>UPTD SD Negeri 2 Jaya Asri</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-medium rounded-lg transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
