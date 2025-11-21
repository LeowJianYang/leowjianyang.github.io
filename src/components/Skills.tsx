
const SKILLS = [
  "JavaScript", "TypeScript", "React", "Next.js", 
  "Tailwind CSS", "Node.js", "Git","SQL", 
   "AWS", "Python", "C++" ,"C#", "Linux", "Java"
];

const Skills = () => (
  <section id="skills" className="py-20 px-6 border-t border-slate-200 dark:border-slate-800/50">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">Technical Skills</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {SKILLS.map((skill) => (
          <div 
            key={skill} 
            className="px-5 py-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium shadow-sm hover:shadow-md hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300 cursor-default select-none"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Skills;