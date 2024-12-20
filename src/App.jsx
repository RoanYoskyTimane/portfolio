import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About'
import Footer from './components/Footer';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
