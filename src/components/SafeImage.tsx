import React, { useState, useEffect } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface SafeImageProps {
  src?: string;
  alt?: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  fallbackSrc?: string;
  [key: string]: any;
}

export default function SafeImage({
  src = '',
  alt = 'KitchenSpace Studio Premium Modular Kitchen',
  className = '',
  loading = 'lazy',
  fallbackSrc,
  ...props
}: SafeImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setIsLoaded(false);
    setIsError(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
    setIsError(false);
  };

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setIsError(true);
    }
  };

  return (
    <div className={`relative overflow-hidden w-full h-full bg-[#FAFAF9] ${className}`}>
      {/* Loading Shimmer State */}
      {!isLoaded && !isError && (
        <div className="absolute inset-0 bg-[#F5F2EB] flex flex-col items-center justify-center p-6 text-center">
          <div className="absolute inset-0 animate-shimmer-light" />
          <div className="relative z-10 flex flex-col items-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#1E4D3D]/5 border border-[#1E4D3D]/10 flex items-center justify-center text-[#1E4D3D]/40">
              <ImageIcon className="w-5 h-5 animate-pulse" />
            </div>
            <div className="space-y-1.5 w-full">
              <div className="h-3 bg-[#1E4D3D]/10 rounded w-28 mx-auto animate-pulse" />
              <div className="h-2 bg-[#1E4D3D]/5 rounded w-20 mx-auto animate-pulse" />
            </div>
          </div>
        </div>
      )}

      {/* Beautiful Premium Skeleton Error Placeholder */}
      {isError && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#123328] to-[#1E4D3D] flex flex-col items-center justify-center p-6 text-center select-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent bg-[length:200%_100%] animate-shimmer" />
          <div className="relative z-10 flex flex-col items-center justify-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/25 flex items-center justify-center text-accent/80 shadow-md">
              <ImageIcon className="w-5 h-5 stroke-[1.5]" />
            </div>
            <div className="space-y-1">
              <span className="text-[9px] uppercase tracking-[0.25em] text-accent font-bold block">
                KitchenSpace Studio
              </span>
              <p className="text-stone-200 text-xs font-sans max-w-[220px] leading-relaxed line-clamp-2">
                {alt}
              </p>
              <span className="text-[9px] text-stone-400 font-mono tracking-wider block pt-1 bg-black/20 px-2 py-0.5 rounded-full inline-block">
                {currentSrc ? currentSrc.split('/').pop() : 'No src'}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Successfully Loaded Image */}
      {currentSrc && !isError && (
        <img
          src={currentSrc}
          alt={alt}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-700 ease-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          {...props}
        />
      )}
    </div>
  );
}

