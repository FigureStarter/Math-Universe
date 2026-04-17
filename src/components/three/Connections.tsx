import { useMemo } from 'react';
import { Line } from '@react-three/drei';
import * as THREE from 'three';
import { useFieldStore } from '@/stores/fieldStore';
import { CATEGORY_TO_FILTER_GROUP, FilterMode } from '@/types';

interface ConnectionData {
  start: [number, number, number];
  end: [number, number, number];
  color: string;
}

function matchesFilterMode(tags: string[], filterMode: FilterMode): boolean {
  if (filterMode === 'all') return true;
  if (filterMode.endsWith('-group')) {
    return tags.some(tag => CATEGORY_TO_FILTER_GROUP[tag] === filterMode);
  }
  return tags.includes(filterMode);
}

export default function Connections() {
  const { fields, filterMode } = useFieldStore();
  
  // 生成连接线数据
  const connections = useMemo(() => {
    const conns: ConnectionData[] = [];
    const processed = new Set<string>();
    
    fields.forEach((field) => {
      if (!matchesFilterMode(field.tags, filterMode)) return;
      
      field.relatedFields.forEach((relatedId) => {
        const key = [field.id, relatedId].sort().join('-');
        if (processed.has(key)) return;
        processed.add(key);
        
        const relatedField = fields.find((f) => f.id === relatedId);
        if (!relatedField) return;
        if (!matchesFilterMode(relatedField.tags, filterMode)) return;
        
        conns.push({
          start: field.position,
          end: relatedField.position,
          color: field.color,
        });
      });
    });
    
    return conns;
  }, [fields, filterMode]);
  
  return (
    <group>
      {connections.map((conn, idx) => (
        <ConnectionLine key={idx} connection={conn} />
      ))}
    </group>
  );
}

function ConnectionLine({ connection }: { connection: ConnectionData }) {
  // 创建曲线点
  const curvePoints = useMemo(() => {
    const start = new THREE.Vector3(...connection.start);
    const end = new THREE.Vector3(...connection.end);
    const mid = new THREE.Vector3(
      (connection.start[0] + connection.end[0]) / 2,
      (connection.start[1] + connection.end[1]) / 2 + 2,
      (connection.start[2] + connection.end[2]) / 2
    );
    
    const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
    return curve.getPoints(30);
  }, [connection]);
  
  return (
    <Line
      points={curvePoints}
      color={connection.color}
      lineWidth={1}
      transparent
      opacity={0.3}
    />
  );
}
