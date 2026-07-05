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
  src,
  alt = 'KitchenSpace Studio Premium Modular Kitchen',
  className = '',
  loading = 'lazy',
  fallbackSrc,
  ...props
}: SafeImageProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(src);

  useEffect(() => {
    setStatus('loading');
    setCurrentSrc(src);
  }, [src]);

  const handleLoad = () => {
    setStatus('loaded');
  };

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setStatus('error');
    }
  };

  return (
    <div className={`relative overflow-hidden w-full h-full ${className}`}>
      {/* Loading Shimmer/Placeholder */}
      {status === 'loading' && (
        <div 
          className="absolute inset-0 bg-stone-900/40 animate-pulse flex items-center justify-center"
          style={{ zIndex: 2 }}
        >
          {/* Subtle logo or shimmer lines */}
          <div className="w-12 h-12 rounded-full border border-accent/20 border-t-accent animate-spin" />
        </div>
      )}

      {/* Actual Image */}
      {status !== 'error' && currentSrc ? (
        <img
          src={currentSrc}
          alt={alt}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            status === 'loaded' ? 'opacity-100' : 'opacity-0'
          }`}
          {...props}
        />
      ) : null}

      {/* Fallback View (Zero Broken Placeholders) */}
      {status === 'error' && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E4D3D] to-[#12362a] flex flex-col items-center justify-center p-6 text-center select-none border border-white/5">
          <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-3 animate-pulse">
            <ImageIcon className="w-6 h-6 stroke-[1.5]" />
          </div>
          <span className="text-[10px] uppercase tracking-widest text-accent font-bold mb-1">
            KitchenSpace Design
          </span>
          <span className="text-[11px] text-stone-300 font-sans max-w-[200px] line-clamp-1">
            {alt}
          </span>
        </div>
      )}
    </div>
  );
}
