import { motion, AnimatePresence } from 'framer-motion';
import { useFieldStore } from '@/stores/fieldStore';
import { useTranslation } from 'react-i18next';

export default function Tooltip() {
  const { t } = useTranslation();
  const { hoveredField, language } = useFieldStore();
  
  return (
    <AnimatePresence>
      {hoveredField && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 pointer-events-none"
        >
          <div className="glass px-6 py-4 rounded-xl max-w-md">
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: hoveredField.color }}
              />
              <h3 className="text-lg font-bold text-white">
                {hoveredField.names[language]}
              </h3>
            </div>
            <p className="text-gray-300 text-sm line-clamp-2">
              {hoveredField.descriptions[language]}
            </p>
            <div className="flex gap-2 mt-3">
              <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300">
                {t('detail.importance')}: {'★'.repeat(hoveredField.basics.importance)}
              </span>
              <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300">
                {t('detail.difficulty')}: {'★'.repeat(hoveredField.basics.difficulty)}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
