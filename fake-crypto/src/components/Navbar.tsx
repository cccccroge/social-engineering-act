
import React from 'react';
import { Link } from 'react-router-dom';
import CryptoLogo from './CryptoLogo';
import { Button } from './ui/button';
import { useScrollToElement } from '../hooks/useScrollToElement';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { cn } from '../lib/utils';
import Layout from './Layout';

const Navbar = () => {
  const { scrollToElementById } = useScrollToElement();
  const { isScrolled } = useScrollPosition(10);
  
  return (
    <nav className={cn(
      "backdrop-filter backdrop-blur-md border-b border-white border-opacity-10 sticky top-0 z-50 transition-all duration-200",
      isScrolled 
        ? "bg-white bg-opacity-80" 
        : "bg-white bg-opacity-5"
    )}>
      <Layout className="py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <CryptoLogo size="sm" />
            <span className={cn(
              "text-xl font-bold transition-colors duration-200",
              isScrolled ? "text-crypto-dark" : "text-white"
            )}>CryptoTech Pro</span>
          </Link>
          
          <div className={cn(
            "hidden md:flex space-x-8 transition-colors duration-200",
            isScrolled ? "text-crypto-dark" : "text-white"
          )}>
            <Link to="/" className={cn(
              "hover:text-crypto-blue-light transition-colors duration-200",
              isScrolled ? "text-crypto-dark" : "text-white"
            )}>首頁</Link>
            <button 
              onClick={() => scrollToElementById('plans')} 
              className={cn(
                "bg-transparent border-0 p-0 hover:text-crypto-blue-light transition-colors duration-200 cursor-pointer",
                isScrolled ? "text-crypto-dark" : "text-white"
              )}
            >
              方案
            </button>
            <Link to="/register" className={cn(
              "hover:text-crypto-blue-light transition-colors duration-200",
              isScrolled ? "text-crypto-dark" : "text-white"
            )}>立即註冊</Link>
          </div>
          
          <Button 
            asChild
            size="sm" 
            className="bg-gradient-blue hover:opacity-90 text-xs px-3 py-1 h-8 text-white transition-all duration-200"
          >
            <Link to="/register">立即開始投資</Link>
          </Button>
        </div>
      </Layout>
    </nav>
  );
};

export default Navbar;
