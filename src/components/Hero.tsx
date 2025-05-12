
import React from 'react';
import { Link } from 'react-router-dom';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';
import { Card } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const data = [
  { name: 'Jan', price: 34000 },
  { name: 'Feb', price: 38000 },
  { name: 'Mar', price: 36000 },
  { name: 'Apr', price: 41000 },
  { name: 'May', price: 39000 },
  { name: 'Jun', price: 45000 },
  { name: 'Jul', price: 47000 },
  { name: 'Aug', price: 51000 },
];

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative min-h-[600px] py-16 flex flex-col justify-center overflow-hidden hex-pattern">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-crypto-blue opacity-20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-crypto-gold opacity-10 rounded-full filter blur-3xl"></div>
      
      {/* Floating hexagons */}
      <div className="absolute top-20 left-[15%] animate-float">
        <div className="hexagon bg-white bg-opacity-5 w-16 h-16"></div>
      </div>
      <div className="absolute bottom-20 right-[15%] animate-float" style={{ animationDelay: '1s' }}>
        <div className="hexagon bg-crypto-gold bg-opacity-10 w-12 h-12"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left column */}
          <div className="flex-1 w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              安全加密貨幣<br />投資平台
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-xl">
              採用AI動力策略的先進加密貨幣投資解決方案。使用我們的安全平台開始獲得長期的較高資產。
            </p>
            <Link to="/register" className="btn-gradient-blue">
              開始投資
            </Link>
            
            <div className="flex flex-col mt-8 space-y-2">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white bg-opacity-10 rounded-lg flex items-center justify-center mr-3">
                  <div className="hexagon bg-crypto-blue w-4 h-4"></div>
                </div>
                <span className="text-gray-300">SSL 安全保障</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white bg-opacity-10 rounded-lg flex items-center justify-center mr-3">
                  <div className="hexagon bg-crypto-blue w-4 h-4"></div>
                </div>
                <span className="text-gray-300">256位元加密</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white bg-opacity-10 rounded-lg flex items-center justify-center mr-3">
                  <div className="hexagon bg-crypto-blue w-4 h-4"></div>
                </div>
                <span className="text-gray-300">受監管投資</span>
              </div>
            </div>
          </div>
          
          {/* Right column - Dashboard */}
          <div className="flex-1 w-full mt-8 md:mt-0">
            <div className="glass-card-dark p-4 sm:p-6 shadow-xl">
              <div className="bg-crypto-darker p-4 rounded-lg mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-200 font-medium">BTC/USD</span>
                  <span className="text-crypto-gold">$42,568</span>
                </div>
                <ResponsiveContainer width="100%" height={isMobile ? 120 : 150}>
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area 
                      type="monotone" 
                      dataKey="price" 
                      stroke="#10b981" 
                      strokeWidth={2}
                      fillOpacity={1} 
                      fill="url(#colorPrice)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="bg-crypto-darker border-none">
                  <div className="p-4">
                    <h3 className="text-sm text-gray-300 mb-2">資產分配</h3>
                    <AspectRatio ratio={1/1} className="w-full">
                      <div className="w-full h-full rounded-full" style={{ 
                        backgroundImage: "conic-gradient(#3b82f6 55%, #fbbf24 0)"
                      }}></div>
                    </AspectRatio>
                  </div>
                </Card>
                <Card className="bg-crypto-darker border-none">
                  <div className="p-4">
                    <h3 className="text-sm text-gray-300 mb-2">交易量</h3>
                    <div className="h-24 sm:h-32 flex items-end justify-around">
                      <div className="w-[15%] h-[60%] bg-crypto-blue rounded"></div>
                      <div className="w-[15%] h-[40%] bg-crypto-blue rounded"></div>
                      <div className="w-[15%] h-[80%] bg-crypto-success rounded"></div>
                      <div className="w-[15%] h-[30%] bg-crypto-danger rounded"></div>
                      <div className="w-[15%] h-[65%] bg-crypto-success rounded"></div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
