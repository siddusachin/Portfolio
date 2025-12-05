import { User, Target, Heart, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 via-white to-cyan-50/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-100 rounded-full filter blur-[120px] opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-100 rounded-full filter blur-[120px] opacity-30"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-50 rounded-lg flex-shrink-0">
                  <User className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Who I Am</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Freelance Video Editor with hands-on experience in creating impactful and engaging short-form content.
                    I turn raw footage into visually appealing stories that connect with audiences and drive engagement.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-50 rounded-lg flex-shrink-0">
                  <Target className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">What I Do</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Specialized in Instagram reels, business reels, and promotional videos with a focus on creativity,
                    storytelling, and trend-driven editing. I deliver polished and aesthetic visuals that elevate brands.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg flex-shrink-0">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">My Passion</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Passionate about crafting content that not only looks stunning but also tells compelling stories.
                    Every project is an opportunity to blend creativity with strategy.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-8 h-8 text-cyan-400" />
                <h3 className="text-2xl font-bold">Key Achievements</h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 text-xl">•</span>
                  <span className="text-slate-300">
                    Created <strong className="text-white">trending Instagram reels</strong> for Meetovia social event,
                    significantly boosting reach and engagement
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 text-xl">•</span>
                  <span className="text-slate-300">
                    Produced <strong className="text-white">business reels for catering services</strong>, helping showcase
                    their brand and services effectively
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 text-xl">•</span>
                  <span className="text-slate-300">
                    Delivered <strong className="text-white">promotional content for multiple college events</strong>,
                    capturing energy, moments, and stories that resonate
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 text-xl">•</span>
                  <span className="text-slate-300">
                    Skilled in <strong className="text-white">CapCut, VN, and Adobe Lightroom</strong>, ensuring
                    high-quality, polished output
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
