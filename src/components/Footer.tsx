
import React from 'react';
import { Link } from 'react-router-dom';
import HexLogo from './HexLogo';

const Footer = () => {
  return (
    <footer className="bg-crypto-darker text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between mb-8 sm:mb-12">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <HexLogo size="sm" />
              <span className="text-xl font-bold ml-2">CryptoTech Pro</span>
            </div>
            <p className="text-gray-400 max-w-xs mb-4">
              採用AI驅動策略和安全基礎設施的先進加密貨幣投資平台。
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
            <div>
              <h3 className="font-medium mb-4">公司</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-gray-400 hover:text-white">關於我們</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white">團隊</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white">職位招聘</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white">新聞</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">產品</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-gray-400 hover:text-white">投資方案</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white">交易工具</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white">API接口</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white">推薦計劃</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">資源</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-gray-400 hover:text-white">部落格</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white">文檔</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white">市場分析</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white">知識庫</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">法律</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-gray-400 hover:text-white">服務條款</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white">隱私政策</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white">風險披露</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white">合規</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-6 sm:pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">© 2025 CryptoTech Pro. 版權所有。</p>
          <div className="flex space-x-4">
            <Link to="#" className="text-gray-500 hover:text-white">聯絡我們</Link>
            <Link to="#" className="text-gray-500 hover:text-white">支援中心</Link>
            <Link to="#" className="text-gray-500 hover:text-white">網站地圖</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
