/**
 * School Hero Banner Component
 * Depicting Indonesian Elementary School Teachers and Students in front of SD Negeri 2 Jaya Asri
 */

interface SchoolHeroBannerProps {
  schoolName: string;
}

export function SchoolHeroBanner({ schoolName }: SchoolHeroBannerProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-emerald-800 via-teal-900 to-sky-900 shadow-md">
      {/* Visual Scene Canvas / Photography Backdrop */}
      <div className="relative h-64 sm:h-72 md:h-80 lg:h-88 w-full overflow-hidden">
        {/* Sky and School Environment Vector Illustration Layer */}
        <svg
          viewBox="0 0 1200 450"
          className="absolute inset-0 w-full h-full object-cover select-none"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Sky gradient */}
            <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="60%" stopColor="#7DD3FC" />
              <stop offset="100%" stopColor="#E0F2FE" />
            </linearGradient>

            {/* School Building Gradient */}
            <linearGradient id="buildingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#15803D" />
              <stop offset="10%" stopColor="#16A34A" />
              <stop offset="70%" stopColor="#FEF3C7" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>

            {/* Tree Foliage Gradients */}
            <linearGradient id="treeGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#22C55E" />
              <stop offset="100%" stopColor="#14532D" />
            </linearGradient>
            <linearGradient id="treeGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4ADE80" />
              <stop offset="100%" stopColor="#166534" />
            </linearGradient>

            {/* Khaki Teacher Uniform */}
            <linearGradient id="khakiGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D4A373" />
              <stop offset="100%" stopColor="#A9714B" />
            </linearGradient>

            {/* Red Uniform Pants / Skirt */}
            <linearGradient id="redUniformGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#EF4444" />
              <stop offset="100%" stopColor="#991B1B" />
            </linearGradient>
          </defs>

          {/* Sky */}
          <rect width="1200" height="450" fill="url(#skyGrad)" />

          {/* Fluffy White Clouds */}
          <ellipse cx="200" cy="60" rx="90" ry="30" fill="#FFFFFF" opacity="0.85" />
          <ellipse cx="250" cy="50" rx="60" ry="25" fill="#FFFFFF" opacity="0.9" />
          <ellipse cx="160" cy="70" rx="50" ry="20" fill="#FFFFFF" opacity="0.85" />

          <ellipse cx="920" cy="80" rx="110" ry="35" fill="#FFFFFF" opacity="0.8" />
          <ellipse cx="980" cy="65" rx="70" ry="28" fill="#FFFFFF" opacity="0.85" />

          {/* Tropical Trees in Background */}
          <circle cx="90" cy="180" r="110" fill="url(#treeGrad1)" opacity="0.9" />
          <circle cx="180" cy="190" r="95" fill="url(#treeGrad2)" opacity="0.95" />
          <circle cx="1060" cy="180" r="115" fill="url(#treeGrad1)" opacity="0.9" />
          <circle cx="1140" cy="190" r="100" fill="url(#treeGrad2)" opacity="0.95" />

          {/* School Building (Gedung SD Negeri Hijau & Krem) */}
          {/* Main Roof Gable */}
          <polygon points="220,130 600,60 980,130" fill="#B91C1C" stroke="#7F1D1D" strokeWidth="3" />
          {/* Main Wall */}
          <rect x="235" y="130" width="730" height="200" fill="#FEF9C3" stroke="#CA8A04" strokeWidth="2" />
          {/* Green Architectural Trim */}
          <rect x="235" y="130" width="730" height="24" fill="#15803D" />
          <rect x="235" y="270" width="730" height="15" fill="#166534" />

          {/* School Entrance Signboard */}
          <rect x="460" y="85" width="280" height="36" rx="4" fill="#FFFFFF" stroke="#0D47A1" strokeWidth="2" />
          <text x="600" y="108" fill="#0D47A1" fontSize="15" fontWeight="bold" textAnchor="middle" letterSpacing="0.5">
            UPTD SD NEGERI 2 JAYA ASRI
          </text>

          {/* Pillars and Windows */}
          <rect x="300" y="170" width="70" height="90" rx="3" fill="#60A5FA" stroke="#1E40AF" strokeWidth="2" opacity="0.85" />
          <line x1="335" y1="170" x2="335" y2="260" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="300" y1="215" x2="370" y2="215" stroke="#FFFFFF" strokeWidth="2" />

          <rect x="410" y="170" width="70" height="90" rx="3" fill="#60A5FA" stroke="#1E40AF" strokeWidth="2" opacity="0.85" />
          <line x1="445" y1="170" x2="445" y2="260" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="410" y1="215" x2="480" y2="215" stroke="#FFFFFF" strokeWidth="2" />

          {/* Main Door */}
          <rect x="555" y="165" width="90" height="115" fill="#78350F" stroke="#451A03" strokeWidth="2" />
          <rect x="565" y="175" width="30" height="95" fill="#92400E" />
          <rect x="605" y="175" width="30" height="95" fill="#92400E" />

          <rect x="720" y="170" width="70" height="90" rx="3" fill="#60A5FA" stroke="#1E40AF" strokeWidth="2" opacity="0.85" />
          <line x1="755" y1="170" x2="755" y2="260" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="720" y1="215" x2="790" y2="215" stroke="#FFFFFF" strokeWidth="2" />

          <rect x="830" y="170" width="70" height="90" rx="3" fill="#60A5FA" stroke="#1E40AF" strokeWidth="2" opacity="0.85" />
          <line x1="865" y1="170" x2="865" y2="260" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="830" y1="215" x2="900" y2="215" stroke="#FFFFFF" strokeWidth="2" />

          {/* School Yard / Paving & Grass */}
          <rect x="0" y="320" width="1200" height="130" fill="#E2E8F0" />
          <rect x="0" y="335" width="1200" height="115" fill="#CBD5E1" />
          {/* Garden border with potted plants */}
          <ellipse cx="230" cy="330" rx="35" ry="15" fill="#15803D" />
          <ellipse cx="380" cy="330" rx="35" ry="15" fill="#166534" />
          <ellipse cx="820" cy="330" rx="35" ry="15" fill="#166534" />
          <ellipse cx="970" cy="330" rx="35" ry="15" fill="#15803D" />

          {/* Group of Teachers and Indonesian Students (Stylized Ensemble) */}
          <g transform="translate(180, 160)">
            {/* Student 1 (Girl in red skirt, white shirt, hijab) */}
            <g transform="translate(100, 75)">
              <ellipse cx="25" cy="18" rx="14" ry="16" fill="#F8FAFC" /> {/* Hijab */}
              <circle cx="25" cy="20" r="10" fill="#FCD34D" /> {/* Face */}
              <path d="M12 36 L38 36 L44 85 L6 85 Z" fill="#FFFFFF" stroke="#E2E8F0" /> {/* White shirt */}
              <polygon points="23,38 27,38 28,58 25,64 22,58" fill="#DC2626" /> {/* Red Tie */}
              <path d="M5 85 L45 85 L49 140 L1 140 Z" fill="url(#redUniformGrad)" /> {/* Red Skirt */}
              <rect x="12" y="140" width="8" height="25" fill="#FCD34D" />
              <rect x="30" y="140" width="8" height="25" fill="#FCD34D" />
              <ellipse cx="16" cy="165" rx="8" ry="4" fill="#0F172A" />
              <ellipse cx="34" cy="165" rx="8" ry="4" fill="#0F172A" />
            </g>

            {/* Student 2 (Boy in red shorts, white shirt, red cap) */}
            <g transform="translate(160, 85)">
              <circle cx="25" cy="20" r="12" fill="#FCD34D" /> {/* Face */}
              <path d="M11 14 Q25 4 39 14 L42 20 L8 20 Z" fill="#DC2626" /> {/* SD Red Cap */}
              <rect x="6" y="17" width="38" height="4" fill="#DC2626" rx="2" /> {/* Visor */}
              <path d="M10 34 L40 34 L45 80 L5 80 Z" fill="#FFFFFF" stroke="#E2E8F0" />
              <polygon points="23,36 27,36 28,54 25,60 22,54" fill="#DC2626" />
              <rect x="9" y="80" width="14" height="40" fill="url(#redUniformGrad)" />
              <rect x="27" y="80" width="14" height="40" fill="url(#redUniformGrad)" />
              <rect x="12" y="120" width="8" height="30" fill="#FCD34D" />
              <rect x="30" y="120" width="8" height="30" fill="#FCD34D" />
              <ellipse cx="16" cy="152" rx="8" ry="4" fill="#0F172A" />
              <ellipse cx="34" cy="152" rx="8" ry="4" fill="#0F172A" />
            </g>

            {/* Teacher 1 (Female Teacher in Khaki Uniform & Hijab, Center) */}
            <g transform="translate(240, 20)">
              <ellipse cx="35" cy="26" rx="20" ry="24" fill="#E2E8F0" /> {/* Hijab */}
              <circle cx="35" cy="28" r="14" fill="#FDE047" /> {/* Face */}
              {/* Khaki PNS Uniform Blouse */}
              <path d="M12 50 L58 50 L66 125 L4 125 Z" fill="url(#khakiGrad)" />
              {/* Collar & Badge */}
              <polygon points="24,50 35,62 46,50" fill="#FEF08A" />
              <rect x="18" y="70" width="10" height="4" fill="#CA8A04" /> {/* Name Tag */}
              {/* Khaki Long Skirt */}
              <path d="M4 125 L66 125 L72 215 L-2 215 Z" fill="#A9714B" />
              <ellipse cx="25" cy="217" rx="10" ry="5" fill="#334155" />
              <ellipse cx="45" cy="217" rx="10" ry="5" fill="#334155" />
            </g>

            {/* Teacher 2 (Male Teacher in Batik / Khaki Safari, Center-Right) */}
            <g transform="translate(340, 15)">
              <circle cx="35" cy="28" r="14" fill="#FCD34D" /> {/* Face */}
              {/* Hair */}
              <path d="M20 22 Q35 12 50 22 L48 16 Q35 10 22 16 Z" fill="#1E293B" />
              {/* Safari / Batik Shirt */}
              <path d="M10 50 L60 50 L64 130 L6 130 Z" fill="#92400E" />
              {/* Batik pattern accents */}
              <circle cx="25" cy="70" r="3" fill="#FDE047" opacity="0.7" />
              <circle cx="45" cy="70" r="3" fill="#FDE047" opacity="0.7" />
              <circle cx="35" cy="95" r="4" fill="#FDE047" opacity="0.7" />
              <circle cx="20" cy="115" r="3" fill="#FDE047" opacity="0.7" />
              <circle cx="50" cy="115" r="3" fill="#FDE047" opacity="0.7" />
              {/* Black/Dark Trousers */}
              <rect x="12" y="130" width="18" height="90" fill="#1E293B" />
              <rect x="38" y="130" width="18" height="90" fill="#1E293B" />
              <ellipse cx="21" cy="220" rx="11" ry="5" fill="#0F172A" />
              <ellipse cx="47" cy="220" rx="11" ry="5" fill="#0F172A" />
            </g>

            {/* Student 3 (Girl with ponytail in red-white uniform) */}
            <g transform="translate(430, 85)">
              <circle cx="25" cy="20" r="12" fill="#FCD34D" />
              {/* Ponytail Hair */}
              <path d="M12 18 Q25 8 38 18 L36 28 Q25 22 14 28 Z" fill="#1E293B" />
              <circle cx="38" cy="14" r="5" fill="#DC2626" />
              <path d="M10 34 L40 34 L45 80 L5 80 Z" fill="#FFFFFF" stroke="#E2E8F0" />
              <polygon points="23,36 27,36 28,54 25,60 22,54" fill="#DC2626" />
              <path d="M5 80 L45 80 L50 135 L0 135 Z" fill="url(#redUniformGrad)" />
              <rect x="12" y="135" width="8" height="25" fill="#FCD34D" />
              <rect x="30" y="135" width="8" height="25" fill="#FCD34D" />
              <ellipse cx="16" cy="160" rx="8" ry="4" fill="#0F172A" />
              <ellipse cx="34" cy="160" rx="8" ry="4" fill="#0F172A" />
            </g>

            {/* Student 4 (Boy with backpack) */}
            <g transform="translate(500, 80)">
              {/* Backpack straps */}
              <rect x="4" y="38" width="5" height="35" rx="2" fill="#0284C7" />
              <rect x="39" y="38" width="5" height="35" rx="2" fill="#0284C7" />
              <circle cx="24" cy="20" r="12" fill="#FCD34D" />
              <path d="M10 16 Q24 8 38 16 L36 24 Q24 20 12 24 Z" fill="#1E293B" />
              <path d="M9 34 L39 34 L43 80 L5 80 Z" fill="#FFFFFF" stroke="#E2E8F0" />
              <polygon points="22,36 26,36 27,54 24,60 21,54" fill="#DC2626" />
              <rect x="8" y="80" width="14" height="40" fill="url(#redUniformGrad)" />
              <rect x="26" y="80" width="14" height="40" fill="url(#redUniformGrad)" />
              <rect x="11" y="120" width="8" height="30" fill="#FCD34D" />
              <rect x="29" y="120" width="8" height="30" fill="#FCD34D" />
              <ellipse cx="15" cy="152" rx="8" ry="4" fill="#0F172A" />
              <ellipse cx="33" cy="152" rx="8" ry="4" fill="#0F172A" />
            </g>
          </g>
        </svg>

        {/* High contrast gradient scrim overlay for legible headline text */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/40 to-transparent flex flex-col justify-end p-5 sm:p-6 md:p-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-semibold bg-emerald-500/90 text-white mb-2 tracking-wide uppercase">
              Gerbang Informasi Resmi
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md text-balance">
              Selamat Datang di Microsite <br className="hidden sm:inline" />
              <span className="text-amber-300">{schoolName}</span>
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-200 line-clamp-2 sm:line-clamp-none drop-shadow">
              Pusat Data Terpadu & Akses Berkas Google Drive Pembelajaran Kurikulum Merdeka
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
