import { useEffect, useRef } from 'react';
import katex from 'katex';

interface KaTeXProps {
  latex: string;
  displayMode?: boolean;
}

export function KaTeX({ latex, displayMode = true }: KaTeXProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (containerRef.current) {
      try {
        katex.render(latex, containerRef.current, {
          displayMode,
          throwOnError: false,
          errorColor: '#ef4444',
          strict: false,
          trust: true,
          macros: {
            "\\R": "\\mathbb{R}",
            "\\N": "\\mathbb{N}",
            "\\Z": "\\mathbb{Z}",
            "\\Q": "\\mathbb{Q}",
            "\\C": "\\mathbb{C}",
          },
        });
      } catch (error) {
        console.error('KaTeX rendering error:', error);
        if (containerRef.current) {
          containerRef.current.innerHTML = `<span class="text-red-400">${latex}</span>`;
        }
      }
    }
  }, [latex, displayMode]);
  
  return (
    <div
      ref={containerRef}
      className={`${displayMode ? 'katex-display' : 'katex-inline'}`}
    />
  );
}

export default KaTeX;
