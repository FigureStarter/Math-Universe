import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, Copy, ExternalLink, BookOpen, Lightbulb } from 'lucide-react';
import { useFieldStore } from '@/stores/fieldStore';
import { useTranslation } from 'react-i18next';
import { FieldNode } from '@/types';
import { KaTeX } from '@/components/ui/KaTeX';

type TabKey = 'basics' | 'formulas' | 'pioneers' | 'history' | 'references';

const tabs: TabKey[] = ['basics', 'formulas', 'pioneers', 'history', 'references'];

export default function DetailPanel() {
  const { t, i18n } = useTranslation();
  const { selectedField, isDetailOpen, setDetailOpen, setSelectedField } = useFieldStore();
  const [activeTab, setActiveTab] = useState<TabKey>('basics');
  const language = i18n.language;
  
  if (!isDetailOpen || !selectedField) return null;
  
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '100%', opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="absolute top-0 right-0 bottom-0 w-full md:w-[500px] z-30 bg-gradient-to-l from-[#0a0a1a] via-[#0d1117] to-[#0d1117]/95"
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => {
                  setDetailOpen(false);
                  setSelectedField(null);
                }}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={() => {
                  setDetailOpen(false);
                  setSelectedField(null);
                }}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
            
            {/* Title */}
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
                style={{ 
                  backgroundColor: `${selectedField.color}20`,
                  boxShadow: `0 0 30px ${selectedField.color}40`
                }}
              >
                <span style={{ color: selectedField.color }}>
                  {selectedField.names.zh[0]}
                </span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white font-['Space_Grotesk']">
                  {selectedField.names[language]}
                </h2>
                <p className="text-gray-400 text-sm">{selectedField.names[language === 'zh' ? 'en' : 'zh']}</p>
              </div>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="flex border-b border-white/10 px-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  px-4 py-3 text-sm font-medium transition-colors relative
                  ${activeTab === tab ? 'text-white' : 'text-gray-400 hover:text-white'}
                `}
              >
                {t(`detail.${tab}`)}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r"
                    style={{ backgroundImage: `linear-gradient(to right, ${selectedField.color}, #6366f1)` }}
                  />
                )}
              </button>
            ))}
          </div>
          
          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {activeTab === 'basics' && <BasicsTab field={selectedField} />}
                {activeTab === 'formulas' && <FormulasTab field={selectedField} />}
                {activeTab === 'pioneers' && <PioneersTab field={selectedField} />}
                {activeTab === 'history' && <HistoryTab field={selectedField} />}
                {activeTab === 'references' && <ReferencesTab field={selectedField} />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function BasicsTab({ field }: { field: FieldNode }) {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  
  return (
    <div className="space-y-6">
      {/* Definition */}
      <section>
        <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
          <Lightbulb className="w-4 h-4" style={{ color: field.color }} />
          {t('detail.definition')}
        </h3>
        <p className="text-gray-300 leading-relaxed">
          {field.basics.definition[language]}
        </p>
      </section>
      
      {/* Scope */}
      <section>
        <h3 className="text-lg font-semibold text-white mb-2">
          {t('detail.scope')}
        </h3>
        <p className="text-gray-300 leading-relaxed">
          {field.basics.scope[language]}
        </p>
      </section>
      
      {/* Tags */}
      <section>
        <h3 className="text-lg font-semibold text-white mb-2">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {field.basics.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-sm"
              style={{ 
                backgroundColor: `${field.color}20`,
                color: field.color,
                border: `1px solid ${field.color}40`
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </section>
      
      {/* Related Fields */}
      {field.relatedFields.length > 0 && (
        <section>
          <h3 className="text-lg font-semibold text-white mb-2">
            {t('detail.relatedFields')}
          </h3>
          <div className="flex flex-wrap gap-2">
            {field.relatedFields.map((id) => (
              <span
                key={id}
                className="px-3 py-1 rounded-full text-sm bg-white/10 text-gray-300"
              >
                {id}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function FormulasTab({ field }: { field: FieldNode }) {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  
  const handleCopy = (latex: string) => {
    navigator.clipboard.writeText(latex);
  };
  
  return (
    <div className="space-y-6">
      {field.formulas.map((formula) => (
        <div
          key={formula.id}
          className="glass-light rounded-xl p-4 min-w-0 overflow-x-auto"
        >
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-white font-medium">{formula.name[language]}</h4>
            <button
              onClick={() => handleCopy(formula.latex)}
              className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
              title={t('detail.copyFormula')}
            >
              <Copy className="w-4 h-4 text-gray-400" />
            </button>
          </div>
          
          <KaTeX latex={formula.latex} />
          
          <p className="text-gray-400 text-sm mt-3">
            {formula.description[language]}
          </p>
          
          {/* Variables */}
          <div className="mt-4">
            <h5 className="text-sm font-medium text-gray-300 mb-2">
              {t('detail.variables')}
            </h5>
            <div className="space-y-1">
              {formula.variables.map((v, varIndex) => (
                <div key={varIndex} className="flex gap-2 text-sm">
                  <code className="text-indigo-400 font-mono">{v.symbol}</code>
                  <span className="text-gray-400">— {v.description[language]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div className="mt-4">
            <h5 className="text-sm font-medium text-gray-300 mb-2">
              {t('detail.applications_of_formula')}
            </h5>
            <div className="flex flex-wrap gap-2">
              {formula.applications.map((app, appIndex) => (
                <span key={appIndex} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400">
                  {app[language]}
                </span>
              ))}
            </div>
          </div>
          
          {/* Difficulty */}
          <div className="mt-4 flex items-center gap-2">
            <span className="text-sm text-gray-400">{t('detail.difficulty')}:</span>
            <span className="text-indigo-400">{'★'.repeat(formula.difficulty)}</span>
          </div>
        </div>
      ))}
      
      {field.formulas.length === 0 && (
        <p className="text-gray-400 text-center py-8">
          No formulas available yet.
        </p>
      )}
    </div>
  );
}

function PioneersTab({ field }: { field: FieldNode }) {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  
  return (
    <div className="space-y-4">
      {field.pioneers.map((pioneer) => (
        <div
          key={pioneer.id}
          className="glass-light rounded-xl p-4 flex gap-4"
        >
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0"
            style={{ 
              backgroundColor: `${field.color}20`,
              color: field.color
            }}
          >
            {pioneer.nameZh[0]}
          </div>
          <div className="flex-1">
            <h4 className="text-white font-medium">
              {language === 'zh' ? pioneer.nameZh : pioneer.name}
            </h4>
            <p className="text-gray-400 text-sm">
              {pioneer.birthYear} - {pioneer.deathYear || 'present'} · {pioneer.nationality}
            </p>
            <p className="text-gray-300 text-sm mt-2">
              {pioneer.contributions[language]}
            </p>
            {pioneer.quotes && (
              <blockquote className="mt-2 text-sm italic text-gray-400 border-l-2 border-indigo-500 pl-3">
                "{pioneer.quotes[language]}"
              </blockquote>
            )}
          </div>
        </div>
      ))}
      
      {field.pioneers.length === 0 && (
        <p className="text-gray-400 text-center py-8">
          No pioneers available yet.
        </p>
      )}
    </div>
  );
}

function HistoryTab({ field }: { field: FieldNode }) {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  return (
    <div className="space-y-4">
      {field.basics.history
        .sort((a, b) => a.year - b.year)
        .map((event, eventIndex) => (
          <div key={eventIndex} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: field.color }}
              />
              {eventIndex < field.basics.history.length - 1 && (
                <div className="w-0.5 flex-1 bg-white/10 my-1" />
              )}
            </div>
            <div className="pb-6">
              <span className="text-indigo-400 font-mono text-sm">
                {event.year < 0 ? `${Math.abs(event.year)} BCE` : event.year}
              </span>
              <p className="text-white mt-1">{event.event[language]}</p>
              {event.figure && (
                <span className="text-gray-400 text-sm">— {event.figure}</span>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}

function ReferencesTab({ field }: { field: FieldNode }) {
  const { t } = useTranslation();
  
  const typeIcons: Record<string, typeof BookOpen> = {
    book: BookOpen,
    article: BookOpen,
    website: ExternalLink,
    video: BookOpen,
  };
  
  return (
    <div className="space-y-4">
      {field.references.map((ref) => {
        const Icon = typeIcons[ref.type] || BookOpen;
        return (
          <a
            key={ref.id}
            href={ref.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-light rounded-xl p-4 flex gap-4 hover:bg-white/5 transition-colors block"
          >
            <Icon className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h4 className="text-white font-medium">{ref.title}</h4>
              <p className="text-gray-400 text-sm mt-1">
                {ref.author && `${ref.author}`}
                {ref.year && ` (${ref.year})`}
              </p>
              <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded bg-white/10 text-gray-400">
                {ref.type}
              </span>
            </div>
          </a>
        );
      })}
      
      {field.references.length === 0 && (
        <p className="text-gray-400 text-center py-8">
          No references available yet.
        </p>
      )}
    </div>
  );
}
