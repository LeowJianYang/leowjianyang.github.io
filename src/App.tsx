import Navbar from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Exp';

//import './CSS/main.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}

export default App;
