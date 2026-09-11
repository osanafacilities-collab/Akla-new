import React from 'react';

interface AklaLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export const AklaLogo: React.FC<AklaLogoProps> = ({
  size = 'md',
  showTagline = true,
  className = '',
}) => {
  const iconSize = size === 'sm' ? 38 : size === 'lg' ? 56 : 46;

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Luxury Circular Gold Emblem with Wheat Stalk */}
      <div 
        className="relative shrink-0 flex items-center justify-center rounded-full transition-transform duration-300 hover:scale-105"
        style={{ width: iconSize, height: iconSize }}
      >
        <svg 
          viewBox="0 0 100 100" 
          width={iconSize} 
          height={iconSize}
          className="drop-shadow-[0_2px_10px_rgba(200,155,60,0.4)]"
        >
          <defs>
            <linearGradient id="goldRing" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF3D1" />
              <stop offset="35%" stopColor="#F5D061" />
              <stop offset="70%" stopColor="#C89B3C" />
              <stop offset="100%" stopColor="#8A6016" />
            </linearGradient>
            <linearGradient id="goldLetter" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="40%" stopColor="#F5D061" />
              <stop offset="80%" stopColor="#E3BC63" />
              <stop offset="100%" stopColor="#C89B3C" />
            </linearGradient>
            <linearGradient id="goldWheat" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C89B3C" />
              <stop offset="50%" stopColor="#FDE68A" />
              <stop offset="100%" stopColor="#E3BC63" />
            </linearGradient>
          </defs>

          {/* Outer circle ring */}
          <circle 
            cx="50" 
            cy="50" 
            r="46" 
            fill="#081829" 
            stroke="url(#goldRing)" 
            strokeWidth="2.5" 
          />
          
          {/* Inner concentric fine ring */}
          <circle 
            cx="50" 
            cy="50" 
            r="41" 
            fill="none" 
            stroke="url(#goldRing)" 
            strokeWidth="1.2" 
            opacity="0.85" 
            strokeDasharray="1 0"
          />

          {/* Stylized Serif "A" */}
          <path
            d="M50 20 L30 74 L37 74 L43.5 56 L56.5 56 L63 74 L70 74 Z M50 36 L54.5 50 L45.5 50 Z"
            fill="url(#goldLetter)"
          />

          {/* Golden Wheat Stalk gracefully entwined */}
          <path
            d="M39 60 Q 48 52 59 40"
            fill="none"
            stroke="url(#goldWheat)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Wheat grains */}
          <path d="M43 55 C41 52 42 49 45 51 C48 53 47 56 43 55 Z" fill="url(#goldWheat)" />
          <path d="M47 50 C49 47 52 48 51 51 C50 54 46 53 47 50 Z" fill="url(#goldWheat)" />
          <path d="M49 45 C47 42 48 39 51 41 C54 43 53 46 49 45 Z" fill="url(#goldWheat)" />
          <path d="M53 40 C55 37 58 38 57 41 C56 44 52 43 53 40 Z" fill="url(#goldWheat)" />
          <path d="M55 35 C53 32 54 29 57 31 C60 33 59 36 55 35 Z" fill="url(#goldWheat)" />
          <path d="M59 30 C61 27 64 28 63 31 C62 34 58 33 59 30 Z" fill="url(#goldWheat)" />
        </svg>
      </div>

      {/* Brand Typography matching screenshot */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline gap-1.5">
          <span className="font-heading font-black tracking-wider text-white text-[19px] sm:text-[22px] leading-tight">
            AKLA
          </span>
        </div>
        <span className="font-heading font-bold text-[10px] sm:text-[11px] tracking-[1.8px] text-[#E3BC63] uppercase leading-none mt-0.5">
          FOODSTUFF TRADING LLC
        </span>
        {showTagline && (
          <span className="text-[9.5px] sm:text-[10px] text-[#A6BACD] tracking-[0.4px] mt-1 hidden sm:block font-normal">
            Connecting Quality Food Products to Global Markets
          </span>
        )}
      </div>
    </div>
  );
};
