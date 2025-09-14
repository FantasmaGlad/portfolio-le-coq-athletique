'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-coq-red focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed border';
    
    const variants = {
      primary: 'bg-coq-navy hover:bg-coq-gray-dark text-white border-coq-navy hover:border-coq-gray-dark',
      secondary: 'bg-transparent border-coq-navy text-coq-navy hover:bg-coq-navy hover:text-white',
      accent: 'bg-coq-red hover:bg-coq-red-dark text-white border-coq-red hover:border-coq-red-dark'
    };
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    };

    return (
      <button
        ref={ref}
        className={clsx(baseClasses, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;