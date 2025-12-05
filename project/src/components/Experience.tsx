import { Briefcase, Award, GraduationCap, Code } from 'lucide-react';

const experiences = [
  {
    icon: Briefcase,
    title: 'Cloud Computing Intern',
    organization: 'Trillion Thoughts Technologies LLP',
    period: '2024',
    description: 'Gained hands-on experience with AWS cloud technologies, learning fundamentals of cloud infrastructure and services. Successfully hosted and deployed a website using AWS tools.',
    achievements: [
      'Worked with Amazon Web Services (AWS)',
      'Deployed and managed cloud-based website',
      'Enhanced practical knowledge in cloud deployment'
    ],
    color: 'cyan'
  },
  {
    icon: Award,
    title: 'Hackathon Leader',
    organization: 'Multiple Competitions',
    period: '2023 - 2024',
    description: 'Led teams in prestigious national-level competitions, demonstrating leadership and problem-solving capabilities.',
    achievements: [
      'Smart India Hackathon (2023 & 2024)',
      'Accenture Innovation Challenge (2023)',
      'EDII Hackathon by Government of Tamil Nadu (2023)'
    ],
    color: 'emerald'
  }
];

const education = {
  icon: GraduationCap,
  degree: 'B.E. Computer Science and Engineering',
  institution: 'R.M.D. Engineering College',
  period: '2022 - 2026',
  cgpa: '7.74 / 10',
  location: 'Chennai, Tamil Nadu'
};

const projects = [
  {
    name: 'MINGLE - Group Study Web App',
    description: 'Collaborative platform for creating and sharing MCQ quizzes',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'HTML/CSS/JS']
  },
  {
    name: 'FESTIFY - Event Management App',
    description: 'Comprehensive mobile app for event managers and customers',
    tech: ['Flutter', 'Django', 'Firebase', 'REST APIs', 'AWS']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-white via-slate-50 to-cyan-50/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-50/50 via-transparent to-transparent"></div>
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-gradient-to-l from-cyan-100 to-transparent rounded-full filter blur-[100px] opacity-40"></div>
      <div className="absolute bottom-1/3 left-0 w-[450px] h-[450px] bg-gradient-to-r from-emerald-100 to-transparent rounded-full filter blur-[100px] opacity-40"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A combination of practical experience and academic excellence
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8 mb-16">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 border border-slate-100"
              >
                <div className="flex items-start gap-6">
                  <div className={`w-14 h-14 rounded-xl bg-${exp.color}-100 flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-7 h-7 text-${exp.color}-600`} />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-slate-700 font-medium">
                          {exp.organization}
                        </p>
                      </div>
                      <span className="px-4 py-1 bg-slate-200 text-slate-700 rounded-full text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-700">
                          <span className="text-cyan-500 mt-1.5">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0 border border-cyan-500/20">
                <GraduationCap className="w-7 h-7 text-cyan-400" />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">
                      {education.degree}
                    </h3>
                    <p className="text-lg text-slate-300 font-medium">
                      {education.institution}
                    </p>
                    <p className="text-slate-400 text-sm mt-1">
                      {education.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="px-4 py-1 bg-slate-800 text-slate-300 rounded-full text-sm font-medium border border-slate-700 inline-block mb-2">
                      {education.period}
                    </span>
                    <p className="text-cyan-400 font-semibold">
                      CGPA: {education.cgpa}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Code className="w-8 h-8 text-cyan-600" />
            <h3 className="text-3xl font-bold text-slate-900">
              Technical Projects
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border border-slate-100"
              >
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  {project.name}
                </h4>
                <p className="text-slate-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white text-slate-700 rounded-full text-xs font-medium border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
