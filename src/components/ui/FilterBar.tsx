import { motion } from 'framer-motion';
import { useFieldStore } from '@/stores/fieldStore';
import { useTranslation } from 'react-i18next';
import { FILTER_LABELS } from '@/types';

const categories = [
  { id: 'all', color: '#6366f1' },
  { id: 'logic-group', color: '#94A3B8' },
  { id: 'algebra-group', color: '#8b5cf6' },
  { id: 'geometry-group', color: '#06b6d4' },
  { id: 'analysis-group', color: '#f59e0b' },
  { id: 'topology-group', color: '#ec4899' },
  { id: 'numbertheory', color: '#a855f7' },
  { id: 'probability-group', color: '#22c55e' },
  { id: 'discrete-group', color: '#3b82f6' },
  { id: 'applied-group', color: '#14b8a6' },
  { id: 'mathphysics-group', color: '#f43f5e' },
  { id: 'interdisciplinary-group', color: '#84cc16' },
];

export default function FilterBar() {
  const { filterMode, setFilterMode } = useFieldStore();
  const { i18n } = useTranslation();

  const isZh = i18n.language === 'zh';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="glass rounded-2xl px-3 py-2 flex items-center gap-1 overflow-x-auto max-w-[92vw]"
    >
      {categories.map((cat) => {
        const isActive = filterMode === cat.id;
        const labelObj = cat.id !== 'all' ? (FILTER_LABELS as Record<string, any>)[cat.id] : null;
        const displayLabel = cat.id === 'all'
          ? (isZh ? '全部' : 'All')
          : (isZh ? labelObj?.zh : labelObj?.en) || cat.id;

        return (
          <motion.button
            key={cat.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilterMode(cat.id as any)}
            className={`
              relative px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap
              transition-all duration-300 flex items-center gap-1.5
              ${isActive
                ? 'text-white'
                : 'text-gray-400 hover:text-white'
              }
            `}
          >
            {isActive && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 rounded-full"
                style={{
                  backgroundColor: cat.color,
                  opacity: 0.2
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}

            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: cat.color,
                boxShadow: isActive ? `0 0 8px ${cat.color}` : 'none'
              }}
            />

            <span className="relative z-10">{displayLabel}</span>
          </motion.button>
        );
      })}
    </motion.div>
  );
}
