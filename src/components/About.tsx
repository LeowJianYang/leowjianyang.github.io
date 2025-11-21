import type React from "react";
import { Code2, Terminal, ArrowRight } from 'lucide-react';

const About: React.FC = () => (
  <section id="about" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/30">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
      <div className="relative">
        <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary-500/20 rounded-full blur-2xl"></div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 relative">
          About Me
        </h2>
        <div className="prose dark:prose-invert text-slate-600 dark:text-slate-400 leading-relaxed">
          <p className="mb-6">
            I am a passionate developer with a strong foundation in software development. 
            My journey started with simple HTML pages and has evolved into building complex, 
            scalable applications using modern frameworks.
          </p>
          <p className="mb-6">
            When I'm not coding, I explore new technologies, 
            or refine my design skills. I believe in continuous learning and building 
            software that is accessible to everyone.
          </p>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="p-5 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-primary-200 dark:hover:border-primary-800 transition-colors group">
            <Code2 className="text-primary-500 mb-3 group-hover:scale-110 transition-transform" size={28} />
            <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Frontend</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">React, Next.js, Tailwind</p>
          </div>
          <div className="p-5 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-purple-200 dark:hover:border-purple-800 transition-colors group">
            <Terminal className="text-purple-500 mb-3 group-hover:scale-110 transition-transform" size={28} />
            <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Backend</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Node.js, SQL, AWS</p>
          </div>
        </div>

        <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-xl relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-8 -mt-8"></div>
            <h4 className="text-lg font-bold mb-2 relative z-10">Open to Work</h4>
            <p className="text-slate-300 mb-4 relative z-10 text-sm">
              Currently looking for Internship opportunities to collaborate on exciting projects.
            </p>
            <a href="#contact" className="inline-flex items-center text-primary-400 font-semibold hover:text-primary-300 transition-colors relative z-10">
              Get in touch <ArrowRight size={16} className="ml-1" />
            </a>
        </div>
      </div>
    </div>
  </section>
);
export default About;