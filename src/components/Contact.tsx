import { Mail, Phone, MapPin, Instagram, Linkedin, Github, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 via-cyan-50/30 to-blue-50/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZC1wYXR0ZXJuIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMDAgMCBMIDAgMCAwIDEwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQtcGF0dGVybikiLz48L3N2Zz4=')] opacity-40"></div>
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-cyan-100 rounded-full filter blur-[120px] opacity-40"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-100 rounded-full filter blur-[120px] opacity-40"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch and let's create something amazing
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4"></div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <a
                  href="mailto:siddarthsd26@gmail.com"
                  className="flex items-center gap-4 hover:text-cyan-400 transition-colors group"
                >
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors border border-cyan-500/20">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="font-medium">siddarthsd26@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:9677961130"
                  className="flex items-center gap-4 hover:text-cyan-400 transition-colors group"
                >
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors border border-cyan-500/20">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Phone</p>
                    <p className="font-medium">+91 96779 61130</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center border border-cyan-500/20">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Location</p>
                    <p className="font-medium">Chennai, Tamil Nadu</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-700">
                <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/siddarthsd26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors border border-slate-700"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/siddarthsd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors border border-slate-700"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/siddusachin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors border border-slate-700"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-cyan-50 rounded-2xl p-6 border border-cyan-100">
              <h4 className="font-semibold text-slate-900 mb-2">Quick Response</h4>
              <p className="text-sm text-slate-600">
                I typically respond within 24 hours. For urgent projects, feel free to call directly.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Project Type
                </label>
                <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all">
                  <option>Instagram Reels</option>
                  <option>Business Reels</option>
                  <option>Event Coverage</option>
                  <option>Promotional Video</option>
                  <option>Image Design</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="mt-24 pt-8 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center text-slate-600">
            <p className="mb-2">
              <strong className="text-slate-900">Siddarth S</strong> - Freelance Video Editor & Visual Storyteller
            </p>
            <p className="text-sm">
              Creating engaging content that connects with audiences
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
