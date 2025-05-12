
import React, { useState } from 'react';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';
import HexLogo from './HexLogo';
import { useIsMobile } from '@/hooks/use-mobile';

const btcData = Array(30).fill(0).map((_, i) => ({
  name: i,
  price: 40000 + Math.random() * 5000 + i * 100
}));

const testimonials = [
  {
    id: 1,
    name: '張先生',
    position: '科技公司經理',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    content: '加入CryptoTech Pro後，我的投資組合表現遠超預期，達到了23.5%的回報率。',
    rating: 5,
    duration: '會員9個月'
  },
  {
    id: 2,
    name: '李女士',
    position: '財務顧問',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    content: '平台的AI分析工具幫助我更好地了解市場趨勢，避開了許多風險。真的很值得信賴。',
    rating: 5,
    duration: '會員1年2個月'
  },
  {
    id: 3,
    name: '王先生',
    position: '退休教師',
    image: 'https://randomuser.me/api/portraits/men/67.jpg',
    content: '即使我對加密貨幣知識有限，CryptoTech Pro的團隊也幫助我建立了穩健的投資組合。',
    rating: 4,
    duration: '會員6個月'
  }
];

const TrustSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const isMobile = useIsMobile();

  return (
    <div className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-4">為何選擇我們</h2>
        <div className="w-24 h-2 bg-crypto-blue mx-auto mb-8 sm:mb-12 rounded-full"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Security */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-center md:text-left">安全認證</h3>
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <div className="text-crypto-blue text-center text-sm font-bold">SSL</div>
                </div>
                <div>
                  <p className="font-medium">SSL安全保障</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <div className="text-crypto-blue text-center text-sm font-bold">ISO</div>
                </div>
                <div>
                  <p className="font-medium">ISO 27001認證</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-amber-100 p-3 rounded-lg">
                  <div className="text-crypto-gold text-center text-sm font-bold">認證</div>
                </div>
                <div>
                  <p className="font-medium">金融監管機構認可</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonials */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-center">客戶評價</h3>
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 border relative">
              <div className="absolute -top-4 -left-4">
                <HexLogo size="sm" className="animate-pulse-light" />
              </div>
              
              <div className="mb-4 flex items-center">
                <img 
                  src={testimonials[activeTestimonial].image} 
                  alt={testimonials[activeTestimonial].name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-4" 
                />
                <div>
                  <p className="font-medium">{testimonials[activeTestimonial].name}</p>
                  <p className="text-sm text-gray-500">{testimonials[activeTestimonial].position}</p>
                </div>
              </div>
              
              <p className="text-gray-600 italic mb-4 text-sm sm:text-base">"{testimonials[activeTestimonial].content}"</p>
              
              <div className="flex justify-between items-center">
                <div className="flex">
                  {Array(5).fill(0).map((_, i) => (
                    <svg 
                      key={i}
                      className={`w-4 h-4 ${i < testimonials[activeTestimonial].rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-gray-500">{testimonials[activeTestimonial].duration}</span>
              </div>
              
              <div className="flex justify-center space-x-2 mt-4 sm:mt-6">
                {testimonials.map((_, idx) => (
                  <button 
                    key={idx} 
                    className={`w-2 h-2 rounded-full ${activeTestimonial === idx ? 'bg-crypto-blue' : 'bg-gray-300'}`}
                    onClick={() => setActiveTestimonial(idx)}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Market Analysis */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-center md:text-right">市場分析</h3>
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 border">
              <div className="flex justify-between items-center mb-3">
                <span className="font-medium">BTC/USD市場趨勢</span>
                <span className="text-crypto-success font-medium">+5.4%</span>
              </div>
              
              <ResponsiveContainer width="100%" height={isMobile ? 100 : 120}>
                <AreaChart data={btcData}>
                  <defs>
                    <linearGradient id="colorBtc" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Area 
                    type="monotone" 
                    dataKey="price" 
                    stroke="#10b981" 
                    fillOpacity={1} 
                    fill="url(#colorBtc)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
              
              <div className="flex justify-between items-center mt-3">
                <span className="text-sm text-gray-500">目前價格:</span>
                <span className="font-medium">$42,568</span>
              </div>
              
              <button className="w-full mt-4 bg-blue-100 text-crypto-blue py-2 rounded-lg hover:bg-blue-200 transition-colors">
                查看完整分析
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSection;
