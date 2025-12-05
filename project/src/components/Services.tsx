import { Video, Instagram, Briefcase, Sparkles, TrendingUp, Film } from 'lucide-react';

const services = [
  {
    icon: Instagram,
    title: 'Instagram Reels',
    description: 'Trending reels that capture attention and boost engagement. Perfect for personal brands and social media presence.',
    features: ['Trend Analysis', 'Quick Turnaround', 'Engaging Transitions', 'Music Sync'],
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Briefcase,
    title: 'Business Reels',
    description: 'Professional promotional content for businesses. Showcase your products, services, and brand story effectively.',
    features: ['Brand Identity', 'Call-to-Action', 'Product Showcases', 'Professional Quality'],
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Sparkles,
    title: 'Event Coverage',
    description: 'Capturing the energy and essence of events. From college events to social gatherings, every moment preserved.',
    features: ['Highlight Reels', 'Story Coverage', 'Live Moments', 'Emotional Capture'],
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: TrendingUp,
    title: 'Social Media Content',
    description: 'Optimized content for maximum reach and engagement across social platforms.',
    features: ['Platform Optimization', 'Viral Potential', 'Audience Targeting', 'Analytics-Driven'],
    color: 'from-orange-500 to-amber-500'
  },
  {
    icon: Film,
    title: 'Promotional Videos',
    description: 'Compelling promotional content that drives action and converts viewers into customers.',
    features: ['Marketing Focus', 'Persuasive Storytelling', 'Brand Messaging', 'Conversion Optimized'],
    color: 'from-violet-500 to-purple-500'
  },
  {
    icon: Video,
    title: 'Image Design',
    description: 'Professional image editing and design using Adobe Lightroom for stunning visual aesthetics.',
    features: ['Color Grading', 'Aesthetic Enhancement', 'Brand Consistency', 'High Resolution'],
    color: 'from-blue-500 to-cyan-500'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50/40 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full filter blur-[120px] opacity-40"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full filter blur-[120px] opacity-40"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Services I Offer
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive video editing and design solutions tailored to your needs
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
