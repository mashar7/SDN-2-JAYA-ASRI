/**
 * Official Kemendikbud Tut Wuri Handayani Logo Vector Component
 */

interface LogoProps {
  className?: string;
  size?: number;
}

export function TutWuriHandayaniLogo({ className = "w-12 h-12", size = 48 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Lambang Tut Wuri Handayani Kemendikbud"
    >
      <defs>
        <radialGradient id="gradShield" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#1E88E5" />
          <stop offset="100%" stopColor="#0D47A1" />
        </radialGradient>
        <linearGradient id="gradGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFEA00" />
          <stop offset="100%" stopColor="#FFB300" />
        </linearGradient>
      </defs>

      {/* Pentagon / Segi Lima Bingkai Luar Biru */}
      <polygon
        points="50,4 96,37 78,92 22,92 4,37"
        fill="url(#gradShield)"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <polygon
        points="50,8 92,39 76,88 24,88 8,39"
        fill="none"
        stroke="#FFD54F"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Garuda / Burung Sayap Kuning Emas */}
      <path
        d="M50 28 C45 28 35 24 24 33 C26 38 30 43 38 46 C34 49 28 51 22 55 C26 60 32 63 42 63 C44 58 47 52 50 48 C53 52 56 58 58 63 C68 63 74 60 78 55 C72 51 66 49 62 46 C70 43 74 38 76 33 C65 24 55 28 50 28 Z"
        fill="url(#gradGold)"
        stroke="#E65100"
        strokeWidth="0.8"
      />

      {/* Belencong / Api Obor di Tengah */}
      <path
        d="M50 18 C46 24 45 29 48 34 C50 32 52 32 52 30 C53 32 56 31 55 29 C57 26 55 21 50 18 Z"
        fill="#FF3D00"
      />
      <path
        d="M50 21 C48 24 48 27 50 30 C51 28 52 28 52 26 C53 25 51 22 50 21 Z"
        fill="#FFEB3B"
      />

      {/* Buku Terbuka Putih di Bawah */}
      <path
        d="M50 63 C42 59 34 60 27 65 C32 75 42 74 50 76 C58 74 68 75 73 65 C66 60 58 59 50 63 Z"
        fill="#FFFFFF"
        stroke="#1565C0"
        strokeWidth="1"
      />
      <line x1="50" y1="63" x2="50" y2="76" stroke="#0D47A1" strokeWidth="1.5" />
      <path d="M34 66 C40 64 45 64 49 67" stroke="#90CAF9" strokeWidth="0.8" />
      <path d="M66 66 C60 64 55 64 51 67" stroke="#90CAF9" strokeWidth="0.8" />

      {/* Tulisan Melingkar Halus TUT WURI HANDAYANI (Representasi) */}
      <path
        id="textPathTutWuri"
        d="M 24,84 Q 50,91 76,84"
        fill="none"
      />
      <text fill="#FFFFFF" fontSize="5" fontWeight="bold" letterSpacing="0.5">
        <textPath href="#textPathTutWuri" startOffset="50%" textAnchor="middle">
          TUT WURI HANDAYANI
        </textPath>
      </text>
    </svg>
  );
}
