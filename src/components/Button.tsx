import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'pink' | 'blue' | 'light';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...props }) => {
  const bgColor = {
    primary: 'bg-[var(--accent-primary)] text-black',
    pink: 'bg-[var(--accent-pink)] text-black',
    blue: 'bg-[var(--accent-blue)] text-black',
    light: 'bg-[var(--bg-card)] text-[var(--text-main)]',
  }[variant];

  return (
    <button
      className={`px-6 py-3 font-bold uppercase tracking-widest brutal-border brutal-shadow ${bgColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
