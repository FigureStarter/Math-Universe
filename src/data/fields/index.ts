import { FieldNode } from '@/types';
import { assignPositions } from './positions';
import { logicFields } from './logic';
import { algebraFields } from './algebra';
import { geometryFields } from './geometry';
import { analysisFields } from './analysis';
import { topologyFields } from './topology';
import { numbertheoryFields } from './numbertheory';
import { probabilityFields } from './probability';
import { discreteFields } from './discrete';
import { appliedFields } from './applied';
import { mathphysicsFields } from './mathphysics';
import { interdisciplinaryFields } from './interdisciplinary';

// 合并所有领域数据
export const fieldsData: FieldNode[] = assignPositions([
  ...logicFields,
  ...algebraFields,
  ...geometryFields,
  ...analysisFields,
  ...topologyFields,
  ...numbertheoryFields,
  ...probabilityFields,
  ...discreteFields,
  ...appliedFields,
  ...mathphysicsFields,
  ...interdisciplinaryFields,
]);
