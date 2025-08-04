
import React from 'react';

interface HexLogoProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
}

const HexLogo: React.FC<HexLogoProps> = ({ 
  size = 'md', 
  color = 'bg-crypto-blue',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`${sizeClasses[size]} ${color} hexagon flex items-center justify-center ${className}`}>
      <div className="hexagon bg-white bg-opacity-30 backdrop-filter backdrop-blur-sm w-[85%] h-[85%] flex items-center justify-center">
        <div className="text-white font-bold">C</div>
      </div>
    </div>
  );
};

export default HexLogo;
