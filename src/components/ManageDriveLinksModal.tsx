/**
 * Modal to manage and customize real Google Drive URLs for all folders
 */

import { useState } from 'react';
import { X, Save, RotateCcw, Link2, CheckCircle2, AlertCircle } from 'lucide-react';
import { DriveFolderConfig } from '../data/schoolData';

interface ManageDriveLinksModalProps {
  folders: DriveFolderConfig[];
  customUrls: Record<string, string>;
  selectedFolderId?: string | null;
  onSaveUrls: (newUrls: Record<string, string>) => void;
  onClose: () => void;
}

export function ManageDriveLinksModal({
  folders,
  customUrls,
  selectedFolderId,
  onSaveUrls,
  onClose
}: ManageDriveLinksModalProps) {
  const [urls, setUrls] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    folders.forEach((f) => {
      initial[f.id] = customUrls[f.id] || f.defaultUrl;
    });
    return initial;
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleChange = (id: string, value: string) => {
    setUrls((prev) => ({ ...prev, [id]: value }));
  };

  const handleReset = (id: string) => {
    const defaultVal = folders.find((f) => f.id === id)?.defaultUrl || '';
    setUrls((prev) => ({ ...prev, [id]: defaultVal }));
  };

  const handleResetAll = () => {
    const resetValues: Record<string, string> = {};
    folders.forEach((f) => {
      resetValues[f.id] = f.defaultUrl;
    });
    setUrls(resetValues);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveUrls(urls);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
              <Link2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Pengaturan Tautan Google Drive
              </h3>
              <p className="text-xs text-slate-500">
                Hubungkan folder Google Drive asli UPTD SD Negeri 2 Jaya Asri
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-6 space-y-5">
          <div className="p-3.5 bg-blue-50/80 border border-blue-200 rounded-xl text-xs text-slate-700 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-blue-900">Petunjuk Penggunaan:</span> Salin link folder Google Drive sekolah Anda (pastikan setelan akses di Google Drive diset menjadi <i>"Siapa saja yang memiliki tautan dapat melihat"</i>). Tautan tersimpan di memori peramban Anda.
            </div>
          </div>

          <div className="space-y-4">
            {folders.map((folder) => {
              const isSelected = selectedFolderId === folder.id;
              return (
                <div
                  key={folder.id}
                  className={`p-4 rounded-xl border transition-all ${
                    isSelected
                      ? 'border-blue-500 bg-blue-50/30 ring-2 ring-blue-100'
                      : 'border-slate-200 bg-slate-50/50 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <label
                      htmlFor={`input-${folder.id}`}
                      className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2"
                    >
                      <span className={`w-2.5 h-2.5 rounded-full ${
                        folder.color === 'blue' ? 'bg-blue-600' : 'bg-emerald-600'
                      }`} />
                      {folder.title} ({folder.label})
                    </label>
                    <button
                      type="button"
                      onClick={() => handleReset(folder.id)}
                      className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 underline"
                    >
                      <RotateCcw className="w-3 h-3" />
                      Reset
                    </button>
                  </div>
                  <input
                    id={`input-${folder.id}`}
                    type="url"
                    value={urls[folder.id] || ''}
                    onChange={(e) => handleChange(folder.id, e.target.value)}
                    placeholder="https://drive.google.com/drive/folders/..."
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-slate-700"
                  />
                  <p className="text-[11px] text-slate-500 mt-1">
                    {folder.subtext}
                  </p>
                </div>
              );
            })}
          </div>
        </form>

        {/* Footer actions */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <button
            type="button"
            onClick={handleResetAll}
            className="text-xs font-medium text-slate-600 hover:text-slate-900 underline flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Kembalikan Semua ke Default
          </button>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
            >
              Batal
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors"
            >
              {savedSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>Berhasil Disimpan!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 text-white" />
                  <span>Simpan Perubahan</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
