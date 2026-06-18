import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'pink' | 'blue' | 'light';
}

export const Card: React.FC<CardProps> = ({ children, className = '', variant = 'light' }) => {
  const bgColor = {
    primary: 'bg-[var(--card-primary)]',
    pink: 'bg-[var(--card-pink)]',
    blue: 'bg-[var(--card-blue)]',
    light: 'bg-[var(--bg-card)]',
  }[variant];

  const accentStripe = {
    primary: 'bg-[var(--accent-primary)]',
    pink: 'bg-[var(--accent-pink)]',
    blue: 'bg-[var(--accent-blue)]',
    light: '',
  }[variant];

  return (
    <div className={`brutal-border brutal-shadow ${bgColor} ${className} relative overflow-hidden`}>
      {accentStripe && (
        <div className={`absolute top-0 left-0 right-0 h-[5px] ${accentStripe}`} />
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

