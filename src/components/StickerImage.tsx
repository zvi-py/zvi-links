import { useState } from 'react';

interface StickerImageProps {
  src: string;
  alt: string;
  className: string;
  fallbackGlyph: string;
  loading?: 'eager' | 'lazy';
}

export function StickerImage({
  src,
  alt,
  className,
  fallbackGlyph,
  loading = 'eager',
}: StickerImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`${className} flex items-center justify-center bg-[#fdf2f6] text-2xl select-none`}
      >
        <span aria-hidden="true">{fallbackGlyph}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
