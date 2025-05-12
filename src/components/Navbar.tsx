
import React from 'react';
import { Link } from 'react-router-dom';
import HexLogo from './HexLogo';
import { Button } from './ui/button';

const Navbar = () => {
  return (
    <nav className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-md border-b border-white border-opacity-10 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <HexLogo size="sm" />
          <span className="text-white text-xl font-bold">CryptoTech Pro</span>
        </Link>
        
        <div className="hidden md:flex space-x-8 text-white">
          <Link to="/" className="hover:text-crypto-blue-light transition-colors">首頁</Link>
          <Link to="/plans" className="hover:text-crypto-blue-light transition-colors">方案</Link>
          <Link to="/register" className="hover:text-crypto-blue-light transition-colors">立即註冊</Link>
        </div>
        
        <Button 
          asChild
          size="sm" 
          className="bg-gradient-blue hover:opacity-90 text-xs px-3 py-1 h-8"
        >
          <Link to="/register">立即開始投資</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
