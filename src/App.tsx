import { useState, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from './components/three/Scene';
import Header from './components/ui/Header';
import SearchBar from './components/ui/SearchBar';
import FilterBar from './components/ui/FilterBar';
import DetailPanel from './components/detail/DetailPanel';
import Tooltip from './components/ui/Tooltip';
import LoadingScreen from './components/ui/LoadingScreen';
import { useFieldStore } from './stores/fieldStore';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { isDetailOpen } = useFieldStore();

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="w-full h-full relative bg-[#0a0a1a] overflow-hidden">
      {/* 加载屏幕 */}
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {/* 3D 场景 */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Scene />
      </div>

      {/* UI 覆盖层 */}
      {!isLoading && (
        <div className="absolute inset-0 pointer-events-none z-20">
          {/* 顶部导航 */}
          <Header />
          
          {/* 搜索栏 — 可拖拽浮动组件（自身管理定位） */}
          <SearchBar />
          
          {/* 筛选栏 */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-auto">
            <FilterBar />
          </div>
          
          {/* 提示框 */}
          <Tooltip />
          
          {/* 详情面板 */}
          {isDetailOpen && (
            <div className="absolute top-0 right-0 bottom-0 pointer-events-auto">
              <DetailPanel />
            </div>
          )}
        </div>
      )}

      {/* 背景渐变叠加 */}
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: `
            radial-gradient(ellipse at 20% 20%, rgba(99, 102, 241, 0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(139, 92, 246, 0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(34, 211, 238, 0.03) 0%, transparent 70%)
          `
        }}
      />
    </div>
  );
}

export default App;
