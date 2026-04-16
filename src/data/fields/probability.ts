import { FieldNode } from '@/types';

export const probabilityFields: FieldNode[] = [
  // ==================== 概率论与统计 ====================
  {
    id: 'probability', slug: 'probability',
    names: { zh: '概率论', en: 'Probability Theory' },
    descriptions: {
      zh: '研究随机现象数量规律的数学分支，是现代科学和工程的基石。',
      en: 'The branch studying numerical laws of random phenomena, foundation of modern science and engineering.'
    },
    level: 1, parentId: null,
    childIds: ['probability-foundations', 'stochastic-processes', 'bayesian-inference', 'martingale-theory'],
    position: [20, -4, 6], size: 'large', color: '#22c55e',
    tags: ['probability'],
    basics: {
      definition: { zh: '概率论用公理化方法定义概率测度，研究随机变量的分布、收敛和极限行为。', en: 'Probability theory axiomatizes probability measures and studies distributions, convergence, and limits of random variables.' },
      scope: { zh: '概率空间、随机变量、分布函数、期望与大数定律、中心极限定理。', en: 'Probability spaces, random variables, distribution functions, expectation, LLN, CLT.' },
      importance: 5, difficulty: 4,
      history: [
        { year: 1654, event: { zh: '帕斯卡-费马通信奠定基础', en: 'Pascal-Fermat correspondence' } },
        { year: 1812, event: { zh: '拉普拉斯《概率分析论》', en: "Laplace's Théorie Analytique" } },
        { year: 1933, event: { zh: '科尔莫戈罗夫概率论公理', en: 'Kolmogorov axioms' } },
        { year: 1900, event: { zh: '巴切利耶期权定价理论', en: 'Bachelier option pricing theory' } }
      ],
      tags: ['probability']
    },
    principles: [
      { id: 'p1', title: { zh: '大数定律', en: 'Law of Large Numbers' }, description: { zh: '样本均值收敛到期望值', en: 'Sample mean converges to expected value' }, importance: 3 },
      { id: 'p2', title: { zh: '中心极限定理', en: 'Central Limit Theorem' }, description: { zh: '大量独立变量之和趋近正态分布', en: 'Sum of many independent variables approaches normal distribution' }, importance: 3 }
    ],
    formulas: [
      { id: 'clt', name: { zh: '中心极限定理', en: 'CLT' }, latex: '\\frac{\\bar{X}_n - \\mu}{\\sigma/\\sqrt{n}} \\xrightarrow{d} N(0,1)', description: { zh: '标准化样本均值的极限分布', en: 'Limit distribution of standardized sample mean' }, variables: [], applications: [{ zh: '统计学基础', en: 'Statistics foundation' }], difficulty: 3 }
    ],
    pioneers: [
      { id: 'kolmogorov', name: 'Andrey Kolmogorov', nameZh: '科尔莫戈罗夫', birthYear: 1903, deathYear: 1987, nationality: '俄罗斯', contributions: { zh: '概率论公理化', en: 'Axiomatization of probability' } },
      { id: 'laplace-p', name: 'Pierre-Simon Laplace', nameZh: '皮埃尔-西蒙·拉普拉斯', birthYear: 1749, deathYear: 1827, nationality: '法国', contributions: { zh: '概率论系统化', en: 'Systematization of probability theory' } }
    ], figures: [], references: [],
    relatedFields: ['analysis', 'statistics', 'applied'], applications: ['finance', 'ai', 'physics', 'insurance'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 统计学
  {
    id: 'statistics', slug: 'statistics',
    names: { zh: '统计学', en: 'Statistics' },
    descriptions: { zh: '收集、分析和解释数据的科学与艺术。', en: 'The science of collecting, analyzing, and interpreting data.' },
    level: 1, parentId: null,
    childIds: ['mathematical-statistics', 'statistical-inference', 'multivariate-statistics', 'nonparametric-statistics', 'time-series-analysis'],
    position: [22, -8, 10], size: 'large', color: '#16a34a',
    tags: ['statistics'],
    basics: {
      definition: { zh: '统计学从数据中推断总体特征，包括描述统计和推断统计。', en: 'Statistics infers population characteristics from data, including descriptive and inferential statistics.' },
      scope: { zh: '参数估计、假设检验、回归分析、方差分析、贝叶斯统计。', en: 'Parameter estimation, hypothesis testing, regression, ANOVA, Bayesian statistics.' },
      importance: 5, difficulty: 3,
      history: [
        { year: 1908, event: { zh: '戈塞特t检验', en: "Student's t-test" } },
        { year: 1920, event: { zh: '费希尔统计方法论', en: "Fisher's statistical methodology" } },
        { year: 1937, event: { zh: '奈曼-皮尔逊引理', en: 'Neyman-Pearson lemma' } }
      ], tags: []
    },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['probability', 'applied', 'computer-science'], applications: ['data-science', 'medicine', 'economics', 'social-science'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 随机过程
  { id: 'stochastic-processes', slug: 'stochastic-processes',
    names: { zh: '随机过程', en: 'Stochastic Processes' },
    descriptions: { zh: '随时间演化的随机现象的数学模型。', en: 'Mathematical models for random phenomena evolving over time.' },
    level: 2, parentId: 'probability', childIds: [],
    position: [18, -2, 9], size: 'medium', color: '#22c55e',
    tags: ['probability'],
    basics: { definition: { zh: '随机过程是时间参数化的随机变量族。', en: 'A stochastic process is an indexed family of random variables.' }, scope: { zh: '马尔可夫链、布朗运动、泊松过程、鞅论。', en: 'Markov chains, Brownian motion, Poisson processes, martingale theory.' }, importance: 5, difficulty: 5, history: [
      { year: 1900, event: { zh: '巴切利耶提出布朗运动模型', en: 'Bachelier proposes Brownian motion model' } },
      { year: 1933, event: { zh: '柯尔莫戈罗夫扩张定理', en: 'Kolmogorov extension theorem' } }
    ], tags: [] },
    principles: [], formulas: [],
    pioneers: [{ id: 'wiener', name: 'Norbert Wiener', nameZh: '诺伯特·维纳', birthYear: 1894, deathYear: 1964, nationality: '美国', contributions: { zh: '维纳过程（布朗运动）', en: 'Wiener process (Brownian motion)' } }],
    figures: [], references: [],
    relatedFields: ['probability', 'analysis', 'physics'], applications: ['finance', 'queueing-theory', 'biology', 'physics'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 贝叶斯推断
  { id: 'bayesian-inference', slug: 'bayesian-inference',
    names: { zh: '贝叶斯推断', en: 'Bayesian Inference' },
    descriptions: { zh: '基于贝叶斯定理更新信念的概率推断方法。', en: 'Probabilistic inference method that updates beliefs using Bayes theorem.' },
    level: 2, parentId: 'probability', childIds: [],
    position: [24, -6, 4], size: 'medium', color: '#16a34a',
    tags: ['statistics'],
    basics: { definition: { zh: '贝叶斯推断将未知参数视为随机变量，利用先验信息和观测数据进行后验推断。', en: 'Bayesian inference treats unknown parameters as random variables, using prior information and observed data for posterior inference.' }, scope: { zh: '先验分布、似然函数、后验分布、MCMC采样、变分推断。', en: 'Prior distribution, likelihood, posterior, MCMC sampling, variational inference.' }, importance: 4, difficulty: 4, history: [
      { year: 1763, event: { zh: '贝叶斯论文发表', en: "Bayes' essay published" } },
      { year: 1990, event: { zh: 'MCMC方法兴起', en: 'Rise of MCMC methods' } }
    ], tags: [] },
    principles: [], formulas: [
      { id: 'bayes', name: { zh: '贝叶斯定理', en: "Bayes' Theorem" }, latex: 'P(\\theta|D) = \\frac{P(D|\\theta)P(\\theta)}{P(D)}', description: { zh: '从先验到后验的核心公式', en: 'Core formula from prior to posterior' }, variables: [], applications: [{ zh: '机器学习', en: 'Machine learning' }], difficulty: 3 }
    ], pioneers: [], figures: [], references: [],
    relatedFields: ['probability', 'statistics', 'machine-learning'], applications: ['ai', 'data-science', 'medicine', 'finance'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 鞅论
  { id: 'martingale-theory', slug: 'martingale-theory',
    names: { zh: '鞅论', en: 'Martingale Theory' },
    descriptions: { zh: '研究"公平博弈"过程的数学理论，在金融数学中至关重要。', en: 'Theory of fair game processes, essential in mathematical finance.' },
    level: 2, parentId: 'probability', childIds: [],
    position: [20, 0, 12], size: 'small', color: '#22c55e',
    tags: ['probability'],
    basics: { definition: { zh: '鞅是在给定历史信息下条件期望保持不变的随机过程。', en: 'A martingale is a stochastic process whose conditional expectation remains constant given its history.' }, scope: { zh: '可选停止定理、上/下鞅、Doob分解、连续时间鞅。', en: 'Optional stopping theorem, sub/super-martingales, Doob decomposition, continuous-time martingales.' }, importance: 4, difficulty: 5, history: [
      { year: 1953, event: { zh: 'Doob《鞅论》出版', en: "Doob's Stochastic Processes published" } }
    ], tags: [] },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['probability', 'finance', 'analysis'], applications: ['quantitative-finance', 'gambling-theory'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 概率基础
  { id: 'probability-foundations', slug: 'probability-foundations',
    names: { zh: '概率论基础', en: 'Foundations of Probability' },
    descriptions: { zh: '概率空间的公理化和基本概念。', en: 'Axiomatization of probability spaces and fundamental concepts.' },
    level: 2, parentId: 'probability', childIds: [],
    position: [22, -1, 6], size: 'small', color: '#22c55e',
    tags: ['probability'],
    basics: { definition: { zh: '建立在σ-代数上的概率测度及其性质。', en: 'Probability measures on σ-algebras and their properties.' }, scope: { zh: '事件独立性、条件概率、全概率公式、联合分布。', en: 'Event independence, conditional probability, law of total probability, joint distributions.' }, importance: 4, difficulty: 3, history: [], tags: [] },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['probability', 'measure-theory', 'logic'], applications: ['all-probability-fields'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 数学统计
  { id: 'mathematical-statistics', slug: 'mathematical-statistics',
    names: { zh: '数理统计', en: 'Mathematical Statistics' },
    descriptions: { zh: '统计推断的数学理论基础。', en: 'Mathematical foundation of statistical inference.' },
    level: 2, parentId: 'statistics', childIds: [],
    position: [24, -10, 12], size: 'medium', color: '#16a34a',
    tags: ['statistics'],
    basics: { definition: { zh: '从样本数据推断总体特征的严格数学框架。', en: 'Rigorous framework for inferring population characteristics from sample data.' }, scope: { zh: '充分统计量、指数族分布、Cramer-Rao界、假设检验理论。', en: 'Sufficient statistics, exponential families, Cramer-Rao bound, hypothesis testing theory.' }, importance: 5, difficulty: 4, history: [], tags: [] },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['probability', 'statistics', 'applied'], applications: ['data-science', 'quality-control'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 多元统计
  { id: 'multivariate-statistics', slug: 'multivariate-statistics',
    names: { zh: '多元统计分析', en: 'Multivariate Statistics' },
    descriptions: { zh: '同时分析多个随机变量的统计方法。', en: 'Statistical methods for analyzing multiple random variables simultaneously.' },
    level: 2, parentId: 'statistics', childIds: [],
    position: [25, -6, 14], size: 'small', color: '#16a34a',
    tags: ['statistics'],
    basics: { definition: { zh: '处理多维数据集的统计分析技术。', en: 'Statistical techniques for handling multidimensional datasets.' }, scope: { zh: '主成分分析、因子分析、聚类分析、典型相关、判别分析。', en: 'PCA, factor analysis, cluster analysis, canonical correlation, discriminant analysis.' }, importance: 4, difficulty: 3, history: [], tags: [] },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['statistics', 'linear-algebra', 'applied'], applications: ['machine-learning', 'data-mining', 'psychometrics'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 非参数统计
  { id: 'nonparametric-statistics', slug: 'nonparametric-statistics',
    names: { zh: '非参数统计', en: 'Nonparametric Statistics' },
    descriptions: { zh: '不依赖特定总体分布形式的统计方法。', en: 'Statistical methods not dependent on a specific population distribution form.' },
    level: 2, parentId: 'statistics', childIds: [],
    position: [20, -11, 13], size: 'small', color: '#16a34a',
    tags: ['statistics'],
    basics: { definition: { zh: '对分布形式不做强假定的统计推断方法。', en: 'Inference methods without strong assumptions about distribution forms.' }, scope: { zh: '秩检验、核密度估计、U检验、符号检验。', en: 'Rank tests, kernel density estimation, Mann-Whitney U test, sign test.' }, importance: 3, difficulty: 3, history: [], tags: [] },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['statistics', 'applied'], applications: ['biostatistics', 'social-sciences'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },

  // 时间序列分析
  { id: 'time-series-analysis', slug: 'time-series-analysis',
    names: { zh: '时间序列分析', en: 'Time Series Analysis' },
    descriptions: { zh: '按时间顺序排列的数据的分析与预测。', en: 'Analysis and prediction of sequentially ordered data.' },
    level: 2, parentId: 'statistics', childIds: [],
    position: [26, -4, 8], size: 'small', color: '#16a34a',
    tags: ['statistics'],
    basics: { definition: { zh: '对随时间变化的数据序列进行建模、分析和预测。', en: 'Modeling, analyzing, and forecasting time-varying data sequences.' }, scope: { zh: 'ARIMA模型、自相关、谱分析、状态空间模型。', en: 'ARIMA models, autocorrelation, spectral analysis, state-space models.' }, importance: 4, difficulty: 4, history: [], tags: [] },
    principles: [], formulas: [], pioneers: [], figures: [], references: [],
    relatedFields: ['statistics', 'stochastic-processes', 'applied'], applications: ['economics', 'signal-processing', 'weather-forecasting'],
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  }
];
