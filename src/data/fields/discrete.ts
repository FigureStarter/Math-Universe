import { FieldNode } from '@/types';

export const discreteFields: FieldNode[] = [
  // ==================== 离散数学 ====================
  {
    id: 'discrete', slug: 'discrete',
    names: { zh: '离散数学', en: 'Discrete Mathematics' },
    descriptions: { zh: '研究离散（不连续）结构的数学分支，是计算机科学的核心基础。', en: 'Branch studying discrete (non-continuous) structures, core foundation of computer science.' },
    level: 1, parentId: null,
    childIds: ['combinatorics', 'graph-theory', 'coding-theory', 'cryptography', 'automata-theory', 'computational-complexity'],
    position: [12, -8, 16], size: 'large', color: '#3b82f6',
    tags: ['discrete'],
    basics: {
      definition: { zh: '离散数学研究可数或有限的结构，与连续数学相对。', en: 'Discrete mathematics studies countable or finite structures, as opposed to continuous mathematics.' },
      scope: { zh: '组合学、图论、算法理论、编码理论、密码学等。', en: 'Combinatorics, graph theory, algorithmics, coding theory, cryptography.' },
      importance: 5, difficulty: 3,
      history: [
        { year: 1736, event: { zh: '欧拉图论起源', en: "Euler's graph theory origin" } },
        { year: 1936, event: { zh: '图灵机理论', en: 'Turing machine theory' } },
        { year: 1977, event: { zh: 'RSA密码系统', en: 'RSA cryptosystem' } }
      ],
      tags: ['discrete']
    },
    principles: [
      { id: 'p1', title: { zh: '鸽巢原理', en: 'Pigeonhole Principle' }, description: { zh: 'n+1个物体放入n个盒子，至少一个盒子有多个物体', en: 'n+1 objects in n boxes means one box has multiple objects' }, importance: 2 },
      { id: 'p2', title: { zh: '容斥原理', en: 'Inclusion-Exclusion' }, description: { zh: '计算集合并集大小的基础工具', en: 'Fundamental tool for computing union sizes' }, importance: 3 }
    ],
    formulas: [{ id: 'binomial', name: { zh: '二项式定理', en: 'Binomial Theorem' }, latex: '(x+y)^n = \\sum_{k=0}^{n} \\binom{n}{k} x^{n-k} y^k', description: { zh: '多项式展开', en: 'Polynomial expansion' }, variables: [], applications: [{ zh: '概率论/计数', en: 'Probability/counting' }], difficulty: 2 }],
    pioneers: [{ id: 'erdos-d', name: 'Paul Erdős', nameZh: '保罗·埃尔德什', birthYear: 1913, deathYear: 1996, nationality: '匈牙利', contributions: { zh: '组合数学大师', en: 'Master of combinatorics' } }],
    figures: [], references: [],
    relatedFields: ['probability', 'algebra', 'cs'], applications: ['cs', 'cryptography', 'networks', 'ai'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 组合数学
  { id: 'combinatorics', slug: 'combinatorics',
    names: { zh: '组合数学', en: 'Combinatorics' },
    descriptions: { zh: '研究有限离散结构的计数、排列和组合的学科。', en: 'Study of counting, arrangement, and combination of finite discrete structures.' },
    level: 1, parentId: null,
    childIds: ['enumerative-combinatorics', 'extremal-combinatorics', 'algebraic-combinatorics', 'probabilistic-combinatorics'],
    position: [16, -12, 20], size: 'medium', color: '#2563eb',
    tags: ['combinatorics'],
    basics: {
      definition: { zh: '组合数学研究有限集合中对象的排列、组合和计数问题。', en: 'Combinatorics studies arrangements, combinations, and counting in finite sets.' },
      scope: { zh: '枚举组合、极值组合、代数组合、设计理论、拉姆齐理论、生成函数。', en: 'Enumerative, extremal, algebraic combinatorics, design theory, Ramsey theory, generating functions.' },
      importance: 4, difficulty: 4,
      history: [
        { year: 1666, event: { zh: '莱布尼茨组合论文', en: "Leibniz's combinatorics dissertation" } },
        { year: 1929, event: { zh: '拉姆齐理论诞生', en: 'Birth of Ramsey theory' } },
        { year: 1972, event: { zh: '概率方法兴起', en: 'Rise of probabilistic method' } }
      ], tags: []
    },
    principles: [],
    formulas: [{ id: 'fibonacci', name: { zh: '斐波那契数列', en: 'Fibonacci Sequence' }, latex: 'F_n = F_{n-1} + F_{n-2}', description: { zh: '每个数是前两个之和', en: 'Each number is sum of two preceding' }, variables: [], applications: [{ zh: '自然现象建模', en: 'Modeling natural phenomena' }], difficulty: 2 }],
    pioneers: [], figures: [], references: [],
    relatedFields: ['discrete', 'probability', 'algebra'], applications: ['cs', 'optimization', 'statistics'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 图论
  { id: 'graph-theory', slug: 'graph-theory',
    names: { zh: '图论', en: 'Graph Theory' },
    descriptions: { zh: '由顶点和边组成的图的性质研究的数学分支。', en: 'Branch studying properties of graphs composed of vertices and edges.' },
    level: 1, parentId: null,
    childIds: ['algorithmic-graph-theory', 'spectral-graph-theory', 'random-graphs'],
    position: [10, -14, 22], size: 'medium', color: '#1d4ed8',
    tags: ['graph-theory'],
    basics: {
      definition: { zh: '图论研究顶点和边的抽象结构及其性质（连通性、着色、匹配等）。', en: 'Graph theory studies abstract structures of vertices/edges and properties like connectivity, coloring, matching.' },
      scope: { zh: '连通性、着色理论、匹配与覆盖、平面性、树结构、网络流、随机图。', en: 'Connectivity, coloring, matching & coverings, planarity, trees, network flows, random graphs.' },
      importance: 5, difficulty: 3,
      history: [
        { year: 1736, event: { zh: '欧拉七桥问题', en: "Euler's Seven Bridges" } },
        { year: 1852, event: { zh: '四色猜想', en: 'Four color conjecture' } },
        { year: 1976, event: { zh: '四色定理证明', en: 'Four Color Theorem proved' } }
      ], tags: []
    },
    principles: [],
    formulas: [{ id: 'handshaking', name: { zh: '握手定理', en: 'Handshaking Lemma' }, latex: '\\sum_{v\\in V} \\deg(v) = 2|E|', description: { zh: '度数之和等于两倍边数', en: 'Sum of degrees = twice edges' }, variables: [], applications: [{ zh: '网络分析', en: 'Network analysis' }], difficulty: 1 }],
    pioneers: [], figures: [], references: [],
    relatedFields: ['discrete', 'combinatorics'], applications: ['social-networks', 'cs', 'transportation', 'biology', 'linguistics'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 编码理论
  { id: 'coding-theory', slug: 'coding-theory',
    names: { zh: '编码理论', en: 'Coding Theory' },
    descriptions: { zh: '研究数据可靠传输和存储的错误纠正码。', en: 'Study of error-correcting codes for reliable data transmission and storage.' },
    level: 2, parentId: 'discrete', childIds: [],
    position: [14, -5, 20], size: 'medium', color: '#3b82f6',
    tags: ['discrete'],
    basics: { definition: { zh: '编码理论研究在噪声信道上可靠传输信息的数学方法。', en: 'Coding theory studies mathematical methods for reliable information transmission over noisy channels.' }, scope: { zh: '线性码、循环码、BCH码、LDPC码、Turbo码、卷积码、代数几何码。', en: 'Linear codes, cyclic codes, BCH, LDPC, Turbo codes, convolutional codes, AG codes.' }, importance: 4, difficulty: 5, history: [
      { year: 1948, event: { zh: '香农信息论奠基', en: "Shannon's information theory" } },
      { year: 1950, event: { zh: '汉明码发明', en: 'Hamming code invented' } }
    ], tags: [] },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['discrete', 'algebra', 'information-theory'], applications: ['telecommunications', 'data-storage', 'satellite', 'qr-codes'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 密码学
  { id: 'cryptography', slug: 'cryptography',
    names: { zh: '密码学', en: 'Cryptography' },
    descriptions: { zh: '研究安全通信和信息保护的数学技术。', en: 'Mathematical techniques for secure communication and information protection.' },
    level: 2, parentId: 'discrete', childIds: [],
    position: [18, -10, 14], size: 'medium', color: '#4f46e5',
    tags: ['cryptography'],
    basics: { definition: { zh: '密码学研究信息加密、解密、认证和安全协议的数学基础。', en: 'Cryptography studies the math foundations of encryption, decryption, authentication, and secure protocols.' }, scope: { zh: '对称/非对称加密、哈希函数、数字签名、零知识证明、同态加密、后量子密码。', en: 'Symmetric/asymmetric crypto, hash functions, digital signatures, ZKP, homomorphic encryption, post-quantum crypto.' }, importance: 5, difficulty: 5, history: [
      { year: 1976, event: { zh: 'Diffie-Hellman密钥交换', en: 'Diffie-Hellman key exchange' } },
      { year: 1977, event: { zh: 'RSA公钥密码', en: 'RSA public-key crypto' } },
      { year: 1985, event: { zh: '椭圆曲线密码', en: 'Elliptic curve cryptography' } }
    ], tags: [] },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['numbertheory', 'discrete', 'algebra'], applications: ['cybersecurity', 'blockchain', 'e-commerce', 'privacy'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 自动机与形式语言
  { id: 'automata-theory', slug: 'automata-theory',
    names: { zh: '自动机理论与形式语言', en: 'Automata Theory & Formal Languages' },
    descriptions: { zh: '抽象计算模型及其识别的语言类的研究。', en: 'Study of abstract computational models and their recognized language classes.' },
    level: 2, parentId: 'discrete', childIds: [],
    position: [8, -6, 18], size: 'small', color: '#3b82f6',
    tags: ['computer-science'],
    basics: { definition: { zh: '自动机理论用数学模型描述计算的极限能力。', en: 'Automata theory uses mathematical models to describe computational limits.' }, scope: { zh: '有穷自动机、下推自动机、图灵机、乔姆斯基层次、正则表达式。', en: 'Finite automata, pushdown automata, Turing machines, Chomsky hierarchy, regular expressions.' }, importance: 5, difficulty: 4, history: [
      { year: 1936, event: { zh: '图灵机模型', en: 'Turing machine model' } },
      { year: 1956, event: { zh: '乔姆斯基层次', en: 'Chomsky hierarchy' } }
    ], tags: [] },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['computability', 'cs', 'logic'], applications: ['compiler-design', 'pattern-matching', 'formal-verification', 'natural-language-processing'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 计算复杂性
  { id: 'computational-complexity', slug: 'computational-complexity',
    names: { zh: '计算复杂性理论', en: 'Computational Complexity Theory' },
    descriptions: { zh: '分类问题的计算难度，研究P/NP等核心问题。', en: 'Classifies computational difficulty of problems, studying P/NP and other core questions.' },
    level: 2, parentId: 'discrete', childIds: [],
    position: [6, -12, 20], size: 'small', color: '#3b82f6',
    tags: ['computer-science'],
    basics: { definition: { zh: '计算复杂性理论根据解决问题所需的资源对问题进行分类。', en: 'Complexity theory classifies problems based on resources needed to solve them.' }, scope: { zh: '时间复杂度、空间复杂度、P vs NP、NP完全、多项式层次、近似算法。', en: 'Time/space complexity, P vs NP, NP-complete, polynomial hierarchy, approximation algorithms.' }, importance: 5, difficulty: 5, history: [
      { year: 1971, event: { zh: 'Cook-Levin定理', en: 'Cook-Levin theorem' } },
      { year: 1972, event: { zh: 'Karp的21个NP完全问题', en: "Karp's 21 NP-complete problems" } }
    ], tags: [] },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['automata-theory', 'cs', 'logic'], applications: ['algorithm-design', 'cryptography', 'optimization'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 枚举组合
  { id: 'enumerative-combinatorics', slug: 'enumerative-combinatorics',
    names: { zh: '枚举组合学', en: 'Enumerative Combinatorics' },
    descriptions: { zh: '精确计数满足特定条件的对象数量。', en: 'Precise counting of objects satisfying specific conditions.' },
    level: 2, parentId: 'combinatorics', childIds: [],
    position: [18, -15, 22], size: 'small', color: '#2563eb',
    tags: ['combinatorics'],
    basics: { definition: { zh: '枚举组合学关注于计算满足特定条件的离散结构的数目。', en: 'Enumerative combinatorics focuses on counting discrete structures that satisfy given conditions.' }, scope: { zh: '排列组合、容斥原理、生成函数、Polya计数、递推关系。', en: 'Permutations/combinations, inclusion-exclusion, generating functions, Polya counting, recurrences.' }, importance: 3, difficulty: 3, history: [], tags: [] },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['combinatorics', 'probability'], applications: ['probability', 'statistical-physics', 'algorithm-analysis'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 极值组合
  { id: 'extremal-combinatorics', slug: 'extremal-combinatorics',
    names: { zh: '极值组合学', en: 'Extremal Combinatorics' },
    descriptions: { zh: '研究在给定约束下离散结构的极值问题。', en: 'Studies extremum problems of discrete structures under given constraints.' },
    level: 2, parentId: 'combinatorics', childIds: [],
    position: [20, -9, 18], size: 'small', color: '#2563eb',
    tags: ['combinatorics'],
    basics: { definition: { zh: '极值组合学研究在一定条件下离散结构能达到的最大或最小值。', en: 'Extremal combinatorics studies maximum or minimum values achievable under constraints.' }, scope: { zh: 'Turan定理、Ramsey理论、极值图论、Sperner定理、Dilworth定理。', en: "Turan's theorem, Ramsey theory, extremal graph theory, Sperner's theorem, Dilworth's theorem." }, importance: 4, difficulty: 5, history: [], tags: [] },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['combinatorics', 'graph-theory', 'probability'], applications: ['theoretical-cs', 'network-design', 'combinatorial-optimization'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 代数组合
  { id: 'algebraic-combinatorics', slug: 'algebraic-combinatorics',
    names: { zh: '代数组合学', en: 'Algebraic Combinatorics' },
    descriptions: { zh: '运用代数方法解决组合问题，或将代数结构进行组合解释。', en: 'Uses algebraic methods to solve combinatorial problems, or gives algebraic structures combinatorial interpretations.' },
    level: 2, parentId: 'combinatorics', childIds: [],
    position: [14, -17, 24], size: 'small', color: '#2563eb',
    tags: ['combinatorics', 'algebra'],
    basics: { definition: { zh: '代数组合学结合了代数和组合方法来研究对称性和枚举。', en: 'Algebraic combinatorics combines algebraic and combinatorial methods to study symmetry and enumeration.' }, scope: { zh: '对称群表示、Young表、组合设计、关联方案、超图。', en: 'Symmetric group representations, Young tableaux, combinatorial designs, association schemes, hypergraphs.' }, importance: 3, difficulty: 5, history: [], tags: [] },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['combinatorics', 'algebra', 'representation-theory'], applications: ['physics', 'chemistry', 'quantum-info'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 概率组合
  { id: 'probabilistic-combinatorics', slug: 'probabilistic-combinatorics',
    names: { zh: '概率组合方法', en: 'Probabilistic Method' },
    descriptions: { zh: '使用概率论工具证明组合对象的存在性。', en: 'Uses probability tools to prove existence of combinatorial objects.' },
    level: 2, parentId: 'combinatorics', childIds: [],
    position: [12, -18, 26], size: 'small', color: '#2563eb',
    tags: ['combinatorics', 'probability'],
    basics: { definition: { zh: '埃尔德什开创的概率方法：若某事件概率大于零则该对象存在。', en: "Erdős's probabilistic method: if an event has positive probability, the object exists." }, scope: { zh: ' Lovasz局部引理、随机图、阈值现象、概率存在性论证。', en: "Lovász local lemma, random graphs, threshold phenomena, probabilistic existence arguments." }, importance: 4, difficulty: 5, history: [
      { year: 1959, event: { zh: 'Erdős-Renyi随机图模型', en: 'Erdős–Rényi random graph model' } }
    ], tags: [] },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['combinatorics', 'probability', 'graph-theory'], applications: ['cs', 'randomized-algorithms', 'network-science'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 算法图论
  { id: 'algorithmic-graph-theory', slug: 'algorithmic-graph-theory',
    names: { zh: '算法图论', en: 'Algorithmic Graph Theory' },
    descriptions: { zh: '图上的高效算法设计与分析。', en: 'Design and analysis of efficient algorithms on graphs.' },
    level: 2, parentId: 'graph-theory', childIds: [],
    position: [8, -16, 25], size: 'small', color: '#1d4ed8',
    tags: ['graph-theory', 'cs'],
    basics: { definition: { zh: '算法图论研究图问题的有效算法及计算复杂度。', en: 'Algorithmic graph theory studies efficient algorithms and complexity of graph problems.' }, scope: { zh: '最短路径、最大流、最小割、连通分量、图着色算法、NP困难图问题。', en: 'Shortest paths, max flow/min cut, connected components, graph coloring, NP-hard graph problems.' }, importance: 4, difficulty: 4, history: [], tags: [] },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['graph-theory', 'cs'], applications: ['navigation-apps', 'social-networks', 'logistics', 'vlsi-design'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 谱图论
  { id: 'spectral-graph-theory', slug: 'spectral-graph-theory',
    names: { zh: '谱图论', en: 'Spectral Graph Theory' },
    descriptions: { zh: '通过邻接矩阵或拉普拉斯矩阵的特征值研究图的性质。', en: 'Studies graph properties via eigenvalues of adjacency/Laplacian matrices.' },
    level: 2, parentId: 'graph-theory', childIds: [],
    position: [14, -18, 23], size: 'small', color: '#1d4ed8',
    tags: ['graph-theory', 'linear-algebra'],
    basics: { definition: { zh: '谱图论利用线性代数的特征值理论分析图的结构性质。', en: 'Spectral graph theory uses eigenvalue theory from linear algebra to analyze structural properties of graphs.' }, scope: { zh: '邻接谱、Laplacian谱、图谱参数、扩张性、图划分。', en: 'Adjacency spectrum, Laplacian spectrum, graph parameters, expanders, graph partitioning.' }, importance: 3, difficulty: 4, history: [], tags: [] },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['graph-theory', 'linear-algebra'], applications: ['network-clustering', 'data-analysis', 'machine-learning'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 随机图
  { id: 'random-graphs', slug: 'random-graphs',
    names: { zh: '随机图论', en: 'Random Graph Theory' },
    descriptions: { zh: '具有随机边分布的概率图模型。', en: 'Probabilistic graph models with randomly distributed edges.' },
    level: 2, parentId: 'graph-theory', childIds: [],
    position: [6, -18, 28], size: 'small', color: '#1d4ed8',
    tags: ['graph-theory', 'probability'],
    basics: { definition: { zh: '随机图论研究以概率方式生成的图的性质。', en: 'Random graph theory studies properties of graphs generated probabilistically.' }, scope: { zh: 'Erdős–Rényi模型、相变、小世界网络、无标度网络。', en: "Erdős–Rényi model, phase transitions, small-world networks, scale-free networks." }, importance: 3, difficulty: 4, history: [], tags: [] },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['graph-theory', 'probability', 'networks'], applications: ['complex-networks', 'epidemiology', 'ecology', 'internet-topology'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  }
];
