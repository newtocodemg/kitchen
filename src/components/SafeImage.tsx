import React, { useState, useEffect } from 'react';

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

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    }
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      loading={loading}
      onError={handleError}
      className={`w-full h-full object-cover ${className}`}
      {...props}
    />
  );
}


