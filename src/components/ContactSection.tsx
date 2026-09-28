/**
 * Contact Information Section matching the bottom bar in the reference screenshot
 */

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Copy, Check } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export function ContactSection() {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    nama: '',
    kontak: '',
    pesan: ''
  });

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nama || !formData.pesan) return;
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setShowInquiryForm(false);
      setFormData({ nama: '', kontak: '', pesan: '' });
    }, 2000);
  };

  return (
    <section className="mt-10 pt-6 border-t border-slate-200">
      <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            KONTAK INFORMASI
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Hubungi layanan administrasi dan tata usaha sekolah
          </p>
        </div>

        <button
          onClick={() => setShowInquiryForm(!showInquiryForm)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Kirim Pesan / Pengaduan</span>
        </button>
      </div>

      {/* 3 Contact Columns directly inspired by the screenshot */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 bg-white p-5 sm:p-6 rounded-xl border border-slate-200 shadow-xs">
        {/* Email */}
        <div className="flex items-start gap-3.5 group">
          <div className="w-11 h-11 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
            <Mail className="w-5 h-5" />
          </div>
          <div className="min-w-0 flex-1">
            <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400">
              Surat Elektronik
            </span>
            <p className="text-sm font-semibold text-slate-800 truncate">
              {SCHOOL_INFO.kontak.email}
            </p>
            <div className="mt-1 flex items-center gap-3">
              <a
                href={`mailto:${SCHOOL_INFO.kontak.email}`}
                className="text-xs text-blue-600 hover:underline font-medium"
              >
                Kirim Email
              </a>
              <span className="text-slate-300">·</span>
              <button
                onClick={() => handleCopy(SCHOOL_INFO.kontak.email, 'email')}
                className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1"
              >
                {copiedType === 'email' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                {copiedType === 'email' ? 'Tersalin' : 'Salin'}
              </button>
            </div>
          </div>
        </div>

        {/* Telepon / WA */}
        <div className="flex items-start gap-3.5 group">
          <div className="w-11 h-11 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
            <Phone className="w-5 h-5" />
          </div>
          <div className="min-w-0 flex-1">
            <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400">
              Telepon / WhatsApp
            </span>
            <p className="text-sm font-semibold text-slate-800 truncate">
              {SCHOOL_INFO.kontak.telepon}
            </p>
            <div className="mt-1 flex items-center gap-3">
              <a
                href={`https://wa.me/${SCHOOL_INFO.kontak.whatsapp}?text=Halo%20Admin%20UPTD%20SD%20Negeri%202%20Jaya%20Asri`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-emerald-700 hover:underline font-medium"
              >
                Chat WhatsApp
              </a>
              <span className="text-slate-300">·</span>
              <button
                onClick={() => handleCopy(SCHOOL_INFO.kontak.telepon, 'phone')}
                className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1"
              >
                {copiedType === 'phone' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                {copiedType === 'phone' ? 'Tersalin' : 'Salin'}
              </button>
            </div>
          </div>
        </div>

        {/* Alamat */}
        <div className="flex items-start gap-3.5 group">
          <div className="w-11 h-11 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="min-w-0 flex-1">
            <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400">
              Alamat Sekolah
            </span>
            <p className="text-xs sm:text-sm font-semibold text-slate-800 line-clamp-2">
              {SCHOOL_INFO.kontak.alamat}
            </p>
            <div className="mt-1 flex items-center gap-3">
              <span className="text-xs text-slate-500 font-medium">
                Kodepos {SCHOOL_INFO.kontak.kodePos}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Inquiry Form Expandable */}
      {showInquiryForm && (
        <div className="mt-4 bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 animate-in slide-in-from-top duration-200">
          <h3 className="text-base font-bold text-slate-900 mb-1">
            Buku Tamu & Pengaduan Layanan Sekolah
          </h3>
          <p className="text-xs text-slate-500 mb-4">
            Silakan sampaikan pertanyaan, saran kemajuan sekolah, atau keperluan berkas administrasi.
          </p>

          {formSent ? (
            <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg flex items-center gap-3 text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Pesan Anda telah berhasil dikirimkan ke sekretariat sekolah. Terima kasih!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nama Lengkap / Wali Murid / Pengunjung *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nama}
                    onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                    placeholder="Contoh: Bapak Hendra (Wali Siswa Kelas 4)"
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nomor WhatsApp / Kontak
                  </label>
                  <input
                    type="text"
                    value={formData.kontak}
                    onChange={(e) => setFormData({ ...formData, kontak: e.target.value })}
                    placeholder="0812-xxxx-xxxx"
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Pesan / Pertanyaan / Keperluan Dokumen *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.pesan}
                  onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
                  placeholder="Tuliskan pertanyaan atau permohonan informasi Anda di sini..."
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowInquiryForm(false)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  Tutup
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim Pesan</span>
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </section>
  );
}
