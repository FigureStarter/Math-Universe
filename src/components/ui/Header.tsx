import { Globe, Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Header() {
  const { t, i18n } = useTranslation();
  
  const toggleLanguage = () => {
    const newLang = i18n.language === 'zh' ? 'en' : 'zh';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-20 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 p-[2px]">
              <div className="w-full h-full rounded-full bg-[#0a0a1a] flex items-center justify-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  ∑
                </span>
              </div>
            </div>
            {/* 辉光 */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 blur-lg opacity-30 -z-10" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white font-['Space_Grotesk'] tracking-wide">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Math
              </span>
              <span className="text-white">Universe</span>
            </h1>
            <p className="text-xs text-gray-400 hidden sm:block">
              {t('app.subtitle')}
            </p>
          </div>
        </motion.div>
        
        {/* 右侧操作按钮 */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          {/* 信息按钮 */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="glass p-2.5 rounded-full hover:bg-indigo-500/20 transition-colors btn-glow"
            title={t('app.about')}
          >
            <Info className="w-5 h-5 text-white" />
          </motion.button>
          
          {/* 语言切换 */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            className="glass px-4 py-2 rounded-full hover:bg-indigo-500/20 transition-colors btn-glow flex items-center gap-2"
          >
            <Globe className="w-5 h-5 text-indigo-400" />
            <span className="text-white text-sm font-medium uppercase tracking-wider">
              {i18n.language === 'zh' ? '中文' : 'EN'}
            </span>
          </motion.button>
        </motion.div>
      </div>
    </header>
  );
}
