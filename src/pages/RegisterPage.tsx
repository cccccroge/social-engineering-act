
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RegisterForm from '@/components/RegisterForm';
import Layout from '@/components/Layout';

const RegisterPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-crypto-dark text-white flex flex-col">
      <Navbar />

      <div className="flex-grow bg-white text-gray-900">
        <Layout className="py-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">立即開始投資</h2>
            <div className="w-24 h-2 bg-crypto-blue mx-auto mb-8 rounded-full"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">創建您的帳戶</h3>
                <p className="text-gray-600 mb-6">
                  加入數千名使用我們先進的加密貨幣平台獲取被動收入的投資者。
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center mr-3 mt-1">
                      <div className="text-gray-500 text-xs">✓</div>
                    </div>
                    <span>快速三步驟註冊流程</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center mr-3 mt-1">
                      <div className="text-gray-500 text-xs">✓</div>
                    </div>
                    <span>安全SSL加密連接</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center mr-3 mt-1">
                      <div className="text-gray-500 text-xs">✓</div>
                    </div>
                    <span>最低僅需$1,000即可開始</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center mr-3 mt-1">
                      <div className="text-gray-500 text-xs">✓</div>
                    </div>
                    <span>無隱藏費用或綁金</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center mr-3 mt-1">
                      <div className="text-gray-500 text-xs">✓</div>
                    </div>
                    <span>24/7客戶支援</span>
                  </div>
                </div>
              </div>

              <div>
                <RegisterForm />
              </div>
            </div>
          </div>
        </Layout>
      </div>

      <Footer />
    </div>
  );
};

export default RegisterPage;
