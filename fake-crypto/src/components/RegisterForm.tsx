
import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// 第一步驗證規則
const stepOneSchema = z.object({
  email: z.string().email({ message: "請輸入有效的電子郵件地址" }),
  password: z.string()
    .min(8, { message: "密碼至少需要8個字符" })
    .refine(
      (password) => {
        let strength = 0;
        if (password.length >= 8) strength += 1;
        if (/[A-Z]/.test(password)) strength += 1;
        if (/[0-9]/.test(password)) strength += 1;
        if (/[^A-Za-z0-9]/.test(password)) strength += 1;
        return strength >= 2;
      },
      { message: "密碼強度不足，請增加大寫字母、數字或特殊字符" }
    ),
  confirmPassword: z.string(),
}).refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "密碼不匹配",
    path: ["confirmPassword"],
  }
);

// 第二步驗證規則
const stepTwoSchema = z.object({
  investmentExperience: z.string().min(1, { message: "請選擇投資經驗" }),
  riskTolerance: z.string().min(1, { message: "請選擇風險承受度" }),
  investmentGoal: z.string().min(1, { message: "請選擇投資目標" }),
});

// 第三步驗證規則
const stepThreeSchema = z.object({
  terms: z.literal(true, {
    errorMap: () => ({ message: "您必須同意服務條款才能繼續" }),
  }),
  updates: z.boolean().optional(),
});

