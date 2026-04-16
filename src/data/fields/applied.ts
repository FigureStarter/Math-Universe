import { FieldNode } from '@/types';

export const appliedFields: FieldNode[] = [
  // ==================== 应用数学 ====================
  {
    id: 'applied', slug: 'applied',
    names: { zh: '应用数学', en: 'Applied Mathematics' },
    descriptions: { zh: '将数学方法应用于解决实际科学和工程问题的学科。', en: 'Discipline applying mathematical methods to solve real-world scientific and engineering problems.' },
    level: 1, parentId: null,
    childIds: ['numerical-analysis', 'optimization', 'operations-research', 'control-theory', 'game-theory', 'mathematical-modeling'],
    position: [-16, -6, 8], size: 'large', color: '#14b8a6',
    tags: ['applied'],
    basics: {
      definition: { zh: '应用数学研究如何将数学理论和方法应用于科学技术、经济管理等实际问题。', en: 'Applied math studies applying mathematical theories and methods to real-world problems in science, technology, economics, and management.' },
      scope: { zh: '数值分析、最优化、运筹学、控制理论、博弈论、数学建模、金融数学等。', en: 'Numerical analysis, optimization, OR, control theory, game theory, mathematical modeling, financial mathematics.' },
      importance: 5, difficulty: 4,
      history: [
        { year: 1940, event: { zh: '运筹学诞生于二战', en: 'Operations research born in WWII' } },
        { year: 1947, event: { zh: '单纯形法发明', en: 'Simplex method invented' } },
        { year: 1948, event: { zh: '维纳《控制论》', en: "Wiener's Cybernetics" } }
      ],
      tags: ['applied']
    },
    principles: [],
    formulas: [{ id: 'gradient-descent', name: { zh: '梯度下降法', en: 'Gradient Descent' }, latex: 'x_{n+1} = x_n - \\alpha \\nabla f(x_n)', description: { zh: '迭代优化算法', en: 'Iterative optimization algorithm' }, variables: [], applications: [{ zh: '机器学习训练', en: 'ML training' }], difficulty: 3 }],
    pioneers: [
      { id: 'von-neumann-a', name: 'John von Neumann', nameZh: '冯·诺依曼', birthYear: 1903, deathYear: 1957, nationality: '匈牙利/美国', contributions: { zh: '博弈论与计算机架构', en: 'Game theory and computer architecture' } },
      { id: 'dantzig', name: 'George Dantzig', nameZh: '乔治·丹齐格', birthYear: 1914, deathYear: 2005, nationality: '美国', contributions: { zh: '线性规划与单纯形法', en: 'Linear programming & simplex method' } }
    ], figures: [], references: [],
    relatedFields: ['analysis', 'probability', 'discrete'], applications: ['engineering', 'economics', 'ai', 'logistics'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 数值分析
  { id: 'numerical-analysis', slug: 'numerical-analysis',
    names: { zh: '数值分析', en: 'Numerical Analysis' },
    descriptions: { zh: '用数值近似方法求解数学问题的算法研究。', en: 'Study of algorithms for approximate solutions to mathematical problems.' },
    level: 1, parentId: null,
    childIds: ['numerical-linear-algebra', 'numerical-ode', 'numerical-pde', 'approximation-theory-numerical', 'interpolation-methods'],
    position: [-20, -2, 5], size: 'large', color: '#0d9488',
    tags: ['numerical'],
    basics: {
      definition: { zh: '数值分析研究用有限精度计算近似求解连续数学问题的方法及其误差分析。', en: 'Numerical analysis studies methods for approximating continuous math problems with finite precision computation and their error analysis.' },
      scope: { zh: '插值与逼近、数值积分/微分、线性方程组迭代解法、ODE/PDE数值解、误差分析。', en: 'Interpolation & approximation, numerical integration/differentiation, iterative linear solvers, ODE/PDE numerical methods, error analysis.' },
      importance: 5, difficulty: 4,
      history: [
        { year: 1671, event: { zh: '牛顿迭代法', en: "Newton's method" } },
        { year: 1795, event: { zh: '高斯消元法', en: 'Gaussian elimination' } },
        { year: 1947, event: { zh: '蒙特卡洛方法', en: 'Monte Carlo method' } }
      ], tags: []
    },
    principles: [], formulas: [{ id: 'newton-method', name: { zh: '牛顿迭代法', en: "Newton-Raphson Method" }, latex: 'x_{n+1} = x_n - \\frac{f(x_n)}{f\'(x_n)}', description: { zh: '求方程根的迭代算法', en: 'Iterative algorithm for finding roots' }, variables: [], applications: [{ zh: '工程计算', en: 'Engineering computation' }], difficulty: 2 }],
    pioneers: [], figures: [], references: [],
    relatedFields: ['analysis', 'applied'], applications: ['engineering-simulation', 'weather-prediction', 'cfd', 'finance'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 最优化理论
  { id: 'optimization', slug: 'optimization',
    names: { zh: '最优化理论', en: 'Optimization Theory' },
    descriptions: { zh: '在约束条件下寻找最优解的数学理论与方法。', en: 'Mathematical theory and methods for finding optimal solutions under constraints.' },
    level: 2, parentId: 'applied', childIds: [],
    position: [-22, -8, 10], size: 'medium', color: '#0f766e',
    tags: ['optimization'],
    basics: { definition: { zh: '最优化理论研究在给定约束下最大化或最小化目标函数的方法。', en: 'Optimization theory studies methods for maximizing or minimizing an objective function under given constraints.' }, scope: { zh: '凸优化、非线性规划、整数规划、多目标优化、全局优化、随机优化。', en: 'Convex optimization, nonlinear programming, integer programming, multi-objective optimization, global optimization, stochastic optimization.' }, importance: 5, difficulty: 4, history: [
      { year: 1947, event: { zh: '单纯形法', en: 'Simplex method' } },
      { year: 1990, event: { zh: '内点法突破', en: 'Interior-point method breakthrough' } }
    ], tags: [] },
    principles: [], formulas: [{ id: 'lagrange', name: { zh: '拉格朗日乘子法', en: 'Lagrange Multipliers' }, latex: '\\nabla f = \\sum_i \\lambda_i \\nabla g_i', description: { zh: '约束优化的核心方法', en: 'Core method of constrained optimization' }, variables: [], applications: [{ zh: '机器学习/经济学', en: 'ML/Economics' }], difficulty: 3 }],
    pioneers: [], figures: [], references: [],
    relatedFields: ['applied', 'analysis'], applications: ['ml-training', 'logistics', 'finance', 'engineering-design'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 运筹学
  { id: 'operations-research', slug: 'operations-research',
    names: { zh: '运筹学', en: 'Operations Research' },
    descriptions: { zh: '运用科学方法对复杂决策问题进行定量分析和优化。', en: 'Scientific quantitative analysis and optimization of complex decision-making problems.' },
    level: 2, parentId: 'applied', childIds: [],
    position: [-14, -12, 6], size: 'medium', color: '#115e59',
    tags: ['operations-research'],
    basics: { definition: { zh: '运筹学使用数学模型和算法帮助决策者做出最优决策。', en: 'OR uses mathematical models and algorithms to help decision-makers make optimal decisions.' }, scope: { zh: '线性规划、整数规划、网络流、排队论、库存理论、决策论、仿真。', en: 'Linear/integer programming, network flows, queueing theory, inventory theory, decision theory, simulation.' }, importance: 5, difficulty: 3, history: [], tags: [] },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['optimization', 'probability'], applications: ['supply-chain', 'transportation', 'manufacturing', 'healthcare-logistics'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 控制理论
  { id: 'control-theory', slug: 'control-theory',
    names: { zh: '控制理论', en: 'Control Theory' },
    descriptions: { zh: '研究动态系统行为调控的数学理论。', en: 'Mathematical theory of regulating behavior of dynamical systems.' },
    level: 2, parentId: 'applied', childIds: [],
    position: [-18, -4, 12], size: 'medium', color: '#0f766e',
    tags: ['applied'],
    basics: { definition: { zh: '控制理论研究如何设计控制器使动态系统按期望方式运行。', en: 'Control theory studies how to design controllers so that dynamical systems behave as desired.' }, scope: { zh: 'PID控制、状态空间方法、鲁棒控制、自适应控制、非线性控制、H∞控制。', en: 'PID control, state-space methods, robust control, adaptive control, nonlinear control, H-infinity control.' }, importance: 4, difficulty: 5, history: [
      { year: 1948, event: { zh: '维纳《控制论》出版', en: "Wiener's Cybernetics published" } },
      { year: 1960, event: { zh: '卡尔曼滤波', en: 'Kalman filter' } }
    ], tags: [] },
    principles: [], formulas: [{ id: 'pid', name: { zh: 'PID控制律', en: 'PID Control Law' }, latex: 'u(t) = K_p e(t) + K_i \\int e(\\tau)d\\tau + K_d \\frac{de}{dt}', description: { zh: '最常用的反馈控制算法', en: 'Most widely used feedback control algorithm' }, variables: [], applications: [{ zh: '工业自动化', en: 'Industrial automation' }], difficulty: 2 }],
    pioneers: [], figures: [], references: [],
    relatedFields: ['applied', 'analysis', 'ode'], applications: ['robotics', 'aerospace', 'automotive', 'process-control'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 博弈论
  { id: 'game-theory', slug: 'game-theory',
    names: { zh: '博弈论', en: 'Game Theory' },
    descriptions: { zh: '研究理性决策者在策略交互情况下的行为和均衡。', en: 'Study of strategic interaction among rational decision-makers and equilibrium concepts.' },
    level: 2, parentId: 'applied', childIds: [],
    position: [-24, -4, 4], size: 'large', color: '#0f766e',
    tags: ['applied'],
    basics: {
      definition: { zh: '博弈论用数学模型描述和分析多个决策者之间的策略性互动。', en: 'Game theory uses mathematical models to describe and analyze strategic interactions among multiple decision-makers.' },
      scope: { zh: '纳什均衡、零和博弈、合作博弈、演化博弈、机制设计、拍卖理论、信息经济学。', en: 'Nash equilibrium, zero-sum games, cooperative games, evolutionary games, mechanism design, auction theory, information economics.' },
      importance: 5, difficulty: 4,
      history: [
        { year: 1928, event: { zh: '冯·诺依曼博弈论奠基', en: "von Neumann's game theory foundation" } },
        { year: 1950, event: { zh: '纳什均衡概念', en: 'Nash equilibrium concept' } },
        { year: 1994, event: { zh: '诺贝尔经济学奖授予博弈论', en: 'Nobel Prize in Economics for game theory' } }
      ], tags: []
    },
    principles: [], formulas: [{ id: 'nash', name: { zh: '纳什均衡', en: 'Nash Equilibrium' }, latex: 'u_i(s_i^*, s_{-i}^*) \\geq u_i(s_i, s_{-i}^*)', description: { zh: '无人有动机单方面改变策略的状态', en: 'No player has incentive to unilaterally deviate' }, variables: [], applications: [{ zh: '经济学/国际关系', en: 'Economics/IR' }], difficulty: 3 }],
    pioneers: [{ id: 'nash-j', name: 'John Nash', nameZh: '约翰·纳什', birthYear: 1928, deathYear: 2015, nationality: '美国', contributions: { zh: '纳什均衡', en: 'Nash equilibrium' } }],
    figures: [], references: [],
    relatedFields: ['applied', 'economics'], applications: ['economics', 'political-science', 'biology-evolution', 'ai-multiagent'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 数学建模
  { id: 'mathematical-modeling', slug: 'mathematical-modeling',
    names: { zh: '数学建模', en: 'Mathematical Modeling' },
    descriptions: { zh: '将实际问题抽象为数学模型并进行分析求解的过程。', en: 'Process of abstracting real problems into mathematical models and analyzing them.' },
    level: 2, parentId: 'applied', childIds: [],
    position: [-20, -10, 2], size: 'small', color: '#14b8a6',
    tags: ['applied'],
    basics: { definition: { zh: '数学建模是用数学语言描述现实世界现象并预测其行为的跨学科方法。', en: 'Mathematical modeling is a cross-disciplinary approach using mathematical language to describe and predict real-world phenomena.' }, scope: { zh: '确定性模型 vs 随机模型、连续模型 vs 离散模型、参数估计、模型验证。', en: 'Deterministic vs stochastic, continuous vs discrete, parameter estimation, model validation.' }, importance: 4, difficulty: 3, history: [], tags: [] },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['applied', 'numerical-analysis'], applications: ['epidemiology', 'climate-modeling', 'ecology', 'economics'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 数值线性代数
  { id: 'numerical-linear-algebra', slug: 'numerical-linear-algebra',
    names: { zh: '数值线性代数', en: 'Numerical Linear Algebra' },
    descriptions: { zh: '线性代数问题的数值算法设计与实现。', en: 'Design and implementation of numerical algorithms for linear algebra problems.' },
    level: 2, parentId: 'numerical-analysis', childIds: [],
    position: [-23, 0, 3], size: 'small', color: '#0d9488',
    tags: ['numerical', 'linear-algebra'],
    basics: { definition: { zh: '数值线性代数研究矩阵运算、特征值问题、线性方程组的稳定高效数值解法。', en: 'Numerical linear algebra studies stable and efficient numerical methods for matrix operations, eigenvalue problems, linear systems.' }, scope: { zh: '直接法(LU分解、QR)、迭代法(共轭梯度法)、特征值算法、SVD、稀疏矩阵技术。', en: 'Direct methods (LU, QR), iterative methods (CG), eigenvalue algorithms, SVD, sparse matrix techniques.' }, importance: 5, difficulty: 4, history: [], tags: [] },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['numerical-analysis', 'linear-algebra'], applications: ['scientific-computing', 'ml', 'image-processing', 'signal-processing'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // ODE数值解
  { id: 'numerical-ode', slug: 'numerical-ode',
    names: { zh: '常微分方程数值解', en: 'Numerical ODE Methods' },
    descriptions: { zh: '常微分方程初值问题和边值问题的数值求解方法。', en: 'Numerical methods for solving initial value and boundary value problems in ODEs.' },
    level: 2, parentId: 'numerical-analysis', childIds: [],
    position: [-18, 1, 3], size: 'small', color: '#0d9488',
    tags: ['numerical'],
    basics: { definition: { zh: '研究ODE的数值离散化方法和误差控制策略。', en: 'Studies numerical discretization methods and error control strategies for ODEs.' }, scope: { zh: '欧拉法、Runge-Kutta法、多步法、刚性ODE方法、自适应步长。', en: 'Euler method, Runge-Kutta methods, multistep methods, stiff ODE methods, adaptive step-size.' }, importance: 4, difficulty: 4, history: [], tags: [] },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['numerical-analysis', 'ode'], applications: ['orbital-mechanics', 'chemical-kinetics', 'population-dynamics'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // PDE数值解
  { id: 'numerical-pde', slug: 'numerical-pde',
    names: { zh: '偏微分方程数值解', en: 'Numerical PDE Methods' },
    descriptions: { zh: '偏微分方程的有限元、有限差分、谱方法等数值解法。', en: 'FEM, FDM, spectral methods, and other numerical techniques for PDEs.' },
    level: 2, parentId: 'numerical-analysis', childIds: [],
    position: [-21, -4, 7], size: 'small', color: '#0d9488',
    tags: ['numerical'],
    basics: { definition: { zh: 'PDE数值方法将连续偏微分方程离散化为可计算的代数系统。', en: 'PDE numerical methods discretize continuous PDEs into computable algebraic systems.' }, scope: { zh: '有限元法(FEM)、有限差分法(FDM)、有限体积法(FVM)、边界元法(BEM)、谱方法。', en: 'Finite Element Method (FEM), Finite Difference (FDM), Finite Volume (FVM), Boundary Element (BEM), Spectral methods.' }, importance: 5, difficulty: 5, history: [], tags: [] },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['numerical-analysis', 'pde'], applications: ['cfd', 'structural-analysis', 'electromagnetics', 'geophysics'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 逼近理论(数值)
  { id: 'approximation-theory-numerical', slug: 'approximation-theory-numerical',
    names: { zh: '逼近理论', en: 'Approximation Theory' },
    descriptions: { zh: '用简单函数近似复杂函数的理论与方法。', en: 'Theory and methods of approximating complex functions with simpler functions.' },
    level: 2, parentId: 'numerical-analysis', childIds: [],
    position: [-17, 2, 1], size: 'small', color: '#0d9488',
    tags: ['numerical', 'analysis'],
    basics: { definition: { zh: '逼近理论研究如何用多项式、样条、有理函数等近似表示一般函数，以及误差界。', en: 'Approximation theory studies how to represent general functions by polynomials, splines, rational functions, etc., and error bounds.' }, scope: { zh: '最佳一致逼近、最佳平方逼近、Chebyshev逼近、小波变换、压缩感知。', en: 'Best uniform/approximation, Chebyshev approximation, wavelet transforms, compressed sensing.' }, importance: 3, difficulty: 4, history: [], tags: [] },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['numerical-analysis', 'analysis'], applications: ['signal-compression', 'computer-graphics', 'data-fitting', 'machine-learning'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 插值方法
  { id: 'interpolation-methods', slug: 'interpolation-methods',
    names: { zh: '插值方法', en: 'Interpolation Methods' },
    descriptions: { zh: '根据已知数据点构造通过这些点的函数的方法。', en: 'Methods for constructing functions that pass through given data points.' },
    level: 2, parentId: 'numerical-analysis', childIds: [],
    position: [-19, 1, 9], size: 'tiny', color: '#0d9488',
    tags: ['numerical'],
    basics: { definition: { zh: '插值是在已知数据点之间构造新数据点的技术。', en: 'Interpolation is the technique of constructing new data points within the range of known data points.' }, scope: { zh: 'Lagrange插值、Newton插值、样条插值、Bézier曲线、Kriging插值。', en: 'Lagrange interpolation, Newton interpolation, spline interpolation, Bézier curves, Kriging interpolation.' }, importance: 3, difficulty: 2, history: [], tags: [] },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['numerical-analysis'], applications: ['data-visualization', 'cad', 'gis', 'signal-processing'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 金融数学
  { id: 'financial-mathematics', slug: 'financial-mathematics',
    names: { zh: '金融数学', en: 'Financial Mathematics / Quantitative Finance' },
    descriptions: { zh: '应用数学方法于金融市场的定价、风险管理和投资组合优化。', en: 'Application of mathematical methods to pricing, risk management, and portfolio optimization in financial markets.' },
    level: 2, parentId: 'applied', childIds: [],
    position: [-26, -8, 6], size: 'medium', color: '#eab308',
    tags: ['mathematical-finance'],
    basics: { definition: { zh: '金融数学使用随机微积分、偏微分方程和概率论为金融衍生品定价和管理金融风险。', en: 'Financial math uses stochastic calculus, PDEs, and probability for derivative pricing and risk management.' }, scope: { zh: 'Black-Scholes模型、期权定价、利率模型、VaR、Monte Carlo模拟、信用风险模型。', en: 'Black-Scholes model, option pricing, interest rate models, VaR, Monte Carlo simulation, credit risk models.' }, importance: 5, difficulty: 5, history: [
      { year: 1973, event: { zh: 'Black-Scholes公式发表', en: 'Black-Scholes formula published' } },
      { year: 1997, event: { zh: 'Merton&Scholes获诺贝尔奖', en: 'Merton & Scholes Nobel Prize' } }
    ], tags: [] },
    principles: [], formulas: [
      { id: 'black-scholes', name: { zh: 'Black-Scholes公式', en: 'Black-Scholes Formula' }, latex: 'C = N(d_1)S - N(d_2)Ke^{-rt}', description: { zh: '欧式期权定价的核心公式', en: 'Core formula for European option pricing' }, variables: [], applications: [{ zh: '衍生品交易', en: 'Derivatives trading' }], difficulty: 5 }
    ],
    pioneers: [], figures: [], references: [],
    relatedFields: ['stochastic-processes', 'pde', 'probability'], applications: ['investment-banking', 'hedge-funds', 'risk-management', 'insurance'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  }
];
