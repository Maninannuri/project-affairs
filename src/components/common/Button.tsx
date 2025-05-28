import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  onClick,
  type = 'button',
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md';
  
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm',
    secondary: 'bg-slate-800 hover:bg-slate-900 text-white shadow-sm',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
    ghost: 'text-blue-600 hover:bg-blue-50',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2 gap-2',
    lg: 'text-base px-5 py-2.5 gap-2',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }
  
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;