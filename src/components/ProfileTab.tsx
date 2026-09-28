/**
 * Detailed School Profile View (PROFIL SEKOLAH LENGKAP)
 */

import { Building2, Award, Users, CheckCircle, GraduationCap, MapPin, School, Sparkles, BookOpen } from 'lucide-react';
import { SCHOOL_INFO, TEACHERS_LIST, SCHOOL_FACILITIES } from '../data/schoolData';
import { VisionMissionCards } from './VisionMissionCards';

export function ProfileTab() {
  return (
    <div className="space-y-10 animate-in fade-in duration-300">
      {/* Sambutan Kepala Sekolah */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-900 text-white flex flex-col items-center justify-center p-4 text-center shrink-0 shadow-md">
            <GraduationCap className="w-12 h-12 text-amber-300 mb-1" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-200">Kepala Sekolah</span>
            <span className="text-xs font-semibold mt-0.5 line-clamp-1">UPTD SDN 2</span>
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-2.5 py-0.5 rounded text-xs font-bold bg-blue-50 text-blue-700 uppercase tracking-wider mb-2">
              Sambutan Pimpinan Sekolah
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              {SCHOOL_INFO.kepalaSekolah.nama}
            </h3>
            <p className="text-xs text-slate-500 font-mono">
              NIP. {SCHOOL_INFO.kepalaSekolah.nip}
            </p>

            <blockquote className="mt-4 text-sm sm:text-base text-slate-700 italic border-l-0 md:border-l-4 border-blue-500 md:pl-4 leading-relaxed">
              "{SCHOOL_INFO.kepalaSekolah.sambutan}"
            </blockquote>
          </div>
        </div>
      </div>

      {/* Identitas Satuan Pendidikan Grid */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <School className="w-5 h-5 text-blue-600" />
          Identitas Satuan Pendidikan
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm">
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
            <span className="text-slate-400 block text-[11px] uppercase font-bold">Nama Sekolah</span>
            <span className="font-bold text-slate-800">{SCHOOL_INFO.name}</span>
          </div>
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
            <span className="text-slate-400 block text-[11px] uppercase font-bold">NPSN</span>
            <span className="font-bold font-mono text-slate-800">{SCHOOL_INFO.npsn}</span>
          </div>
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
            <span className="text-slate-400 block text-[11px] uppercase font-bold">Status Sekolah</span>
            <span className="font-bold text-emerald-700">{SCHOOL_INFO.status}</span>
          </div>
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
            <span className="text-slate-400 block text-[11px] uppercase font-bold">Akreditasi BAN-S/M</span>
            <span className="font-bold text-blue-700">{SCHOOL_INFO.akreditasi}</span>
          </div>
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
            <span className="text-slate-400 block text-[11px] uppercase font-bold">Bentuk Pendidikan</span>
            <span className="font-bold text-slate-800">{SCHOOL_INFO.bentukPendidikan}</span>
          </div>
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
            <span className="text-slate-400 block text-[11px] uppercase font-bold">Kurikulum Operasional</span>
            <span className="font-bold text-indigo-700">{SCHOOL_INFO.kurikulum}</span>
          </div>
        </div>
      </div>

      {/* Visi dan Misi Component */}
      <VisionMissionCards />

      {/* Tujuan Satuan Pendidikan */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-500" />
          Tujuan Satuan Pendidikan
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {SCHOOL_INFO.tujuan.map((tujuanItem, i) => (
            <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-slate-700 font-medium">{tujuanItem}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dewan Guru & Tenaga Kependidikan */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              Dewan Guru & Tenaga Kependidikan
            </h3>
            <p className="text-xs text-slate-500">
              Pendidik berdedikasi dan bersertifikasi di UPTD SD Negeri 2 Jaya Asri
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg">
            Total {TEACHERS_LIST.length} Personel
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TEACHERS_LIST.map((teacher) => (
            <div
              key={teacher.id}
              className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-300 hover:shadow-xs transition-all flex items-center gap-3.5"
            >
              <div className={`w-12 h-12 rounded-xl ${teacher.avatarColor} text-white flex items-center justify-center font-bold text-sm shadow-xs shrink-0`}>
                {teacher.name.split(' ')[0][0]}{teacher.name.split(' ')[1]?.[0] || 'G'}
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                  {teacher.name}
                </h4>
                <p className="text-xs font-semibold text-blue-600 truncate">
                  {teacher.role}
                </p>
                <p className="text-[11px] text-slate-400 font-mono truncate">
                  NIP. {teacher.nip}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sarana & Prasarana Sekolah */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Building2 className="w-5 h-5 text-emerald-600" />
          Fasilitas & Lingkungan Belajar
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SCHOOL_FACILITIES.map((facility, i) => (
            <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-emerald-300 transition-colors">
              <h4 className="text-sm font-bold text-slate-900 mb-1">{facility.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
