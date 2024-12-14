import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About'
import Skill from './components/Skill';
import Footer from './components/Footer';
import Project from './components/Project';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Skill></Skill>
      <Project></Project>
      <Footer></Footer>
    </div>
  )
}

export default App
