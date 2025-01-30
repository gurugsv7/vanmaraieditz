import React, { useState, useEffect } from 'react';
import { Menu, X, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Play className="h-8 w-8 text-primary-700" />
            <Link to="/" className="text-2xl font-bold text-primary-900">
              Vanmarai Editz
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#about" isScrolled={isScrolled}>About</NavLink>
            <NavLink href="#portfolio" isScrolled={isScrolled}>Portfolio</NavLink>
            <NavLink href="#services" isScrolled={isScrolled}>Services</NavLink>
            <NavLink href="#testimonials" isScrolled={isScrolled}>Testimonials</NavLink>
            <NavLink href="#blog" isScrolled={isScrolled}>Blog</NavLink>
            <NavLink href="#contact" isScrolled={isScrolled} className="bg-primary-700 text-white px-4 py-2 rounded-md hover:bg-primary-900">
              Contact
            </NavLink>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <MobileNavLink href="#about">About</MobileNavLink>
            <MobileNavLink href="#portfolio">Portfolio</MobileNavLink>
            <MobileNavLink href="#services">Services</MobileNavLink>
            <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
            <MobileNavLink href="#blog">Blog</MobileNavLink>
            <MobileNavLink href="#contact">Contact</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children, className = '', isScrolled }) => (
  <a
    href={href}
    className={`${isScrolled ? 'text-primary-900' : 'text-white'} hover:text-primary-700 transition-colors duration-200 ${className}`}
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }) => (
  <a
    href={href}
    className="block px-3 py-2 rounded-md text-base font-medium text-primary-900 hover:text-primary-700 hover:bg-primary-100/50"
  >
    {children}
  </a>
);

export default Navbar;