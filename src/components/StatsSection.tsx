
import React from 'react';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';
import { useIsMobile } from '@/hooks/use-mobile';

const trafficData = Array(10).fill(0).map((_, i) => ({
  name: `Week ${i + 1}`,
  value: 200 + Math.random() * 100
}));

const usersData = Array(10).fill(0).map((_, i) => ({
  name: `Month ${i + 1}`,
  value: 1000 + i * 500 + Math.random() * 200
}));

const StatsSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="bg-white py-12 sm:py-16">
      <h2 className="text-3xl font-bold text-center mb-8 sm:mb-12">平台關鍵指標</h2>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Trading Volume Stat */}
          <div className="flex-1 border rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-center mb-4 sm:mb-6">$2.5B+ 交易量</h3>
            <ResponsiveContainer width="100%" height={isMobile ? 100 : 120}>
              <AreaChart data={trafficData}>
                <defs>
                  <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#3b82f6" 
                  fillOpacity={1} 
                  fill="url(#colorTraffic)" 
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm text-gray-600">每週增長 12%</span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
            </div>
          </div>
          
          {/* Active Users Stat */}
          <div className="flex-1 border rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-center mb-4 sm:mb-6">50,000+ 活躍用戶</h3>
            <ResponsiveContainer width="100%" height={isMobile ? 100 : 120}>
              <AreaChart data={usersData}>
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#3b82f6" 
                  fillOpacity={1} 
                  fill="url(#colorUsers)" 
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm text-gray-600">同比增長 85%</span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
            </div>
          </div>
          
          {/* Support Stat */}
          <div className="flex-1 border rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-center mb-4 sm:mb-6">24/7 專家支援</h3>
            <div className="flex justify-center items-center h-[90px] sm:h-[120px]">
              <div className="relative w-20 sm:w-24 h-20 sm:h-24">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle 
                    cx="50" cy="50" r="45" 
                    fill="none" 
                    stroke="#e5e7eb"
                    strokeWidth="8"
                  />
                  <circle 
                    cx="50" cy="50" r="45" 
                    fill="none" 
                    stroke="#10b981"
                    strokeWidth="8"
                    strokeDasharray="282.7"
                    strokeDashoffset="28.3"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg sm:text-xl font-bold">4.9/5</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-4">
              <span className="text-sm text-gray-600">4.9/5 客戶滿意度</span>
            </div>
          </div>
        </div>
    </div>
  );
};

export default StatsSection;
