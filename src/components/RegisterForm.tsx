
import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [passwordStrength, setPasswordStrength] = useState(0);
  
  const calculateStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    return strength;
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordStrength(calculateStrength(newPassword));
  };

  const strengthClass = () => {
    if (passwordStrength === 0) return 'bg-gray-200';
    if (passwordStrength === 1) return 'bg-red-500 w-1/4';
    if (passwordStrength === 2) return 'bg-yellow-500 w-2/4';
    if (passwordStrength === 3) return 'bg-blue-500 w-3/4';
    if (passwordStrength === 4) return 'bg-green-500 w-full';
    return '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('註冊成功！');
  };

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden max-w-md mx-auto border">
      <div className="bg-crypto-blue py-4 px-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === 1 ? 'bg-white text-crypto-blue' : 'bg-blue-400 text-white'}`}>
              1
            </div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === 2 ? 'bg-white text-crypto-blue' : 'bg-blue-400 text-white'}`}>
              2
            </div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === 3 ? 'bg-white text-crypto-blue' : 'bg-blue-400 text-white'}`}>
              3
            </div>
          </div>
          <h2 className="text-white font-bold">{currentStep === 1 ? '帳戶' : currentStep === 2 ? '偏好' : '確認'}</h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6">
        {currentStep === 1 && (
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                電子郵件地址
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="您的郵箱@example.com"
                  className="pl-10 w-full p-2 border rounded focus:ring-2 focus:ring-crypto-blue focus:border-transparent"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                密碼
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="••••••••••"
                  className="pl-10 w-full p-2 border rounded focus:ring-2 focus:ring-crypto-blue focus:border-transparent"
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              <div className="mt-1">
                <div className="password-strength">
                  <div className={`password-strength-level ${strengthClass()}`}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">密碼強度</p>
              </div>
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                確認密碼
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••••"
                  className="pl-10 w-full p-2 border rounded focus:ring-2 focus:ring-crypto-blue focus:border-transparent"
                  required
                />
              </div>
              {confirmPassword && password !== confirmPassword && (
                <p className="text-red-500 text-xs mt-1">密碼不匹配</p>
              )}
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                投資經驗
              </label>
              <select className="w-full p-2 border rounded focus:ring-2 focus:ring-crypto-blue focus:border-transparent">
                <option>新手 (1年以下)</option>
                <option>中級 (1-3年)</option>
                <option>高級 (3年以上)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                風險承受度
              </label>
              <select className="w-full p-2 border rounded focus:ring-2 focus:ring-crypto-blue focus:border-transparent">
                <option>保守</option>
                <option>平衡</option>
                <option>積極</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                投資目標
              </label>
              <select className="w-full p-2 border rounded focus:ring-2 focus:ring-crypto-blue focus:border-transparent">
                <option>資本保全</option>
                <option>收入生成</option>
                <option>長期增長</option>
                <option>激進增長</option>
              </select>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-medium text-sm mb-2">帳戶摘要</h3>
              <p className="text-sm text-gray-600">電子郵件: {email}</p>
            </div>
            
            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                className="mt-1"
                required
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                我同意 CryptoTech Pro 的<a href="#" className="text-crypto-blue">服務條款</a>和<a href="#" className="text-crypto-blue">隱私政策</a>
              </label>
            </div>
            
            <div className="flex items-start">
              <input
                type="checkbox"
                id="updates"
                className="mt-1"
              />
              <label htmlFor="updates" className="ml-2 text-sm text-gray-600">
                我希望接收投資機會和平台更新的電子郵件
              </label>
            </div>
            
            <div className="bg-blue-50 p-4 rounded flex items-start">
              <Lock className="text-crypto-blue h-4 w-4 mt-0.5 mr-2" />
              <p className="text-sm text-gray-600">
                您的資料受256位元加密保護，我們絕不會與第三方分享您的個人資訊。
              </p>
            </div>
          </div>
        )}
        
        <div className="mt-6 flex justify-between">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={() => setCurrentStep(currentStep - 1)}
              className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
            >
              上一步
            </button>
          )}
          
          {currentStep < 3 ? (
            <button
              type="button"
              onClick={() => setCurrentStep(currentStep + 1)}
              className="px-4 py-2 bg-crypto-blue text-white rounded hover:bg-blue-600 ml-auto"
            >
              下一步
            </button>
          ) : (
            <button
              type="submit"
              className="px-4 py-2 bg-crypto-blue text-white rounded hover:bg-blue-600 ml-auto"
            >
              提交
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
