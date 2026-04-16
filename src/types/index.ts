// 多语言文本
export interface LocalText {
  zh: string;
  en: string;
  [key: string]: string;
}

// 历史事件
export interface HistoryEvent {
  year: number;
  event: LocalText;
  figure?: string;
}

// 变量说明
export interface Variable {
  symbol: string;
  description: LocalText;
}

// 公式
export interface Formula {
  id: string;
  name: LocalText;
  latex: string;
  description: LocalText;
  variables: Variable[];
  applications: LocalText[];
  difficulty: 1 | 2 | 3 | 4 | 5;
}

// 先驱人物
export interface Pioneer {
  id: string;
  name: string;
  nameZh: string;
  birthYear: number;
  deathYear?: number;
  nationality: string;
  contributions: LocalText;
  portrait?: string;
  quotes?: LocalText;
}

// 图示
export interface Figure {
  id: string;
  title: LocalText;
  description: LocalText;
  imageUrl: string;
  animationUrl?: string;
}

// 参考资料
export interface Reference {
  id: string;
  title: string;
  author?: string;
  year?: number;
  type: 'book' | 'article' | 'website' | 'video';
  url: string;
}

// 基本信息
export interface FieldBasics {
  definition: LocalText;
  scope: LocalText;
  importance: 1 | 2 | 3 | 4 | 5;
  difficulty: 1 | 2 | 3 | 4 | 5;
  history: HistoryEvent[];
  tags: string[];
}

// 基本原理
export interface Principle {
  id: string;
  title: LocalText;
  description: LocalText;
  importance: 1 | 2 | 3;
}

// 领域节点
export interface FieldNode {
  id: string;
  slug: string;

  // 多语言
  names: LocalText;
  descriptions: LocalText;

  // 层级结构
  level: 1 | 2 | 3;
  parentId: string | null;
  childIds: string[];

  // 3D 位置与属性
  position: [number, number, number];
  size: 'tiny' | 'small' | 'medium' | 'large' | 'huge';
  color: string;

  // 标签
  tags: string[];

  // 内容
  basics: FieldBasics;
  principles: Principle[];
  formulas: Formula[];
  pioneers: Pioneer[];
  figures: Figure[];
  references: Reference[];

  // 关系
  relatedFields: string[];
  applications: string[];

  // 元数据
  createdAt: string;
  updatedAt: string;
}

// 扩展后的学科分类（33个大类分组）
export type FieldCategory =
  // 基础与逻辑
  | 'logic'
  | 'foundations'
  | 'set-theory'
  // 代数学群
  | 'algebra'
  | 'linear-algebra'
  | 'abstract-algebra'
  | 'group-theory'
  | 'ring-field'
  // 几何学群
  | 'geometry'
  | 'euclidean'
  | 'non-euclidean'
  | 'differential-geometry'
  | 'algebraic-geometry'
  | 'topology-geometry'
  // 分析学群
  | 'analysis'
  | 'real-analysis'
  | 'complex-analysis'
  | 'functional-analysis'
  | 'measure-theory'
  | 'differential-equations'
  | 'harmonic-analysis'
  // 拓扑学群
  | 'topology'
  | 'algebraic-topology'
  | 'differential-topology'
  // 数论
  | 'numbertheory'
  // 概率统计
  | 'probability'
  | 'statistics'
  // 离散数学
  | 'discrete'
  | 'combinatorics'
  | 'graph-theory'
  // 应用数学
  | 'applied'
  | 'numerical'
  | 'optimization'
  | 'operations-research'
  // 数学物理
  | 'mathphysics'
  // 计算科学
  | 'computer-science'
  | 'cryptography'
  // 交叉学科
  | 'interdisciplinary'
  | 'mathematical-biology'
  | 'mathematical-finance';

