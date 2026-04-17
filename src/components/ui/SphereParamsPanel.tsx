import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, RotateCw, Check, RotateCcw, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SphereParams, SphereVariantId, VARIANT_RELEVANT_PARAMS, defaultSphereParams } from '../three/SphereVariants';

interface SphereParamsPanelProps {
  params: SphereParams;
  variantId: SphereVariantId;
  onChange: (params: SphereParams) => void;
}

function ParamGroup({ title, children, defaultOpen = true }: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-slate-300 hover:text-white transition-colors"
      >
        {isOpen ? <ChevronDown className="w-4 h-4 shrink-0" /> : <ChevronRight className="w-4 h-4 shrink-0" />}
        {title}
      </button>
      {isOpen && <div className="px-3 pb-3 space-y-2.5">{children}</div>}
    </div>
  );
}

function Slider({ label, value, min, max, step, onChange }: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  const display = step >= 1 ? Math.round(value).toString() : value.toFixed(2);
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs text-slate-400">{label}</span>
        <span className="text-xs text-indigo-400 font-mono">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-1.5 bg-slate-700 rounded-full appearance-none cursor-pointer
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5
          [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-indigo-400
          [&::-webkit-slider-thumb]:shadow-[0_0_6px_rgba(99,102,241,0.5)]
          [&::-webkit-slider-thumb]:cursor-pointer"
      />
    </div>
  );
}

