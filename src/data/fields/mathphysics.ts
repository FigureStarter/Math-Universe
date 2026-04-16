import { FieldNode } from '@/types';

export const mathphysicsFields: FieldNode[] = [
  // ==================== 数学物理 ====================
  {
    id: 'mathphysics', slug: 'math-physics',
    names: { zh: '数学物理', en: 'Mathematical Physics' },
    descriptions: { zh: '物理学与数学的交叉领域，用严格数学方法研究物理问题。', en: 'Intersection of physics and mathematics, studying physical problems with rigorous mathematical methods.' },
    level: 1, parentId: null,
    childIds: ['classical-mechanics-math', 'quantum-math', 'relativity-math', 'statistical-physics-math', 'string-theory-math', 'field-theory-math', 'fluid-mechanics-math'],
    position: [6, 10, 18], size: 'large', color: '#f43f5e',
    tags: ['mathphysics'],
    basics: {
      definition: { zh: '数学物理研究物理现象背后的数学结构和规律，是理论物理学的核心工具。', en: 'Mathematical physics studies the mathematical structures and laws behind physical phenomena, core tool of theoretical physics.' },
      scope: { zh: '经典力学数学表述、量子力学公理化、相对论数学基础、统计力学、量子场论、弦理论数学框架。', en: 'Math formulations of classical mechanics, QM axiomatization, relativity foundations, statistical mechanics, QFT, string theory framework.' },
      importance: 5, difficulty: 5,
      history: [
        { year: 1687, event: { zh: '牛顿《自然哲学的数学原理》', en: "Newton's Principia Mathematica" } },
        { year: 1905, event: { zh: '狭义相对论', en: 'Special relativity' } },
        { year: 1915, event: { zh: '广义相对论场方程', en: 'Einstein field equations' } },
        { year: 1925, event: { zh: '量子力学矩阵力学/波动力学', en: 'Matrix/wave mechanics of QM' } }
      ],
      tags: ['mathphysics']
    },
    principles: [
      { id: 'p1', title: { zh: '诺特定理', en: "Noether's Theorem" }, description: { zh: '每个连续对称性对应一个守恒量', en: 'Each continuous symmetry corresponds to a conserved quantity' }, importance: 3 },
      { id: 'p2', title: { zh: '最小作用量原理', en: 'Principle of Least Action' }, description: { zh: '物理系统的真实路径使作用量取极值', en: 'The true path of a physical system extremizes the action' }, importance: 3 }
    ],
    formulas: [
      { id: 'schrodinger', name: { zh: '薛定谔方程', en: "Schrodinger Equation" }, latex: 'i\\hbar\\frac{\\partial}{\\partial t}\\Psi = \\hat{H}\\Psi', description: { zh: '非相对论量子力学的核心方程', en: 'Core equation of non-relativistic QM' }, variables: [], applications: [{ zh: '原子物理学', en: 'Atomic physics' }], difficulty: 5 },
      { id: 'einstein-eq', name: { zh: '爱因斯坦场方程', en: 'Einstein Field Equation' }, latex: 'G_{\\mu\\nu} + \\Lambda g_{\\mu\\nu} = \\frac{8\\pi G}{c^4}T_{\\mu\\nu}', description: { zh: '广义相对论的核心方程', en: 'Core equation of general relativity' }, variables: [], applications: [{ zh: '宇宙学/黑洞', en: 'Cosmology/black holes' }], difficulty: 5 }
    ],
    pioneers: [
      { id: 'newton-mp', name: 'Isaac Newton', nameZh: '牛顿', birthYear: 1643, deathYear: 1727, nationality: '英国', contributions: { zh: '经典力学与万有引力', en: 'Classical mechanics & gravity' } },
      { id: 'einstein-mp', name: 'Albert Einstein', nameZh: '爱因斯坦', birthYear: 1879, deathYear: 1955, nationality: '德国/美国', contributions: { zh: '相对论', en: 'Theory of relativity' } },
      { id: 'dirac-mp', name: 'Paul Dirac', nameZh: '保罗·狄拉克', birthYear: 1902, deathYear: 1984, nationality: '英国', contributions: { zh: '量子力学与狄拉克方程', en: 'QM and Dirac equation' } }
    ], figures: [], references: [],
    relatedFields: ['analysis', 'geometry', 'algebra'], applications: ['physics', 'cosmology', 'quantum-computing', 'materials-science'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 经典力学的数学
  { id: 'classical-mechanics-math', slug: 'classical-mechanics-math',
    names: { zh: '经典力学数学', en: 'Mathematical Classical Mechanics' },
    descriptions: { zh: '经典力学的严谨数学表述：拉格朗日力学和哈密顿力学。', en: 'Rigorous mathematical formulation: Lagrangian and Hamiltonian mechanics.' },
    level: 2, parentId: 'mathphysics', childIds: [],
    position: [4, 14, 16], size: 'medium', color: '#f43f5e',
    tags: ['mathphysics'],
    basics: { definition: { zh: '用变分法和辛几何的语言重新表述牛顿力学。', en: 'Reformulating Newtonian mechanics using variational calculus and symplectic geometry.' }, scope: { zh: '拉格朗日量、欧拉-拉格朗日方程、哈密顿正则方程、辛结构、Noether定理。', en: 'Lagrangian, Euler-Lagrange equations, Hamilton canonical equations, symplectic structure, Noether theorem.' }, importance: 4, difficulty: 4, history: [
      { year: 1788, event: { zh: '拉格朗日《分析力学》', en: "Lagrange's Analytique Mécanique" } },
      { year: 1833, event: { zh: '哈密顿正则方程', en: 'Hamilton canonical equations' } }
    ], tags: [] },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['mathphysics', 'variational-calculus', 'symplectic-geometry'], applications: ['celestial-mechanics', 'robotics', 'molecular-dynamics'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 量子力学数学
  { id: 'quantum-math', slug: 'quantum-math',
    names: { zh: '量子力学数学基础', en: 'Foundations of Quantum Mechanics' },
    descriptions: { zh: '量子力学的数学基础：希尔伯特空间、算子理论、谱理论。', en: 'Mathematical foundations of QM: Hilbert spaces, operator theory, spectral theory.' },
    level: 2, parentId: 'mathphysics', childIds: [],
    position: [8, 13, 21], size: 'large', color: '#e11d48',
    tags: ['mathphysics'],
    basics: { definition: { zh: '量子力学的数学框架建立在泛函分析和算子理论基础之上。', en: 'The mathematical framework of QM is built on functional analysis and operator theory.' }, scope: { zh: '希尔伯特空间、自伴算子、谱分解、路径积分、密度矩阵、纠缠理论。', en: 'Hilbert space, self-adjoint operators, spectral decomposition, path integrals, density matrices, entanglement.' }, importance: 5, difficulty: 5, history: [
      { year: 1925, event: { zh: '海森堡矩阵力学', en: 'Heisenberg matrix mechanics' } },
      { year: 1926, event: { zh: '薛定谔波动力学', en: "Schrodinger wave mechanics" } },
      { year: 1932, event: { zh: '冯·诺依曼量子力学公理化', en: "von Neumann's axioms of QM" }, figure: 'von Neumann' }
    ], tags: [] },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['mathphysics', 'functional-analysis'], applications: ['quantum-computing', 'condensed-matter', 'particle-physics', 'quantum-info'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 相对论数学
  { id: 'relativity-math', slug: 'relativity-math',
    names: { zh: '相对论数学', en: 'Mathematics of Relativity' },
    descriptions: { zh: '狭义和广义相对论的几何基础：闵可夫斯基时空、黎曼几何。', en: 'Geometric foundations of special/general relativity: Minkowski spacetime, Riemannian geometry.' },
    level: 2, parentId: 'mathphysics', childIds: [],
    position: [2, 7, 22], size: 'medium', color: '#f43f5e',
    tags: ['mathphysics'],
    basics: { definition: { zh: '相对论的数学基础涉及伪黎曼几何和张量分析。', en: 'The math foundation of relativity involves pseudo-Riemannian geometry and tensor analysis.' }, scope: { zh: '洛伦兹变换、张量分析、黎曼度量、爱因斯坦场方程、测地线、黑洞数学。', en: 'Lorentz transformation, tensor analysis, Riemann metric, Einstein field equations, geodesics, black hole mathematics.' }, importance: 5, difficulty: 5, history: [
      { year: 1908, event: { zh: '闵可夫斯基四维时空', en: "Minkowski's four-dimensional spacetime" } },
      { year: 1915, event: { zh: '广义相对论完整理论', en: 'Complete general relativity theory' } }
    ], tags: [] },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['mathphysics', 'differential-geometry'], applications: ['cosmology', 'gps-navigation', 'gravitational-waves', 'black-holes'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 统计物理数学
  { id: 'statistical-physics-math', slug: 'statistical-physics-math',
    names: { zh: '统计力学数学', en: 'Mathematical Statistical Mechanics' },
    descriptions: { zh: '从微观规律推导宏观热力学性质的数学理论。', en: 'Mathematical theory deriving macroscopic thermodynamics from microscopic laws.' },
    level: 2, parentId: 'mathphysics', childIds: [],
    position: [10, 5, 15], size: 'medium', color: '#f43f5e',
    tags: ['mathphysics'],
    basics: { definition: { zh: '统计力学用概率论和统计方法解释大量粒子系统的宏观行为。', en: 'Statistical mechanics uses probability and statistics to explain macroscopic behavior of many-particle systems.' }, scope: { zh: '系综理论、配分函数、刘维尔定理、遍历理论、相变临界现象、重整化群。', en: 'Ensemble theory, partition function, Liouville theorem, ergodic theory, phase transitions, renormalization group.' }, importance: 4, difficulty: 5, history: [
      { year: 1860, event: { zh: '麦克斯韦速度分布', en: 'Maxwell velocity distribution' } },
      { year: 1902, event: { zh: '吉布斯统计系综', en: "Gibbs's statistical ensembles" } }
    ], tags: [] },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['mathphysics', 'probability', 'measure-theory'], applications: ['thermodynamics', 'materials-science', 'plasma-physics', 'complex-systems'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 弦理论数学
  { id: 'string-theory-math', slug: 'string-theory-math',
    names: { zh: '弦理论的数学框架', en: 'Mathematics of String Theory' },
    descriptions: { zh: '弦理论所涉及的复杂数学结构：共形场论、模形式、Calabi-Yau流形。', en: 'Complex math structures in string theory: CFT, modular forms, Calabi-Yau manifolds.' },
    level: 2, parentId: 'mathphysics', childIds: [],
    position: [0, 15, 20], size: 'medium', color: '#db2777',
    tags: ['mathphysics'],
    basics: { definition: { zh: '弦理论的数学基础涉及高维几何、代数几何和拓扑学的深刻联系。', en: 'String theory involves deep connections between high-dimensional geometry, algebraic geometry, and topology.' }, scope: { zh: '共形场论、拓扑弦论、镜像对称性、Calabi-Yau流形、AdS/CFT对应。', en: 'Conformal field theory, topological string theory, mirror symmetry, Calabi-Yau manifolds, AdS/CFT correspondence.' }, importance: 4, difficulty: 5, history: [
      { year: 1984, event: { zh: '第一次弦论革命', en: 'First string revolution' } },
      { year: 1995, event: { zh: '第二次弦论革命/M理论', en: 'Second string revolution / M-theory' } }
    ], tags: [] },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['mathphysics', 'algebraic-geometry', 'topology'], applications: ['theoretical-physics', 'unified-field-theory'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 场论数学
  { id: 'field-theory-math', slug: 'field-theory-math',
    names: { zh: '量子场论数学', en: 'Quantum Field Theory Mathematics' },
    descriptions: { zh: 'QFT的数学基础：路径积分、重整化、规范理论。', en: 'Mathematical foundations of QFT: path integrals, renormalization, gauge theory.' },
    level: 2, parentId: 'mathphysics', childIds: [],
    position: [12, 11, 18], size: 'medium', color: '#e11d48',
    tags: ['mathphysics'],
    basics: { definition: { zh: 'QFT结合了量子力学和狭义相对论，其数学基础仍在发展中。', en: 'QFT combines quantum mechanics and special relativity; its mathematical foundations are still developing.' }, scope: { zh: '路径积分形式体系、费曼图、重整化群、规范场论、标准模型数学。', en: 'Path integral formulation, Feynman diagrams, renormalization groups, gauge field theory, Standard Model mathematics.' }, importance: 5, difficulty: 5, history: [
      { year: 1949, event: { zh: '费曼路径积分', en: "Feynman's path integral" } },
      { year: 1954, event: { zh: '杨-Mills规范场论', en: 'Yang-Mills gauge theory' } }
    ], tags: [] },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['mathphysics', 'quantum-math'], applications: ['particle-physics', 'condensed-matter', 'qft-cosmology'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 流体力学数学
  { id: 'fluid-mechanics-math', slug: 'fluid-mechanics-math',
    names: { zh: '流体力学数学', en: 'Mathematical Fluid Mechanics' },
    descriptions: { zh: '流体运动的PDE数学理论：Navier-Stokes方程的存在性与光滑性。', en: 'PDE theory of fluid motion: existence and smoothness of Navier-Stokes equations.' },
    level: 2, parentId: 'mathphysics', childIds: [],
    position: [4, 6, 24], size: 'small', color: '#f43f5e',
    tags: ['mathphysics', 'pde'],
    basics: { definition: { zh: '流体力学数学研究Navier-Stokes方程组的适定性及解的性质。', en: 'Studies well-posedness and solution properties of Navier-Stokes equation systems.' }, scope: { zh: 'NS方程存在唯一性问题(千禧年难题)、Euler方程、湍流数学理论、边界层理论。', en: 'NS uniqueness (Millennium Problem), Euler equations, turbulence math theory, boundary layer theory.' }, importance: 5, difficulty: 5, history: [
      { year: 1822, event: { zh: 'Navier-Stokes方程', en: 'Navier-Stokes equations' } },
      { year: 2000, event: { zh: '列为千禧年七大难题', en: 'Listed among Millennium Prize Problems' } }
    ], tags: [] },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['mathphysics', 'pde'], applications: ['aerodynamics', 'oceanography', 'meteorology', 'blood-flow'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 天体物理数学
  { id: 'astrophysics-math', slug: 'astrophysics-math',
    names: { zh: '天体物理数学', en: 'Mathematical Astrophysics' },
    descriptions: { zh: '天体和宇宙尺度物理现象的数学描述。', en: 'Mathematical description of astrophysical and cosmological phenomena.' },
    level: 2, parentId: 'mathphysics', childIds: [],
    position: [-2, 14, 25], size: 'small', color: '#f43f5e',
    tags: ['mathphysics'],
    basics: { definition: { zh: '应用微分方程、数值方法和统计方法于天文学问题。', en: 'Applies differential equations, numerical methods, and statistics to astronomical problems.' }, scope: { zh: '恒星结构与演化、黑洞数学、宇宙学方程、引力波、暗物质/暗能量模型。', en: 'Stellar structure & evolution, black hole math, cosmological equations, gravitational waves, dark matter/energy models.' }, importance: 4, difficulty: 5, history: [], tags: [] },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['relativity-math', 'statistical-physics-math', 'numerical-analysis'], applications: ['astronomy', 'cosmology', 'space-mission-planning'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 凝聚态物理数学
  { id: 'condensed-matter-math', slug: 'condensed-matter-math',
    names: { zh: '凝聚态物理数学', en: 'Mathematical Condensed Matter Physics' },
    descriptions: { zh: '固体和液体材料性质的数学理论。', en: 'Mathematical theory of solid and liquid material properties.' },
    level: 2, parentId: 'mathphysics', childIds: [],
    position: [14, 8, 20], size: 'small', color: '#e11d48',
    tags: ['mathphysics'],
    basics: { definition: { zh: '凝聚态物理的数学框架包括能带理论和多体物理。', en: 'Mathematical framework includes band theory and many-body physics.' }, scope: { zh: 'Bloch定理、能带理论、拓扑绝缘体、Bose-Einstein凝聚、超导BCS理论数学。', en: "Bloch's theorem, band theory, topological insulators, BEC, BCS superconductivity." }, importance: 4, difficulty: 5, history: [], tags: [] },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['quantum-math', 'mathphysics'], applications: ['semiconductors', 'superconductors', 'novel-materials', 'quantum-devices'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 辛几何与数学物理
  { id: 'symplectic-physics', slug: 'symplectic-physics',
    names: { zh: '辛几何与数学物理', en: 'Symplectic Geometry & Mathematical Physics' },
    descriptions: { zh: '辛几何在哈密顿力学和量子化中的应用。', en: 'Applications of symplectic geometry in Hamiltonian mechanics and quantization.' },
    level: 2, parentId: 'mathphysics', childIds: [],
    position: [8, 16, 26], size: 'small', color: '#f43f5e',
    tags: ['mathphysics', 'differential-geometry'],
    basics: { definition: { zh: '辛几何提供哈密顿力学的自然几何框架，也是量子化和规范场论的重要工具。', en: 'Symplectic geometry provides natural geometric framework for Hamiltonian mechanics, important in quantization and gauge theory.' }, scope: { zh: '辛流形、辛叶层、正则坐标、几何量化、辛拓扑。', en: 'Symplectic manifolds, foliation, canonical coordinates, geometric quantization, symplectic topology.' }, importance: 3, difficulty: 5, history: [], tags: [] },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['mathphysics', 'differential-geometry'], applications: ['theoretical-physics', 'mechanics', 'optics'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  }
];
