import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
const NavLink = ({ href, children, mobile = false, onClick }: { href: string; children: React.ReactNode; mobile?: boolean; onClick?: () => void }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    if (onClick) {
      onClick();
    }
  };

  return (
    <a 
      href={href} 
      onClick={handleClick}
      className={`
        text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium
        ${mobile ? 'block py-3 text-lg border-b border-slate-100 dark:border-slate-800' : ''}
      `}
    >
      {children}
    </a>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          L<span className="text-primary-500">JY</span>.
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <div className="pl-4 border-l border-slate-200 dark:border-slate-700">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-slate-800 dark:text-slate-200 focus:outline-none p-1"
            aria-label="Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 shadow-xl transition-all duration-300 origin-top ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0 overflow-hidden'}`}>
        <div className="flex flex-col space-y-2">
          <NavLink href="#about" mobile onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink href="#skills" mobile onClick={() => setIsOpen(false)}>Skills</NavLink>
          <NavLink href="#experience" mobile onClick={() => setIsOpen(false)}>Experience</NavLink>
          <NavLink href="#projects" mobile onClick={() => setIsOpen(false)}>Projects</NavLink>
          <NavLink href="#contact" mobile onClick={() => setIsOpen(false)}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;