// 完整表單類型
type FormData = z.infer<typeof stepOneSchema> & 
                z.infer<typeof stepTwoSchema> & 
                z.infer<typeof stepThreeSchema>;

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [passwordStrength, setPasswordStrength] = useState(0);
  
  // 創建一個表單實例，包含所有步驟的字段
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isDirty, touchedFields },
    trigger,
    getValues,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(
      currentStep === 1 
        ? stepOneSchema 
        : currentStep === 2 
          ? stepTwoSchema 
          : stepThreeSchema
    ),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      investmentExperience: "",
      riskTolerance: "",
      investmentGoal: "",
      terms: false,
      updates: false,
    }
  });
  
  // 監聽密碼變化以計算密碼強度
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "password") {
        const password = value.password as string || "";
        let strength = 0;
        if (password.length >= 8) strength += 1;
        if (/[A-Z]/.test(password)) strength += 1;
        if (/[0-9]/.test(password)) strength += 1;
        if (/[^A-Za-z0-9]/.test(password)) strength += 1;
        setPasswordStrength(strength);
      }
    });
    
    return () => subscription.unsubscribe();
  }, [watch]);
  
  const strengthClass = () => {
    if (passwordStrength === 0) return 'bg-gray-200';
    if (passwordStrength === 1) return 'bg-red-500 w-1/4';
    if (passwordStrength === 2) return 'bg-yellow-500 w-2/4';
    if (passwordStrength === 3) return 'bg-blue-500 w-3/4';
    if (passwordStrength === 4) return 'bg-green-500 w-full';
    return '';
  };
  
  // 處理下一步
  const handleNextStep = async () => {
    // 觸發當前步驟的表單驗證
    const isStepValid = await trigger();
    
    // 只有驗證通過才能進入下一步
    if (isStepValid) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  // 處理上一步
  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  
  const onSubmit = (data: FormData) => {
    console.log(data);
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

      <form onSubmit={handleSubmit(onSubmit)} className="p-6">
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
                  {...register("email")}
                  placeholder="您的郵箱@example.com"
                  className={`pl-10 w-full p-2 border rounded focus:ring-2 focus:ring-crypto-blue focus:border-transparent ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  aria-invalid={errors.email ? "true" : "false"}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1" role="alert">
                  {errors.email.message}
                </p>
              )}
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
                  {...register("password")}
                  placeholder="••••••••••"
                  className={`pl-10 w-full p-2 border rounded focus:ring-2 focus:ring-crypto-blue focus:border-transparent ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  aria-invalid={errors.password ? "true" : "false"}
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
                <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className={`h-full ${strengthClass()}`}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">密碼強度</p>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1" role="alert">
                  {errors.password.message}
                </p>
              )}
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
                  {...register("confirmPassword")}
                  placeholder="••••••••••"
                  className={`pl-10 w-full p-2 border rounded focus:ring-2 focus:ring-crypto-blue focus:border-transparent ${
                    errors.confirmPassword ? "border-red-500" : ""
                  }`}
                  aria-invalid={errors.confirmPassword ? "true" : "false"}
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1" role="alert">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4">
            <div>
              <label htmlFor="investmentExperience" className="block text-sm font-medium text-gray-700 mb-1">
                投資經驗
              </label>
              <select
                id="investmentExperience"
                {...register("investmentExperience")}
                className={`w-full p-2 border rounded focus:ring-2 focus:ring-crypto-blue focus:border-transparent ${
                  errors.investmentExperience ? "border-red-500" : ""
                }`}
                aria-invalid={errors.investmentExperience ? "true" : "false"}
              >
                <option value="">請選擇...</option>
                <option value="新手 (1年以下)">新手 (1年以下)</option>
                <option value="中級 (1-3年)">中級 (1-3年)</option>
                <option value="高級 (3年以上)">高級 (3年以上)</option>
              </select>
              {errors.investmentExperience && (
                <p className="text-red-500 text-xs mt-1" role="alert">
                  {errors.investmentExperience.message}
                </p>
              )}
            </div>
            
            <div>
              <label htmlFor="riskTolerance" className="block text-sm font-medium text-gray-700 mb-1">
                風險承受度
              </label>
              <select
                id="riskTolerance"
                {...register("riskTolerance")}
                className={`w-full p-2 border rounded focus:ring-2 focus:ring-crypto-blue focus:border-transparent ${
                  errors.riskTolerance ? "border-red-500" : ""
                }`}
                aria-invalid={errors.riskTolerance ? "true" : "false"}
              >
                <option value="">請選擇...</option>
                <option value="保守">保守</option>
                <option value="平衡">平衡</option>
                <option value="積極">積極</option>
              </select>
              {errors.riskTolerance && (
                <p className="text-red-500 text-xs mt-1" role="alert">
                  {errors.riskTolerance.message}
                </p>
              )}
            </div>
            
            <div>
              <label htmlFor="investmentGoal" className="block text-sm font-medium text-gray-700 mb-1">
                投資目標
              </label>
              <select
                id="investmentGoal"
                {...register("investmentGoal")}
                className={`w-full p-2 border rounded focus:ring-2 focus:ring-crypto-blue focus:border-transparent ${
                  errors.investmentGoal ? "border-red-500" : ""
                }`}
                aria-invalid={errors.investmentGoal ? "true" : "false"}
              >
                <option value="">請選擇...</option>
                <option value="資本保全">資本保全</option>
                <option value="收入生成">收入生成</option>
                <option value="長期增長">長期增長</option>
                <option value="激進增長">激進增長</option>
              </select>
              {errors.investmentGoal && (
                <p className="text-red-500 text-xs mt-1" role="alert">
                  {errors.investmentGoal.message}
                </p>
              )}
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-medium text-sm mb-2">帳戶摘要</h3>
              <p className="text-sm text-gray-600">電子郵件: {getValues("email")}</p>
              <p className="text-sm text-gray-600">投資經驗: {getValues("investmentExperience")}</p>
              <p className="text-sm text-gray-600">風險承受度: {getValues("riskTolerance")}</p>
              <p className="text-sm text-gray-600">投資目標: {getValues("investmentGoal")}</p>
            </div>
            
            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                {...register("terms")}
                className={`mt-1 ${errors.terms ? "border-red-500" : ""}`}
                aria-invalid={errors.terms ? "true" : "false"}
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                我同意 CryptoTech Pro 的<a href="#" className="text-crypto-blue">服務條款</a>和<a href="#" className="text-crypto-blue">隱私政策</a>
              </label>
            </div>
            {errors.terms && (
              <p className="text-red-500 text-xs mt-1" role="alert">
                {errors.terms.message}
              </p>
            )}
            
            <div className="flex items-start">
              <input
                type="checkbox"
                id="updates"
                {...register("updates")}
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
              onClick={handlePrevStep}
              className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
            >
              上一步
            </button>
          )}
          
          {currentStep < 3 ? (
            <button
              type="button"
              onClick={handleNextStep}
              disabled={!isDirty || Object.keys(errors).length > 0}
              className={`px-4 py-2 text-white rounded ml-auto ${
                !isDirty || Object.keys(errors).length > 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-crypto-blue hover:bg-blue-600"
              }`}
            >
              下一步
            </button>
          ) : (
            <button
              type="submit"
              disabled={!isValid}
              className={`px-4 py-2 text-white rounded ml-auto ${
                !isValid
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-crypto-blue hover:bg-blue-600"
              }`}
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