// 学科色彩映射（扩展至33个分类）
export const FIELD_COLORS: Record<string, string> = {
  // 基础与逻辑 — 银灰/冷蓝
  logic: '#94A3B8',
  foundations: '#CBD5E1',
  'set-theory': '#64748B',

  // 代数学群 — 紫/紫罗兰系
  algebra: '#8b5cf6',
  'linear-algebra': '#a78bfa',
  'abstract-algebra': '#7c3aed',
  'group-theory': '#6d28d9',
  'ring-field': '#5b21b6',

  // 几何学群 — 青/蓝绿系
  geometry: '#06b6d4',
  euclidean: '#22d3ee',
  'non-euclidean': '#0891b2',
  'differential-geometry': '#0e7490',
  'algebraic-geometry': '#155e75',
  'topology-geometry': '#164e63',

  // 分析学群 — 橙/琥珀系
  analysis: '#f59e0b',
  'real-analysis': '#fbbf24',
  'complex-analysis': '#f59e0b',
  'functional-analysis': '#d97706',
  'measure-theory': '#b45309',
  'differential-equations': '#92400e',
  'harmonic-analysis': '#78350f',

  // 拓扑学群 — 粉/玫瑰系
  topology: '#ec4899',
  'algebraic-topology': '#db2777',
  'differential-topology': '#be185d',

  // 数论 — 浅紫
  numbertheory: '#a855f7',

  // 概率统计 — 绿/翠绿
  probability: '#22c55e',
  statistics: '#16a34a',

  // 离散数学 — 蓝系
  discrete: '#3b82f6',
  combinatorics: '#2563eb',
  'graph-theory': '#1d4ed8',

  // 应用数学 — 青绿/蓝绿
  applied: '#14b8a6',
  numerical: '#0d9488',
  optimization: '#0f766e',
  'operations-research': '#115e59',

  // 数学物理 — 红/玫红
  mathphysics: '#f43f5e',

  // 计算科学 — 靛蓝
  'computer-science': '#6366f1',
  cryptography: '#4f46e5',

  // 交叉学科 — 特殊色
  interdisciplinary: '#84cc16',
  'mathematical-biology': '#22c55e',
  'mathematical-finance': '#eab308',
};

// 尺寸映射
export const SIZE_MAP: Record<string, number> = {
  tiny: 0.35,
  small: 0.5,
  medium: 0.75,
  large: 1.1,
  huge: 1.6,
};

// 筛选模式（主要大类）
export type FilterMode = 'all' | 'logic-group' | 'algebra-group' | 'geometry-group' | 'analysis-group' | 'topology-group' | 'numbertheory' | 'probability-group' | 'discrete-group' | 'applied-group' | 'mathphysics-group' | 'interdisciplinary-group';

// 筛选项显示名称
export const FILTER_LABELS: { [key in Exclude<FilterMode, 'all'>]: { zh: string; en: string } } = {
  'logic-group': { zh: '逻辑基础', en: 'Logic & Foundations' },
  'algebra-group': { zh: '代数学', en: 'Algebra' },
  'geometry-group': { zh: '几何学', en: 'Geometry' },
  'analysis-group': { zh: '分析学', en: 'Analysis' },
  'topology-group': { zh: '拓扑学', en: 'Topology' },
  'numbertheory': { zh: '数论', en: 'Number Theory' },
  'probability-group': { zh: '概率统计', en: 'Probability & Stats' },
  'discrete-group': { zh: '离散数学', en: 'Discrete Math' },
  'applied-group': { zh: '应用数学', en: 'Applied Math' },
  'mathphysics-group': { zh: '数学物理', en: 'Math Physics' },
  'interdisciplinary-group': { zh: '交叉学科', en: 'Interdisciplinary' },
};

// 分类到筛选组的映射
export const CATEGORY_TO_FILTER_GROUP: Record<string, FilterMode> = {
  logic: 'logic-group',
  foundations: 'logic-group',
  'set-theory': 'logic-group',
  algebra: 'algebra-group',
  'linear-algebra': 'algebra-group',
  'abstract-algebra': 'algebra-group',
  'group-theory': 'algebra-group',
  'ring-field': 'algebra-group',
  geometry: 'geometry-group',
  euclidean: 'geometry-group',
  'non-euclidean': 'geometry-group',
  'differential-geometry': 'geometry-group',
  'algebraic-geometry': 'geometry-group',
  'topology-geometry': 'geometry-group',
  analysis: 'analysis-group',
  'real-analysis': 'analysis-group',
  'complex-analysis': 'analysis-group',
  'functional-analysis': 'analysis-group',
  'measure-theory': 'analysis-group',
  'differential-equations': 'analysis-group',
  'harmonic-analysis': 'analysis-group',
  topology: 'topology-group',
  'algebraic-topology': 'topology-group',
  'differential-topology': 'topology-group',
  numbertheory: 'numbertheory',
  probability: 'probability-group',
  statistics: 'probability-group',
  discrete: 'discrete-group',
  combinatorics: 'discrete-group',
  'graph-theory': 'discrete-group',
  applied: 'applied-group',
  numerical: 'applied-group',
  optimization: 'applied-group',
  'operations-research': 'applied-group',
  mathphysics: 'mathphysics-group',
  'computer-science': 'interdisciplinary-group',
  cryptography: 'interdisciplinary-group',
  interdisciplinary: 'interdisciplinary-group',
  'mathematical-biology': 'interdisciplinary-group',
  'mathematical-finance': 'interdisciplinary-group',
};
