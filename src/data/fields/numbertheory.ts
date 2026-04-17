import { FieldNode } from '@/types';

export const numbertheoryFields: FieldNode[] = [
  // ==================== 数论 (主星系) ====================
  {
    id: 'numbertheory', slug: 'numbertheory',
    names: { zh: '数论', en: 'Number Theory' },
    descriptions: {
      zh: '研究整数性质的数学分支，被誉为"数学皇后"，涉及素数分布、丢番图方程、算术函数等核心问题。',
      en: 'The branch of mathematics studying properties of integers, known as the "Queen of Mathematics," involving prime distribution, Diophantine equations, arithmetic functions.'
    },
    level: 1, parentId: null,
    childIds: ['elementary-number-theory', 'analytic-number-theory', 'algebraic-number-theory', 'computational-number-theory', 'additive-number-theory'],
    position: [-12, -10, -18], size: 'large', color: '#a855f7',
    tags: ['number-theory', 'arithmetic', 'pure-math'],
    basics: {
      definition: { zh: '数论研究整数（尤其是自然数）的结构、性质和相互关系，是最古老又最具活力的纯数学领域之一。', en: 'Number theory studies the structure, properties, and relationships of integers (especially naturals); one of the oldest yet most vibrant pure math fields.' },
      scope: { zh: '包括初等数论、解析数论、代数数论、计算数论、加性数论等分支。', en: 'Includes elementary, analytic, algebraic, computational, and additive number theory branches.' },
      importance: 5, difficulty: 4,
      history: [
        { year: -300, event: { zh: '欧几里得《原本》— 素数无限性证明', en: "Euclid's Elements — proof of infinitude of primes" } },
        { year: 1640, event: { zh: '费马小定理', en: "Fermat's little theorem" } },
        { year: 1801, event: { zh: '高斯《算术研究》— 现代数论诞生', en: "Gauss's Disquisitiones Arithmeticae — birth of modern number theory" } },
        { year: 1859, event: { zh: '黎曼假设提出', en: 'Riemann hypothesis posed' } },
        { year: 1995, event: { zh: '怀尔斯证明费马大定理', en: 'Wiles proves Fermat\'s Last Theorem' } }
      ],
      tags: ['numbertheory']
    },
    principles: [
      { id: 'nt1', title: { zh: '算术基本定理', en: 'Fundamental Theorem of Arithmetic' }, description: { zh: '每个大于1的整数可以唯一地表示为素数的乘积', en: 'Every integer > 1 can be uniquely expressed as a product of primes' }, importance: 3 },
      { id: 'nt2', title: { zh: '模运算', en: 'Modular Arithmetic' }, description: { zh: '整数在模n意义下形成环ℤ/nℤ，是同余理论的基础', en: 'Integers mod n form ring ℤ/nℤ, foundation of congruence theory' }, importance: 3 },
      { id: 'nt3', title: { zh: '素数分布', en: 'Prime Distribution' }, description: { zh: '素数的分布规律是数论中最深刻的问题', en: 'Distribution law of primes is the deepest problem in number theory' }, importance: 3 }
    ],
    formulas: [
      {
        id: 'fermat-little', name: { zh: '费马小定理', en: "Fermat's Little Theorem" },
        latex: 'a^{p-1} \\equiv 1 \\pmod p, \\quad \\gcd(a,p)=1',
        description: { zh: '若p为素数且a不被p整除，则a^(p-1) ≡ 1 (mod p)。模运算的基础定理之一。', en: 'If p is prime and a not divisible by p, then a^(p-1) ≡ 1 (mod p). One of the foundations of modular arithmetic.' },
        variables: [{ symbol: 'p', description: { zh: '素数', en: 'Prime' } }, { symbol: 'a', description: { zh: '整数', en: 'Integer' } }],
        applications: [{ zh: '素性测试、RSA加密', en: 'Primality testing, RSA encryption' }],
        difficulty: 2
      },
      {
        id: 'prime-number-thm', name: { zh: '素数定理', en: 'Prime Number Theorem' },
        latex: '\\pi(x) \\sim \\frac{x}{\\ln x}, \\quad x \\to \\infty',
        description: { zh: '不超过x的素数个数π(x)渐近于x/ln x，描述了素数的平均分布密度', en: 'Number of primes ≤ x, denoted π(x), asymptotically equals x/ln x, describing average prime density' },
        variables: [{ symbol: '\\pi(x)', description: { zh: '素数计数函数', en: 'Prime-counting function' } }, { symbol: 'x', description: { zh: '实数', en: 'Real number' } }],
        applications: [{ zh: '素数估计、密码学参数选择', en: 'Prime estimation, cryptography parameter selection' }],
        difficulty: 4
      },
      {
        id: 'wilson-theorem', name: { zh: '威尔逊定理', en: "Wilson's Theorem" },
        latex: '(p-1)! \\equiv -1 \\pmod p',
        description: { zh: 'p为素数当且仅当(p-1)! ≡ -1 (mod p)，是素数的充要条件', en: 'p is prime if and only if (p-1)! ≡ -1 (mod p), necessary and sufficient condition for primality' },
        variables: [{ symbol: 'p', description: { zh: '正整数', en: 'Positive integer' } }],
        applications: [{ zh: '素性判定（理论上）', en: 'Primality testing (theoretical)' }],
        difficulty: 2
      }
    ],
    pioneers: [
      { id: 'fermat', name: 'Pierre de Fermat', nameZh: '皮埃尔·德·费马', birthYear: 1607, deathYear: 1665, nationality: '法国', contributions: { zh: '费马小定理、费马大定理、无穷递降法', en: "Fermat's little theorem, Last Theorem, infinite descent method" } },
      { id: 'euler-nt', name: 'Leonhard Euler', nameZh: '莱昂哈德·欧拉', birthYear: 1707, deathYear: 1783, nationality: '瑞士/俄国', contributions: { zh: '欧拉φ函数、二次互反律先驱、分拆函数', en: "Euler φ(totient) function, quadratic reciprocity pioneer, partition function" } },
      { id: 'gauss', name: 'Carl Friedrich Gauss', nameZh: '卡尔·弗里德里希·高斯', birthYear: 1777, deathYear: 1855, nationality: '德国', contributions: { zh: '《算术研究》、二次互反律、同余记号', en: 'Disquisitiones Arithmeticae, quadratic reciprocity, congruence notation' } },
      { id: 'riemann', name: 'Bernhard Riemann', nameZh: '伯恩哈德·黎曼', birthYear: 1826, deathYear: 1866, nationality: '德国', contributions: { zh: 'ζ函数、黎曼假设', en: 'Zeta function, Riemann Hypothesis' } },
      { id: 'wiles', name: 'Andrew Wiles', nameZh: '安德鲁·怀尔斯', birthYear: 1953, nationality: '英国', contributions: { zh: '证明费马大定理（椭圆曲线与模形式）', en: 'Proved FLT via elliptic curves and modular forms' } }
    ],
    figures: [], references: [],
    relatedFields: ['algebra', 'analysis', 'cryptography', 'discrete'], applications: ['cryptography', 'coding-theory', 'cs'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // ==================== 初等数论 ====================
  {
    id: 'elementary-number-theory', slug: 'elementary-number-theory',
    names: { zh: '初等数论', en: 'Elementary Number Theory' },
    descriptions: { zh: '不依赖高等分析方法，仅用整数本身的性质研究整除性、素数、同余、算术函数等问题。', en: 'Studies divisibility, primes, congruences, arithmetic functions using only intrinsic integer properties without advanced analysis.' },
    level: 2, parentId: 'numbertheory', childIds: [],
    position: [0, 0, 0], size: 'medium', color: '#c084fc',
    tags: ['numbertheory'],
    basics: {
      definition: { zh: '初等数论以整除理论和同余理论为核心，涵盖素数、最大公约数、算术函数等基本内容。', en: 'Elementary number theory centers on divisibility and congruence theories, covering primes, GCD, arithmetic functions.' },
      scope: { zh: '整除性与最大公约数、素数与因式分解、同余与中国剩余定理、算术函数（φ、σ、μ）、原根与指数。', en: 'Divisibility & GCD, primes & factorization, CRT & congruences, arithmetic functions (φ, σ, μ), primitive roots & indices.' },
      importance: 5, difficulty: 2, history: [
        { year: -300, event: { zh: '欧几里得算法与素数无限性', en: 'Euclidean algorithm & infinitude of primes' } },
        { year: 1202, event: { zh: '斐波那契《计算之书》', en: "Fibonacci's Liber Abaci" } },
        { year: 1801, event: { zh: '高斯《算术研究》系统化', en: "Gauss's Disquisitiones Arithmeticae systematizes field" } }
      ], tags: []
    },
    principles: [],
    formulas: [
      {
        id: 'euclidean-algorithm', name: { zh: '欧几里得算法', en: 'Euclidean Algorithm' },
        latex: '\\gcd(a,b) = \\gcd(b, a \\bmod b)',
        description: { zh: '辗转相除法求最大公约数：gcd(a,b) = gcd(b, a mod b)，直到余数为0', en: 'GCD by successive division: gcd(a,b) = gcd(b, a mod b) until remainder is zero' },
        variables: [{ symbol: 'a,b', description: { zh: '正整数', en: 'Positive integers' } }, { symbol: '\\gcd', description: { zh: '最大公约数', en: 'Greatest common divisor' } }],
        applications: [{ zh: '密码学、简化分数', en: 'Cryptography, fraction reduction' }],
        difficulty: 1
      },
      {
        id: 'euler-totient', name: { zh: '欧拉函数 φ(n)', en: "Euler's Totient Function" },
        latex: '\\varphi(n) = n \\prod_{p|n}\\left(1-\\frac{1}{p}\\right)',
        description: { zh: 'φ(n)统计小于n且与n互素的整数个数。若gcd(a,n)=1，则a^φ(n)≡1(mod n)', en: 'φ(n) counts integers ≤ n that are coprime to n. If gcd(a,n)=1 then a^φ(n)≡1(mod n).' },
        variables: [{ symbol: 'n', description: { zh: '正整数', en: 'Positive integer' } }, { symbol: 'p', description: { zh: 'n的素因子', en: 'Prime factors of n' } }, { symbol: '\\varphi', description: { zh: '欧拉函数', en: "Euler's totient function" } }],
        applications: [{ zh: 'RSA加密、循环群阶', en: 'RSA encryption, cyclic group order' }],
        difficulty: 2
      }
    ],
    pioneers: [
      { id: 'euclid-nt', name: 'Euclid of Alexandria', nameZh: '亚历山大里亚的欧几里得', birthYear: -325, deathYear: -265, nationality: '古希腊', contributions: { zh: '欧几里得算法、素数无限性证明', en: 'Euclidean algorithm, proof of infinite primes' } },
      { id: 'gauss-elem', name: 'Carl Friedrich Gauss', nameZh: '卡尔·弗里德里希·高斯', birthYear: 1777, deathYear: 1855, nationality: '德国', contributions: { zh: '二次互反律、同余符号', en: 'Quadratic reciprocity, congruence notation' } }
    ],
    figures: [], references: [],
    relatedFields: ['algebra', 'combinatorics'], applications: ['cryptography', 'competitive-math'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // ==================== 解析数论 ====================
  {
    id: 'analytic-number-theory', slug: 'analytic-number-theory',
    names: { zh: '解析数论', en: 'Analytic Number Theory' },
    descriptions: { zh: '使用分析学工具（特别是复分析和调和分析）来解决关于整数的问题，核心是素数分布。', en: 'Uses analysis tools (especially complex and harmonic analysis) to solve problems about integers; core focus is prime distribution.' },
    level: 2, parentId: 'numbertheory', childIds: [],
    position: [0, 0, 0], size: 'medium', color: '#a855f7',
    tags: ['numbertheory', 'analysis'],
    basics: {
      definition: { zh: '解析数论通过黎曼ζ函数、狄利克雷级数等解析工具研究素数分布、加性问题等深刻的整数性质。', en: 'Analytic number theory studies profound integer properties—prime distribution, additive problems—via ζ-functions, Dirichlet series, etc.' },
      scope: { zh: '黎曼ζ函数、素数定理、黎曼猜想、狄利克雷定理、筛法、指数和方法、模形式。', en: 'Riemann zeta, Prime Number Theorem, Riemann Hypothesis, Dirichlet\'s theorem, sieve methods, circle method, modular forms.' },
      importance: 5, difficulty: 5, history: [
        { year: 1737, event: { zh: '欧拉乘积公式', en: 'Euler product formula' } },
        { year: 1837, event: { zh: '狄利克雷算术级数定理', en: "Dirichlet's theorem on arithmetic progressions" } },
        { year: 1859, event: { zh: '黎曼《论小于给定值的素数个数》', en: "Riemann's On the Number of Primes Less Than a Given Magnitude" } },
        { year: 1896, event: { zh: '阿达玛和德·拉·瓦利·普桑分别证明素数定理', en: "Hadamard & de la Vallée Poussin prove PNT independently" } },
        { year: 1948, event: { zh: '塞尔伯格初等方法证明素数定理', en: 'Selberg gives elementary proof of PNT' } }
      ], tags: []
    },
    principles: [],
    formulas: [
      {
        id: 'riemann-zeta', name: { zh: '黎曼ζ函数', en: 'Riemann Zeta Function' },
        latex: '\\zeta(s) = \\sum_{n=1}^{\\infty} \\frac{1}{n^s} = \\prod_{p}(1-p^{-s})^{-1}, \\quad \\Re(s)>1',
        description: { zh: 'ζ函数通过欧拉乘积连接分析与素数，所有非平凡零点的实部均为1/2（黎曼假设）', en: 'Zeta connects analysis to primes via Euler product. All non-trivial zeros have real part 1/2 (RH)' },
        variables: [{ symbol: 's', description: { zh: '复变量', en: 'Complex variable' } }, { symbol: '\\zeta(s)', description: { zh: '黎曼ζ函数', en: 'Riemann zeta function' } }, { symbol: 'p', description: { zh: '素数', en: 'Prime' } }],
        applications: [{ zh: '素数分布、物理学（量子混沌、统计力学）', en: 'Prime distribution, physics (quantum chaos, statistical mechanics)' }],
        difficulty: 5
      }
    ],
    pioneers: [
      { id: 'dirichlet', name: 'Johann Dirichlet', nameZh: '约翰·狄利克雷', birthYear: 1805, deathYear: 1859, nationality: '德国', contributions: { zh: '算术级数的狄利克雷定理、狄利克雷L函数', en: "Dirichlet's theorem on APs, Dirichlet L-functions" } },
      { id: 'riemann-an', name: 'Bernhard Riemann', nameZh: '伯恩哈德·黎曼', birthYear: 1826, deathYear: 1866, nationality: '德国', contributions: { zh: 'ζ函数解析延拓、零点分布猜想', en: 'Zeta function analytic continuation, zero distribution hypothesis' } },
      { id: 'hardy', name: 'G.H. Hardy', nameZh: '戈弗雷·哈代', birthYear: 1877, deathYear: 1947, nationality: '英国', contributions: { zh: 'ζ函数零点研究、解析数论奠基', en: 'Zeta zero research, analytical NT foundation' } }
    ],
    figures: [], references: [],
    relatedFields: ['complex-analysis', 'algebraic-geometry'], applications: ['cryptography', 'physics', 'random-matrix-theory'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // ==================== 代数数论 ====================
  {
    id: 'algebraic-number-theory', slug: 'algebraic-number-theory',
    names: { zh: '代数数论', en: 'Algebraic Number Theory' },
    descriptions: { zh: '将代数数（有理系数多项式的根）作为研究对象，推广整数的概念到代数整数环的理想理论。', en: 'Studies algebraic numbers (roots of rational-coefficient polynomials), extending integer concepts to ideals in rings of algebraic integers.' },
    level: 2, parentId: 'numbertheory', childIds: [],
    position: [0, 0, 0], size: 'medium', color: '#9333ea',
    tags: ['numbertheory', 'algebra'],
    basics: {
      definition: { zh: '代数数论在有理数域Q的扩张（代数数域）上研究"整数"的推广（代数整数），以及理想类群、单位群、伽罗瓦作用等。', en: 'Algebraic number theory studies "integers" generalized to algebraic integers over extensions K/Q, plus ideal class groups, unit groups, Galois action.' },
      scope: { zh: '代数数域、代数整数、理想分解、理想类群、单位定理、类域论、伽罗瓦表示。', en: 'Number fields, algebraic integers, ideal decomposition, class group, unit theorem, class field theory, Galois representations.' },
      importance: 5, difficulty: 5, history: [
        { year: 1797, event: { zh: '高斯研究高斯整数ℤ[i]', en: 'Gauss studies Gaussian integers ℤ[i]' } },
        { year: 1847, event: { zh: '库默尔引入理想数解决费马大定理', en: 'Kummer introduces ideal numbers for FLT' } },
        { year: 1871, event: { zh: '戴德金创立理想理论', en: 'Dedekind creates ideal theory' } },
        { year: 1897-1898, event: { zh: '希尔伯特建立类域论基础', en: 'Hilbert establishes class field theory foundations' } }
      ], tags: []
    },
    principles: [],
    formulas: [
      {
        id: 'ideal-class-group', name: { zh: '理想类群', en: 'Ideal Class Group' },
        latex: 'Cl(K) = I_K / P_K',
        description: { zh: '代数数域K的所有非零分式理想模主理想的商群，衡量唯一分解因子性的偏离程度', en: 'Quotient of all nonzero fractional ideals of K modulo principal ideals; measures deviation from unique factorization' },
        variables: [{ symbol: 'K', description: { zh: '代数数域', en: 'Number field' } }, { symbol: 'I_K', description: { zh: '分式理想群', en: 'Fractional ideal group' } }, { symbol: 'P_K', description: { zh: '主理想群', en: 'Principal ideal group' } }, { symbol: 'Cl(K)', description: { zh: '理想类群', en: 'Ideal class group' } }],
        applications: [{ zh: '唯一分解性判定、费马大定理', en: 'UFD criterion, FLT proof' }],
        difficulty: 5
      }
    ],
    pioneers: [
      { id: 'kummer', name: 'Ernst Kummer', nameZh: '恩斯特·库默尔', birthYear: 1810, deathYear: 1893, nationality: '德国', contributions: { zh: '理想数、正则素数、费马大定理部分解', en: 'Ideal numbers, regular primes, partial FLT solution' } },
      { id: 'dedekind', name: 'Richard Dedekind', nameZh: '理查德·戴德金', birthYear: 1831, deathYear: 1916, nationality: '德国', contributions: { zh: '理想理论、戴德金ζ函数', en: 'Ideal theory, Dedekind zeta function' } },
      { id: 'hilbert-ant', name: 'David Hilbert', nameZh: '大卫·希尔伯特', birthYear: 1862, deathYear: 1943, nationality: '德国', contributions: { zh: '类域论、希尔伯特12问题', en: 'Class field theory, Hilbert\'s 12th problem' } }
    ],
    figures: [], references: [],
    relatedFields: ['algebra', 'algebraic-geometry', 'representation-theory'], applications: ['cryptography', 'elliptic-curve-crypto', 'langlands-program'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // ==================== 计算数论 ====================
  {
    id: 'computational-number-theory', slug: 'computational-number-theory',
    names: { zh: '计算数论', en: 'Computational Number Theory' },
    descriptions: { zh: '研究数论问题的高效算法实现，包括素数测试、大整数分解、离散对数等，是现代密码学的基石。', en: 'Studies efficient algorithms for number theory problems: primality testing, integer factorization, discrete logs — foundation of modern cryptography.' },
    level: 2, parentId: 'numbertheory', childIds: [],
    position: [0, 0, 0], size: 'small', color: '#7e22ce',
    tags: ['numbertheory', 'cs', 'cryptography'],
    basics: {
      definition: { zh: '计算数论致力于设计高效的算法来解决数论中的判定和搜索问题，其成果直接支撑着公钥密码系统的安全。', en: 'Computational number theory designs efficient algorithms for decision/search problems in NT; results directly underpin public-key crypto security.' },
      scope: { zh: '素性测试（Miller-Rabin、AKS）、因式分解算法（Pollard ρ、GNFS）、离散对数、椭圆曲线算法、格基规约。', en: 'Primality tests (Miller-Rabin, AKS), factorization (Pollard ρ, GNFS), discrete log, elliptic curve algorithms, lattice reduction.' },
      importance: 4, difficulty: 4, history: [
        { year: 1976, event: { zh: 'Diffie-Hellman密钥交换（基于离散对数）', en: 'Diffie-Hellman key exchange (based on discrete log)' } },
        { year: 1977, event: { zh: 'RSA公钥加密（基于大数分解）', en: 'RSA public key crypto (based on factoring)' } },
        { year: 1985, event: { zh: '米勒-罗宾概率测试广泛采用', en: 'Miller-Rabin probabilistic test widely adopted' } },
        { year: 2002, event: { zh: 'AKS确定性多项式时间素数测试', en: 'AKS deterministic polynomial-time primality test' } }
      ], tags: []
    },
    principles: [],
    formulas: [
      {
        id: 'miller-rabin', name: { zh: 'Miller-Rabin 素性测试', en: 'Miller-Rabin Primality Test' },
        latex: 'a^{d} \\not\\equiv 1 \\pmod n \\quad\\text{and}\\quad a^{2^r d} \\not\\equiv -1 \\pmod n \\quad \\forall r',
        description: { zh: '若存在a使得上述条件成立，则n必为合数；多次随机选取a可通过提高置信度', en: 'If exists a satisfying above, n is composite; repeated random a increases confidence' },
        variables: [{ symbol: 'n', description: { zh: '待测数', en: 'Candidate' } }, { symbol: 'a', description: { zh: '随机基', en: 'Random base' } }, { symbol: 'd', description: { zh: '奇数因子', en: 'Odd factor' } }],
        applications: [{ zh: '快速素数筛选、密钥生成', en: 'Fast prime screening, key generation' }],
        difficulty: 3
      }
    ],
    pioneers: [],
    figures: [], references: [],
    relatedFields: ['cryptography', 'algorithm', 'complexity'], applications: ['rsa', 'ecc', 'blockchain', 'ssl-tls'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // ==================== 加性数论 ====================
  {
    id: 'additive-number-theory', slug: 'additive-number-theory',
    names: { zh: '加性数论', en: 'Additive Number Theory' },
    descriptions: { zh: '研究整数按加法表示的性质，如哥德巴赫猜想、华林问题和分拆函数。', en: 'Studies properties of integers expressed by addition, such as Goldbach conjecture, Waring problem, partition function.' },
    level: 2, parentId: 'numbertheory', childIds: [],
    position: [0, 0, 0], size: 'small', color: '#6b21a8',
    tags: ['numbertheory', 'combinatorics', 'analysis'],
    basics: {
      definition: { zh: '加性数论关注整数能否表示为某种形式的和，以及表示方式的计数问题。', en: 'Additive number theory concerns whether integers can be expressed as sums of certain forms, and counting representations.' },
      scope: { zh: '哥德巴赫猜想、华林问题、分拆函数、哥德巴赫-维诺格拉多夫定理、筛法应用。', en: 'Goldbach conjecture, Waring problem, partition function, Vinogradov theorem, sieve applications.' },
      importance: 4, difficulty: 5, history: [
        { year: 1742, event: { zh: '哥德巴赫猜想提出', en: 'Goldbach conjecture posed' } },
        { year: 1770, event: { zh: '华林问题提出（后由希尔伯特解决）', en: 'Waring problem posed (later solved by Hilbert)' } },
        { year: 1937, event: { zh: '维诺格拉多夫证明充分大奇数的哥德巴赫弱猜想', en: 'Vinogradov proves weak Goldbach for sufficiently large odds' } },
        { year: 2013, event: { zh: 'Helfgott完全证明弱哥德巴赫猜想', en: 'Helfgott completes weak Goldbach proof' } }
      ], tags: []
    },
    principles: [],
    formulas: [
      {
        id: 'goldbach-conjecture', name: { zh: '哥德巴赫猜想', en: 'Goldbach Conjecture' },
        latex: '2n = p_1 + p_2, \\quad n > 1',
        description: { zh: '强猜想：任何大于2的偶数都可以写成两个素数之和（至今未完全证明）', en: 'Strong form: Every even number > 2 is sum of two primes (still unproven)' },
        variables: [{ symbol: 'n', description: { zh: '大于1的整数', en: 'Integer > 1' } }, { symbol: 'p_1,p_2', description: { zh: '素数', en: 'Primes' } }],
        applications: [{ zh: '加性组合、解析数论核心问题', en: 'Additive combinatorics, core analytic NT problem' }],
        difficulty: 5
      },
      {
        id: 'partition-function', name: { zh: '分拆函数 p(n)', en: 'Partition Function p(n)' },
        latex: 'p(n) \\sim \\frac{1}{4n\\sqrt{3}} e^{\\pi\\sqrt{2n/3}}',
        description: { zh: '正整数n的分拆方式数量p(n)的渐进公式（哈代-拉马努金公式）', en: 'Asymptotic formula for number of partitions of n (Hardy-Ramanujan formula)' },
        variables: [{ symbol: 'p(n)', description: { zh: '分拆数', en: 'Partition number' } }, { symbol: 'n', description: { zh: '正整数', en: 'Positive integer' } }],
        applications: [{ zh: '统计力学、表示论', en: 'Statistical mechanics, representation theory' }],
        difficulty: 4
      }
    ],
    pioneers: [
      { id: 'hardy-add', name: 'G.H. Hardy', nameZh: '戈弗雷·哈代', birthYear: 1877, deathYear: 1947, nationality: '英国', contributions: { zh: '圆法、哈代-拉马努金分拆公式、加性数论奠基', en: 'Circle method, Hardy-Ramanujan partition formula, additive NT foundation' } },
      { id: 'ramanujan', name: 'Srinivasa Ramanujan', nameZh: '斯里尼瓦瑟·拉马努金', birthYear: 1887, deathYear: 1920, nationality: '印度', contributions: { zh: '分拆恒等式、模形式、τ函数', en: 'Partition identities, modular forms, tau function' } },
      { id: 'vinogradov', name: 'Ivan Matveyevich Vinogradov', nameZh: '伊万·维诺格拉多夫', birthYear: 1891, deathYear: 1983, nationality: '苏联', contributions: { zh: '三素数定理、指数和方法改进', en: 'Three-primes theorem, exponential method improvements' } }
    ],
    figures: [], references: [],
    relatedFields: ['analytic-number-theory', 'combinatorics'], applications: ['coding-theory', 'statistical-physics'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  }

];
