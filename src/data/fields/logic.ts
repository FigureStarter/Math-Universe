import { FieldNode } from '@/types';

export const logicFields: FieldNode[] = [
  // ==================== 数理逻辑与基础 ====================
  {
    id: 'logic', slug: 'logic',
    names: { zh: '数理逻辑', en: 'Mathematical Logic' },
    descriptions: {
      zh: '用数学方法研究推理形式和证明结构的学科，是整个数学的基础。研究形式系统、可计算性、完备性等根本问题。',
      en: 'The study of formal reasoning and proof structure using mathematical methods, serving as the foundation of all mathematics.'
    },
    level: 1, parentId: null,
    childIds: ['proof-theory', 'model-theory', 'computability', 'set-theory'],
    position: [-18, 10, -15], size: 'large', color: '#94A3B8',
    tags: ['logic', 'foundations'],
    basics: {
      definition: { zh: '数理逻辑用符号语言表达数学命题，研究演绎推理的规则和结构。', en: 'Mathematical logic uses symbolic language to express propositions and studies rules and structures of deductive reasoning.' },
      scope: { zh: '包括证明论、模型论、递归论、集合论四大分支。', en: 'Includes proof theory, model theory, recursion theory, and set theory.' },
      importance: 5, difficulty: 4,
      history: [
        { year: -350, event: { zh: '亚里士多德创立形式逻辑', en: "Aristotle's formal logic" } },
        { year: 1879, event: { zh: '弗雷格《概念文字》— 现代逻辑诞生', en: "Frege's Begriffsschrift — birth of modern logic" } },
        { year: 1931, event: { zh: '哥德尔不完备性定理', en: "Gödel's incompleteness theorems" } },
        { year: 1936, event: { zh: '图灵机模型提出', en: 'Turing machine model proposed' } }
      ],
      tags: ['logic']
    },
    principles: [
      { id: 'p1', title: { zh: '排中律', en: 'Law of Excluded Middle' }, description: { zh: '命题要么为真，要么为假', en: 'A proposition is either true or false' }, importance: 3 },
      { id: 'p2', title: { zh: '一致性', en: 'Consistency' }, description: { zh: '形式系统中不能同时推出矛盾', en: 'No contradictions can be derived in a formal system' }, importance: 3 }
    ],
    formulas: [
      { id: 'godel', name: { zh: '哥德尔不完备性', en: "Gödel Incompleteness" }, latex: '\\vdash \\neg Prov(\\lceil G \\rceil) \\leftrightarrow G', description: { zh: '任何足够强的公理化系统都包含不可判定的真命题', en: 'Any sufficiently strong axiomatic system contains undecidable true statements' }, variables: [], applications: [{ zh: '数学基础', en: 'Foundations of math' }], difficulty: 5 }
    ],
    pioneers: [
      { id: 'frege', name: 'Gottlob Frege', nameZh: '戈特洛布·弗雷格', birthYear: 1848, deathYear: 1925, nationality: '德国', contributions: { zh: '现代逻辑学之父', en: 'Father of modern logic' } },
      { id: 'godel', name: 'Kurt Gödel', nameZh: '库尔特·哥德尔', birthYear: 1906, deathYear: 1978, nationality: '奥地利/美国', contributions: { zh: '不完备性定理', en: 'Incompleteness theorems' } },
      { id: 'turing', name: 'Alan Turing', nameZh: '艾伦·图灵', birthYear: 1912, deathYear: 1954, nationality: '英国', contributions: { zh: '图灵机与可计算理论', en: 'Turing machine and computability' } }
    ],
    figures: [], references: [],
    relatedFields: ['algebra', 'analysis', 'computer-science'], applications: ['cs', 'philosophy', 'ai'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 证明论
  {
    id: 'proof-theory', slug: 'proof-theory',
    names: { zh: '证明论', en: 'Proof Theory' },
    descriptions: { zh: '研究数学证明的形式结构和性质。', en: 'Studies the formal structure and properties of mathematical proofs.' },
    level: 2, parentId: 'logic', childIds: [],
    position: [-20, 13, -12], size: 'small', color: '#94A3B8',
    tags: ['logic', 'foundations'],
    basics: { definition: { zh: '证明论将证明本身作为数学对象进行研究。', en: 'Proof theory treats proofs themselves as mathematical objects.' }, scope: { zh: '自然演绎、序列演算、证明的归约。', en: 'Natural deduction, sequent calculus, proof normalization.' }, importance: 4, difficulty: 5, history: [
      { year: 1920, event: { zh: '希尔伯特计划', en: "Hilbert's program" } },
      { year: 1934, event: { zh: '根岑序列演算', en: 'Gentzen sequent calculus' } }
    ], tags: [] },
    principles: [], formulas: [], pioneers: [
      { id: 'hilbert', name: 'David Hilbert', nameZh: '大卫·希尔伯特', birthYear: 1862, deathYear: 1943, nationality: '德国', contributions: { zh: '希尔伯特计划', en: "Hilbert's program" } }
    ], figures: [], references: [],
    relatedFields: ['logic', 'model-theory'], applications: ['proof-assistant', 'cs'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 模型论
  {
    id: 'model-theory', slug: 'model-theory',
    names: { zh: '模型论', en: 'Model Theory' },
    descriptions: { zh: '研究形式语言的解释（模型）及其性质。', en: 'Studies interpretations (models) of formal languages and their properties.' },
    level: 2, parentId: 'logic', childIds: [],
    position: [-16, 14, -17], size: 'small', color: '#CBD5E1',
    tags: ['logic', 'foundations'],
    basics: { definition: { zh: '模型论研究哪些结构满足给定的形式语言中的句子。', en: 'Model theory studies which structures satisfy sentences in a given formal language.' }, scope: { zh: '一阶逻辑模型、紧致性定理、 Löwenheim-Skolem定理。', en: 'First-order models, compactness theorem, Löwenheim-Skolem theorems.' }, importance: 4, difficulty: 5, history: [
      { year: 1930, event: { zh: '哥德尔完全性定理', en: 'Gödel completeness theorem' } },
      { year: 1950, event: { zh: '塔斯基语义真理论', en: 'Tarski semantic truth theory' } }
    ], tags: [] },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['logic', 'algebra'], applications: ['algebraic-geometry', 'cs'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 可计算性/递归论
  {
    id: 'computability', slug: 'computability',
    names: { zh: '可计算性理论', en: 'Computability Theory / Recursion Theory' },
    descriptions: { zh: '研究计算的可行性和算法的本质极限。', en: 'Studies the feasibility of computation and fundamental limits of algorithms.' },
    level: 2, parentId: 'logic', childIds: [],
    position: [-15, 8, -11], size: 'small', color: '#64748B',
    tags: ['logic', 'foundations', 'cs'],
    basics: { definition: { zh: '可计算性理论研究哪些函数可以被有效计算。', en: 'Computability theory studies which functions can be effectively computed.' }, scope: { zh: '图灵机、λ演算、停机问题、不可判定性。', en: 'Turing machines, lambda calculus, halting problem, undecidability.' }, importance: 5, difficulty: 4, history: [
      { year: 1936, event: { zh: '图灵《论可计算数》', en: "Turing's On Computable Numbers" } },
      { year: 1936, event: { zh: '丘奇-图灵论题', en: 'Church-Turing thesis' } }
    ], tags: [] },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['logic', 'computer-science', 'discrete'], applications: ['cs', 'cryptography', 'ai'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 集合论
  {
    id: 'set-theory', slug: 'set-theory',
    names: { zh: '集合论', en: 'Set Theory' },
    descriptions: { zh: '以集合为基础构建全部数学的理论体系。', en: 'The foundational theory that builds all mathematics on sets.' },
    level: 2, parentId: 'logic', childIds: [],
    position: [-21, 6, -18], size: 'medium', color: '#94A3B8',
    tags: ['logic', 'foundations', 'set-theory'],
    basics: { definition: { zh: '集合论研究集合（对象的整体）及其成员关系。ZFC公理体系是现代数学的基础框架。', en: 'Set theory studies sets (collections of objects) and membership relations. ZFC is the standard axiomatic foundation.' }, scope: { zh: '朴素集合论、ZF(C)公理系统、序数与基数、选择公理、连续统假设。', en: 'Naive set theory, ZF(C) axioms, ordinals & cardinals, axiom of choice, continuum hypothesis.' }, importance: 5, difficulty: 5, history: [
      { year: 1874, event: { zh: '康托尔创立集合论', en: 'Cantor founds set theory' } },
      { year: 1900, event: { zh: '希尔伯特第一问题', en: 'Hilbert first problem' } },
      { year: 1963, event: { zh: '科恩证明CH独立性', en: 'Cohen proves CH independence' } }
    ], tags: [] },
    principles: [], formulas: [], pioneers: [
      { id: 'cantor', name: 'Georg Cantor', nameZh: '格奥尔格·康托尔', birthYear: 1845, deathYear: 1918, nationality: '德国/俄国', contributions: { zh: '集合论创始人，无穷理论', en: 'Founder of set theory, theory of infinity' } }
    ], figures: [], references: [],
    relatedFields: ['logic', 'topology', 'analysis'], applications: ['all-mathematics'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  }
];
