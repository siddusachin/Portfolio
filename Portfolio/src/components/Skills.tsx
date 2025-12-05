import { Scissors, Image, Code, Lightbulb, Users, Clock } from 'lucide-react';

const skillCategories = [
  {
    icon: Scissors,
    title: 'Video Editing',
    skills: [
      { name: 'CapCut', level: 95 },
      { name: 'VN Editor', level: 90 },
      { name: 'Instagram Reels', level: 95 },
      { name: 'Short-form Content', level: 90 }
    ],
    color: 'cyan'
  },
  {
    icon: Image,
    title: 'Image Design',
    skills: [
      { name: 'Adobe Lightroom', level: 85 },
      { name: 'Color Grading', level: 88 },
      { name: 'Photo Editing', level: 82 },
      { name: 'Visual Aesthetics', level: 90 }
    ],
    color: 'emerald'
  },
  {
    icon: Code,
    title: 'Technical Skills',
    skills: [
      { name: 'JavaScript', level: 85 },
      { name: 'Node.js & Express', level: 80 },
      { name: 'React Development', level: 75 },
      { name: 'MongoDB & MySQL', level: 78 }
    ],
    color: 'blue'
  }
];

const softSkills = [
  {
    icon: Lightbulb,
    title: 'Creativity',
    description: 'Innovative storytelling and trend-driven content creation'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Led teams in Smart India Hackathon and Accenture Innovation Challenge'
  },
  {
    icon: Clock,
    title: 'Time Management',
    description: 'Consistent delivery with quick turnaround times'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-blue-50/50 via-slate-50 to-teal-50/50 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full filter blur-[130px] opacity-50"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-teal-100 to-emerald-100 rounded-full filter blur-[130px] opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full filter blur-[100px] opacity-30"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A diverse skill set combining creative and technical capabilities
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-${category.color}-100 flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 text-${category.color}-600`} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-700 font-medium">{skill.name}</span>
                        <span className="text-slate-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-${category.color}-500 to-${category.color}-600 rounded-full transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Soft Skills & Strengths
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-500/20">
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {skill.title}
                  </h4>
                  <p className="text-slate-400 text-sm">
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 pt-8 border-t border-slate-700">
            <h4 className="text-xl font-semibold text-white mb-4 text-center">
              Additional Technologies
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {['Java', 'C++', 'Python', 'HTML/CSS', 'Spring Boot', 'Flutter', 'Django', 'Firebase', 'AWS', 'Git & GitHub'].map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm font-medium border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
