import { create } from 'zustand';
import { FieldNode, FilterMode, CATEGORY_TO_FILTER_GROUP } from '@/types';
import { fieldsData } from '@/data/fields';

/** 纯函数：根据 filterMode 过滤字段列表 */
export function getFilteredFields(fields: FieldNode[], filterMode: FilterMode): FieldNode[] {
  if (filterMode === 'all') return fields;
  const isGroupMode = filterMode.endsWith('-group');
  return fields.filter(f => {
    if (isGroupMode) {
      return f.tags.some(tag => CATEGORY_TO_FILTER_GROUP[tag] === filterMode);
    }
    return f.tags.includes(filterMode);
  });
}

interface FieldStore {
  // 状态
  fields: FieldNode[];
  selectedField: FieldNode | null;
  hoveredField: FieldNode | null;
  filterMode: FilterMode;
  searchQuery: string;
  language: 'zh' | 'en';
  isDetailOpen: boolean;
  isAutoRotating: boolean;
  cameraTarget: [number, number, number] | null;

  // 操作
  setSelectedField: (field: FieldNode | null) => void;
  setHoveredField: (field: FieldNode | null) => void;
  setFilterMode: (mode: FilterMode) => void;
  setSearchQuery: (query: string) => void;
  setLanguage: (lang: 'zh' | 'en') => void;
  setDetailOpen: (open: boolean) => void;
  setCameraTarget: (target: [number, number, number] | null) => void;
  setAutoRotating: (active: boolean) => void;

  // 计算属性
  searchFields: (query: string) => FieldNode[];
}

export const useFieldStore = create<FieldStore>((set, get) => ({
  // 初始状态
  fields: fieldsData,
  selectedField: null,
  hoveredField: null,
  filterMode: 'all',
  searchQuery: '',
  language: 'zh',
  isDetailOpen: false,
  isAutoRotating: true,
  cameraTarget: null,
  
  // 操作
  setSelectedField: (field) => set({ 
    selectedField: field,
    isDetailOpen: field !== null,
    isAutoRotating: field === null,
  }),
  
  setHoveredField: (field) => set({ hoveredField: field }),
  
  setFilterMode: (mode) => set({ filterMode: mode }),
  
  setSearchQuery: (query) => set({ searchQuery: query }),
  
  setLanguage: (lang) => set({ language: lang }),
  
  setDetailOpen: (open) => set({ 
    isDetailOpen: open,
    selectedField: open ? get().selectedField : null,
    isAutoRotating: !open,
    cameraTarget: open ? get().cameraTarget : null,
  }),
  
  setCameraTarget: (target) => set({ cameraTarget: target }),
  
  setAutoRotating: (active) => set({ isAutoRotating: active }),
  
  // 计算属性
  searchFields: (query) => {
    const { fields, language } = get();
    if (!query.trim()) return fields;
    const lowerQuery = query.toLowerCase();
    return fields.filter(f => {
      const name = f.names[language].toLowerCase();
      const desc = f.descriptions[language].toLowerCase();
      return name.includes(lowerQuery) || desc.includes(lowerQuery);
    });
  },
}));
