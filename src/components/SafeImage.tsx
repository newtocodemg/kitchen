import React, { useState, useEffect } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  fallbackSrc?: string;
  alt?: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

export default function SafeImage({
  src,
  fallbackSrc,
  alt = '',
  className = '',
  loading = 'lazy',
  ...props
}: SafeImageProps) {
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(src);
  const [hasError, setHasError] = useState<boolean>(false);
  const [missingFile, setMissingFile] = useState<string | null>(null);

  useEffect(() => {
    setCurrentSrc(src);
    setHasError(false);
    setMissingFile(null);
  }, [src]);

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      // Try fallback
      setCurrentSrc(fallbackSrc);
    } else {
      // Both primary and fallback failed or no fallback provided
      setHasError(true);
      const filename = currentSrc ? currentSrc.split('/').pop() : 'unknown';
      setMissingFile(filename || 'unknown');
    }
  };

  if (hasError && missingFile) {
    return (
      <div className="absolute inset-0 bg-stone-100 flex flex-col items-center justify-center p-4 text-center border border-dashed border-stone-300 rounded-lg">
        <span className="text-xs font-bold text-red-600 uppercase tracking-wider mb-1">
          Missing Image Asset
        </span>
        <code className="text-[10px] font-mono bg-stone-200 text-stone-700 px-2 py-1 rounded select-all max-w-full truncate">
          {missingFile}
        </code>
        <p className="text-[10px] text-stone-400 mt-1 max-w-[180px] leading-tight">
          {alt || 'Asset failed to load'}
        </p>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      loading={loading}
      onError={handleError}
      className={`w-full h-full object-cover block ${className}`}
      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      {...props}
    />
  );
}
