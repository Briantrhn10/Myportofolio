import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';

export const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains('dark');
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg-main)] border-b-[3px] border-[var(--border-dark)] py-5 mb-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href={isHome ? "#profil" : "/"} className="text-3xl font-black uppercase tracking-tighter bg-[var(--accent-primary)] text-black px-3 py-1 brutal-border brutal-shadow inline-block">
          BRIAN.
        </a>

        <nav className="flex gap-3 md:gap-4 lg:gap-5 font-bold uppercase text-sm md:text-base items-center">
          <a href={isHome ? "#profil" : "/"} className={`hidden md:block px-4 py-2 text-black brutal-border brutal-shadow ${isHome ? 'bg-[var(--accent-pink)]' : 'bg-[var(--bg-card)]'}`}>
            Profil
          </a>
          <a href={isHome ? "#projects" : "/#projects"} className="px-4 py-2 text-black bg-[var(--accent-blue)] brutal-border brutal-shadow">
            Projects
          </a>
          <a href={isHome ? "#education" : "/#education"} className="hidden lg:block px-4 py-2 text-black bg-[var(--accent-primary)] brutal-border brutal-shadow">
            Pendidikan
          </a>
          <a href={isHome ? "#experience" : "/#experience"} className="hidden lg:block px-4 py-2 text-black bg-[var(--accent-pink)] brutal-border brutal-shadow">
            Pengalaman
          </a>
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 bg-[var(--bg-card)] text-[var(--text-main)] brutal-border brutal-shadow hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all ml-2"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun className="w-6 h-6 text-yellow-500" /> : <Moon className="w-6 h-6 text-blue-600" />}
          </button>
        </nav>
      </div>
    </header>
  );
};
