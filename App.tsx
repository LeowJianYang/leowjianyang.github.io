import Navbar from './src/components/Header';
import Hero from './src/components/Hero';
import About from './src/components/About';
import Skills from './src/components/Skills';
import Projects from './src/components/Projects';
import Contact from './src/components/Contact';
import Experience from './src/components/Exp';

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
