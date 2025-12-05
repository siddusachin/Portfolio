import { Video, Instagram, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-950/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-emerald-500 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[128px] opacity-15 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-teal-500 rounded-full mix-blend-screen filter blur-[128px] opacity-10 animate-blob"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center gap-4 mb-8">
            <div className="p-3 bg-cyan-500/10 rounded-lg backdrop-blur-sm border border-cyan-500/20">
              <Video className="w-8 h-8 text-cyan-400" />
            </div>
            <div className="p-3 bg-emerald-500/10 rounded-lg backdrop-blur-sm border border-emerald-500/20">
              <Instagram className="w-8 h-8 text-emerald-400" />
            </div>
            <div className="p-3 bg-blue-500/10 rounded-lg backdrop-blur-sm border border-blue-500/20">
              <Sparkles className="w-8 h-8 text-blue-400" />
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Siddarth S
          </h1>

          <p className="text-2xl md:text-3xl font-semibold mb-4 text-slate-300">
            Freelance Video Editor & Visual Storyteller
          </p>

          <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting trending Instagram reels and business content that captivates audiences.
            Specializing in short-form video content with creativity and precision.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm font-medium border border-slate-700">
              CapCut
            </span>
            <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm font-medium border border-slate-700">
              VN Editor
            </span>
            <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm font-medium border border-slate-700">
              Adobe Lightroom
            </span>
            <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm font-medium border border-slate-700">
              Instagram Reels
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#portfolio"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-slate-800 rounded-lg font-semibold border border-slate-700 hover:bg-slate-700 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
