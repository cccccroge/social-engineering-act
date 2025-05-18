import React from 'react';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  className,
  fullWidth = false,
}) => {
  return (
    <div className={cn(
      'w-full',
      fullWidth ? '' : 'container mx-auto',
      className
    )}>
      {children}
    </div>
  );
};

export default Layout;