import { ExternalLink, ArrowRight } from 'lucide-react';
import { SiGithub } from "react-icons/si";
interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    title: "Wholesale Management System",
    description: "A wholesale management system for visualize stock, orders and finance statements.",
    tags: ["Java", "JavaFX", "PDFBox", "Text-Based Storage"],
    github: "https://github.com/Ling2609/JavaFX",
    image: "image/OMEGA-UI.png"
  },
  {
    title: "Hybrid Education Website (RPGPy)",
    description: "A collaborative platform for hybrid learning python quizzes and coding challenges.",
    tags: ["React.js", "MySQL", "RESTful", "gRPC", "Socket.IO", "TS"],
    link: "https://rpgpy.vercel.app/",
    github: "https://github.com/LeowJianYang/RPGPY",
    image: "image/rpgpy-trans.png"
  },
  {
    title: "Agies Disaster",
    description: "A AI-Assistance web app that shows the disaster mapping and information.",
    tags: ["Next.js", "GDACS API", "TailwindCSS", "AWS", "OpenMap"],
    github: "https://github.com/LeowJianYang/AWSGenAI-R",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const Projects = () => (
  <section id="projects" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/30">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          A selection of projects that demonstrate my skills.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <div key={index} className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/40 group-hover:bg-transparent transition-colors z-10"></div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
                <a href={project.link} className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a href={project.github} className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  <SiGithub size={16} /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a href="https://github.com/LeowJianYang" className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold hover:underline">
          View more on GitHub <ArrowRight size={16} />
        </a>
      </div>
    </div>
  </section>
);
export default Projects;