import { ExternalLink, Play } from 'lucide-react';

const projects = [
  {
    title: 'Meetovia Social Event',
    category: 'Instagram Reels',
    description: 'Created trending Instagram reels that captured the energy and excitement of this social event, resulting in significant reach and engagement growth.',
    impact: 'High Engagement & Viral Reach',
    tags: ['Trending', 'Event Coverage', 'Social Media'],
    gradient: 'from-pink-500 to-rose-500',
    video: 'https://www.example.com/dummy-video-1.mp4' // Dummy video link
  },
  {
    title: 'Catering Services Business Reels',
    category: 'Business Content',
    description: 'Produced professional business reels showcasing menu items, kitchen operations, and service quality to elevate brand presence.',
    impact: 'Enhanced Brand Visibility',
    tags: ['Business', 'Food Content', 'Branding'],
    gradient: 'from-amber-500 to-orange-500',
    video: 'https://www.example.com/dummy-video-2.mp4'
  },
  {
    title: 'College Event Promotions',
    category: 'Promotional Videos',
    description: 'Delivered multiple promotional reels for various college events, capturing memorable moments and driving event awareness.',
    impact: 'Increased Event Participation',
    tags: ['Events', 'Promo', 'Youth Audience'],
    gradient: 'from-cyan-500 to-blue-500',
    video: 'https://www.example.com/dummy-video-3.mp4'
  },
  {
    title: 'MINGLE - Group Study App',
    category: 'Technical Project',
    description: 'Developed a collaborative web application for creating and sharing MCQ quizzes, showcasing full-stack development skills.',
    impact: 'Enhanced Learning Experience',
    tags: ['Web Development', 'MongoDB', 'Node.js'],
    gradient: 'from-emerald-500 to-teal-500',
    video: 'https://www.example.com/dummy-video-4.mp4'
  },
  {
    title: 'FESTIFY - Event Management',
    category: 'Technical Project',
    description: 'Building a comprehensive mobile app empowering event managers with a virtual marketplace to showcase services and connect with customers.',
    impact: 'Streamlined Event Planning',
    tags: ['Flutter', 'Django', 'Firebase'],
    gradient: 'from-violet-500 to-purple-500',
    video: 'https://www.example.com/dummy-video-5.mp4'
  },
  {
    title: 'Instagram Content Strategy',
    category: 'Content Creation',
    description: 'Ongoing content creation focusing on trend-driven editing, aesthetic visuals, and storytelling that resonates with audiences.',
    impact: 'Consistent Growth & Engagement',
    tags: ['Strategy', 'Creativity', 'Analytics'],
    gradient: 'from-blue-500 to-cyan-500',
    video: 'https://www.example.com/dummy-video-6.mp4'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Featured Work</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">A showcase of projects that demonstrate creativity, technical skill, and impact</p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
            >
              {/* Video Header */}
              <div className="h-48 relative overflow-hidden">
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-slate-900 ml-1" />
                  </div>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-slate-900">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">{project.title}</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex items-center gap-2 mb-4">
                  <ExternalLink className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-semibold text-emerald-600">{project.impact}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-6">Want to see more examples of my work?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Request Portfolio Samples
          </a>
        </div>
      </div>
    </section>
  );
}