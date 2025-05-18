import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const PlansSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <div id="plans" className="bg-gray-50 py-12 sm:py-16">
      <h2 className="text-3xl font-bold text-center mb-4">投資方案</h2>
      <div className="w-24 h-2 bg-crypto-blue mx-auto mb-8 sm:mb-12 rounded-full"></div>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {/* Basic Plan */}
          <div className="w-full md:w-80 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border overflow-hidden">
            <div className="p-4 sm:p-6 border-b">
              <h3 className="text-xl font-bold text-center">基礎方案</h3>
              <div className="mt-4 text-center">
                <div className="text-3xl sm:text-4xl font-bold">8%</div>
                <div className="text-sm text-gray-500 mt-1">每月回報</div>
              </div>
            </div>
            
            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              <div className="flex items-start">
                <div className="mt-1 mr-3 rounded-full bg-gray-100 p-1">
                  <Check className="h-3 w-3 text-crypto-blue" />
                </div>
                <span className="text-sm text-gray-600">最低投資額: $1,000</span>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-3 rounded-full bg-gray-100 p-1">
                  <Check className="h-3 w-3 text-crypto-blue" />
                </div>
                <span className="text-sm text-gray-600">每週收益</span>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-3 rounded-full bg-gray-100 p-1">
                  <Check className="h-3 w-3 text-crypto-blue" />
                </div>
                <span className="text-sm text-gray-600">基本市場分析</span>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-3 rounded-full bg-gray-100 p-1">
                  <Check className="h-3 w-3 text-crypto-blue" />
                </div>
                <span className="text-sm text-gray-600">標準交易工具</span>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-3 rounded-full bg-gray-100 p-1">
                  <Check className="h-3 w-3 text-crypto-blue" />
                </div>
                <span className="text-sm text-gray-600">電子郵件支援</span>
              </div>
            </div>
            
            <div className="p-4 sm:p-6 pt-0">
              <Link 
                to="/register" 
                className="block w-full py-2 px-4 bg-yellow-400 hover:bg-yellow-500 rounded-lg text-center font-medium transition-colors"
              >
                選擇方案
              </Link>
            </div>
          </div>
          
          {/* Advanced Plan */}
          <div className="w-full md:w-80 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border overflow-hidden relative transform md:scale-105">
            <div className="absolute top-0 left-0 right-0 text-center bg-crypto-blue py-1 text-white text-xs">
              最受歡迎
            </div>
            <div className="p-4 sm:p-6 border-b mt-5">
              <h3 className="text-xl font-bold text-center">進階方案</h3>
              <div className="mt-4 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-crypto-blue">12%</div>
                <div className="text-sm text-gray-500 mt-1">每月回報</div>
              </div>
            </div>
            
            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              <div className="flex items-start">
                <div className="mt-1 mr-3 rounded-full bg-blue-100 p-1">
                  <Check className="h-3 w-3 text-crypto-blue" />
                </div>
                <span className="text-sm text-gray-600">最低投資額: $5,000</span>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-3 rounded-full bg-blue-100 p-1">
                  <Check className="h-3 w-3 text-crypto-blue" />
                </div>
                <span className="text-sm text-gray-600">每日收益</span>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-3 rounded-full bg-blue-100 p-1">
                  <Check className="h-3 w-3 text-crypto-blue" />
                </div>
                <span className="text-sm text-gray-600">進階市場分析</span>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-3 rounded-full bg-blue-100 p-1">
                  <Check className="h-3 w-3 text-crypto-blue" />
                </div>
                <span className="text-sm text-gray-600">高級交易工具</span>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-3 rounded-full bg-blue-100 p-1">
                  <Check className="h-3 w-3 text-crypto-blue" />
                </div>
                <span className="text-sm text-gray-600">優先支援服務</span>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-3 rounded-full bg-blue-100 p-1">
                  <Check className="h-3 w-3 text-crypto-blue" />
                </div>
                <span className="text-sm text-gray-600">風險管理工具</span>
              </div>
            </div>
            
            <div className="p-4 sm:p-6 pt-0">
              <Link 
                to="/register" 
                className="block w-full py-2 px-4 bg-crypto-blue text-white hover:bg-blue-600 rounded-lg text-center font-medium transition-colors"
              >
                選擇方案
              </Link>
            </div>
          </div>
          
          {/* Premium Plan */}
          <div className="w-full md:w-80 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border overflow-hidden">
            <div className="p-4 sm:p-6 border-b">
              <h3 className="text-xl font-bold text-center">尊榮方案</h3>
              <div className="mt-4 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-crypto-gold">18%</div>
                <div className="text-sm text-gray-500 mt-1">每月回報</div>
              </div>
            </div>
            
            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              <div className="flex items-start">
                <div className="mt-1 mr-3 rounded-full bg-amber-100 p-1">
                  <Check className="h-3 w-3 text-crypto-gold" />
                </div>
                <span className="text-sm text-gray-600">最低投資額: $10,000</span>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-3 rounded-full bg-amber-100 p-1">
                  <Check className="h-3 w-3 text-crypto-gold" />
                </div>
                <span className="text-sm text-gray-600">即時收益</span>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-3 rounded-full bg-amber-100 p-1">
                  <Check className="h-3 w-3 text-crypto-gold" />
                </div>
                <span className="text-sm text-gray-600">AI策略分析</span>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-3 rounded-full bg-amber-100 p-1">
                  <Check className="h-3 w-3 text-crypto-gold" />
                </div>
                <span className="text-sm text-gray-600">專屬投資顧問</span>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-3 rounded-full bg-amber-100 p-1">
                  <Check className="h-3 w-3 text-crypto-gold" />
                </div>
                <span className="text-sm text-gray-600">24/7專線支援</span>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-3 rounded-full bg-amber-100 p-1">
                  <Check className="h-3 w-3 text-crypto-gold" />
                </div>
                <span className="text-sm text-gray-600">高級風險管理</span>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-3 rounded-full bg-amber-100 p-1">
                  <Check className="h-3 w-3 text-crypto-gold" />
                </div>
                <span className="text-sm text-gray-600">獨家投資機會</span>
              </div>
            </div>
            
            <div className="p-4 sm:p-6 pt-0">
              <Link 
                to="/register" 
                className="block w-full py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded-lg text-center font-medium transition-colors"
              >
                選擇方案
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
};

export default PlansSection;
