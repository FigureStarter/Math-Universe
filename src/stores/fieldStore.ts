import { create } from 'zustand';
import { FieldNode, FilterMode, CATEGORY_TO_FILTER_GROUP } from '@/types';
import { fieldsData } from '@/data/fields';

interface FieldStore {
  // 状态
  fields: FieldNode[];
  selectedField: FieldNode | null;
  hoveredField: FieldNode | null;
  filterMode: FilterMode;
  searchQuery: string;
  language: 'zh' | 'en';
  isDetailOpen: boolean;
  cameraTarget: [number, number, number] | null;
  
  // 操作
  setSelectedField: (field: FieldNode | null) => void;
  setHoveredField: (field: FieldNode | null) => void;
  setFilterMode: (mode: FilterMode) => void;
  setSearchQuery: (query: string) => void;
  setLanguage: (lang: 'zh' | 'en') => void;
  setDetailOpen: (open: boolean) => void;
  setCameraTarget: (target: [number, number, number] | null) => void;
  
  // 计算属性
  filteredFields: () => FieldNode[];
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
  cameraTarget: null,
  
  // 操作
  setSelectedField: (field) => set({ 
    selectedField: field,
    isDetailOpen: field !== null 
  }),
  
  setHoveredField: (field) => set({ hoveredField: field }),
  
  setFilterMode: (mode) => set({ filterMode: mode }),
  
  setSearchQuery: (query) => set({ searchQuery: query }),
  
  setLanguage: (lang) => set({ language: lang }),
  
  setDetailOpen: (open) => set({ 
    isDetailOpen: open,
    selectedField: open ? get().selectedField : null
  }),
  
  setCameraTarget: (target) => set({ cameraTarget: target }),
  
  // 计算属性
  filteredFields: () => {
    const { fields, filterMode } = get();
    if (filterMode === 'all') return fields;

    // 检查是否是分组模式（以 -group 结尾）
    const isGroupMode = filterMode.endsWith('-group');

    return fields.filter(f => {
      if (isGroupMode) {
        // 分组模式：匹配该组下的任何标签
        return f.tags.some(tag => CATEGORY_TO_FILTER_GROUP[tag] === filterMode);
      }
      // 精确标签模式（向后兼容）
      return f.tags.includes(filterMode);
    });
  },
  
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
