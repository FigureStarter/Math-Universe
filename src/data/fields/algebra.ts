import { FieldNode } from '@/types';

export const algebraFields: FieldNode[] = [
  // ==================== 主星系：代数学 ====================
  {
    id: 'algebra', slug: 'algebra',
    names: { zh: '代数学', en: 'Algebra' },
    descriptions: {
      zh: '研究代数结构（群、环、域、模等）及其运算规则的数学分支，是现代数学的核心语言和工具。',
      en: 'The branch of mathematics studying algebraic structures (groups, rings, fields, modules, etc.) and their operations, serving as the core language and tool of modern mathematics.'
    },
    level: 1, parentId: null,
    childIds: ['linear-algebra', 'abstract-algebra', 'group-theory', 'ring-theory', 'field-theory', 'galois-theory', 'commutative-algebra', 'homological-algebra', 'representation-theory', 'category-theory'],
    position: [-14, 6, -8], size: 'huge', color: '#8b5cf6',
    tags: ['algebra', 'abstract-algebra'],
    basics: {
      definition: { zh: '代数学研究符号、表达式及满足特定公理的代数结构，是连接算术与几何的桥梁。', en: 'Algebra studies symbols, expressions, and algebraic structures satisfying specific axioms, bridging arithmetic and geometry.' },
      scope: { zh: '涵盖线性/抽象代数、群/环/域论、伽罗瓦理论、交换/同调代数、表示论、范畴论等分支。', en: 'Covers linear/abstract algebra, group/ring/field theory, Galois theory, commutative/homological algebra, representation/category theory, etc.' },
      importance: 5, difficulty: 3,
      history: [
        { year: -1800, event: { zh: '巴比伦人解二次方程', en: 'Babylonians solve quadratics' } },
        { year: 820, event: { zh: '花拉子米《代数学》— 代数之名由来', en: "al-Khwarizmi's Al-Jabr — origin of 'algebra'" } },
        { year: 1545, event: { zh: '卡尔达诺《大术》— 三次/四次方程解法', en: "Cardano's Ars Magna — cubic/quartic solutions" } },
        { year: 1945, event: { zh: '范畴论诞生— 艾伦伯格与麦克莱恩', en: 'Birth of category theory — Eilenberg & Mac Lane' } }
      ],
      tags: ['algebra']
    },
    principles: [
      { id: 'alg-p1', title: { zh: '运算封闭性', en: 'Closure under Operations' }, description: { zh: '代数结构中的运算必须保持在该结构内部', en: 'Operations in an algebraic structure must remain within the structure' }, importance: 3 },
      { id: 'alg-p2', title: { zh: '同构不变性', en: 'Isomorphism Invariance' }, description: { zh: '同构的结构具有完全相同的代数性质', en: 'Isomorphic structures share identical algebraic properties' }, importance: 3 },
      { id: 'alg-p3', title: { zh: '商结构', en: 'Quotient Structures' }, description: { zh: '通过正规子结构可构造新的商代数结构', en: 'New quotient structures can be constructed via normal substructures' }, importance: 2 }
    ],
    formulas: [
      { id: 'quadratic-formula', name: { zh: '求根公式', en: 'Quadratic Formula' }, latex: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}', description: { zh: '一元二次方程 ax² + bx + c = 0 的通解公式', en: 'General solution formula for quadratic equation ax² + bx + c = 0' }, variables: [{ symbol: 'a,b,c', description: { zh: '二次项/一次项/常数项系数', en: 'Quadratic/linear/constant coefficients' } }, { symbol: 'x', description: { zh: '未知数的根', en: 'Roots of the unknown' } }], applications: [{ zh: '物理学、工程学、经济学建模', en: 'Physics, engineering, economics modeling' }], difficulty: 1 }
    ],
    pioneers: [
      { id: 'al-khwarizmi', name: 'Muhammad al-Khwarizmi', nameZh: '花拉子米', birthYear: 780, deathYear: 850, nationality: '波斯', contributions: { zh: '代数学之父，引入算法(algorithm)概念', en: 'Father of algebra, introduced algorithm concept' } },
      { id: 'galois', name: 'Évariste Galois', nameZh: '埃瓦里斯特·伽罗瓦', birthYear: 1811, deathYear: 1832, nationality: '法国', contributions: { zh: '群论与伽罗瓦理论创始人，多项式根式可解性判据', en: 'Founder of group theory & Galois theory, solvability criterion for polynomials' } },
      { id: 'noether', name: 'Emmy Noether', nameZh: '艾米·诺特', birthYear: 1882, deathYear: 1935, nationality: '德国', contributions: { zh: '抽象代数奠基人，诺特定理统一对称性与守恒律', en: 'Founder of abstract algebra, Noether theorem unifies symmetry & conservation' } },
      { id: 'grothendieck', name: 'Alexander Grothendieck', nameZh: '亚历山大·格罗滕迪克', birthYear: 1928, deathYear: 2014, nationality: '法国/德国', contributions: { zh: '现代代数几何革命者，概型理论、上同调方法', en: 'Revolutionized modern algebraic geometry, scheme theory, cohomology methods' } }
    ],
    figures: [], references: [],
    relatedFields: ['geometry', 'analysis', 'numbertheory', 'topology'], applications: ['physics', 'cryptography', 'cs', 'coding-theory', 'quantum-computing'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // ==================== 子星系：线性代数 ====================
  {
    id: 'linear-algebra', slug: 'linear-algebra',
    names: { zh: '线性代数', en: 'Linear Algebra' },
    descriptions: {
      zh: '研究向量空间及其上的线性映射，核心对象包括向量、矩阵、行列式、特征值与线性变换。',
      en: 'Studies vector spaces and linear maps on them. Core objects include vectors, matrices, determinants, eigenvalues, and linear transformations.'
    },
    level: 2, parentId: 'algebra', childIds: [],
    position: [0, 0, 0], size: 'medium', color: '#a78bfa',
    tags: ['algebra', 'linear-algebra'],
    basics: {
      definition: { zh: '线性代数研究有限维向量空间及其线性变换，是处理多维数据和几何问题的基本工具。', en: 'Linear algebra studies finite-dimensional vector spaces and linear transformations, a fundamental tool for multidimensional data and geometry.' },
      scope: { zh: '向量空间、矩阵、线性方程组、行列式、特征值、内积空间、SVD等。', en: 'Vector spaces, matrices, linear systems, determinants, eigenvalues, inner product spaces, SVD.' },
      importance: 5, difficulty: 2,
      history: [
        { year: -200, event: { zh: '中国《九章算术》— 方程术', en: 'Chinese Nine Chapters — method of equations' } },
        { year: 1843, event: { zh: '哈密顿发现四元数', en: 'Hamilton discovers quaternions' } },
        { year: 1858, event: { zh: '凯莱矩阵论', en: "Cayley's matrix theory" } },
        { year: 1888, event: { zh: '佩亚诺公理化向量空间', en: 'Peano axiomatic vector spaces' } }
      ],
      tags: ['linear-algebra']
    },
    principles: [
      { id: 'la-p1', title: { zh: '线性叠加原理', en: 'Principle of Superposition' }, description: { zh: '线性系统的响应等于各输入独立响应之和', en: 'Response of a linear system equals sum of individual input responses' }, importance: 3 },
      { id: 'la-p2', title: { zh: '基的完备性', en: 'Basis Completeness' }, description: { zh: '任何向量都可唯一表示为基向量的线性组合', en: 'Every vector can be uniquely expressed as a linear combination of basis vectors' }, importance: 3 }
    ],
    formulas: [
      { id: 'eigen-equation', name: { zh: '特征方程', en: 'Eigenvalue Equation' }, latex: 'A\\mathbf{v} = \\lambda \\mathbf{v}', description: { zh: '矩阵 A 的特征向量 v 在 A 作用下仅被伸缩 λ 倍', en: 'Eigenvector v of matrix A is scaled by factor λ under transformation A' }, variables: [{ symbol: 'A', description: { zh: '方阵', en: 'Square matrix' } }, { symbol: 'λ', description: { zh: '特征值', en: 'Eigenvalue' } }, { symbol: 'v', description: { zh: '特征向量', en: 'Eigenvector' } }], applications: [{ zh: '主成分分析(PCA)、振动分析、量子力学', en: 'PCA, vibration analysis, quantum mechanics' }], difficulty: 2 }
    ],
    pioneers: [
      { id: 'hamilton', name: 'William Rowan Hamilton', nameZh: '威廉·罗万·哈密顿', birthYear: 1805, deathYear: 1865, nationality: '爱尔兰', contributions: { zh: '四元数发现者，向量分析的先驱', en: 'Discoverer of quaternions, pioneer of vector analysis' } },
      { id: 'cayley', name: 'Arthur Cayley', nameZh: '阿瑟·凯莱', birthYear: 1821, deathYear: 1895, nationality: '英国', contributions: { zh: '矩阵论的创立者', en: 'Founder of matrix theory' } }
    ],
    figures: [], references: [],
    relatedFields: ['analysis', 'geometry', 'optimization'], applications: ['ml', 'graphics', 'physics', 'engineering', 'data-science'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // ==================== 子星系：抽象代数 ====================
  {
    id: 'abstract-algebra', slug: 'abstract-algebra',
    names: { zh: '抽象代数', en: 'Abstract Algebra' },
    descriptions: {
      zh: '研究代数结构（群、环、域、模等）的一般性质的学科，强调公理化方法和结构间的联系。',
      en: 'Studies general properties of algebraic structures (groups, rings, fields, modules), emphasizing axiomatic methods and interstructural relationships.'
    },
    level: 2, parentId: 'algebra', childIds: [],
    position: [0, 0, 0], size: 'large', color: '#7c3aed',
    tags: ['algebra', 'abstract-algebra'],
    basics: {
      definition: { zh: '抽象代数从具体计算中抽象出代数结构的共同模式，通过公理定义各类代数系统并研究其分类与关系。', en: 'Abstract algebra extracts common patterns from concrete computations, defining various algebraic systems through axioms and studying their classification and relationships.' },
      scope: { zh: '群、环、域、模、格、代数等结构的公理化研究；同态、同构、自由对象与泛性质。', en: 'Axiomatic study of groups, rings, fields, modules, lattices; homomorphisms, isomorphisms, free objects, universal properties.' },
      importance: 5, difficulty: 4,
      history: [
        { year: 1830, event: { zh: '伽罗瓦开创抽象代数思想', en: 'Galois initiates abstract algebra ideas' } },
        { year: 1870, event: { zh: '若尔当《置换与代数方程》', en: "Jordan's Traité des substitutions" } },
        { year: 1930, event: { zh: '范德瓦尔登《近世代数》— 现代教材典范', en: "van der Waerden's Modern Algebra" } },
        { year: 1960, event: { zh: '范畴论视角融入代数学', en: 'Category theory integrated into algebra' } }
      ],
      tags: ['abstract-algebra']
    },
    principles: [
      { id: 'aa-p1', title: { zh: '同态基本定理', en: 'Fundamental Homomorphism Theorem' }, description: { zh: 'G/Ker(f) ≅ Im(f)，即商结构与像同构', en: 'G/Ker(f) ≅ Im(f), the quotient structure is isomorphic to the image' }, importance: 3 },
      { id: 'aa-p2', title: { zh: '泛性质', en: 'Universal Property' }, description: { zh: '许多代数构造由唯一存在性刻画', en: 'Many algebraic constructions are characterized by unique existence' }, importance: 2 }
    ],
    formulas: [
      { id: 'iso-thm', name: { zh: '第一同构定理', en: 'First Isomorphism Theorem' }, latex: 'G / \\ker(\\varphi) \\cong \\operatorname{im}(\\varphi)', description: { zh: '群同态 φ 的核为正规子群时，商群同构于像', en: 'When kernel of group homomorphism φ is normal subgroup, quotient group isomorphic to image' }, variables: [{ symbol: 'G', description: { zh: '源群', en: 'Source group' } }, { symbol: 'φ', description: { zh: '群同态', en: 'Group homomorphism' } }], applications: [{ zh: '所有代数分支的基础定理', en: 'Fundamental theorem for all branches of algebra' }], difficulty: 3 }
    ],
    pioneers: [
      { id: 'dedekind', name: 'Richard Dedekind', nameZh: '理查德·戴德金', birthYear: 1831, deathYear: 1916, nationality: '德国', contributions: { zh: '理想概念的创立者', en: 'Creator of ideal concept' } },
      { id: 'vanderwaerden', name: 'Bartel van der Waerden', nameZh: '巴特尔·范德瓦尔登', birthYear: 1903, deathYear: 1996, nationality: '荷兰', contributions: { zh: '编写经典《近世代数》，推广诺特学派成果', en: 'Wrote classic Modern Algebra, disseminated Noether school results' } }
    ],
    figures: [], references: [],
    relatedFields: ['group-theory', 'ring-theory', 'field-theory', 'category-theory'], applications: ['cryptography', 'coding-theory', 'physics'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // ==================== 子星系：群论 ====================
  {
    id: 'group-theory', slug: 'group-theory',
    names: { zh: '群论', en: 'Group Theory' },
    descriptions: {
      zh: '研究群的代数结构——一个集合配备一种满足结合律、有单位元和逆元的二元运算。群描述对称性的本质。',
      en: 'Studies the algebraic structure of groups—a set equipped with an associative binary operation with identity and inverses. Groups capture the essence of symmetry.'
    },
    level: 2, parentId: 'algebra', childIds: [],
    position: [0, 0, 0], size: 'medium', color: '#6d28d9',
    tags: ['algebra', 'group-theory'],
    basics: {
      definition: { zh: '群是一个集合 G 配合一个二元运算 ·，满足封闭性、结合律、单位元和逆元四个公理。群是对称性的数学语言。', en: 'A group is a set G with binary operation · satisfying closure, associativity, identity, and inverse axioms. Group is the mathematical language of symmetry.' },
      scope: { zh: '有限群(置换/单群分类)、无限群、拓扑群、李群、群作用、表示论、组合/几何群论。', en: 'Finite groups (permutation/simple class.), infinite/topological/Lie groups, actions, rep. theory, comb./geom. group theory.' },
      importance: 5, difficulty: 3,
      history: [
        { year: 1770, event: { zh: '拉格朗日研究置换与方程根', en: 'Lagrange studies permutations and equation roots' } },
        { year: 1832, event: { zh: '伽罗瓦用群论解决方程可解性问题', en: 'Galois uses group theory to solve solvability problem' } },
        { year: 1854, event: { zh: '凯莱正式定义抽象群', en: 'Cayley formally defines abstract group' } },
        { year: 1983, event: { zh: '有限单群分类完成（约10000页证明）', en: 'Classification of finite simple groups completed (~10000 pages)' } }
      ],
      tags: ['group-theory']
    },
    principles: [
      { id: 'gt-p1', title: { zh: '拉格朗日定理', en: "Lagrange's Theorem" }, description: { zh: '子群的阶整除群的阶：|H| | |G|', en: 'Order of subgroup divides order of group: |H| divides |G|' }, importance: 3 },
      { id: 'gt-p2', title: { zh: '西罗定理', en: "Sylow Theorems" }, description: { zh: '有限群的p-子群的存在性和共轭类', en: 'Existence and conjugacy classes of p-subgroups in finite groups' }, importance: 3 }
    ],
    formulas: [
      { id: 'lagrange', name: { zh: '拉格朗日定理', en: "Lagrange's Theorem" }, latex: '|G| = |H| \\cdot [G:H]', description: { zh: '群 G 的阶等于子群 H 的阶乘以 H 在 G 中的指数', en: 'Order of G equals order of H times index of H in G' }, variables: [{ symbol: '|G|', description: { zh: '群G的阶(元素个数)', en: 'Order of group G (number of elements)' } }, { symbol: '[G:H]', description: { zh: 'H在G中的指数(陪集个数)', en: 'Index of H in G (number of cosets)' } }], applications: [{ zh: '有限群结构分析、密码学', en: 'Finite group structure analysis, cryptography' }], difficulty: 2 }
    ],
    pioneers: [
      { id: 'abel', name: 'Niels Henrik Abel', nameZh: '尼尔斯·亨利克·阿贝尔', birthYear: 1802, deathYear: 1829, nationality: '挪威', contributions: { zh: '证明五次及以上一般方程无根式解，阿贝尔群命名来源', en: 'Proved quintic+ unsolvable by radicals, Abel group namesake' } },
      { id: 'jordan', name: 'Camille Jordan', nameZh: '卡米尔·若尔当', birthYear: 1838, deathYear: 1922, nationality: '法国', contributions: { zh: '若尔当-赫尔德定理，群论的早期系统化', en: 'Jordan-Hölder theorem, early systematization of group theory' } }
    ],
    figures: [], references: [],
    relatedFields: ['ring-theory', 'field-theory', 'lie-groups', 'topology'], applications: ['crystallography', 'particle-physics', 'cryptography', 'puzzles'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // ==================== 子星系：环论 ====================
  {
    id: 'ring-theory', slug: 'ring-theory',
    names: { zh: '环论', en: 'Ring Theory' },
    descriptions: {
      zh: '研究环这种代数结构——一个集合同时拥有加法和乘法两种运算，其中加法构成阿贝尔群。',
      en: 'Studies rings—an algebraic structure with two operations (addition and multiplication) where addition forms an abelian group.'
    },
    level: 2, parentId: 'algebra', childIds: [],
    position: [0, 0, 0], size: 'small', color: '#5b21b6',
    tags: ['algebra', 'ring-field'],
    basics: {
      definition: { zh: '环 R 是配备两种二元运算（加法 + 和乘法 ×）的集合：(R,+) 是阿贝尔群，乘法满足结合律和分配律。', en: 'A ring R is a set with two binary operations (+ and ×): (R,+) is an abelian group, multiplication is associative and distributive.' },
      scope: { zh: '交换/非交换环、整环、UFD、PID、欧几里得环、诺特环、Artin环。', en: 'Comm./noncomm. rings, integral domains, UFD, PID, Euclidean domains, Noetherian/Artinian rings.' },
      importance: 4, difficulty: 3,
      history: [
        { year: 1871, event: { zh: '戴德金引入理想概念', en: 'Dedekind introduces ideal concept' } },
        { year: 1897, event: { zh: '希尔伯特对数论中环的使用', en: "Hilbert's use of rings in number theory" } },
        { year: 1900, event: { zh: '弗罗贝尼乌斯非交换代数', en: 'Frobenius noncommutative algebra' } }
      ],
      tags: ['ring-field']
    },
    principles: [
      { id: 'rt-p1', title: { zh: '理想的本质', en: 'Nature of Ideals' }, description: { zh: '理想是环论中对应到正规子群的概念', en: 'Ideals are the ring-theoretic analogue of normal subgroups' }, importance: 3 }
    ],
    formulas: [
      { id: 'quotient-ring', name: { zh: '商环', en: 'Quotient Ring' }, latex: 'R/I = \\{ r + I : r \\in R \\}', description: { zh: '由环 R 和其理想 I 构成的商环，元素为 I 的陪集', en: 'Quotient ring formed by ring R and its ideal I, elements are cosets of I' }, variables: [{ symbol: 'R', description: { zh: '环', en: 'Ring' } }, { symbol: 'I', description: { zh: '理想', en: 'Ideal' } }], applications: [{ zh: '环的分类、模的构造', en: 'Ring classification, module construction' }], difficulty: 2 }
    ],
    pioneers: [
      { id: 'hilbert-d', name: 'David Hilbert', nameZh: '大卫·希尔伯特', birthYear: 1862, deathYear: 1943, nationality: '德国', contributions: { zh: '希尔伯特基定理，不变量理论', en: 'Hilbert basis theorem, invariant theory' } }
    ],
    figures: [], references: [],
    relatedFields: ['group-theory', 'field-theory', 'commutative-algebra'], applications: ['numbertheory', 'algebraic-geometry', 'cryptography'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // ==================== 子星系：域论 ====================
  {
    id: 'field-theory', slug: 'field-theory',
    names: { zh: '域论', en: 'Field Theory' },
    descriptions: {
      zh: '研究域——可以进行加减乘除（除零外）的代数结构。域论是伽罗瓦理论和代数几何的基础。',
      en: 'Studies fields—algebraic structures where addition, subtraction, multiplication, and division (except by zero) are defined. Foundation of Galois theory and algebraic geometry.'
    },
    level: 2, parentId: 'algebra', childIds: [],
    position: [0, 0, 0], size: 'small', color: '#5b21b6',
    tags: ['algebra', 'ring-field'],
    basics: {
      definition: { zh: '域 F 是非零元可逆的交换环：对任意 a≠0 ∈ F，存在 a⁻¹ 使得 a·a⁻¹ = 1。', en: 'A field F is a commutative ring where every nonzero element has a multiplicative inverse: ∀a≠0∈F, ∃a⁻¹ s.t. a·a⁻¹=1.' },
      scope: { zh: '域扩张(代数/超越)、有限域(Galois域)、自同构、分裂域、正规/可分扩张。', en: 'Field extensions (alg./trans.), finite/Galois fields, automorphisms, splitting fields, normal/separable exts.' },
      importance: 4, difficulty: 4,
      history: [
        { year: 1830, event: { zh: '伽罗瓦创建域扩张理论', en: 'Galois creates field extension theory' } },
        { year: 1850, event: { zh: '戴德金和克罗内克的代数数论', en: 'Dedekind and Kronecker\'s algebraic number theory' } },
        { year: 1893, event: { zh: '韦伯给出域的抽象定义', en: 'Weber gives abstract definition of field' } },
        { year: 1910, event: { zh: '施泰尼茨域论分类', en: 'Steinitz classification of fields' } }
      ],
      tags: ['ring-field']
    },
    principles: [
      { id: 'ft-p1', title: { zh: '塔律', en: 'Tower Law' }, description: { zh: '域扩张次数满足乘积关系：[E:F] = [E:K]·[K:F]', en: 'Extension degrees multiply: [E:F] = [E:K]·[K:F]' }, importance: 3 }
    ],
    formulas: [
      { id: 'tower-law', name: { zh: '塔律', en: 'Tower Law' }, latex: '[E:F] = [E:K] \\cdot [K:F]', description: { zh: '域塔 F ⊆ K ⊆ E 中扩张次数的可乘性', en: 'Multiplicativity of degrees in tower of fields F⊆K⊆E' }, variables: [{ symbol: '[E:F]', description: { zh: 'E作为F上向量空间的维数', en: 'Dimension of E as vector space over F' } }], applications: [{ zh: '计算扩张次数、判断扩张类型', en: 'Computing extension degrees, determining extension types' }], difficulty: 2 }
    ],
    pioneers: [
      { id: 'steinitz', name: 'Ernst Steinitz', nameZh: '恩斯特·施泰尼茨', birthYear: 1871, deathYear: 1928, nationality: '德国', contributions: { zh: '域论的系统分类者', en: 'Systematic classifier of field theory' } }
    ],
    figures: [], references: [],
    relatedFields: ['galois-theory', 'ring-theory', 'numbertheory'], applications: ['coding-theory', 'cryptography', 'quantum-computing'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // ==================== 子星系：伽罗瓦理论 ====================
  {
    id: 'galois-theory', slug: 'galois-theory',
    names: { zh: '伽罗瓦理论', en: 'Galois Theory' },
    descriptions: {
      zh: '将域扩张与群联系起来，用群的语言刻画多项式方程根式可解性。被誉为"数学的美学巅峰"之一。',
      en: 'Connects field extensions with groups, characterizing radical solvability of polynomial equations using group theory. Called one of "the aesthetic peaks of mathematics".'
    },
    level: 2, parentId: 'algebra', childIds: [],
    position: [0, 0, 0], size: 'medium', color: '#7c3aed',
    tags: ['algebra', 'group-theory'],
    basics: {
      definition: { zh: '伽罗瓦理论研究多项式根的置换对称性与域扩张自同构群之间的深刻对应关系。', en: 'Galois theory studies the deep correspondence between permutation symmetry of polynomial roots and automorphism groups of field extensions.' },
      scope: { zh: '伽罗瓦群、伽罗瓦扩张、基本定理、根式可解性、逆伽罗瓦问题、有限域的伽罗瓦理论。', en: 'Galois groups, Galois extensions, fundamental theorem, radical solvability, inverse Galois problem, finite fields.' },
      importance: 5, difficulty: 5,
      history: [
        { year: 1829, event: { zh: '伽罗瓦提交论文被拒后重写', en: "Galois resubmits paper after rejection" } },
        { year: 1832, event: { zh: '伽罗瓦决斗前夜写下完整理论', en: 'Galois writes complete theory before duel' } },
        { year: 1846, event: { zh: '刘维尔整理发表伽罗瓦遗作', en: "Liouville publishes Galois's posthumous work" } },
        { year: 1870, event: { zh: '若尔当普及伽罗瓦理论', en: 'Jordan popularizes Galois theory' } }
      ],
      tags: ['group-theory', 'algebra']
    },
    principles: [
      { id: 'gal-p1', title: { zh: '伽罗瓦对应', en: 'Galois Correspondence' }, description: { zh: '中间域与伽罗瓦子群之间存在反序一一对应', en: 'Order-reversing bijection between intermediate fields and subgroups of Galois group' }, importance: 3 },
      { id: 'gal-p2', title: { zh: '根式可解准则', en: 'Radical Solvability Criterion' }, description: { zh: '多项式根式可解当且仅当其伽罗瓦群为可解群', en: 'Polynomial solvable by radicals iff its Galois group is solvable' }, importance: 3 }
    ],
    formulas: [
      { id: 'galois-group', name: { zh: '伽罗瓦群', en: 'Galois Group' }, latex: '\\operatorname{Gal}(E/F) = \\{ \\sigma : E \\to E \\mid \\sigma|_F = \\mathrm{id}, \\sigma \\text{ field automorphism} \\}', description: { zh: '域扩张 E/F 的伽罗瓦群由保持 F 不动的 E 的所有域自同构组成', en: 'Galois group of extension E/F consists of all field automorphisms of E fixing F pointwise' }, variables: [{ symbol: 'E/F', description: { zh: '域扩张', en: 'Field extension' } }, { symbol: 'σ', description: { zh: '域自同构', en: 'Field automorphism' } }], applications: [{ zh: '判定方程可解性、尺规作图问题', en: 'Determining equation solvability, compass-and-straightedge constructions' }], difficulty: 4 }
    ],
    pioneers: [
      { id: 'liouville-j', name: 'Joseph Liouville', nameZh: '约瑟夫·刘维尔', birthYear: 1809, deathYear: 1882, nationality: '法国', contributions: { zh: '发掘并发表伽罗瓦的论文', en: 'Discovered and published Galois\'s papers' } },
      { id: 'artin-e', name: 'Emil Artin', nameZh: '埃米尔·阿廷', birthYear: 1898, deathYear: 1962, nationality: '奥地利/美国', contributions: { zh: '现代伽罗瓦理论的重建者', en: 'Rebuilder of modern Galois theory' } }
    ],
    figures: [], references: [],
    relatedFields: ['field-theory', 'group-theory', 'numbertheory'], applications: ['classical-constructions', 'coding-theory', 'cryptography'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // ==================== 子星系：交换代数 ====================
  {
    id: 'commutative-algebra', slug: 'commutative-algebra',
    names: { zh: '交换代数', en: 'Commutative Algebra' },
    descriptions: {
      zh: '研究交换环及其模的理论，是代数几何和代数数论的代数基础。',
      en: 'Studies commutative rings and their modules, providing the algebraic foundation for algebraic geometry and algebraic number theory.'
    },
    level: 2, parentId: 'algebra', childIds: [],
    position: [0, 0, 0], size: 'small', color: '#7c3aed',
    tags: ['algebra', 'abstract-algebra'],
    basics: {
      definition: { zh: '交换代数研究乘法满足交换律(ab=ba)的环及其上的模结构。', en: 'Commutative algebra studies rings where multiplication is commutative (ab=ba) and their module structures.' },
      scope: { zh: '诺特环、局部化、素谱Spec(R)、整扩张、维数理论、正则序列、Cohen-Macaulay/Gorenstein环。', en: 'Noetherian rings, localization, Spec(R), integral exts., dim. theory, depth, reg. seqs., CM/Gorenstein rings.' },
      importance: 4, difficulty: 4,
      history: [
        { year: 1920, event: { zh: '诺特建立抽象交换代数基础', en: 'Noether establishes foundations of abstract commutative algebra' } },
        { year: 1946, event: { zh: '扎里斯基用交换代数重构代数几何', en: 'Zariski reconstructs algebraic geometry via commutative algebra' } },
        { year: 1960, event: { zh: '格罗滕迪克将交换代数推向新高度', en: 'Grothendieck elevates commutative algebra to new heights' } }
      ],
      tags: ['abstract-algebra']
    },
    principles: [
      { id: 'ca-p1', title: { zh: 'Hilbert基定理', en: 'Hilbert Basis Theorem' }, description: { zh: '如果 R 是诺特环，则 R[x] 也是诺特环', en: 'If R is Noetherian, then polynomial ring R[x] is also Noetherian' }, importance: 3 },
      { id: 'ca-p2', title: { zh: 'Nakayama引理', en: "Nakayama's Lemma" }, description: { zh: '局部环中模生成元的判别准则', en: 'Criterion for generators of modules over local rings' }, importance: 2 }
    ],
    formulas: [
      { id: 'hilbert-basis', name: { zh: 'Hilbert基定理', en: 'Hilbert Basis Theorem' }, latex: 'R \\text{ Noetherian} \\implies R[x_1,\\ldots,x_n] \\text{ Noetherian}', description: { zh: '诺特环上的多元多项式环仍是诺特环', en: 'Polynomial ring over Noetherian ring remains Noetherian' }, variables: [{ symbol: 'R', description: { zh: '诺特环', en: 'Noetherian ring' } }], applications: [{ zh: '代数几何、代数簇的研究', en: 'Algebraic geometry, study of varieties' }], difficulty: 3 }
    ],
    pioneers: [
      { id: 'zariski', name: 'Oscar Zariski', nameZh: '奥斯卡·扎里斯基', birthYear: 1899, deathYear: 1986, nationality: '美国/意大利', contributions: { zh: '代数几何的交换代数基础', en: 'Commutative algebra foundation of algebraic geometry' } }
    ],
    figures: [], references: [],
    relatedFields: ['algebraic-geometry', 'ring-theory', 'homological-algebra'], applications: ['algebraic-geometry', 'numbertheory', 'singularity-theory'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // ==================== 子星系：同调代数 ====================
  {
    id: 'homological-algebra', slug: 'homological-algebra',
    names: { zh: '同调代数', en: 'Homological Algebra' },
    descriptions: {
      zh: '利用函子、复形和导出函子等工具研究代数结构的"高阶"性质，是现代数学的通用语言之一。',
      en: 'Uses functors, complexes, and derived functors to study higher-order properties of algebraic structures. One of the universal languages of modern mathematics.'
    },
    level: 2, parentId: 'algebra', childIds: [],
    position: [0, 0, 0], size: 'small', color: '#6d28d9',
    tags: ['algebra', 'abstract-algebra'],
    basics: {
      definition: { zh: '同调代数通过链复形、同调群和导出函子等工具，量化代数结构的"偏离精确性"的程度。', en: 'Homological algebra quantifies how far algebraic structures deviate from exactness via chain complexes, homology groups, and derived functors.' },
      scope: { zh: '链复形、同调/上同调、Ext/Tor函子、谱序列、Abel/导出/三角范畴。', en: 'Chain complexes, homology/cohomology, Ext/Tor functors, spectral seqs., Abelian/derived/triang. categories.' },
      importance: 4, difficulty: 5,
      history: [
        { year: 1870, event: { zh: '贝蒂数与拓扑同调起源', en: 'Origin of Betti numbers and topological homology' } },
        { year: 1945, event: { zh: '艾伦伯格-麦克莱恩创立同调代数', en: 'Eilenberg-MacLane found homological algebra' } },
        { year: 1956, event: { zh: '格罗滕迪克引入导出函子', en: 'Grothendieck introduces derived functors' } },
        { year: 1963, event: { zh: '戈德曼《同调代数》经典教材', en: 'Cartan-Eilenberg classic textbook' } }
      ],
      tags: ['abstract-algebra']
    },
    principles: [
      { id: 'ha-p1', title: { zh: '蛇引理', en: 'Snake Lemma' }, description: { zh: '短正合序列诱导的长正合序列，形状如蛇', en: 'Long exact sequence induced by short exact sequence, shaped like a snake' }, importance: 3 },
      { id: 'ha-p2', title: { zh: '同调函子的长正合性', en: 'Long Exact Sequence of Homology' }, description: { zh: '左/右正合函子在短正合序列上诱导长正合同调序列', en: 'Left/right exact functors induce long exact homology sequences from short exact sequences' }, importance: 3 }
    ],
    formulas: [
      { id: 'ext-tor', name: { zh: 'Ext 与 Tor 函子', en: 'Ext and Tor Functors' }, latex: '\\operatorname{Ext}^n_R(M,N) \\cong H^n(\\operatorname{Hom}_R(P_\\bullet, N)), \\quad \\operatorname{Tor}_n^R(M,N) \\cong H_n(M \\otimes_R Q_\\bullet)', description: { zh: 'Ext衡量Hom函子的右导出程度，Tor衡量张量积的左导出程度', en: 'Ext measures right-derivedness of Hom functor, Tor measures left-derivedness of tensor product' }, variables: [], applications: [{ zh: '代数拓扑、代数几何、表示论', en: 'Algebraic topology, algebraic geometry, representation theory' }], difficulty: 5 }
    ],
    pioneers: [
      { id: 'eilenberg', name: 'Samuel Eilenberg', nameZh: '塞缪尔·艾伦伯格', birthYear: 1913, deathYear: 1998, nationality: '波兰/美国', contributions: { zh: '同调代数和范畴论的共同创始人', en: 'Co-founder of homological algebra and category theory' } },
      { id: 'maclane', name: 'Saunders Mac Lane', nameZh: '桑德斯·麦克莱恩', birthYear: 1909, deathYear: 2005, nationality: '美国', contributions: { zh: '同调代数和范畴论先驱', en: 'Pioneer of homological algebra and category theory' } }
    ],
    figures: [], references: [],
    relatedFields: ['category-theory', 'algebraic-topology', 'algebraic-geometry', 'representation-theory'], applications: ['topology', 'geometry', 'physics'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // ==================== 子星系：表示论 ====================
  {
    id: 'representation-theory', slug: 'representation-theory',
    names: { zh: '表示论', en: 'Representation Theory' },
    descriptions: {
      zh: '通过将抽象代数结构（群、李代数等）表示为向量空间上的线性变换来研究这些结构的方法论。',
      en: 'Studies abstract algebraic structures (groups, Lie algebras, etc.) by representing them as linear transformations on vector spaces.'
    },
    level: 2, parentId: 'algebra', childIds: [],
    position: [0, 0, 0], size: 'medium', color: '#6d28d9',
    tags: ['algebra', 'group-theory'],
    basics: {
      definition: { zh: '表示论将抽象代数结构"实现"为具体的矩阵群或线性算子，使抽象问题转化为线性代数问题。', en: 'Representation theory "realizes" abstract algebraic structures as concrete matrix groups or linear operators, reducing abstract problems to linear algebra problems.' },
      scope: { zh: '群表示(有限群/紧李群)、李代数表示、特征标理论、不可约表示、舒尔引理。', en: 'Group reps (finite/compact Lie), Lie algebra reps, character theory, irreducible reps, Schur\'s lemma.' },
      importance: 4, difficulty: 4,
      history: [
        { year: 1896, event: { zh: 'Frobenius创立群的特征标理论', en: 'Frobenius founds character theory of groups' } },
        { year: 1900, event: { zh: 'Burnside应用表示论解决有限群问题', en: 'Burnside applies representation theory to finite group problems' } },
        { year: 1925, event: { zh: 'Schur-Weyl对偶', en: 'Schur-Weyl duality' } },
        { year: 1960, event: { zh: 'Harish-Chandra的调和分析表示', en: "Harish-Chandra's harmonic analytic representations" } }
      ],
      tags: ['group-theory']
    },
    principles: [
      { id: 'rt-p1', title: { zh: 'Maschke定理', en: "Maschke's Theorem" }, description: { zh: '有限群在特征不整除|G|的域上的表示完全可约', en: 'Representations of finite groups over fields whose characteristic does not divide |G| are completely reducible' }, importance: 3 },
      { id: 'rt-p2', title: { zh: 'Schur引理', en: "Schur's Lemma" }, description: { zh: '不可约表示之间的任何同态要么为零要么为同构', en: 'Any homomorphism between irreducible representations is either zero or an isomorphism' }, importance: 3 }
    ],
    formulas: [
      { id: 'schur-orth', name: { zh: '特征标正交关系', en: 'Character Orthogonality Relations' }, latex: '\\frac{1}{|G|}\\sum_{g\\in G} \\chi_i(g)\\overline{\\chi_j(g)} = \\delta_{ij}', description: { zh: '有限群不可约特征标之间的正交关系，是表示论的核心计算工具', en: 'Orthogonality relations among irreducible characters of finite groups, core computational tool of representation theory' }, variables: [{ symbol: 'χ_i', description: { zh: '第i个不可约特征标', en: 'ith irreducible character' } }], applications: [{ zh: '量子力学、粒子物理、化学键理论', en: 'Quantum mechanics, particle physics, chemical bonding theory' }], difficulty: 3 }
    ],
    pioneers: [
      { id: 'frobenius-gf', name: 'Georg Frobenius', nameZh: '格奥尔格·弗罗贝尼乌斯', birthYear: 1849, deathYear: 1917, nationality: '德国', contributions: { zh: '特征标理论的创立者', en: 'Founder of character theory' } },
      { id: 'schur-i', name: 'Issai Schur', nameZh: '伊赛·舒尔', birthYear: 1875, deathYear: 1941, nationality: '德国', contributions: { zh: 'Schur引理、Schur-Weyl对偶、表示论基础', en: "Schur's lemma, Schur-Weyl duality, foundations of representation theory" } }
    ],
    figures: [], references: [],
    relatedFields: ['group-theory', 'lie-groups', 'harmonic-analysis'], applications: ['particle-physics', 'quantum-mechanics', 'chemistry', 'crystallography'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // ==================== 子星系：范畴论 ====================
  {
    id: 'category-theory', slug: 'category-theory',
    names: { zh: '范畴论', en: 'Category Theory' },
    descriptions: {
      zh: '以高度抽象的方式研究数学结构之间的关系（态射），被称为"数学的数学"。提供统一的组织框架。',
      en: 'Studies relationships between mathematical structures (morphisms) at a highly abstract level. Called "mathematics of mathematics." Provides a unifying organizational framework.'
    },
    level: 2, parentId: 'algebra', childIds: [],
    position: [0, 0, 0], size: 'medium', color: '#8b5cf6',
    tags: ['algebra', 'abstract-algebra'],
    basics: {
      definition: { zh: '范畴 C 由对象 Obj(C) 和态射 Mor(C) 组成，每个态射 f: A→B 有定义域 A 和值域 B，满足复合律和恒等律。', en: 'Category C consists of objects Obj(C) and morphisms Mor(C). Each morphism f: A→B has domain A and codomain B, satisfying composition and identity laws.' },
      scope: { zh: '范畴、函子、自然变换、极限/余极限、伴随函子、Abel范畴、拓扑斯、高阶/∞-范畴。', en: 'Categories, functors, nat. transforms, limits/colimits, adjoints, Abelian cats., toposes, higher/∞-cats.' },
      importance: 5, difficulty: 5,
      history: [
        { year: 1942, event: { zh: '艾伦伯格与麦克莱恩引入范畴与函子', en: 'Eilenberg & Mac Lane introduce categories and functors' } },
        { year: 1950, event: { zh: 'Cartan-Eilenberg《同调代数》广泛应用范畴语言', en: 'Cartan-Eilenberg Homological Algebra widely uses categorical language' } },
        { year: 1958, event: { zh: 'Grothendieck在代数几何中使用范畴论', en: 'Grothendieck uses category theory in algebraic geometry' } },
        { year: 1990, event: { zh: '高阶范畴与∞-范畴的发展', en: 'Development of higher categories and ∞-categories' } }
      ],
      tags: ['abstract-algebra']
    },
    principles: [
      { id: 'ct-p1', title: { zh: 'Yoneda引理', en: "Yoneda's Lemma" }, description: { zh: '对象由它与所有其他对象的关系（态射）所决定', en: 'An object is determined by its relationships (morphisms) with all other objects' }, importance: 3 },
      { id: 'ct-p2', title: { zh: '伴随函子', en: 'Adjoint Functors' }, description: { zh: '左伴随与右伴随函子之间的万能性质对应', en: 'Universal property correspondence between left and right adjoint functors' }, importance: 3 }
    ],
    formulas: [
      { id: 'yoneda', name: { zh: 'Yoneda引理', en: "Yoneda's Lemma" }, latex: '\\operatorname{Nat}(h^A, F) \\cong FA', description: { zh: '从代表函子 h^A 到函子 F 的自然变换集合与 F(A) 双射', en: 'Natural transformations from representable functor h^A to functor F bijectively correspond to F(A)' }, variables: [{ symbol: 'h^A', description: { zh: '对象A的表示函子 Hom(-,A)', en: 'Representable functor Hom(-,A) of object A' } }, { symbol: 'F', description: { zh: '函子', en: 'Functor' } }], applications: [{ zh: '代数几何、拓扑学、逻辑学、计算机科学', en: 'Algebraic geometry, topology, logic, computer science' }], difficulty: 5 }
    ],
    pioneers: [
      { id: 'lawvere', name: 'William Lawvere', nameZh: '威廉·劳威尔', birthYear: 1937, deathYear: 2023, nationality: '美国', contributions: { zh: '范畴逻辑 ETCS、拓扑斯理论', en: 'ETCS categorical logic, topos theory' } },
      { id: 'maclane-s', name: 'Saunders Mac Lane', nameZh: '桑德斯·麦克莱恩', birthYear: 1909, deathYear: 2005, nationality: '美国', contributions: { zh: '《范畴论工作者数学》《范畴论基础》作者', en: 'Author of Categories for the Working Mathematician' } }
    ],
    figures: [], references: [],
    relatedFields: ['homological-algebra', 'algebraic-topology', 'logic', 'computer-science'], applications: ['cs', 'logic', 'physics', 'linguistics'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // ==================== 独立主星系：李群与李代数 ====================
  {
    id: 'lie-groups', slug: 'lie-groups',
    names: { zh: '李群与李代数', en: 'Lie Groups and Lie Algebras' },
    descriptions: {
      zh: '兼具群结构和光滑流形结构的数学对象，以及与之对应的线性化版本（李代数）。是连续对称性的数学语言。',
      en: 'Mathematical objects combining group structure with smooth manifold structure, and their linearized counterparts (Lie algebras). The language of continuous symmetry.'
    },
    level: 1, parentId: null,
    childIds: [],
    position: [-10, 12, -4], size: 'large', color: '#8b5cf6',
    tags: ['algebra', 'group-theory', 'mathphysics'],
    basics: {
      definition: { zh: '李群是同时为光滑流形的群（乘法和取逆都是光滑映射）；李代数是其切空间的线性化，捕捉了李群的局部结构。', en: 'A Lie group is a group that is also a smooth manifold (multiplication/inversion are smooth). Its Lie algebra linearizes the tangent space, capturing local structure.' },
      scope: { zh: '经典李群(GL/SL/SO/SU/Sp)、李代数分类、表示论、根系统/Weyl群、齐性空间。', en: 'Classical Lie groups (GL/SL/SO/SU/Sp), Lie alg. class., reps., root sys./Weyl grp., homogeneous spaces.' },
      importance: 5, difficulty: 5,
      history: [
        { year: 1870, event: { zh: 'Sophus Lie研究微分方程的连续对称群', en: 'Sophus Lie studies continuous symmetry groups of differential equations' } },
        { year: 1888, event: { zh: 'Engel与Lie完成李代数分类初步工作', en: 'Engel and Lie complete preliminary work on Lie algebra classification' } },
        { year: 1894, event: { zh: 'Killing分类复半单李代数', en: 'Killing classifies complex semisimple Lie algebras' } },
        { year: 1925, event: { zh: 'Weyl证明紧李群的完全可约性', en: 'Weyl proves complete reducibility of compact Lie groups' } },
        { year: 1950, event: { zh: 'Chevalley与Borel建立现代李群理论', en: 'Chevalley and Borel establish modern Lie group theory' } }
      ],
      tags: ['group-theory', 'algebra']
    },
    principles: [
      { id: 'lg-p1', title: { zh: '李群-李代数对应', en: 'Lie Group-Lie Algebra Correspondence' }, description: { zh: '每个李群对应唯一的李代数，反之在一定条件下也成立', en: 'Each Lie group corresponds to a unique Lie algebra, and conversely under certain conditions' }, importance: 3 },
      { id: 'lg-p2', title: { zh: '指数映射', en: 'Exponential Map' }, description: { zh: 'exp: g → G 将李代数元素映射到李群元素', en: 'exp: g → G maps Lie algebra elements to Lie group elements' }, importance: 3 }
    ],
    formulas: [
      { id: 'lie-bracket', name: { zh: '李括号', en: 'Lie Bracket' }, latex: '[X,Y] = XY - YX, \\quad \\text{satisfying: antisymmetry, Jacobi identity}', description: { zh: '李代数的基本运算，满足反对称性和雅可比恒等式', en: 'Fundamental operation of Lie algebra, satisfying antisymmetry and Jacobi identity' }, variables: [{ symbol: 'X,Y', description: { zh: '李代数中的元素', en: 'Elements in Lie algebra' } }], applications: [{ zh: '标准模型、引力理论、机器人学', en: 'Standard model, gravity theory, robotics' }], difficulty: 4 }
    ],
    pioneers: [
      { id: 'lie-sophus', name: 'Marius Sophus Lie', nameZh: '马留斯·索菲斯·李', birthYear: 1842, deathYear: 1899, nationality: '挪威', contributions: { zh: '李群理论创始人', en: 'Founder of Lie group theory' } },
      { id: 'weyl-h', name: 'Hermann Weyl', nameZh: '赫尔曼·外尔', birthYear: 1885, deathYear: 1955, nationality: '德国/美国', contributions: { zh: '李群表示论、特征标理论、规范场论先驱', en: 'Lie group representation theory, character theory, pioneer of gauge theory' } },
      { id: 'cartan-elie', name: 'Élie Cartan', nameZh: '埃利·嘉当', birthYear: 1869, deathYear: 1951, nationality: '法国', contributions: { zh: '李代数完整分类、微分形式与活动标架', en: 'Complete classification of Lie algebras, differential forms & moving frames' } }
    ],
    figures: [], references: [],
    relatedFields: ['group-theory', 'differential-geometry', 'representation-theory', 'mathphysics'], applications: ['particle-physics', 'robotics', 'control-theory', 'computer-vision'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // ==================== 独立子星系：泛代数 ====================
  {
    id: 'universal-algebra', slug: 'universal-algebra',
    names: { zh: '泛代数', en: 'Universal Algebra' },
    descriptions: {
      zh: '研究一般代数结构（具有一组运算的集合）的共同性质，是抽象代数的进一步抽象化。',
      en: 'Studies common properties of general algebraic structures (sets with collections of operations), a further abstraction of abstract algebra.'
    },
    level: 2, parentId: 'algebra', childIds: [],
    position: [0, 0, 0], size: 'small', color: '#7c3aed',
    tags: ['algebra', 'abstract-algebra'],
    basics: {
      definition: { zh: '泛代数研究一类代数结构（signature）下所有代数（model）的共同性质，不限于特定的群或环。', en: 'Universal algebra studies common properties of all algebras (models) under a class of algebraic structures (signature), not limited to specific groups or rings.' },
      scope: { zh: '代数签名、自由代数、同余关系、子直积、Birkhoff定理、簇(variety)理论。', en: 'Algebraic signatures, free algebras, congruence relations, subdirect products, Birkhoff theorem, variety theory.' },
      importance: 3, difficulty: 3,
      history: [
        { year: 1935, event: { zh: 'Birkhoff簇定理', en: "Birkhoff's variety theorem" } },
        { year: 1950, event: { zh: 'Tarski等人发展泛代数方法', en: 'Tarski et al. develop universal algebra methods' } }
      ],
      tags: ['abstract-algebra']
    },
    principles: [
      { id: 'ua-p1', title: { zh: 'Birkhoff HSP定理', en: "Birkhoff's HSP Theorem" }, description: { zh: '簇恰好是同态像(H)、子代数(S)和直积(P)封闭的代数类', en: 'A variety is exactly a class of algebras closed under homomorphic images (H), subalgebras (S), and direct products (P)' }, importance: 3 }
    ],
    formulas: [],
    pioneers: [
      { id: 'birkhoff-g', name: 'Garrett Birkhoff', nameZh: '加勒特·伯克霍夫', birthYear: 1911, deathYear: 1996, nationality: '美国', contributions: { zh: 'Birkhoff簇定理，格论', en: "Birkhoff's variety theorem, lattice theory" } }
    ],
    figures: [], references: [],
    relatedFields: ['category-theory', 'logic', 'lattices'], applications: ['cs', 'automata-theory', 'universal-algebra'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // ==================== 独立子星系：非结合代数 ====================
  {
    id: 'nonassociative', slug: 'nonassociative-algebra',
    names: { zh: '非结合代数', en: 'Non-associative Algebra' },
    descriptions: {
      zh: '研究不满足结合律的代数结构，包括八元数、若尔当代数、李代数等。',
      en: 'Studies algebraic structures not satisfying associativity, including octonions, Jordan algebras, Lie algebras, and others.'
    },
    level: 2, parentId: 'algebra', childIds: [],
    position: [0, 0, 0], size: 'small', color: '#6d28d9',
    tags: ['algebra', 'abstract-algebra'],
    basics: {
      definition: { zh: '非结合代数是乘法不一定满足结合律 (ab)c ≠ a(bc) 的代数。', en: 'Non-associative algebras are algebras where multiplication does not necessarily satisfy associativity: (ab)c ≠ a(bc).' },
      scope: { zh: '八元数、若尔当代数、交错代数、幂结合代数、Malcev代数。', en: 'Octonions, Jordan algebras, alt. algebras, power-assoc. algebras, Malcev algebras.' },
      importance: 3, difficulty: 4,
      history: [
        { year: 1843, event: { zh: '哈密顿发现四元数（结合）', en: 'Hamilton discovers quaternions (associative)' } },
        { year: 1845, event: { zh: '凯莱发现八元数（非结合）', en: 'Cayley discovers octonions (non-associative)' } },
        { year: 1933, event: { zh: '若尔当代数用于量子力学', en: 'Jordan algebras applied to quantum mechanics' } }
      ],
      tags: ['abstract-algebra']
    },
    principles: [
      { id: 'na-p1', title: { zh: '交错律', en: 'Alternativity' }, description: { zh: '弱化结合律：任意两个相同元素的乘法满足结合律', en: 'Weakened associativity: any two identical elements satisfy associativity' }, importance: 2 }
    ],
    formulas: [
      { id: 'octonion-mult', name: { zh: '八元数乘法表', en: 'Octonion Multiplication' }, latex: 'e_i e_j = -\\delta_{ij} + \\sum_k \\varepsilon_{ijk} e_k, \\quad i,j,k \\in \\{1,\\ldots,7\\}', description: { zh: '八元数基元的乘法规则，εijk为完全反对称三阶张量', en: 'Multiplication rule for octonion basis elements, εijk is totally antisymmetric 3-tensor' }, variables: [], applications: [{ zh: '弦论、例外李群、七维球面几何', en: 'String theory, exceptional Lie groups, 7-sphere geometry' }], difficulty: 4 }
    ],
    pioneers: [
      { id: 'hurwitz', name: 'Adolf Hurwitz', nameZh: '阿道夫·赫尔维茨', birthYear: 1859, deathYear: 1919, nationality: '德国', contributions: { zh: 'Hurwitz定理：实数域上只有1,2,4,8维赋范可除代数', en: "Hurwitz theorem: only 1,2,4,8 dimensional normed division algebras over reals" } }
    ],
    figures: [], references: [],
    relatedFields: ['lie-groups', 'linear-algebra', 'mathphysics'], applications: ['string-theory', 'exceptional-geometry', 'projective-geometry'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  }
];
