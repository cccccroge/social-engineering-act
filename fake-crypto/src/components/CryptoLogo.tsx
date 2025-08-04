import React from 'react';

interface CryptoLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const CryptoLogo: React.FC<CryptoLogoProps> = ({ 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  // Using an imported PNG image
  return (
    <div className={`${sizeClasses[size]} ${className} flex items-center justify-center`}>
      <img 
        src="/images/crypto-logo.png" 
        alt="CryptoTech Pro Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default CryptoLogo;