export default function SphereParamsPanel({ params, variantId, onChange }: SphereParamsPanelProps) {
  const { t } = useTranslation();
  // 草稿状态：用户修改先存入草稿，点击确认后才提交
  const [draftParams, setDraftParams] = useState<SphereParams>(params);
  // 粒子开关（仅 full 变体显示）
  const [particlesEnabled, setParticlesEnabled] = useState(params.particleCount > 0);

  // 当外部确认的 params 变化时，同步草稿
  useEffect(() => {
    setDraftParams(params);
    setParticlesEnabled(params.particleCount > 0);
  }, [params]);

  const relevantKeys = VARIANT_RELEVANT_PARAMS[variantId] || VARIANT_RELEVANT_PARAMS['full'];

  const updateDraft = (partial: Partial<SphereParams>) => {
    setDraftParams(prev => ({ ...prev, ...partial }));
  };

  const hasUnsavedChanges = JSON.stringify(draftParams) !== JSON.stringify(params);

  const handleConfirm = () => {
    onChange(draftParams);
  };

  const handleReset = () => {
    setDraftParams(params);
    setParticlesEnabled(params.particleCount > 0);
  };

  const handleResetToDefault = () => {
    const fresh = { ...defaultSphereParams, color: params.color };
    setDraftParams(fresh);
    setParticlesEnabled(fresh.particleCount > 0);
  };

  // 判断某个参数组是否有相关参数
  const hasBasic = relevantKeys.some(k => ['radius', 'opacity'].includes(k));
  const hasCore = relevantKeys.some(k => ['metalness', 'roughness', 'emissiveIntensity', 'clearcoat'].includes(k));
  const hasGrid = relevantKeys.some(k => ['latLines', 'lonLines', 'lineOpacity'].includes(k));
  const hasParticle = relevantKeys.includes('particleCount');
  const hasAutoRotate = relevantKeys.includes('autoRotate');

  // 参数标签映射
  const paramLabels: Record<keyof SphereParams, string> = {
    color: t('sphere.color', '颜色'),
    radius: t('sphere.radius', '半径'),
    opacity: t('sphere.opacity', '透明度'),
    metalness: t('sphere.metalness', '金属度'),
    roughness: t('sphere.roughness', '粗糙度'),
    emissiveIntensity: t('sphere.emissiveIntensity', '发光强度'),
    clearcoat: t('sphere.clearcoat', '清漆'),
    latLines: t('sphere.latLines', '纬线数量'),
    lonLines: t('sphere.lonLines', '经线数量'),
    lineOpacity: t('sphere.lineOpacity', '线条透明度'),
    particleCount: t('sphere.particleCount', '粒子数量'),
    particleSize: t('sphere.particleSize', '粒子大小'),
    particleOpacity: t('sphere.particleOpacity', '粒子透明度'),
    autoRotate: t('sphere.autoRotate', '自动旋转'),
  };

  // 滑块范围配置
  const sliderRange: Record<string, { min: number; max: number; step: number }> = {
    radius: { min: 0.3, max: 2.5, step: 0.05 },
    opacity: { min: 0.05, max: 1, step: 0.05 },
    metalness: { min: 0, max: 1, step: 0.05 },
    roughness: { min: 0, max: 1, step: 0.05 },
    emissiveIntensity: { min: 0, max: 1.5, step: 0.05 },
    clearcoat: { min: 0, max: 1, step: 0.05 },
    latLines: { min: 0, max: 20, step: 1 },
    lonLines: { min: 0, max: 32, step: 1 },
    lineOpacity: { min: 0, max: 1, step: 0.05 },
    particleCount: { min: 0, max: 100, step: 5 },
    particleSize: { min: 0.01, max: 0.12, step: 0.005 },
    particleOpacity: { min: 0, max: 1, step: 0.05 },
  };

  return (
    <div className="w-[280px] h-full bg-slate-900/80 backdrop-blur-xl border-r border-white/10 overflow-y-auto shrink-0 flex flex-col">
      {/* 头部 */}
      <div className="p-4 border-b border-white/5">
        <h2 className="text-base font-semibold text-white flex items-center gap-2">
          <RotateCw className="w-4 h-4 text-indigo-400" />
          {t('sphere.panelTitle', '参数调节')}
        </h2>
      </div>

      {/* 操作按钮 */}
      <div className="px-4 py-3 flex gap-2 border-b border-white/5">
        <button
          onClick={handleConfirm}
          disabled={!hasUnsavedChanges}
          className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
            hasUnsavedChanges
              ? 'bg-indigo-500 text-white hover:bg-indigo-600 shadow-lg shadow-indigo-500/25'
              : 'bg-slate-700/50 text-slate-500 cursor-not-allowed'
          }`}
        >
          <Check className="w-3.5 h-3.5" />
          {t('sphere.confirm', '确认应用')}
        </button>
        <button
          onClick={handleReset}
          disabled={!hasUnsavedChanges}
          className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
            hasUnsavedChanges
              ? 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              : 'bg-slate-800/50 text-slate-600 cursor-not-allowed'
          }`}
          title={t('sphere.resetDraft', '撤销未保存更改')}
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={handleResetToDefault}
          className="px-3 py-2 rounded-lg text-sm font-medium bg-slate-700/50 text-slate-400 hover:bg-slate-700 hover:text-slate-300 transition-all"
          title={t('sphere.resetDefault', '恢复默认值')}
        >
          <RotateCw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 参数区域 */}
      <div className="flex-1 overflow-y-auto">
        {/* 颜色：只读，显示为领域色 */}
        <ParamGroup title={t('sphere.basic', '基础')} defaultOpen={true}>
          <div>
            <label className="text-xs text-slate-400 mb-1 block">{paramLabels.color}</label>
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-md border border-white/20 shadow-inner"
                style={{ backgroundColor: draftParams.color }}
              />
              <span className="text-xs text-slate-400 font-mono">{draftParams.color}</span>
              <span className="text-[10px] text-slate-500 bg-slate-800 px-1.5 py-0.5 rounded">
                {t('sphere.fieldColor', '领域色')}
              </span>
            </div>
          </div>
          {hasBasic && (
            <>
              {relevantKeys.includes('radius') && (
                <Slider
                  label={paramLabels.radius}
                  value={draftParams.radius}
                  {...sliderRange.radius}
                  onChange={(v) => updateDraft({ radius: v })}
                />
              )}
              {relevantKeys.includes('opacity') && (
                <Slider
                  label={paramLabels.opacity}
                  value={draftParams.opacity}
                  {...sliderRange.opacity}
                  onChange={(v) => updateDraft({ opacity: v })}
                />
              )}
            </>
          )}
        </ParamGroup>

        {/* 核心球体参数 */}
        {hasCore && (
          <ParamGroup title={t('sphere.core', '核心球体')}>
            {relevantKeys.includes('metalness') && (
              <Slider label={paramLabels.metalness} value={draftParams.metalness} {...sliderRange.metalness} onChange={(v) => updateDraft({ metalness: v })} />
            )}
            {relevantKeys.includes('roughness') && (
              <Slider label={paramLabels.roughness} value={draftParams.roughness} {...sliderRange.roughness} onChange={(v) => updateDraft({ roughness: v })} />
            )}
            {relevantKeys.includes('emissiveIntensity') && (
              <Slider label={paramLabels.emissiveIntensity} value={draftParams.emissiveIntensity} {...sliderRange.emissiveIntensity} onChange={(v) => updateDraft({ emissiveIntensity: v })} />
            )}
            {relevantKeys.includes('clearcoat') && (
              <Slider label={paramLabels.clearcoat} value={draftParams.clearcoat} {...sliderRange.clearcoat} onChange={(v) => updateDraft({ clearcoat: v })} />
            )}
          </ParamGroup>
        )}

        {/* 网格线参数 */}
        {hasGrid && (
          <ParamGroup title={t('sphere.gridLines', '网格线')}>
            {relevantKeys.includes('latLines') && (
              <Slider label={paramLabels.latLines} value={draftParams.latLines} {...sliderRange.latLines} onChange={(v) => updateDraft({ latLines: v })} />
            )}
            {relevantKeys.includes('lonLines') && (
              <Slider label={paramLabels.lonLines} value={draftParams.lonLines} {...sliderRange.lonLines} onChange={(v) => updateDraft({ lonLines: v })} />
            )}
            {relevantKeys.includes('lineOpacity') && (
              <Slider label={paramLabels.lineOpacity} value={draftParams.lineOpacity} {...sliderRange.lineOpacity} onChange={(v) => updateDraft({ lineOpacity: v })} />
            )}
          </ParamGroup>
        )}

        {/* 粒子参数 — 用开关控制是否启用 */}
        {hasParticle && (
          <ParamGroup title={t('sphere.particles', '粒子效果')}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-xs text-slate-300">{t('sphere.enableParticles', '启用粒子')}</span>
              </div>
              <button
                onClick={() => {
                  const next = !particlesEnabled;
                  setParticlesEnabled(next);
                  updateDraft({
                    particleCount: next ? 40 : 0,
                    particleSize: next ? 0.04 : 0.01,
                    particleOpacity: next ? 0.3 : 0,
                  });
                }}
                className={`w-10 h-5 rounded-full transition-colors relative ${particlesEnabled ? 'bg-amber-500' : 'bg-slate-600'}`}
              >
                <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${particlesEnabled ? 'left-5' : 'left-0.5'}`} />
              </button>
            </div>
            {particlesEnabled && (
              <>
                <Slider label={paramLabels.particleCount} value={draftParams.particleCount} {...sliderRange.particleCount} onChange={(v) => updateDraft({ particleCount: v })} />
                <Slider label={paramLabels.particleSize} value={draftParams.particleSize} {...sliderRange.particleSize} onChange={(v) => updateDraft({ particleSize: v })} />
                <Slider label={paramLabels.particleOpacity} value={draftParams.particleOpacity} {...sliderRange.particleOpacity} onChange={(v) => updateDraft({ particleOpacity: v })} />
              </>
            )}
          </ParamGroup>
        )}

        {/* 通用设置 */}
        {hasAutoRotate && (
          <ParamGroup title={t('sphere.general', '通用')}>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">{paramLabels.autoRotate}</span>
              <button
                onClick={() => updateDraft({ autoRotate: !draftParams.autoRotate })}
                className={`w-10 h-5 rounded-full transition-colors relative ${draftParams.autoRotate ? 'bg-indigo-500' : 'bg-slate-600'}`}
              >
                <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${draftParams.autoRotate ? 'left-5' : 'left-0.5'}`} />
              </button>
            </div>
          </ParamGroup>
        )}
      </div>

      {/* 底部状态栏 */}
      {hasUnsavedChanges && (
        <div className="px-4 py-2 bg-indigo-500/10 border-t border-indigo-500/20">
          <span className="text-[11px] text-indigo-300">
            {t('sphere.unsavedHint', '有未保存的更改')}
          </span>
        </div>
      )}
    </div>
  );
}
