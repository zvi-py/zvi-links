import { useRef, useState } from 'react';
import { HERO_DEER, ICON_LINKS } from './data/profile';
import { StickerImage } from './components/StickerImage';

async function copyToClipboard(text: string): Promise<boolean> {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fall back to execCommand when clipboard API is blocked in an iframe.
    }
  }

  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    textarea.style.pointerEvents = 'none';
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(textarea);
    return ok;
  } catch {
    return false;
  }
}

export default function App() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const handleCopy = async (id: string, text: string) => {
    const ok = await copyToClipboard(text);
    if (!ok) {
      return;
    }

    setCopiedId(id);
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setCopiedId(null);
      timeoutRef.current = null;
    }, 2000);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-white px-5 py-10">
      <div className="flex w-full max-w-[380px] flex-col items-center">
        {/* Vintage deer hero */}
        <div className="hero-settle h-[136px] w-[136px] sm:h-[148px] sm:w-[148px]">
          <StickerImage
            src={HERO_DEER.src}
            alt={HERO_DEER.alt}
            fallbackGlyph="🦌"
            className="h-full w-full object-contain mix-blend-multiply contrast-[1.04] saturate-[1.05]"
          />
        </div>

        {/* Clickable icons */}
        <nav aria-label="Links" className="mt-7 w-full">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-7 sm:gap-x-8 sm:gap-y-8">
            {ICON_LINKS.map((item) => {
              const isCopied = copiedId === item.id;
              const tileClassName =
                'group flex min-h-[124px] w-full max-w-[148px] cursor-pointer flex-col items-center rounded-2xl px-2 py-1.5 text-center transition-transform duration-150 ease-out active:scale-[0.95] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e692b2]';

              const innerContent = (
                <>
                  <div className="flex h-[94px] w-[94px] items-center justify-center overflow-hidden transition-transform duration-200 ease-out group-hover:-translate-y-1 group-hover:scale-[1.06] sm:h-[104px] sm:w-[104px]">
                    <StickerImage
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fallbackGlyph={item.fallbackGlyph}
                      className={`h-full w-full object-contain mix-blend-multiply ${item.imageClassName ?? ''}`}
                    />
                  </div>
                  <span
                    className={`font-script mt-1 px-2 text-[31px] leading-[1.15] font-normal tracking-[0.01em] whitespace-nowrap transition-colors duration-150 sm:text-[34px] ${
                      isCopied
                        ? 'text-[#9c3e63]'
                        : 'text-[#181416] group-hover:text-[#9c3e63]'
                    }`}
                  >
                    {isCopied ? 'copied!' : item.label}
                  </span>
                </>
              );

              return (
                <li key={item.id} className="min-w-0 flex justify-center">
                  {item.copyText ? (
                    <button
                      type="button"
                      onClick={() => handleCopy(item.id, item.copyText!)}
                      aria-label={`Copy ${item.label} address`}
                      className={tileClassName}
                    >
                      {innerContent}
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={tileClassName}
                    >
                      {innerContent}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <span role="status" aria-live="polite" className="sr-only">
          {copiedId ? 'Email copied to clipboard' : ''}
        </span>
      </div>
    </main>
  );
}
