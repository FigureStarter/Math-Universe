import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Check } from 'lucide-react';
import {
  MinimalSphere, PhysicalSphere, WireframeSphere,
  GridSphere, GlowingSphere, FullSphere,
  SphereParams, defaultSphereParams,
  SphereVariantId, SPHERE_CONFIG_KEY, VARIANT_LABELS,
} from '../components/three/SphereVariants';
import SphereParamsPanel from '../components/ui/SphereParamsPanel';

interface VariantDef {
  id: SphereVariantId;
  Component: React.FC<{ params: SphereParams }>;
}

const variants: VariantDef[] = [
  { id: 'minimal', Component: MinimalSphere },
  { id: 'physical', Component: PhysicalSphere },
  { id: 'wireframe', Component: WireframeSphere },
  { id: 'grid', Component: GridSphere },
  { id: 'glowing', Component: GlowingSphere },
  { id: 'full', Component: FullSphere },
];

function VariantCard({ variantId, Component, params, isSelected, onSelect }: {
  variantId: SphereVariantId;
  Component: React.FC<{ params: SphereParams }>;
  params: SphereParams;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const labels = VARIANT_LABELS[variantId];

  return (
    <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-white/5 overflow-hidden hover:border-indigo-500/30 transition-colors group">
      <div className="aspect-square">
        <Canvas
          camera={{ position: [0, 0, 3], fov: 50 }}
          gl={{ antialias: true, alpha: false }}
          dpr={[1, 2]}
        >
          <color attach="background" args={['#0a0a1a']} />
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} intensity={0.8} color="#6366f1" />
          <pointLight position={[-5, -5, -5]} intensity={0.4} color="#22d3ee" />
          <Component params={params} />
          <OrbitControls enablePan={false} enableZoom={true} enableRotate autoRotate={false} />
        </Canvas>
      </div>
      <div className="p-3 border-t border-white/5 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
            {labels.zh} / {labels.en}
          </h3>
        </div>
        <button
          onClick={onSelect}
          className={`flex-shrink-0 p-2 rounded-full transition-all ${
            isSelected
              ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30'
              : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
          }`}
        >
          <Check className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default function SphereTestPage() {
  const { t } = useTranslation();

  const [params, setParams] = useState<SphereParams>(() => {
    try {
      const saved = localStorage.getItem(SPHERE_CONFIG_KEY);
      if (saved) {
        const config = JSON.parse(saved);
        if (config.params) return config.params;
      }
    } catch { /* ignore */ }
    return defaultSphereParams;
  });

  const [selectedVariant, setSelectedVariant] = useState<SphereVariantId>(() => {
    try {
      const saved = localStorage.getItem(SPHERE_CONFIG_KEY);
      if (saved) {
        const config = JSON.parse(saved);
        if (config.variantId) return config.variantId as SphereVariantId;
        if (config.selectedVariant) return config.selectedVariant as SphereVariantId;
      }
    } catch { /* ignore */ }
    return 'wireframe'; // 默认改为 Wireframe
  });

  const handleSelectVariant = (variantId: SphereVariantId) => {
    setSelectedVariant(variantId);
    saveConfig(variantId, params);
  };

  const handleParamsChange = (newParams: SphereParams) => {
    setParams(newParams);
    saveConfig(selectedVariant, newParams);
  };

  const saveConfig = (variantId: SphereVariantId, p: SphereParams) => {
    try {
      localStorage.setItem(SPHERE_CONFIG_KEY, JSON.stringify({ variantId, params: p }));
    } catch { /* ignore */ }
  };

  return (
    <div className="w-full h-full bg-[#0a0a1a] flex flex-col">
      {/* Top bar */}
      <div className="h-14 flex items-center px-6 border-b border-white/5 shrink-0 bg-slate-900/40 backdrop-blur-sm">
        <Link
          to="/"
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">{t('sphere.backToMain', '返回主场景')}</span>
        </Link>
        <div className="flex-1 text-center">
          <h1 className="text-base font-semibold text-white tracking-wide">{t('sphere.testPageTitle', '球体样式测试')}</h1>
        </div>
        <div className="w-24" />
      </div>

      {/* Main content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left: params panel */}
        <SphereParamsPanel
          params={params}
          variantId={selectedVariant}
          onChange={handleParamsChange}
        />

        {/* Right: variant grid */}
        <div className="flex-1 p-5 overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 max-w-[1100px] mx-auto">
            {variants.map((v) => (
              <VariantCard
                key={v.id}
                variantId={v.id}
                Component={v.Component}
                params={params}
                isSelected={selectedVariant === v.id}
                onSelect={() => handleSelectVariant(v.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
