import { FieldNode } from '@/types';

export const geometryFields: FieldNode[] = [
  // ==================== 几何学主星系 ====================
  {
    id: 'geometry', slug: 'geometry',
    names: { zh: '几何学', en: 'Geometry' },
    descriptions: {
      zh: '研究空间结构、形状、大小及相对位置的数学分支。从欧几里得的公理化体系到现代的微分与代数几何，几何学始终是理解空间本质的核心工具。',
      en: 'The mathematical study of space structure, shape, size, and relative position. From Euclidean axiomatic systems to modern differential and algebraic geometry, it remains central to understanding the nature of space.'
    },
    level: 1, parentId: null,
    childIds: ['euclidean-geometry', 'non-euclidean', 'projective-geometry', 'analytic-geometry', 'differential-geometry', 'algebraic-geometry', 'discrete-geometry', 'convex-geometry', 'computational-geometry'],
    position: [16, 8, -12], size: 'huge', color: '#06b6d4',
    tags: ['geometry', 'space', 'shape'],
    basics: {
      definition: { zh: '几何学研究点、线、面、体等基本图形及其相互关系，是数学最古老的分支之一。', en: 'Geometry studies basic figures like points, lines, surfaces, and solids and their relationships. One of the oldest branches of mathematics.' },
      scope: { zh: '包含欧氏几何、非欧几何、射影几何、解析几何、微分几何、代数几何、离散几何、凸几何、计算几何等多个分支。', en: 'Includes Euclidean geometry, non-Euclidean geometry, projective geometry, analytic geometry, differential geometry, algebraic geometry, discrete geometry, convex geometry, and computational geometry.' },
      importance: 5, difficulty: 3,
      history: [
        { year: -300, event: { zh: '欧几里得《几何原本》— 公理化几何奠基', en: "Euclid's Elements — foundation of axiomatic geometry" }, figure: 'euclid' },
        { year: 1637, event: { zh: '笛卡尔创立解析几何', en: 'Descartes founds analytic geometry' }, figure: 'descartes' },
        { year: 1829, event: { zh: '罗巴切夫斯基/波尔约发现双曲几何', en: 'Lobachevsky/Bolyai discover hyperbolic geometry' } },
        { year: 1854, event: { zh: '黎曼创立黎曼几何', en: 'Riemann founds Riemannian geometry' }, figure: 'riemann' }
      ],
      tags: ['geometry']
    },
    principles: [
      { id: 'gp1', title: { zh: '公理化方法', en: 'Axiomatic Method' }, description: { zh: '从不证自明的公理出发，通过逻辑推理导出所有定理。', en: 'Derive all theorems through logical reasoning from self-evident axioms.' }, importance: 3 },
      { id: 'gp2', title: { zh: '对偶原理', en: 'Duality Principle' }, description: { zh: '在射影几何中，点和线具有对称的对偶关系。', en: 'In projective geometry, points and lines have symmetric dual relationships.' }, importance: 2 },
      { id: 'gp3', title: { zh: '不变量理论', en: 'Invariant Theory' }, description: { zh: '研究在特定变换群下保持不变的几何量。', en: 'Studies geometric quantities that remain unchanged under specific transformation groups.' }, importance: 3 }
    ],
    formulas: [
      { id: 'pythagorean', name: { zh: '勾股定理', en: 'Pythagorean Theorem' }, latex: 'a^2 + b^2 = c^2', description: { zh: '直角三角形两直角边平方和等于斜边平方', en: 'In a right triangle, the square of the hypotenuse equals the sum of squares of the legs' }, variables: [
        { symbol: 'a', description: { zh: '直角边a', en: 'Leg a' } },
        { symbol: 'b', description: { zh: '直角边b', en: 'Leg b' } },
        { symbol: 'c', description: { zh: '斜边', en: 'Hypotenuse' } }
      ], applications: [{ zh: '三角测量、距离计算', en: 'Triangulation, distance calculation' }], difficulty: 1 },
      { id: 'euler-formula-polyhedron', name: { zh: '欧拉多面体公式', en: "Euler's Polyhedron Formula" }, latex: 'V - E + F = 2', description: { zh: '凸多面体的顶点数减棱数加面数恒为2', en: 'For any convex polyhedron: vertices minus edges plus faces equals 2' }, variables: [
        { symbol: 'V', description: { zh: '顶点数', en: 'Number of vertices' } },
        { symbol: 'E', description: { zh: '棱数', en: 'Number of edges' } },
        { symbol: 'F', description: { zh: '面数', en: 'Number of faces' } }
      ], applications: [{ zh: '拓扑学基础、多面体分类', en: 'Topology foundations, polyhedron classification' }], difficulty: 2 }
    ],
    pioneers: [
      { id: 'euclid', name: 'Euclid of Alexandria', nameZh: '欧几里得', birthYear: -325, deathYear: -265, nationality: '古希腊/埃及', contributions: { zh: '"几何之父"，《几何原本》建立公理化体系', en: '"Father of Geometry", Elements established axiomatic system' } },
      { id: 'descartes', name: 'René Descartes', nameZh: '勒内·笛卡尔', birthYear: 1596, deathYear: 1650, nationality: '法国', contributions: { zh: '创立解析几何，将代数方法引入几何', en: 'Founded analytic geometry, introduced algebraic methods to geometry' } },
      { id: 'riemann', name: 'Bernhard Riemann', nameZh: '波恩哈德·黎曼', birthYear: 1826, deathYear: 1866, nationality: '德国', contributions: { zh: '黎曼几何创始人，奠定现代微分几何基础', en: 'Founder of Riemannian geometry, laid foundations for modern differential geometry' } },
      { id: 'poincare', name: 'Henri Poincaré', nameZh: '亨利·庞加莱', birthYear: 1854, deathYear: 1912, nationality: '法国', contributions: { zh: '拓扑学先驱，庞加莱猜想，动力系统几何方法', en: 'Pioneer of topology, Poincaré conjecture, geometric methods in dynamics' } },
      { id: 'grothendieck', name: 'Alexander Grothendieck', nameZh: '亚历山大·格罗滕迪克', birthYear: 1928, deathYear: 2014, nationality: '法国/德国', contributions: { zh: '现代代数几何重建者，概型理论，上同调方法', en: 'Rebuilder of modern algebraic geometry, scheme theory, cohomological methods' } }
    ],
    figures: [], references: [],
    relatedFields: ['algebra', 'analysis', 'topology', 'physics'], applications: ['physics', 'engineering', 'computer-graphics', 'architecture', 'navigation'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // ==================== 欧几里得几何 ====================
  {
    id: 'euclidean-geometry', slug: 'euclidean-geometry',
    names: { zh: '欧几里得几何', en: 'Euclidean Geometry' },
    descriptions: {
      zh: '基于欧几里得《几何原本》公理体系的经典几何学，研究平直空间中的点、线、面及其关系。',
      en: 'Classical geometry based on Euclid\'s Elements axiom system, studying points, lines, surfaces and their relations in flat space.'
    },
    level: 2, parentId: 'geometry', childIds: [],
    position: [0, 0, 0], size: 'large', color: '#22d3ee',
    tags: ['euclidean', 'classical', 'axiomatic'],
    basics: {
      definition: { zh: '建立在五条公设之上的平面和立体几何体系，其中平行公设（第五公设）是其核心特征。', en: 'Plane and solid geometry built on five postulates, with the parallel postulate (5th) as its defining feature.' },
      scope: { zh: '平面几何、立体几何、三角形全等与相似、圆的性质、面积与体积计算。', en: 'Plane geometry, solid geometry, triangle congruence & similarity, circle properties, area and volume calculations.' },
      importance: 5, difficulty: 2,
      history: [
        { year: -300, event: { zh: '《几何原本》成书', en: "Elements compiled" }, figure: 'euclid' },
        { year: 1794, event: { zh: '勒让德《几何原理》', en: "Legendre's Elements of Geometry" } }
      ],
      tags: ['euclidean']
    },
    principles: [
      { id: 'egp1', title: { zh: '平行公设', en: 'Parallel Postulate' }, description: { zh: '过直线外一点有且只有一条平行线', en: 'Given a line and a point not on it, exactly one parallel line exists' }, importance: 3 },
      { id: 'egp2', title: { zh: '全等公理', en: 'Congruence Axioms' }, description: { zh: 'SAS、ASA、SSS等三角形全等判定准则', en: 'Triangle congruence criteria: SAS, ASA, SSS' }, importance: 2 }
    ],
    formulas: [
      { id: 'triangle-area', name: { zh: '三角形面积（海伦公式）', en: "Heron's Formula" }, latex: 'S = \\sqrt{s(s-a)(s-b)(s-c)}, \\quad s=\\frac{a+b+c}{2}', description: { zh: '已知三边长求三角形面积', en: 'Area of triangle given three side lengths' }, variables: [
        { symbol: 'a,b,c', description: { zh: '三边长', en: 'Side lengths' } },
        { symbol: 's', description: { zh: '半周长', en: 'Semiperimeter' } }
      ], applications: [{ zh: '测量、工程制图', en: 'Surveying, engineering drawing' }], difficulty: 2 },
      { id: 'circle-area', name: { zh: '圆的面积公式', en: 'Circle Area' }, latex: 'S = \\pi r^2', description: { zh: '圆面积等于圆周率乘以半径平方', en: 'Area of a circle equals pi times radius squared' }, variables: [
        { symbol: 'r', description: { zh: '半径', en: 'Radius' } }
      ], applications: [{ zh: '圆形设计、面积计算', en: 'Circular design, area calculation' }], difficulty: 1 }
    ],
    pioneers: [
      { id: 'euclid', name: 'Euclid of Alexandria', nameZh: '欧几里得', birthYear: -325, deathYear: -265, nationality: '古希腊/埃及', contributions: { zh: '系统化希腊几何知识，建立公理演绎体系', en: 'Systematized Greek geometric knowledge, established axiomatic deductive system' } },
      { id: 'archimedes', name: 'Archimedes', nameZh: '阿基米德', birthYear: -287, deathYear: -212, nationality: '古希腊/叙拉古', contributions: { zh: '穷竭法求面积体积，圆周率近似', en: 'Method of exhaustion for areas/volumes, pi approximation' } }
    ],
    figures: [], references: [],
    relatedFields: ['non-euclidean', 'analytic-geometry'], applications: ['education', 'architecture', 'surveying'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // ==================== 非欧几何 ====================
  {
    id: 'non-euclidean', slug: 'non-euclidean',
    names: { zh: '非欧几何', en: 'Non-Euclidean Geometry' },
    descriptions: {
      zh: '修改或放弃欧几里得平行公设而产生的几何体系，包括双曲几何和椭圆几何（黎曼几何），是广义相对论的数学基础。',
      en: 'Geometries arising from modifying or rejecting Euclid\'s parallel postulate, including hyperbolic and elliptic geometries. The mathematical foundation of general relativity.'
    },
    level: 2, parentId: 'geometry', childIds: [],
    position: [0, 0, 0], size: 'medium', color: '#0891b2',
    tags: ['non-euclidean', 'hyperbolic', 'elliptic'],
    basics: {
      definition: { zh: '否定欧几里得第五公设（平行公设）而建立的几何体系。双曲几何中过直线外一点有无穷多条平行线；椭圆几何中没有平行线。', en: 'Geometric systems that negate Euclid\'s fifth (parallel) postulate. Hyperbolic geometry has infinitely many parallels; elliptic has none.' },
      scope: { zh: '罗巴切夫斯基几何（双曲）、黎曼几何（椭圆/球面）、常曲率空间模型。', en: 'Lobachevskian geometry (hyperbolic), Riemannian geometry (elliptic/spherical), constant curvature models.' },
      importance: 5, difficulty: 4,
      history: [
        { year: 1829, event: { zh: '罗巴切夫斯基发表非欧几何', en: 'Lobachevsky publishes non-Euclidean geometry' } },
        { year: 1832, event: { zh: '波尔约独立发现双曲几何', en: 'Bolyai independently discovers hyperbolic geometry' } },
        { year: 1854, event: { zh: '黎曼演讲——扩展到任意维流形', en: "Riemann's lecture — extends to arbitrary manifolds" }, figure: 'riemann' },
        { year: 1915, event: { zh: '爱因斯坦用黎曼几何构建广义相对论', en: 'Einstein uses Riemannian geometry for GR' } }
      ],
      tags: ['non-euclidean']
    },
    principles: [
      { id: 'negp1', title: { zh: '角度亏缺与过剩', en: 'Angle Deficit & Excess' }, description: { zh: '双曲几何中三角形内角和小于180°，椭圆几何中大于180°', en: 'Triangle angle sum < 180° in hyperbolic, > 180° in elliptic' }, importance: 3 }
    ],
    formulas: [
      { id: 'gauss-bonnet', name: { zh: '高斯-博内定理', en: 'Gauss-Bonnet Theorem' }, latex: '\\int_M K\\,dA + \\int_{\\partial M} k_g\\,ds = 2\\pi\\chi(M)', description: { zh: '曲面上的高斯曲率积分与欧拉示性数相关', en: 'Integral of Gaussian curvature over a surface relates to Euler characteristic' }, variables: [
        { symbol: 'K', description: { zh: '高斯曲率', en: 'Gaussian curvature' } },
        { symbol: 'k_g', description: { zh: '测地曲率', en: 'Geodesic curvature' } },
        { symbol: '\\chi(M)', description: { zh: '欧拉示性数', en: 'Euler characteristic' } }
      ], applications: [{ zh: '拓扑学、微分几何', en: 'Topology, differential geometry' }], difficulty: 4 }
    ],
    pioneers: [
      { id: 'lobachevsky', name: 'Nikolai Lobachevsky', nameZh: '尼古拉·罗巴切夫斯基', birthYear: 1792, deathYear: 1856, nationality: '俄国', contributions: { zh: '双曲几何的独立发现者之一', en: 'Independent co-discoverer of hyperbolic geometry' } },
      { id: 'bolyai', name: 'János Bolyai', nameZh: '亚诺什·波尔约', birthYear: 1802, deathYear: 1860, nationality: '匈牙利', contributions: { zh: '绝对空间的科学——双曲几何', en: 'The Science of Absolute Space — hyperbolic geometry' } },
      { id: 'riemann', name: 'Bernhard Riemann', nameZh: '波恩哈德·黎曼', birthYear: 1826, deathYear: 1866, nationality: '德国', contributions: { zh: '将非欧几何推广到n维流形', en: 'Extended non-Euclidean geometry to n-dimensional manifolds' } }
    ],
    figures: [], references: [],
    relatedFields: ['differential-geometry', 'topology', 'physics'], applications: ['relativity', 'cosmology'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // ==================== 射影几何 ====================
  {
    id: 'projective-geometry', slug: 'projective-geometry',
    names: { zh: '射影几何', en: 'Projective Geometry' },
    descriptions: {
      zh: '研究图形在射影变换下不变性质的几何分支，引入无穷远点和齐次坐标，统一处理多种几何。',
      en: 'Branch studying properties invariant under projective transformations. Introduces points at infinity and homogeneous coordinates, unifying multiple geometries.'
    },
    level: 2, parentId: 'geometry', childIds: [],
    position: [0, 0, 0], size: 'small', color: '#06b6d4',
    tags: ['projective', 'invariant', 'homogeneous'],
    basics: {
      definition: { zh: '通过中心投影研究几何图形性质的学科，核心概念包括交比、对偶性、无穷远元素。', en: 'Study of geometric properties via central projection. Key concepts: cross-ratio, duality, elements at infinity.' },
      scope: { zh: '射影平面、交比不变量、对偶原理、帕斯卡/布里昂香定理、齐次坐标。', en: 'Projective planes, cross-ratio invariance, duality principle, Pascal/Brianchon theorems, homogeneous coordinates.' },
      importance: 4, difficulty: 3,
      history: [
        { year: 1639, event: { zh: '德萨格《圆锥曲线论稿》— 射影几何萌芽', en: "Desargues' Brouillon Project — origins of projective geometry" } },
        { year: 1822, event: { zh: '彭赛列《论图形的射影性质》', en: "Poncelet's Traité des propriétés projectives" } },
        { year: 1872, event: { zh: '克莱因埃尔朗根纲领——用变换群分类几何', en: "Klein's Erlangen Program — classifies geometries by transformation groups" } }
      ],
      tags: []
    },
    principles: [
      { id: 'prjp1', title: { zh: '交比不变性', en: 'Cross-Ratio Invariance' }, description: { zh: '四个共线的点的交比在射影变换下保持不变', en: 'The cross-ratio of four collinear points is invariant under projective transformations' }, importance: 3 },
      { id: 'prjp2', title: { zh: '点线对偶', en: 'Point-Line Duality' }, description: { zh: '射影几何中的任何定理都有其对偶命题', en: 'Every theorem in projective geometry has a dual statement' }, importance: 3 }
    ],
    formulas: [
      { id: 'cross-ratio', name: { zh: '交比', en: 'Cross-Ratio' }, latex: '(A,B;C,D) = \\frac{AC \\cdot BD}{AD \\cdot BC}', description: { zh: '四点交比的定义式', en: 'Definition of cross-ratio for four points' }, variables: [
        { symbol: 'A,B,C,D', description: { zh: '共线四点', en: 'Four collinear points' } }
      ], applications: [{ zh: '计算机视觉、摄影测量', en: 'Computer vision, photogrammetry' }], difficulty: 3 }
    ],
    pioneers: [
      { id: 'desargues', name: 'Girard Desargues', nameZh: '吉拉德·德萨格', birthYear: 1591, deathYear: 1661, nationality: '法国', contributions: { zh: '射影几何创始人，德萨格定理', en: 'Founder of projective geometry, Desargues theorem' } },
      { id: 'poncelet', name: 'Jean-Victor Poncelet', nameZh: '让-维克托·彭赛列', birthYear: 1788, deathYear: 1867, nationality: '法国', contributions: { zh: '射影几何的系统化发展', en: 'Systematic development of projective geometry' } },
      { id: 'klein', name: 'Felix Klein', nameZh: '菲利克斯·克莱因', birthYear: 1849, deathYear: 1925, nationality: '德国', contributions: { zh: '埃尔朗根纲领，用群论统一几何', en: "Erlangen Program, unified geometry via group theory" } }
    ],
    figures: [], references: [],
    relatedFields: ['algebraic-geometry', 'computer-vision'], applications: ['computer-graphics', 'vision', 'architecture'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // ==================== 解析几何 ====================
  {
    id: 'analytic-geometry', slug: 'analytic-geometry',
    names: { zh: '解析几何', en: 'Analytic Geometry' },
    descriptions: {
      zh: '通过坐标系用代数方程描述几何图形的方法论，由笛卡尔和费马创立，实现了几何与代数的统一。',
      en: 'Methodology describing geometric figures with algebraic equations via coordinate systems. Founded by Descartes and Fermat, achieving unification of geometry and algebra.'
    },
    level: 2, parentId: 'geometry', childIds: [],
    position: [0, 0, 0], size: 'medium', color: '#22d3ee',
    tags: ['analytic', 'coordinate', 'algebraic-method'],
    basics: {
      definition: { zh: '利用坐标系（直角坐标、极坐标等）将几何问题转化为代数问题求解的方法。', en: 'Method that transforms geometric problems into algebraic problems using coordinate systems (Cartesian, polar, etc.).' },
      scope: { zh: '平面/空间坐标系、二次曲线与曲面、向量法、参数方程、坐标变换。', en: 'Planar/spatial coordinate systems, conics & quadrics, vector methods, parametric equations, coordinate transformations.' },
      importance: 5, difficulty: 2,
      history: [
        { year: 1637, event: { zh: '笛卡尔《几何学》— 坐标方法诞生', en: "Descartes' La Géométrie — birth of coordinate method" }, figure: 'descartes' },
        { year: 1670, event: { zh: '费马的工作（死后发表）', en: "Fermat's work (posthumous)" } },
        { year: 1797, event: { zh: '卡西尼卵形线等特殊曲线研究', en: 'Study of special curves like Cassini ovals' } }
      ],
      tags: ['analytic']
    },
    principles: [
      { id: 'agp1', title: { zh: '坐标映射', en: 'Coordinate Mapping' }, description: { zh: '空间中的点一一对应于有序数组', en: 'Points in space correspond bijectively to ordered tuples' }, importance: 3 }
    ],
    formulas: [
      { id: 'line-equation', name: { zh: '直线方程', en: 'Line Equation' }, latex: 'y = kx + b \\quad \\text{或} \\quad \\frac{x-x_0}{m} = \\frac{y-y_0}{n} = \\frac{z-z_0}{p}', description: { zh: '平面和空间中直线的代数表示', en: 'Algebraic representation of lines in plane and space' }, variables: [
        { symbol: 'k,b', description: { zh: '斜率和截距', en: 'Slope and intercept' } },
        { symbol: '(x_0,y_0,z_0)', description: { zh: '定点', en: 'Point on line' } }
      ], applications: [{ zh: '线性规划、路径规划', en: 'Linear programming, path planning' }], difficulty: 1 },
      { id: 'conic-general', name: { zh: '一般二次曲线', en: 'General Conic Section' }, latex: 'Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0', description: { zh: '圆锥曲线的一般方程（判别式决定类型）', en: 'General equation of conic sections (discriminant determines type)' }, variables: [
        { symbol: '\\Delta=B^2-4AC', description: { zh: '判别式', en: 'Discriminant' } }
      ], applications: [{ zh: '轨道力学、光学设计', en: 'Orbital mechanics, optical design' }], difficulty: 2 }
    ],
    pioneers: [
      { id: 'descartes', name: 'René Descartes', nameZh: '勒内·笛卡尔', birthYear: 1596, deathYear: 1650, nationality: '法国', contributions: { zh: '解析几何创始人，直角坐标系', en: 'Founder of analytic geometry, Cartesian coordinates' } },
      { id: 'fermat', name: 'Pierre de Fermat', nameZh: '皮埃尔·德·费马', birthYear: 1607, deathYear: 1665, nationality: '法国', contributions: { zh: '独立发明坐标几何方法', en: 'Independently invented coordinate geometry' } }
    ],
    figures: [], references: [],
    relatedFields: ['linear-algebra', 'algebra', 'calculus'], applications: ['physics', 'engineering', 'graphics', 'robotics'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // ==================== 微分几何（作为geometry子节点，简化版） ====================
  {
    id: 'differential-geometry-child', slug: 'differential-geometry-intro',
    names: { zh: '微分几何入门', en: 'Differential Geometry (Intro)' },
    descriptions: {
      zh: '用微积分方法研究曲线、曲面及流形的局部与整体性质的几何分支。详见微分几何主星系。',
      en: 'Branch using calculus to study local/global properties of curves, surfaces, and manifolds. See main differential galaxy.'
    },
    level: 2, parentId: 'geometry', childIds: [],
    position: [0, 0, 0], size: 'small', color: '#0e7490',
    tags: ['differential', 'curvature', 'manifold'],
    basics: {
      definition: { zh: '应用微积分工具分析光滑曲线和曲面的几何性质，如曲率、挠率、第一/第二基本形式等。', en: 'Applies calculus tools to analyze geometric properties of smooth curves and surfaces: curvature, torsion, first/second fundamental forms.' },
      scope: { zh: '曲线论、曲面论、流形初步、联络与协变导数。', en: 'Curve theory, surface theory, manifold introduction, connections and covariant derivatives.' },
      importance: 4, difficulty: 4,
      history: [
        { year: 1827, event: { zh: '高斯《关于曲面的一般研究》', en: "Gauss' Disquisitiones generales circa superficies curvas" } },
        { year: 1854, event: { zh: '黎曼《论几何基础的假设》', en: "Riemann's Über die Hypothesen" } }
      ],
      tags: []
    },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['differential-geometry', 'topology', 'analysis'], applications: ['general-relativity', 'string-theory'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // ==================== 代数几何（作为geometry子节点，简化版） ====================
  {
    id: 'algebraic-geometry-child', slug: 'algebraic-geometry-intro',
    names: { zh: '代数几何入门', en: 'Algebraic Geometry (Intro)' },
    descriptions: {
      zh: '用代数方法（多项式、环、域）研究几何对象的分支。详见代数几何主星系。',
      en: 'Branch studying geometric objects using algebraic methods (polynomials, rings, fields). See main algebraic geometry galaxy.'
    },
    level: 2, parentId: 'geometry', childIds: [],
    position: [0, 0, 0], size: 'small', color: '#155e75',
    tags: ['algebraic', 'variety', 'scheme'],
    basics: {
      definition: { zh: '研究多项式方程组的解集（代数簇）的几何性质，是代数与几何的深度交叉领域。', en: 'Studies geometric properties of solution sets (varieties) of polynomial equation systems. Deep intersection of algebra and geometry.' },
      scope: { zh: '仿射与射影簇、代数曲线与曲面、交换代数工具、概型初步。', en: 'Affine & projective varieties, algebraic curves & surfaces, commutative algebra tools, scheme introduction.' },
      importance: 4, difficulty: 5,
      history: [
        { year: 1946, event: { zh: '韦伊猜想的提出', en: 'Weil conjectures formulated' } },
        { year: 1960, event: { zh: '格罗滕迪克重建代数几何', en: 'Grothendieck rebuilds algebraic geometry' }, figure: 'grothendieck' }
      ],
      tags: []
    },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['algebraic-geometry', 'commutative-algebra', 'numbertheory'], applications: ['cryptography', 'coding-theory', 'string-theory'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // ==================== 离散几何 ====================
  {
    id: 'discrete-geometry', slug: 'discrete-geometry',
    names: { zh: '离散几何', en: 'Discrete / Combinatorial Geometry' },
    descriptions: {
      zh: '研究离散点集、组合结构和凸性的几何分支，与组合数学深度交叉。',
      en: 'Branch studying discrete point sets, combinatorial structures, and convexity. Deeply intersects with combinatorics.'
    },
    level: 2, parentId: 'geometry', childIds: [],
    position: [0, 0, 0], size: 'small', color: '#06b6d4',
    tags: ['discrete', 'combinatorial', 'packing'],
    basics: {
      definition: { zh: '研究由有限或可数个离散元素构成的几何对象及其排列、覆盖等问题。', en: 'Studies geometric objects composed of finite or countably many discrete elements and their arrangements, coverings, etc.' },
      scope: { zh: '密铺问题、堆积问题、欧拉图、拉姆塞几何、几何计数。', en: 'Tessellations, packing problems, Eulerian graphs, geometric Ramsey theory, geometric enumeration.' },
      importance: 3, difficulty: 3,
      history: [
        { year: 1890, event: { zh: '希尔伯特第18问题：密铺与球堆积', en: "Hilbert's 18th problem: tessellations and sphere packing" } },
        { year: 1998, event: { zh: '黑尔斯证明开普勒猜想', en: 'Hales proves Kepler conjecture' } }
      ],
      tags: []
    },
    principles: [
      { id: 'dgp1', title: { zh: '密铺条件', en: 'Tessellation Condition' }, description: { zh: '正n边形能密铺平面的充要条件：360/n为整数', en: 'Regular n-gon tessellates iff 360/n is an integer' }, importance: 2 }
    ],
    formulas: [
      { id: 'pick-theorem', name: { zh: 'Pick定理', en: "Pick's Theorem" }, latex: 'S = I + \\frac{B}{2} - 1', description: { zh: '格点多边形面积的简单计算公式', en: 'Simple area formula for lattice polygons' }, variables: [
        { symbol: 'I', description: { zh: '内部格点数', en: 'Interior lattice points' } },
        { symbol: 'B', description: { zh: '边界格点数', en: 'Boundary lattice points' } }
      ], applications: [{ zh: '格点几何、离散优化', en: 'Lattice geometry, discrete optimization' }], difficulty: 2 }
    ],
    pioneers: [
      { id: 'pick', name: 'Georg Alexander Pick', nameZh: '乔治·亚历山大·皮克', birthYear: 1859, deathYear: 1942, nationality: '奥地利', contributions: { zh: 'Pick定理——格点多边形面积', en: "Pick's theorem — area of lattice polygons" } }
    ],
    figures: [], references: [],
    relatedFields: ['combinatorics', 'convex-geometry', 'computational-geometry'], applications: ['coding', 'crystallography', 'materials-science'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // ==================== 凸几何 ====================
  {
    id: 'convex-geometry', slug: ' convex-geometry',
    names: { zh: '凸几何', en: 'Convex Geometry' },
    descriptions: {
      zh: '研究凸集合及其性质的几何分支，在优化理论和泛函分析中有重要应用。',
      en: 'Branch studying convex sets and their properties. Important applications in optimization theory and functional analysis.'
    },
    level: 2, parentId: 'geometry', childIds: [],
    position: [0, 0, 0], size: 'small', color: '#0891b2',
    tags: ['convex', 'optimization', 'polytope'],
    basics: {
      definition: { zh: '研究凸集（对任意两点连线仍含于该集的集合）、凸函数和多面体的性质。', en: 'Studies convex sets (sets containing all line segments between any two points), convex functions, and polytopes.' },
      scope: { zh: '凸集分离定理、Minkowski和、Brunn-Minkowski理论、多面体组合。', en: 'Convex separation theorems, Minkowski sum, Brunn-Minkowski theory, polytope combinatorics.' },
      importance: 4, difficulty: 3,
      history: [
        { year: 1896, event: { zh: '闵可夫斯基《数的几何》', en: "Minkowski's Geometrie der Zahlen" } },
        { year: 1934, event: { zh: 'Brunn-Minkowski不等式的严格证明', en: 'Rigorous proof of Brunn-Minkowski inequality' } }
      ],
      tags: []
    },
    principles: [
      { id: 'cgp1', title: { zh: '超平面分离定理', en: 'Separating Hyperplane Theorem' }, description: { zh: '两个不交凸集可用超平面分离', en: 'Two disjoint convex sets can be separated by a hyperplane' }, importance: 3 }
    ],
    formulas: [
      { id: 'brunn-minkowski', name: { zh: 'Brunn-Minkowski不等式', en: 'Brunn-Minkowski Inequality' }, latex: 'Vol(A+B)^{1/n} \\geq Vol(A)^{1/n} + Vol(B)^{1/n}', description: { zh: '两个紧凸集Minkowski和的体积下界', en: 'Volume lower bound for Minkowski sum of two compact convex sets' }, variables: [
        { symbol: 'A,B', description: { zh: '紧凸集', en: 'Compact convex sets' } },
        { symbol: 'A+B', description: { zh: 'Minkowski和', en: 'Minkowski sum' } }
      ], applications: [{ zh: '等周不等式、几何测度论', en: 'Isoperimetric inequality, geometric measure theory' }], difficulty: 4 }
    ],
    pioneers: [
      { id: 'minkowski', name: 'Hermann Minkowski', nameZh: '赫尔曼·闵可夫斯基', birthYear: 1864, deathYear: 1909, nationality: '德国/立陶宛', contributions: { zh: '凸几何与数的几何奠基人，闵可夫斯基时空', en: 'Founder of convex geometry and geometry of numbers, Minkowski spacetime' } }
    ],
    figures: [], references: [],
    relatedFields: ['discrete-geometry', 'optimization', 'functional-analysis'], applications: ['optimization', 'economics', 'computer-graphics'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // ==================== 计算几何 ====================
  {
    id: 'computational-geometry', slug: 'computational-geometry',
    names: { zh: '计算几何', en: 'Computational Geometry' },
    descriptions: {
      zh: '用算法解决几何问题的交叉学科，是计算机图形学、机器人和地理信息系统的核心支撑技术。',
      en: 'Interdisciplinary field solving geometric problems with algorithms. Core technology for computer graphics, robotics, and GIS.'
    },
    level: 2, parentId: 'geometry', childIds: [],
    position: [0, 0, 0], size: 'medium', color: '#06b6d4',
    tags: ['algorithm', 'computational', 'gis'],
    basics: {
      definition: { zh: '设计和分析处理几何数据的算法，关注效率（时间/空间复杂度）和数值稳定性。', en: 'Designing and analyzing algorithms for processing geometric data, focusing on efficiency (time/space complexity) and numerical stability.' },
      scope: { zh: '凸包算法、Voronoi图/Delaunay三角剖分、线段相交、最近邻查询、多边形操作、运动规划。', en: 'Convex hull algorithms, Voronoi diagrams/Delaunay triangulation, segment intersection, nearest neighbor queries, polygon operations, motion planning.' },
      importance: 4, difficulty: 3,
      history: [
        { year: 1975, event: { zh: 'Shamos和Hoey开创计算几何领域', en: 'Shamos and Hoey found computational geometry' } },
        { year: 1985, event: { zh: 'Preparata-Shamos经典教材', en: "Preparata-Shamos classic textbook" } },
        { year: 2000, event: { zh: 'CGAL库发布——通用计算几何算法库', en: 'CGAL library release — Computational Geometry Algorithms Library' } }
      ],
      tags: ['cs', 'algorithm']
    },
    principles: [
      { id: 'cgp1', title: { zh: '计算复杂度', en: 'Computational Complexity' }, description: { zh: '几何算法通常追求O(n log n)时间复杂度', en: 'Geometric algorithms typically aim for O(n log n) time complexity' }, importance: 3 },
      { id: 'cgp2', title: { zh: '数值鲁棒性', en: 'Numerical Robustness' }, description: { zh: '浮点误差可能导致算法失败，需精确算术或符号计算', en: 'Floating-point errors can break algorithms; exact arithmetic or symbolic computation may be needed' }, importance: 2 }
    ],
    formulas: [
      { id: 'convex-hull-complexity', name: { zh: '凸包复杂度下界', en: 'Convex Hull Lower Bound' }, latex: '\\Omega(n \\log n)', description: { zh: '基于排序归约，凸包算法的最坏情况下界', en: 'Worst-case lower bound for convex hull algorithms via sorting reduction' }, variables: [
        { symbol: 'n', description: { zh: '输入点数', en: 'Number of input points' } }
      ], applications: [{ zh: '算法设计基准', en: 'Algorithm design benchmark' }], difficulty: 2 }
    ],
    pioneers: [
      { id: 'shamos', name: 'Michael Ian Shamos', nameZh: '迈克尔·伊恩·沙莫斯', birthYear: 1947, nationality: '美国', contributions: { zh: '计算几何领域的开创者', en: 'Founder of computational geometry field' } }
    ],
    figures: [], references: [],
    relatedFields: ['computer-graphics', 'robotics', 'gis'], applications: ['cad/cam', 'gis', 'robotics', 'cg', 'pattern-recognition'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // ==================== 代数几何主星系 ====================
  {
    id: 'algebraic-geometry', slug: 'algebraic-geometry',
    names: { zh: '代数几何', en: 'Algebraic Geometry' },
    descriptions: {
     zh: '研究多项式零点集（代数簇）的几何性质，是现代数学最深刻活跃的分支之一，与数论、拓扑学和理论物理深度交织。',
      en: 'Studies geometric properties of zero sets of polynomials (algebraic varieties). One of modern mathematics\' most profound and active fields, deeply intertwined with number theory, topology, and theoretical physics.'
    },
    level: 1, parentId: null,
    childIds: ['scheme-theory', 'birational-geometry'],
    position: [20, 14, -8], size: 'large', color: '#155e75',
    tags: ['algebraic-geometry', 'variety', 'scheme'],
    basics: {
      definition: { zh: '用代数（特别是交换代数）工具研究几何对象。核心对象包括仿射簇、射影簇、概型和层。', en: 'Studies geometric objects using algebra (especially commutative algebra). Core objects: affine/projective varieties, schemes, sheaves.' },
      scope: { zh: '代数曲线、代数曲面、阿贝尔簇、概型理论、层上同调、 motivic homotopy、 tropical几何。', en: 'Algebraic curves, surfaces, Abelian varieties, scheme theory, sheaf cohomology, motivic homotopy, tropical geometry.' },
      importance: 5, difficulty: 5,
      history: [
        { year: 1849, event: { zh: '黎曼研究代数函数与黎曼曲面', en: 'Riemann studies algebraic functions and Riemann surfaces' }, figure: 'riemann' },
        { year: 1946, event: { zh: '韦伊猜想——联系几何与有限域', en: 'Weil conjectures — connects geometry with finite fields' } },
        { year: 1960, event: { zh: '格罗滕迪克的概型革命', en: "Grothendieck's scheme revolution" }, figure: 'grothendieck' },
        { year: 1974, event: { zh: 'Deligne证明韦伊猜想', en: 'Deligne proves Weil conjectures' } }
      ],
      tags: ['algebraic-geometry']
    },
    principles: [
      { id: 'agp1', title: { zh: '代数-几何对应', en: 'Algebra-Geometry Correspondence' }, description: { zh: '代数簇的理想与坐标环之间存在反变函子关系', en: 'Contravariant functorial relationship between ideal of variety and its coordinate ring' }, importance: 3 },
      { id: 'agp2', title: { zh: '层的上同调', en: 'Sheaf Cohomology' }, description: { zh: '用层和上同调理论捕捉代数簇的全局信息', en: 'Use sheaves and cohomology to capture global information about varieties' }, importance: 3 }
    ],
    formulas: [
      { id: 'bezout', name: { zh: '贝祖定理', en: "Bézout's Theorem" }, latex: '\\sum_{i} m_i(P_i) = \\deg(C_1) \\cdot \\deg(C_2)', description: { zh: '射影平面上两条代数曲线的交点个数（计重数）等于其次数之积', en: 'Intersection count (with multiplicity) of two projective plane curves equals product of their degrees' }, variables: [
        { symbol: 'C_1, C_2', description: { zh: '两条代数曲线', en: 'Two algebraic curves' } },
        { symbol: 'm_i(P_i)', description: { zh: '交点重数', en: 'Intersection multiplicity' } }
      ], applications: [{ zh: '曲线交点计算、奇点分析', en: 'Curve intersection calculation, singularity analysis' }], difficulty: 3 },
      { id: 'riemann-roch', name: { zh: 'Riemann-Roch定理', en: 'Riemann-Roch Theorem' }, latex: '\\dim H^0(D) - \\dim H^1(D) = \\deg(D) + 1 - g', description: { zh: '紧黎曼曲线上亚纯函数空间的维数公式', en: 'Dimension formula for meromorphic function spaces on compact Riemann surfaces' }, variables: [
        { symbol: 'D', description: { zh: '除子', en: 'Divisor' } },
        { symbol: 'g', description: { zh: '亏格', en: 'Genus' } }
      ], applications: [{ zh: '代数曲线分类、编码理论', en: 'Algebraic curve classification, coding theory' }], difficulty: 5 }
    ],
    pioneers: [
      { id: 'riemann', name: 'Bernhard Riemann', nameZh: '波恩哈德·黎曼', birthYear: 1826, deathYear: 1866, nationality: '德国', contributions: { zh: '黎曼曲面理论——代数几何的起源之一', en: 'Riemann surface theory — one origin of algebraic geometry' } },
      { id: 'noether', name: 'Emmy Noether', nameZh: '艾米·诺特', birthYear: 1882, deathYear: 1935, nationality: '德国', contributions: { zh: '抽象代数奠基人，代数几何的代数基础', en: 'Founder of abstract algebra, algebraic foundation of algebraic geometry' } },
      { id: 'zariski', name: 'Oscar Zariski', nameZh: '奥斯卡·扎里斯基', birthYear: 1899, deathYear: 1986, nationality: '美国/俄罗斯', contributions: { zh: '代数几何的代数化，Zariski拓扑', en: 'Algebraization of algebraic geometry, Zariski topology' } },
      { id: 'weil', name: 'André Weil', nameZh: '安德烈·韦伊', birthYear: 1906, deathYear: 1998, nationality: '法国', contributions: { zh: '韦伊猜想，代数几何基础工作', en: 'Weil conjectures, foundational work in algebraic geometry' } },
      { id: 'serre', name: 'Jean-Pierre Serre', nameZh: '让-皮埃尔·塞尔', birthYear: 1926, nationality: '法国', contributions: { zh: '层上同调、GAGA原理、菲尔兹奖最年轻得主', en: 'Sheaf cohomology, GAGA principle, youngest Fields medalist' } },
      { id: 'grothendieck', name: 'Alexander Grothendieck', nameZh: '亚历山大·格罗滕迪克', birthYear: 1928, deathYear: 2014, nationality: '法国/德国', contributions: { zh: '概型理论、上同调理论、Motives、20世纪代数几何革命', en: 'Scheme theory, cohomology theories, Motives, 20th century AG revolution' } },
      { id: 'deligne', name: 'Pierre Deligne', nameZh: '皮埃尔·德利涅', birthYear: 1944, nationality: '比利时', contributions: { zh: '证明韦伊猜想，霍奇理论', en: 'Proved Weil conjectures, Hodge theory' } }
    ],
    figures: [], references: [],
    relatedFields: ['numbertheory', 'commutative-algebra', 'topology', 'complex-analysis'], applications: ['cryptography', 'coding-theory', 'string-theory', 'mirror-symmetry'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // ==================== 概型理论 ====================
  {
    id: 'scheme-theory', slug: 'scheme-theory',
    names: { zh: '概型理论', en: 'Scheme Theory' },
    descriptions: {
      zh: '格罗滕迪克创立的现代代数几何基础框架，将代数几何推广到最一般的交换环情形，实现几何与代数的完美统一。',
      en: "Grothendieck's foundational framework for modern algebraic geometry, extending it to arbitrary commutative rings, achieving perfect unity of geometry and algebra."
    },
    level: 2, parentId: 'algebraic-geometry', childIds: [],
    position: [0, 0, 0], size: 'medium', color: '#155e75',
    tags: ['scheme', 'sheaf', 'cohomology'],
    basics: {
      definition: { zh: '概型是带环层结构的局部环谱空间。仿射概型对应交换环的素谱，是最基本的几何对象。', en: 'A scheme is a locally ringed space with a structure sheaf. Affine schemes correspond to spectra of commutative rings.' },
      scope: { zh: '仿射概型与射影概型、态射、纤维积、可分/平坦态射、上同调理论。', en: 'Affine & projective schemes, morphisms, fiber products, separable/flat morphisms, cohomology theories.' },
      importance: 5, difficulty: 5,
      history: [
        { year: 1960, event: { zh: '《代数几何基础》(EGA)开始出版', en: 'Éléments de Géométrie Algébrique (EGA) publication begins' }, figure: 'grothendieck' },
        { year: 1967, event: { zh: '《凝聚代数层》(SGA)系列', en: 'Séminaire de Géométrie Algébrique (SGA) series' } }
      ],
      tags: []
    },
    principles: [
      { id: 'stp1', title: { zh: '函子性观点', en: 'Functorial Viewpoint' }, description: { zh: '通过概型的点函子（取值于所有环）来研究概型', en: 'Study schemes via their functor of points (valued in all rings)' }, importance: 3 },
      { id: 'stp2', title: { zh: '层与上同调', en: 'Sheaves and Cohomology' }, description: { zh: '凝聚上同调和étale上同调是研究概型的核心工具', en: 'Coherent and étale cohomologies are core tools for studying schemes' }, importance: 3 }
    ],
    formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['commutative-algebra', 'category-theory', 'topology'], applications: ['numbertheory-arithmetic', 'representation-theory'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // ==================== 双有理几何 ====================
  {
    id: 'birational-geometry', slug: 'birational-geometry',
    names: { zh: '双有理几何', en: 'Birational Geometry' },
    descriptions: {
      zh: '研究代数簇之间双有理映射的分类与极小模型问题，极小模型纲领(MMP)是该领域的核心框架。',
      en: 'Studies classification and minimal model problems of birational maps between varieties. Minimal Model Program (MMP) is the core framework.'
    },
    level: 2, parentId: 'algebraic-geometry', childIds: [],
    position: [0, 0, 0], size: 'medium', color: '#164e63',
    tags: ['birational', 'mmp', 'classification'],
    basics: {
      definition: { zh: '双有理映射是有理映射的同构限制在某个开稠子集上。双有理等价的簇具有相同的有理函数域。', en: 'Birational maps are rational maps that are isomorphisms on some open dense subset. Birationally equivalent varieties share the same function field.' },
      scope: { zh: '极小模型纲领(MMP)、翻转、终止定理、Fano簇、一般型簇、丰沛除子。', en: 'Minimal Model Program (MMP), flips, termination theorem, Fano varieties, varieties of general type, ample divisors.' },
      importance: 4, difficulty: 5,
      history: [
        { year: 1980, event: { zh: 'Mori的极小模型理论突破', en: "Mori's breakthrough in minimal model theory" } },
        { year: 2006, event: { zh: '三维MMP完成', en: '3-fold MMP completed' } },
        { year: 2019, event: { zh: 'Birkar因MMP获菲尔兹奖', en: 'Birkar awarded Fields Medal for MMP' } }
      ],
      tags: []
    },
    principles: [
      { id: 'bgp1', title: { zh: '锥定理', en: 'Cone Theorem' }, description: { zh: '代数簇的 nef 锥可以用极值射线逼近', en: 'Nef cone can be approximated by extremal rays' }, importance: 3 }
    ],
    formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['complex-geometry', 'differential-geometry', 'singularity-theory'], applications: ['classification', 'string-theory-compactification'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // ==================== 微分几何主星系 ====================
  {
    id: 'differential-geometry-main', slug: 'differential-geometry',
    names: { zh: '微分几何', en: 'Differential Geometry' },
    descriptions: {
      zh: '用微积分和分析工具研究光滑流形的几何性质，是广义相对论、规范场论和弦理论的数学语言。',
      en: 'Studies geometric properties of smooth manifolds using calculus and analysis. Mathematical language of general relativity, gauge theory, and string theory.'
    },
    level: 1, parentId: null,
    childIds: ['riemannian-geometry', 'symplectic-geometry', 'complex-manifolds'],
    position: [18, 2, -15], size: 'large', color: '#0e7490',
    tags: ['differential-geometry', 'manifold', 'curvature'],
    basics: {
      definition: { zh: '研究光滑流形（局部像欧氏空间的拓扑空间）及其上的附加结构（度量、联络、张量场）。核心概念包括曲率、联络、测地线。', en: 'Studies smooth manifolds (locally Euclidean spaces) with additional structures (metrics, connections, tensor fields). Core concepts: curvature, connection, geodesics.' },
      scope: { zh: '黎曼几何、辛几何、复几何、芬斯勒几何、次黎曼几何、Kähler几何。', en: 'Riemannian geometry, symplectic geometry, complex geometry, Finsler geometry, sub-Riemannian geometry, Kähler geometry.' },
      importance: 5, difficulty: 4,
      history: [
        { year: 1827, event: { zh: '高斯《曲面论》——内在曲率的绝妙定理', en: "Gauss' Theorema Egregrium — intrinsic curvature" } },
        { year: 1854, event: { zh: '黎曼就职演说——n维流形基础', en: "Riemann's habilitation lecture — n-manifold foundations" }, figure: 'riemann' },
        { year: 1915, event: { zh: '爱因斯坦用黎曼几何建立广义相对论', en: 'Einstein uses Riemannian geometry for General Relativity' } },
        { year: 1970, event: { zh: '阿蒂亚-辛格指标定理', en: 'Atiyah-Singer index theorem' } }
      ],
      tags: ['differential-geometry']
    },
    principles: [
      { id: 'dgp1', title: { zh: '曲率张量', en: 'Curvature Tensor' }, description: { zh: '刻画空间弯曲程度的核心对象，包括黎曼张量、里奇张量和标量曲率', en: 'Core object measuring space curvature: Riemann tensor, Ricci tensor, scalar curvature' }, importance: 3 },
      { id: 'dgp2', title: { zh: '测地线', en: 'Geodesic' }, description: { zh: '流形上"最短"路径的推广，满足测地线方程', en: 'Generalization of shortest paths; satisfies geodesic equation' }, importance: 3 },
      { id: 'dgp3', title: { zh: '联络', en: 'Connection' }, description: { zh: '定义流形上矢量场的平行移动和协变导数', en: 'Defines parallel transport and covariant derivative of vector fields' }, importance: 3 }
    ],
    formulas: [
      { id: 'geodesic-eq', name: { zh: '测地线方程', en: 'Geodesic Equation' }, latex: '\\ddot{x}^k + \\Gamma^k_{ij}\\dot{x}^i\\dot{x}^j = 0', description: { zh: '黎曼流形上测地线的微分方程', en: 'Differential equation for geodesics on Riemannian manifolds' }, variables: [
        { symbol: '\\Gamma^k_{ij}', description: { zh: 'Christoffel符号', en: 'Christoffel symbols' } },
        { symbol: 'x^k(t)', description: { zh: '测地线路径参数', en: 'Geodesic path parameter' } }
      ], applications: [{ zh: 'GPS导航、广义相对论', en: 'GPS navigation, general relativity' }], difficulty: 4 },
      { id: 'ricci-flow', name: { zh: '里奇流', en: 'Ricci Flow' }, latex: '\\frac{\\partial g}{\\partial t} = -2\\text{Ric}(g)', description: { zh: '按里奇曲率演化黎曼度量，用于庞加莱猜想证明', en: 'Evolves Riemannian metric by Ricci curvature; used in Poincaré conjecture proof' }, variables: [
        { symbol: 'g(t)', description: { zh: '随时间变化的度量', en: 'Time-dependent metric' } },
        { symbol: '\\text{Ric}(g)', description: { zh: '里奇曲率张量', en: 'Ricci curvature tensor' } }
      ], applications: [{ zh: '拓扑分类、几何分析', en: 'Topological classification, geometric analysis' }], difficulty: 5 }
    ],
    pioneers: [
      { id: 'gauss', name: 'Carl Friedrich Gauss', nameZh: '卡尔·弗里德里希·高斯', birthYear: 1777, deathYear: 1855, nationality: '德国', contributions: { zh: '微分几何之父，绝妙定理(Theorema Egregrium)', en: 'Father of differential geometry, Theorema Egregrium' } },
      { id: 'riemann', name: 'Bernhard Riemann', nameZh: '波恩哈德·黎曼', birthYear: 1826, deathYear: 1866, nationality: '德国', contributions: { zh: '黎曼几何创始人，黎曼流形，张量微积分', en: 'Founder of Riemannian geometry, Riemannian manifold, tensor calculus' } },
      { id: 'levi-civita', name: 'Tullio Levi-Civita', nameZh: '图利奥·列维-奇维塔', birthYear: 1873, deathYear: 1941, nationality: '意大利', contributions: { zh: '平行移动概念，张量微积分系统化', en: 'Concept of parallel transport, systematic tensor calculus' } },
      { id: 'cartan', name: 'Élie Cartan', nameZh: '埃利·嘉当', birthYear: 1869, deathYear: 1951, nationality: '法国', contributions: { zh: '外微分形式、活动标架法、联络理论', en: 'Differential forms, moving frame method, connection theory' } },
      { id: 'chern', name: 'Shing-Shen Chern', nameZh: '陈省身', birthYear: 1911, deathYear: 2004, nationality: '中国/美国', contributions: { zh: '陈类、陈-西蒙斯理论，整体微分几何奠基人', en: 'Chern classes, Chern-Simons theory, founder of global differential geometry' } },
      { id: 'perelman', name: 'Grigori Perelman', nameZh: '格里戈里·佩雷尔曼', birthYear: 1966, nationality: '俄罗斯', contributions: { zh: '用里奇流证明庞加莱猜想和几何化猜想', en: 'Proved Poincaré conjecture and geometrization via Ricci flow' } }
    ],
    figures: [], references: [],
    relatedFields: ['topology', 'analysis', 'physics', 'lie-groups'], applications: ['general-relativity', 'gauge-theory', 'string-theory', 'robotics'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // ==================== 黎曼几何 ====================
  {
    id: 'riemannian-geometry', slug: 'riemannian-geometry',
    names: { zh: '黎曼几何', en: 'Riemannian Geometry' },
    descriptions: {
      zh: '研究带有黎曼度量（正定对称张量）的光滑流形，是弯曲空间研究的核心框架，广义相对论的四维时空采用洛伦兹度量（伪黎曼几何）。',
      en: 'Studies smooth manifolds with Riemannian metrics (positive-definite symmetric tensors). Core framework for curved space; GR uses Lorentzian metric (pseudo-Riemannian).'
    },
    level: 2, parentId: 'differential-geometry-main', childIds: [],
    position: [0, 0, 0], size: 'large', color: '#0e7490',
    tags: ['riemannian', 'metric', 'curvature'],
    basics: {
      definition: { zh: '在光滑流形上赋予正定度量张量后形成的几何结构。距离、角度、体积均可由此度量定义。', en: 'Geometric structure arising from endowing a smooth manifold with a positive-definite metric tensor. Distance, angles, volume all defined from this metric.' },
      scope: { zh: '黎曼度量与联络、截面曲率、比较定理、完备性与Hopf-Rinow、谱几何、 Ricci流。', en: 'Riemannian metrics & connections, sectional curvature, comparison theorems, completeness & Hopf-Rinow, spectral geometry, Ricci flow.' },
      importance: 5, difficulty: 4,
      history: [
        { year: 1854, event: { zh: '黎曼历史性演讲《论几何基础的假设》', en: "Riemann's landmark lecture Über die Hypothesen" }, figure: 'riemann' },
        { year: 1900, event: { zh: '希尔伯特第23问题涉及变分法和微分几何', en: "Hilbert's 23rd problem involves calculus of variations & DG" } },
        { year: 1915, event: { zh: '爱因斯坦场方程——黎曼几何的物理应用巅峰', en: 'Einstein field equations — pinnacle of physical application of Riemannian geometry' } },
        { year: 2003, event: { zh: '佩雷尔曼公布里奇流证明', en: 'Perelman publishes Ricci flow proof' } }
      ],
      tags: []
    },
    principles: [
      { id: 'rgp1', title: { zh: '比较几何', en: 'Comparison Geometry' }, description: { zh: '通过与常曲率空间模型（球面/欧氏/双曲）比较获得曲率约束下的拓扑信息', en: 'Obtain curvature-constrained topological info by comparing with constant-curvature models (sphere/Euclidean/hyperbolic)' }, importance: 3 },
      { id: 'rgp2', title: { zh: 'Hopf-Rinow定理', en: 'Hopf-Rinow Theorem' }, description: { zh: '完备黎曼流形上测地完备性等同于度量完备性', en: 'On complete Riemannian manifolds, geodesic completeness equals metric completeness' }, importance: 2 }
    ],
    formulas: [
      { id: 'einstein-field', name: { zh: '爱因斯坦场方程', en: 'Einstein Field Equations' }, latex: 'R_{\\mu\\nu} - \\frac{1}{2}R g_{\\mu\\nu} + \\Lambda g_{\\mu\\nu} = \\frac{8\\pi G}{c^4} T_{\\mu\\nu}', description: { zh: '描述引力如何由物质能量分布引起时空弯曲', en: 'Describes how gravity arises from matter-energy causing spacetime curvature' }, variables: [
        { symbol: 'R_{\\mu\\nu}', description: { zh: '里奇曲率张量', en: 'Ricci curvature tensor' } },
        { symbol: 'T_{\\mu\\nu}', description: { zh: '应力-能量张量', en: 'Stress-energy tensor' } },
        { symbol: '\\Lambda', description: { zh: '宇宙常数', en: 'Cosmological constant' } }
      ], applications: [{ zh: '广义相对论、宇宙学、黑洞物理', en: 'General relativity, cosmology, black hole physics' }], difficulty: 5 }
    ],
    pioneers: [
      { id: 'riemann', name: 'Bernhard Riemann', nameZh: '波恩哈德·黎曼', birthYear: 1826, deathYear: 1866, nationality: '德国', contributions: { zh: '黎曼几何创始人，n维弯曲空间理论', en: 'Founder of Riemannian geometry, theory of n-dimensional curved space' } },
      { id: 'perelman', name: 'Grigori Perelman', nameZh: '格里戈里·佩雷尔曼', birthYear: 1966, nationality: '俄罗斯', contributions: { zh: '里奇流与手术技巧证明庞加莱猜想', en: 'Proved Poincaré conjecture using Ricci flow with surgery' } }
    ],
    figures: [], references: [],
    relatedFields: ['general-relativity', 'topology', 'geometric-analysis'], applications: ['physics-gravity', 'cosmology', 'gps'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // ==================== 辛几何 ====================
  {
    id: 'symplectic-geometry', slug: 'symplectic-geometry',
    names: { zh: '辛几何', en: 'Symplectic Geometry' },
    descriptions: {
      zh: '研究辛流形（偶数维流形上闭的非退化2-形式）的几何学，是经典力学的自然数学框架，也是镜像对称和量子化的关键。',
      en: 'Geometry of symplectic manifolds (closed nondegenerate 2-forms on even-dim manifolds). Natural framework for classical mechanics, key for mirror symmetry and quantization.'
    },
    level: 2, parentId: 'differential-geometry-main', childIds: [],
    position: [0, 0, 0], size: 'medium', color: '#0e7490',
    tags: ['symplectic', 'hamiltonian', 'mechanics'],
    basics: {
      definition: { zh: '偶数维光滑流形上配备闭的非退化反对称2-形式（辛形式）后的几何结构。', en: 'Geometric structure on even-dimensional smooth manifolds equipped with closed nondegenerate antisymmetric 2-form (symplectic form).' },
      scope: { zh: '辛形式与达布定理、辛拓扑、Hamilton力学、Lagrangian子流形、Gromov-Witten不变量、Fukaya范畴。', en: 'Symplectic forms & Darboux theorem, symplectic topology, Hamiltonian mechanics, Lagrangian submanifolds, Gromov-Witten invariants, Fukaya category.' },
      importance: 4, difficulty: 5,
      history: [
        { year: 1800, event: { zh: '拉格朗日和哈密顿的分析力学', en: "Lagrange and Hamilton's analytical mechanics" } },
        { year: 1950, event: { zh: '辛几何作为独立学科形成', en: 'Symplectic geometry emerges as independent discipline' } },
        { year: 1985, event: { zh: 'Gromov拟全纯曲线与非挤压定理', en: "Gromov's pseudo-holomorphic curves & non-squeezing theorem" } }
      ],
      tags: []
    },
    principles: [
      { id: 'sgp1', title: { zh: 'Darboux定理', en: 'Darboux Theorem' }, description: { zh: '辛流形局部上都是标准的：ω=∑dxᵢ∧dyᵢ', en: 'All symplectic manifolds are locally standard: ω = Σ dx_i ∧ dy_i' }, importance: 3 },
      { id: 'sgp2', title: { zh: '非挤压定理', en: 'Non-Squeezing Theorem' }, description: { zh: '辛映射不能将球体压入半径更小的圆柱——区别于体积保持', en: 'Symplectomorphisms cannot squeeze a ball into a thinner cylinder — unlike volume-preserving' }, importance: 3 }
    ],
    formulas: [
      { id: 'hamilton-eq', name: { zh: 'Hamilton正则方程', en: "Hamilton's Canonical Equations" }, latex: '\\dot{q}^i = \\frac{\\partial H}{\\partial p_i}, \\quad \\dot{p}_i = -\\frac{\\partial H}{\\partial q^i}', description: { zh: '辛流形上由哈密顿函数生成的时间演化方程', en: 'Time evolution equations generated by Hamiltonian function on symplectic manifold' }, variables: [
        { symbol: 'H(q,p)', description: { zh: '哈密顿函数（总能量）', en: 'Hamiltonian function (total energy)' } },
        { symbol: '(q,p)', description: { zh: '正则坐标（位置-动量）', en: 'Canonical coordinates (position-momentum)' } }
      ], applications: [{ zh: '经典力学、天体力学、等离子体物理', en: 'Classical mechanics, celestial mechanics, plasma physics' }], difficulty: 3 }
    ],
    pioneers: [
      { id: 'gromov', name: 'Mikhail Gromov', nameZh: '米哈伊尔·格罗莫夫', birthYear: 1943, nationality: '俄/法', contributions: { zh: 'h原理、辛刚性、拟全纯曲线、阿贝尔奖得主', en: 'h-principle, symplectic rigidity, pseudo-holomorphic curves, Abel Prize winner' } },
      { id: 'arnold', name: 'Vladimir Arnold', nameZh: '弗拉基米尔·阿诺尔德', birthYear: 1937, deathYear: 2010, nationality: '俄罗斯', contributions: { zh: 'KAM理论、辛拓扑基础、 Arnold扩散', en: 'KAM theory, foundations of symplectic topology, Arnold diffusion' } }
    ],
    figures: [], references: [],
    relatedFields: ['classical-mechanics', 'lie-groups', 'low-dimensional-topology'], applications: ['mechanics', 'optics', 'control-theory'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // ==================== 复几何 / 复流形 ====================
  {
    id: 'complex-manifolds', slug: 'complex-manifolds',
    names: { zh: '复几何', en: 'Complex Geometry / Complex Manifolds' },
    descriptions: {
      zh: '研究复结构（满足J²=-I的线性变换）的流形，连接复分析、代数几何和微分几何的重要桥梁。',
      en: 'Study of manifolds with complex structures (linear operators J satisfying J²=-I). Key bridge between complex analysis, algebraic geometry, and differential geometry.'
    },
    level: 2, parentId: 'differential-geometry-main', childIds: [],
    position: [0, 0, 0], size: 'medium', color: '#0891b2',
    tags: ['complex', 'kahler', 'hermitian'],
    basics: {
      definition: { zh: '复流形是带有全纯转移函数图的微分流形。Kähler流形同时具有复、黎曼和辛三种结构。', en: 'Complex manifold is a differentiable manifold with holomorphic transition maps. Kähler manifolds simultaneously carry complex, Riemannian, and symplectic structures.' },
      scope: { zh: '几乎复结构与可积性、Hermite度量、Kähler几何、Hodge理论、复芒福德理论、Calabi-Yau流形。', en: 'Almost complex structures & integrability, Hermitian metrics, Kähler geometry, Hodge theory, complex Monge-Ampère, Calabi-Yau manifolds.' },
      importance: 4, difficulty: 5,
      history: [
        { year: 1930, event: { zh: 'Hodge理论诞生', en: 'Hodge theory born' } },
        { year: 1950, event: { zh: 'Kähler几何的系统化', en: 'Systematization of Kähler geometry' } },
        { year: 1977, event: { zh: 'Yau证明卡拉比猜想', en: 'Yau proves Calabi conjecture' } },
        { year: 1980, event: { zh: '弦理论中Calabi-Yau流形的关键作用', en: 'Crucial role of Calabi-Yau manifolds in string theory' } }
      ],
      tags: []
    },
    principles: [
      { id: 'cgp1', title: { zh: 'Newlander-Nirenberg定理', en: 'Newlander-Nirenberg Theorem' }, description: { zh: '几乎复结构可积当且仅当Nijenhuis张量为零', en: 'Almost complex structure is integrable iff Nijenhuis tensor vanishes' }, importance: 3 },
      { id: 'cgp2', title: { zh: 'Hodge分解', en: 'Hodge Decomposition' }, description: { zh: '紧Kähler流形上de Rham上同调分解为(p,q)型分量', en: 'de Rham cohomology on compact Kähler decomposes into (p,q) components' }, importance: 3 }
    ],
    formulas: [
      { id: 'kahler-condition', name: { zh: 'Kähler条件', en: 'Kähler Condition' }, latex: 'd\\omega = 0, \\quad \\omega = i\\partial\\bar\\partial K', description: { zh: 'Kähler形式闭且等于某势函数的(1,1)-型形式', en: 'Kähler form is closed and equals (1,1)-form of some potential function' }, variables: [
        { symbol: '\\omega', description: { zh: 'Kähler形式', en: 'Kähler form' } },
        { symbol: 'K', description: { zh: 'Kähler势函数', en: 'Kähler potential' } }
      ], applications: [{ zh: '弦论紧致化、镜像对称', en: 'String compactification, mirror symmetry' }], difficulty: 5 }
    ],
    pioneers: [
      { id: 'hodge', name: 'W. V. D. Hodge', nameZh: 'W.V.D. 霍奇', birthYear: 1903, deathYear: 1975, nationality: '英国', contributions: { zh: 'Hodge理论——调和形式与复结构的关系', en: 'Hodge theory — relation between harmonic forms and complex structure' } },
      { id: 'yau', name: 'Shing-Tung Yau', nameZh: '丘成桐', birthYear: 1949, nationality: '中国/美国', contributions: { zh: '证明卡拉比猜想，卡拉比-丘流形，菲尔兹奖', en: 'Proved Calabi conjecture, Calabi-Yau manifolds, Fields Medalist' } },
      { id: 'calabi', name: 'Eugenio Calabi', nameZh: '欧金尼奥·卡拉比', birthYear: 1923, deathYear: 2024, nationality: '意大利/美国', contributions: { zh: '提出卡拉比猜想——唯一性定理', en: 'Formulated Calabi conjecture — uniqueness theorem' } }
    ],
    figures: [], references: [],
    relatedFields: ['algebraic-geometry', 'complex-analysis', 'theoretical-physics'], applications: ['string-theory', 'mirror-symmetry', 'moduli-spaces'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  }
];
