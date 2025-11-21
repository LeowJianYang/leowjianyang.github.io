import { FolderGit2 } from 'lucide-react';

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
};

const EXPERIENCE: Experience[] = [
  {
    company: "Asia Pacific University (APU)",
    role: "Bachelor of Science (Hons) Software Engineering",
    period: "2024 - Present",
    description: "Pursuing a degree in Software Engineering with a focus on modern development practices and technologies."
  },
  {
    company: "Foon Yew High School -Kulai",
    role: "Secondary School",
    period: "2018 - 2023",
    description: "Completed secondary education with a focus on art and commerce."
  }
];

const Experience = () => (
  <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
        Education & Experience
      </h2>
      <div className="w-16 h-1 bg-primary-500 mx-auto rounded-full"></div>
    </div>

    <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
      {EXPERIENCE.map((exp, index) => (
        <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          
          {/* Icon on timeline */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-primary-500 group-hover:text-white dark:group-hover:bg-primary-500 dark:group-hover:text-white transition-all shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
            <FolderGit2 size={18} />
          </div>

          {/* Content Card */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">{exp.role}</h3>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 whitespace-nowrap w-fit">
                {exp.period}
              </span>
            </div>
            <div className="text-slate-500 dark:text-slate-400 font-medium mb-3 text-sm flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600"></span>
              {exp.company}
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {exp.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);
export default Experience;