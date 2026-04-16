/**
 * 星系团坐标分配算法
 *
 * 将60个主星系均匀分布在球形空间中，子领域聚集在父节点周围
 * 使用斐波那契球面采样 + 螺旋分布确保视觉均匀
 */

import { FieldNode } from '@/types';

// 斐波那契球面采样 — 均匀分布N个点在球面上
export function fibonacciSphere(count: number, radius: number): [number, number, number][] {
  const points: [number, number, number][] = [];
  const goldenRatio = (1 + Math.sqrt(5)) / 2;

  for (let i = 0; i < count; i++) {
    const theta = (2 * Math.PI * i) / goldenRatio;
    const phi = Math.acos(1 - (2 * (i + 0.5)) / count);

    const x = radius * Math.cos(theta) * Math.sin(phi);
    const y = radius * Math.sin(theta) * Math.sin(phi);
    const z = radius * Math.cos(phi);
    points.push([x, y, z]);
  }

  return points;
}

// 在父节点周围生成子节点位置（球壳分布）
export function generateChildPositions(
  parentPos: [number, number, number],
  childCount: number,
  innerRadius: number = 4,
  outerRadius: number = 7
): [number, number, number][] {
  if (childCount === 0) return [];

  const positions: [number, number, number][] = [];
  // 使用螺旋+随机偏移
  for (let i = 0; i < childCount; i++) {
    const theta = (2 * Math.PI * i) / childCount + (Math.random() - 0.5) * 0.5;
    const phi = Math.acos(1 - (i + 0.5) / childCount);
    const r = innerRadius + Math.random() * (outerRadius - innerRadius);

    const dx = r * Math.cos(theta) * Math.sin(phi);
    const dy = r * Math.sin(theta) * Math.sin(phi) * 0.6; // 扁平化，避免垂直堆叠
    const dz = r * Math.cos(phi);

    positions.push([
      parentPos[0] + dx,
      parentPos[1] + dy,
      parentPos[2] + dz
    ]);
  }

  return positions;
}

// 预定义的12大星系团中心坐标（主分类）
export const GALAXY_CENTERS: Record<string, [number, number, number]> = {
  'logic-group': [-18, 10, -15],
  'algebra-group': [-14, 6, -8],
  'geometry-group': [16, 8, -12],
  'analysis-group': [0, 14, -5],
  'topology-group': [-8, -2, 14],
  'numbertheory': [-12, -10, -18],
  'probability-group': [20, -4, 6],
  'discrete-group': [12, -8, 16],
  'applied-group': [-16, -6, 8],
  'mathphysics-group': [6, 10, 18],
  'interdisciplinary-group': [22, -12, -6],
};

// 为字段数据批量分配坐标
export function assignPositions(fields: FieldNode[]): FieldNode[] {
  // 分离 level-1 和 level-2
  const level1Fields = fields.filter(f => f.level === 1);
  const level2Fields = fields.filter(f => f.level === 2);

  // 为每个主分组的主星系分配坐标
  const groupPositions = new Map<string, [number, number, number]>();
  const groups = Array.from(new Set(level1Fields.map(f => getFilterGroup(f.tags))));
  
  groups.forEach((group, idx) => {
    if (!groupPositions.has(group)) {
      const baseCenter = GALAXY_CENTERS[group] || fibonacciSphere(groups.length, 28)[idx];
      // 添加小幅偏移避免完全重合
      groupPositions.set(group, [
        baseCenter[0] + (Math.random() - 0.5) * 3,
        baseCenter[1] + (Math.random() - 0.5) * 3,
        baseCenter[2] + (Math.random() - 0.5) * 3
      ]);
    }
  });

  // 更新 level-1 字段坐标
  const updatedL1 = level1Fields.map((field, idx) => {
    const group = getFilterGroup(field.tags);
    const center = groupPositions.get(group) || [0, 0, 0];
    // 在组中心附近分散
    const angle = (idx / level1Fields.length) * Math.PI * 2 * 1.618;
    const r = 2 + (idx % 4) * 1.5;
    return {
      ...field,
      position: [
        center[0] + Math.cos(angle) * r,
        center[1] + Math.sin(angle * 0.7) * r * 0.5,
        center[2] + Math.sin(angle) * r * 0.6
      ] as [number, number, number]
    };
  });

  // 建立 parentId -> field 映射
  const l1Map = new Map(updatedL1.map(f => [f.id, f]));

  // 更新 level-2 字段坐标（围绕父节点）
  const updatedL2 = level2Fields.map(field => {
    const parent = l1Map.get(field.parentId || '');
    if (!parent && field.position.every(v => v === 0)) {
      return { ...field, position: [(Math.random()-0.5)*40, (Math.random()-0.5)*40, (Math.random()-0.5)*40] as [number, number, number] };
    }
    if (!parent) return field;

    // 检查是否已有预设坐标
    if (field.position.some(v => v !== 0)) return field;

    const siblings = level2Fields.filter(f => f.parentId === field.parentId);
    const siblingIdx = siblings.findIndex(s => s.id === field.id);
    const childPositions = generateChildPositions(parent.position, siblings.length, 3.5, 7);
    
    return {
      ...field,
      position: childPositions[siblingIdx] || [
        parent.position[0] + (Math.random()-0.5)*6,
        parent.position[1] + (Math.random()-0.5)*6,
        parent.position[2] + (Math.random()-0.5)*6
      ] as [number, number, number]
    };
  });

  return [...updatedL1, ...updatedL2];
}

// 从 tags 推断所属筛选组
function getFilterGroup(tags: string[]): string {
  const groupTags: Record<string, string[]> = {
    'logic-group': ['logic', 'foundations', 'set-theory'],
    'algebra-group': ['algebra', 'linear-algebra', 'abstract-algebra', 'group-theory', 'ring-field'],
    'geometry-group': ['geometry', 'euclidean', 'non-euclidean', 'differential-geometry', 'algebraic-geometry', 'topology-geometry'],
    'analysis-group': ['analysis', 'real-analysis', 'complex-analysis', 'functional-analysis', 'measure-theory', 'differential-equations', 'harmonic-analysis'],
    'topology-group': ['topology', 'algebraic-topology', 'differential-topology'],
    'probability-group': ['probability', 'statistics'],
    'discrete-group': ['discrete', 'combinatorics', 'graph-theory'],
    'applied-group': ['applied', 'numerical', 'optimization', 'operations-research'],
    'mathphysics-group': ['mathphysics'],
    'interdisciplinary-group': ['computer-science', 'cryptography', 'interdisciplinary', 'mathematical-biology', 'mathematical-finance'],
  };

  for (const tag of tags) {
    for (const [group, tagsForGroup] of Object.entries(groupTags)) {
      if (tagsForGroup.includes(tag)) return group;
    }
  }
  return 'interdisciplinary-group'; // 默认归入交叉学科
}
