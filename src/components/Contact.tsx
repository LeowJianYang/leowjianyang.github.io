import { Mail, MapPin, Linkedin } from 'lucide-react';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const Contact = () => (
  <footer id="contact" className="bg-white dark:bg-slate-950 pt-24 pb-12 px-6 border-t border-slate-100 dark:border-slate-800">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
        Let's work together
      </h2>
      <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 max-w-xl mx-auto">
        I'm currently available for freelance work and Internship opportunities.
      </p>
      
      <a 
        href="mailto:leowjy2208@gmail.com" 
        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-semibold transition-colors shadow-lg shadow-primary-500/20 mb-16"
      >
        <Mail size={20} /> Say Hello
      </a>
      
      <div className="grid md:grid-cols-3 gap-8 text-left border-t border-slate-100 dark:border-slate-800 pt-12">
        <div className="flex flex-col items-center md:items-start">
          <div className="p-3 bg-slate-100 dark:bg-slate-900 rounded-full mb-4 text-slate-700 dark:text-slate-300">
            <MapPin size={20} />
          </div>
          <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Location</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Kuala Lumpur, Malaysia</p>
        </div>
        
        <div className="flex flex-col items-center md:items-start">
          <div className="p-3 bg-slate-100 dark:bg-slate-900 rounded-full mb-4 text-slate-700 dark:text-slate-300">
            <Mail size={20} />
          </div>
          <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Email</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm">leowjy2208@gmail.com</p>
        </div>
        
        <div className="flex flex-col items-center md:items-start">
          <div className="p-3 bg-slate-100 dark:bg-slate-900 rounded-full mb-4 text-slate-700 dark:text-slate-300">
            <Linkedin size={20} />
          </div>
          <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Social</h3>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/leow-jian-yang" className="text-slate-500 dark:text-slate-400 hover:text-primary-500 text-sm"><SiLinkedin size={20} /></a>
            <a href="https://github.com/LeowJianYang" className="text-slate-500 dark:text-slate-400 hover:text-primary-500 text-sm"><SiGithub size={20} /></a>
            {/* <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary-500 text-sm"><SiTwitter /></a> */}
          </div>
        </div>
      </div>
      
      <div className="mt-20 pt-8 border-t border-slate-100 dark:border-slate-800 text-slate-400 dark:text-slate-600 text-sm">
        © {new Date().getFullYear()} Leow Jian Yang. Built with React & Tailwind.
      </div>
    </div>
  </footer>
);
export default Contact;