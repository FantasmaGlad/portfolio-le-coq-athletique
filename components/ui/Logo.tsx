'use client';

import Image from 'next/image';
import { useState } from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showFallback?: boolean;
}

const Logo = ({ size = 'md', className = '', showFallback = true }: LogoProps) => {
  const [imageError, setImageError] = useState(false);
  
  const sizes = {
    sm: { container: 'w-6 h-6', image: 'w-5 h-5', emoji: 'text-sm' },
    md: { container: 'w-8 h-8', image: 'w-6 h-6', emoji: 'text-lg' },
    lg: { container: 'w-10 h-10', image: 'w-8 h-8', emoji: 'text-xl' },
    xl: { container: 'w-12 h-12', image: 'w-10 h-10', emoji: 'text-2xl' }
  };

  const sizeConfig = sizes[size];

  if (imageError && showFallback) {
    return (
      <div className={`${sizeConfig.container} bg-white rounded-xl flex items-center justify-center shadow-lg border border-slate-200 ${className}`}>
        <div className={`text-red-600 font-bold ${sizeConfig.emoji}`}>🐓</div>
      </div>
    );
  }

  return (
    <div className={`${sizeConfig.container} bg-white rounded-xl flex items-center justify-center shadow-lg border border-slate-200 overflow-hidden ${className}`}>
      <Image
        src="/logo-coq-athletique.png"
        alt="Le Coq Athlétique"
        width={48}
        height={48}
        className={`${sizeConfig.image} object-contain`}
        onError={() => setImageError(true)}
        priority
        unoptimized // Force l'image non-optimisée pour éviter les problèmes
      />
    </div>
  );
};

export default Logo;
