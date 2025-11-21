import { Mail, ChevronDown } from 'lucide-react';
import { SiGithub,SiLinkedin } from "react-icons/si";

const Hero = () => (
  <section className="min-h-screen flex items-center justify-center pt-16 px-6 relative overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute top-20 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -z-10 animate-float"></div>
    <div className="absolute bottom-20 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '2s' }}></div>

    <div className="max-w-4xl mx-auto text-center z-10">
      <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium backdrop-blur-sm">
        Software Engineering Student
      </div>
      
      <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
        Building digital <br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-500 to-purple-600 dark:from-primary-400 dark:to-purple-400">experiences</span> that matter.
      </h1>
      
      <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
        Hi, I'm <span className="font-semibold text-slate-900 dark:text-white">Leow Jian Yang</span>. 
        Passionate about clean code and user experience.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
        <a 
          href="#projects"
          onClick={(e) =>(e.preventDefault(), document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }))}
          className="px-8 py-3.5 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto shadow-lg shadow-slate-900/20 dark:shadow-white/10"
        >
          View My Work
        </a>
        <a 
          href="#contact"
          onClick={(e) =>(e.preventDefault(), document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }))}
          className="px-8 py-3.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all w-full sm:w-auto"
        >
          Contact Me
        </a>
      </div>

      <div className="mt-16 flex justify-center space-x-8 text-slate-400 dark:text-slate-500">
        <a href="https://github.com/LeowJianYang" target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors transform hover:scale-110">
          <SiGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/leow-jian-yang" target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors transform hover:scale-110">
          <SiLinkedin size={24} />
        </a>
        <a href="mailto:leowjy2208@gmail.com" className="hover:text-slate-900 dark:hover:text-white transition-colors transform hover:scale-110">
          <Mail size={24} />
        </a>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 dark:text-slate-600">
        <ChevronDown size={24} />
      </div>
    </div>
  </section>
);
export default Hero;