import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'logo' | 'text' | 'done'>('logo');

  useEffect(() => {
    // Phase 1: Logo
    const timer1 = setTimeout(() => setPhase('text'), 500);
    
    // Phase 2: Progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 2;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setPhase('done');
            setTimeout(onComplete, 300);
          }, 200);
          return 100;
        }
        return next;
      });
    }, 40);

    return () => {
      clearTimeout(timer1);
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ background: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 50%, #0a0a1a 100%)' }}
    >
      {/* 静态星空背景 */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 80 }).map((_, starIndex) => (
          <div
            key={starIndex}
            className="absolute rounded-full"
            style={{
              left: `${(starIndex * 37 + 11) % 100}%`,
              top: `${(starIndex * 53 + 23) % 100}%`,
              width: `${1 + (starIndex % 3)}px`,
              height: `${1 + (starIndex % 3)}px`,
              background: starIndex % 5 === 0 ? '#6366f1' : starIndex % 3 === 0 ? '#8b5cf6' : '#64748b',
              opacity: 0.3 + (starIndex % 5) * 0.1,
            }}
          />
        ))}
      </div>

      {/* Logo 圆环 */}
      <div className="relative mb-8" style={{ width: 120, height: 120 }}>
        {/* 外圈 */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: '2px dashed rgba(99, 102, 241, 0.4)',
          }}
        />
        {/* 中圈 */}
        <div
          className="absolute rounded-full"
          style={{
            inset: '12px',
            border: '1px dotted rgba(139, 92, 246, 0.5)',
          }}
        />
        {/* 内圈 */}
        <div
          className="absolute rounded-full flex items-center justify-center"
          style={{
            inset: '24px',
            background: 'rgba(99, 102, 241, 0.15)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <span style={{ fontSize: 32, fontWeight: 700, color: '#a5b4fc' }}>∑</span>
        </div>
        {/* 辉光 */}
        <div
          className="absolute rounded-full"
          style={{
            inset: 0,
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />
      </div>

      {/* 标题 */}
      <div
        className="text-center mb-8 transition-opacity duration-500"
        style={{ opacity: phase === 'text' || phase === 'done' ? 1 : 0 }}
      >
        <h1
          style={{
            fontSize: 36,
            fontWeight: 700,
            background: 'linear-gradient(90deg, #818cf8, #a78bfa, #22d3ee)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: 8,
          }}
        >
          MathUniverse
        </h1>
        <p style={{ color: '#94a3b8', fontSize: 18 }}>探索数学宇宙的无限可能</p>
      </div>

      {/* 进度条 */}
      <div
        style={{
          width: 280,
          height: 4,
          background: '#1e293b',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #22d3ee)',
            transition: 'width 0.1s ease-out',
          }}
        />
      </div>

      {/* 百分比 */}
      <p
        style={{
          marginTop: 12,
          color: '#64748b',
          fontFamily: 'monospace',
          fontSize: 14,
        }}
      >
        {progress}%
      </p>

      {/* 数学符号装饰 */}
      <div style={{ position: 'absolute', bottom: 40, left: 40, color: '#374151', fontSize: 48, fontFamily: 'serif' }}>
        ∫dx
      </div>
      <div style={{ position: 'absolute', top: 60, right: 40, color: '#374151', fontSize: 36, fontFamily: 'serif' }}>
        Σn=1
      </div>
      <div style={{ position: 'absolute', bottom: 60, right: 60, color: '#374151', fontSize: 32, fontFamily: 'serif' }}>
        πr²
      </div>
      <div style={{ position: 'absolute', top: '35%', left: 30, color: '#374151', fontSize: 28, fontFamily: 'serif' }}>
        √
      </div>
    </div>
  );
}
