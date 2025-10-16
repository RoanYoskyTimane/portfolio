import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About'
import Footer from './components/Footer';
import Project from './components/Project';
import Contact from './components/Contact';
import './styles.css'
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Header 
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />   
    </div>
  )
}

export default App
