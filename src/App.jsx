import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './styles.css'
import Projects from "./components/Projects.jsx";
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
      <Hero scrollToSection={scrollToSection} darkMode={darkMode} />
      <About scrollToSection={scrollToSection} darkMode={darkMode} />
      <Skills scrollToSection={scrollToSection} darkMode={darkMode} />
        <Projects scrollToSection={scrollToSection} darkMode={darkMode} />
       <Contact scrollToSection={scrollToSection} darkMode={darkMode} />
       <Footer scrollToSection={scrollToSection} darkMode={darkMode} />
    </div>
  )
}

export default App
