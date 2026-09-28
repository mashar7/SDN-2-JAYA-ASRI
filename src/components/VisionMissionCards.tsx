/**
 * Vision & Mission Cards Component
 * Faithfully recreating the PROFIL SEKOLAH section from the reference image
 */

import { Star, ShieldCheck, HeartHandshake, TreePine, Sparkles, BookOpen, Cpu, Award } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export function VisionMissionCards() {
  return (
    <section className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            PROFIL SEKOLAH
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Landasan filosofis dan pedoman arah pendidikan UPTD SD Negeri 2 Jaya Asri
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {/* Card 1: VISI */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between hover:border-blue-300 transition-all">
          <div>
            {/* Header with Star Icon */}
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-11 h-11 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-sm shrink-0">
                <Star className="w-6 h-6 fill-white text-blue-600" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-blue-600">Arah & Cita-Cita</span>
                <h3 className="text-xl font-bold text-slate-900 leading-tight">VISI</h3>
              </div>
            </div>

            {/* Visi Statement */}
            <div className="bg-blue-50/70 border-l-4 border-blue-600 rounded-r-lg p-4 my-2">
              <p className="text-base sm:text-lg font-semibold text-slate-800 italic leading-relaxed">
                “{SCHOOL_INFO.visi}”
              </p>
            </div>

            {/* Visi Breakdown / Indikator */}
            <div className="mt-5 space-y-3 pt-3 border-t border-slate-100">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-md bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase">Relijius</h4>
                  <p className="text-xs text-slate-600">
                    Menghayati dan mengamalkan nilai-nilai ajaran agama dalam tutur kata serta perbuatan sehari-hari.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase">Disiplin</h4>
                  <p className="text-xs text-slate-600">
                    Membudayakan sikap tertib waktu, jujur, bertanggung jawab, mandiri, dan menjaga kelestarian lingkungan hidup.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-md bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase">Berprestasi</h4>
                  <p className="text-xs text-slate-600">
                    Unggul dalam kompetensi literasi, numerasi, penguasaan teknologi, dan bakat keterampilan karsa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: MISI */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between hover:border-emerald-300 transition-all">
          <div>
            {/* Header with Emblem / Icons */}
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-11 h-11 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-sm shrink-0">
                <HeartHandshake className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-emerald-600">Langkah Nyata</span>
                <h3 className="text-xl font-bold text-slate-900 leading-tight">MISI</h3>
              </div>
            </div>

            {/* The 5 Misi Points as Requested by the User */}
            <ol className="space-y-3 mt-3">
              {SCHOOL_INFO.misi.map((misiItem, idx) => {
                // Appropriate icon per mission item
                const icons = [
                  <Sparkles key="1" className="w-4 h-4 text-emerald-600" />,
                  <TreePine key="2" className="w-4 h-4 text-emerald-600" />,
                  <BookOpen key="3" className="w-4 h-4 text-emerald-600" />,
                  <Cpu key="4" className="w-4 h-4 text-emerald-600" />,
                  <Award key="5" className="w-4 h-4 text-emerald-600" />
                ];

                return (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-slate-800 text-xs sm:text-sm leading-relaxed group hover:bg-emerald-50/50 hover:border-emerald-200 transition-colors"
                  >
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div className="flex-1">
                      <p className="font-medium text-slate-800">{misiItem}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
