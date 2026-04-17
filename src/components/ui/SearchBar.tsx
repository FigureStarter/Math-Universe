import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useDragControls } from 'framer-motion';
import { Search, X, GripVertical } from 'lucide-react';
import { useFieldStore } from '@/stores/fieldStore';
import { useTranslation } from 'react-i18next';
import { FieldNode } from '@/types';

const STORAGE_KEY = 'math-universe-search-pos';

interface Position {
  x: number;
  y: number;
}

export default function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState<Position>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch { /* ignore */ }
    return { x: window.innerWidth / 2 - 200, y: 80 };
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hideTimerRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const isDraggingRef = useRef(false);

  const { fields, setSelectedField, setCameraTarget, setDetailOpen } = useFieldStore();
  const { t, i18n } = useTranslation();
  const isZh = i18n.language === 'zh';

  // 过滤搜索结果
  const filteredFields = searchTerm.trim()
    ? fields.filter((field) => {
        const name = isZh ? field.names.zh : field.names.en;
        const desc = isZh ? field.descriptions.zh : field.descriptions.en;
        const term = searchTerm.toLowerCase();
        return (
          name.toLowerCase().includes(term) ||
          desc.toLowerCase().includes(term) ||
          field.tags.some(tag => tag.toLowerCase().includes(term))
        );
      }).slice(0, 8)
    : [];

  const handleSelect = (field: FieldNode) => {
    setSelectedField(field);
    setCameraTarget(field.position);
    setDetailOpen(true);
    setSearchTerm('');
    setIsExpanded(false);
    setIsFocused(false);
    startHideTimer();
  };

  // 自动隐藏定时器
  const startHideTimer = useCallback(() => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
    }
    if (!isFocused && !isDraggingRef.current) {
      hideTimerRef.current = setTimeout(() => {
        setIsExpanded(false);
      }, 8000);
    }
  }, [isFocused]);

  const cancelHideTimer = () => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
    }
  };

  // 鼠标进入触发区域 → 展开
  const handleTriggerMouseEnter = () => {
    cancelHideTimer();
    setIsExpanded(true);
    setTimeout(() => inputRef.current?.focus(), 200);
  };

  // 容器鼠标离开 → 启动隐藏计时
  const handleContainerMouseLeave = () => {
    if (!isFocused && !isDraggingRef.current) {
      startHideTimer();
    }
  };

  // 聚焦/失焦处理
  const handleFocus = () => {
    cancelHideTimer();
    setIsFocused(true);
    setIsExpanded(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    startHideTimer();
  };

  // 拖拽处理
  const handleDragStart = () => {
    isDraggingRef.current = true;
    cancelHideTimer();
  };

  const handleDragEnd = (_event: MouseEvent | PointerEvent | TouchEvent, info: { point: { x: number; y: number } }) => {
    isDraggingRef.current = false;

    // 限制在视口内
    const newX = Math.max(0, Math.min(info.point.x - 220, window.innerWidth - 440));
    const newY = Math.max(0, Math.min(info.point.y - 24, window.innerHeight - 60));

    const newPos = { x: newX, y: newY };
    setPosition(newPos);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(newPos)); } catch { /* ignore */ }

    startHideTimer();
  };

  // 快捷键
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsExpanded(false);
        setIsFocused(false);
        setSearchTerm('');
        inputRef.current?.blur();
      }
      if (e.key === '/' && !isFocused && document.activeElement?.tagName !== 'INPUT') {
        e.preventDefault();
        cancelHideTimer();
        setIsExpanded(true);
        setTimeout(() => inputRef.current?.focus(), 100);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFocused]);

  // 组件卸载时清理
  useEffect(() => () => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
    }
  }, []);

  return (
    <div style={{ position: 'fixed', left: position.x, top: position.y, zIndex: 50 }}>
      {/* 收起态：搜索图标按钮 */}
      <AnimatePresence mode="wait">
        {!isExpanded ? (
          <motion.button
            key="trigger"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={handleTriggerMouseEnter}
            className="relative group"
          >
            <div className="w-11 h-11 rounded-full bg-[#0d1117]/90 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg shadow-indigo-500/5 hover:border-indigo-500/40 hover:shadow-indigo-500/20 transition-all duration-300">
              <Search className="w-5 h-5 text-gray-400 group-hover:text-indigo-400 transition-colors" />
              {/* 微弱脉冲环 */}
              <div className="absolute inset-0 rounded-full border border-indigo-500/20 animate-ping opacity-30" />
            </div>
          </motion.button>
        ) : (
          <motion.div
            key="expanded"
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.92, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: -8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onMouseLeave={handleContainerMouseLeave}
            className="flex items-start gap-1"
          >
            {/* 拖拽手柄 */}
            <motion.div
              className="mt-3 mr-1 cursor-grab active:cursor-grabbing select-none"
              onPointerDown={handleDragStart}
            >
              <GripVertical className="w-4 h-4 text-gray-600 hover:text-gray-400 transition-colors" />
            </motion.div>

            {/* 主搜索面板（可被拖拽） */}
            <motion.div
              drag
              dragConstraints={{ left: -window.innerWidth + 460, right: 0, top: 0, bottom: window.innerHeight - 80 }}
              dragElastic={0.05}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              whileDrag={{ scale: 1.02 }}
              className="relative"
            >
              {/* 搜索框主体 */}
              <div className="w-[420px] glass rounded-xl border border-white/10 shadow-2xl shadow-black/40 overflow-hidden">
                {/* 输入行 */}
                <div className="flex items-center px-4 py-3 gap-3">
                  <Search className="w-5 h-5 text-indigo-400 flex-shrink-0" />

                  <input
                    ref={inputRef}
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder={isZh ? '搜索数学领域... (/)' : 'Search fields... (/)'}
                    className="flex-1 bg-transparent text-white text-sm placeholder-gray-500 outline-none"
                  />

                  {searchTerm && (
                    <button onClick={() => setSearchTerm('')} className="p-0.5 rounded hover:bg-white/10">
                      <X className="w-4 h-4 text-gray-400" />
                    </button>
                  )}
                </div>

                {/* 结果列表 */}
                <AnimatePresence>
                  {searchTerm && filteredFields.length > 0 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-white/5 max-h-[320px] overflow-y-auto"
                    >
                      {filteredFields.map((field, index) => (
                        <motion.button
                          key={field.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.03 }}
                          onClick={() => handleSelect(field)}
                          className="w-full px-4 py-2.5 flex items-center gap-3 hover:bg-white/5 transition-colors text-left"
                        >
                          <div
                            className="w-2.5 h-2.5 rounded-full flex-shrink-0 shadow-sm"
                            style={{
                              backgroundColor: field.color,
                              boxShadow: `0 0 6px ${field.color}60`
                            }}
                          />
                          <div className="flex-1 min-w-0">
                            <div className="text-white text-sm font-medium truncate">
                              {isZh ? field.names.zh : field.names.en}
                            </div>
                            <div className="text-gray-500 text-xs truncate mt-0.5">
                              {isZh ? field.descriptions.zh : field.descriptions.en}
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}

                  {searchTerm && filteredFields.length === 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="border-t border-white/5 px-4 py-4 text-center"
                    >
                      <p className="text-gray-500 text-sm">{isZh ? '未找到相关领域' : 'No matching fields'}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
