import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import './styles/Header.css';

function Header({ activeSection, scrollToSection, darkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <h3 
          onClick={() => scrollToSection('home')}
          className="logo"
        >
          ROAN YOSKY
        </h3>

        <div className="header-actions">
          <div className="nav-links">
            {['home', 'about', 'skills', 'work', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`nav-link ${activeSection === item ? 'active' : ''}`}
              >
                {item}
              </button>
            ))}
          </div>

          <button onClick={toggleDarkMode} className="theme-toggle">
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-btn"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        
      </div>
      {isMenuOpen && (
          <div className="mobile-menu">
            {['home', 'about', 'skills', 'work', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item);
                  setIsMenuOpen(false);
                }}
                className="mobile-menu-link"
              >
                {item}
              </button>
            ))}
          </div>
        )}
    </nav>
  );
}

export default Header;