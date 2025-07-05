
import { Heart, Gamepad2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-slate-900/80 border-t border-slate-800">
      <div className="max-w-6xl mx-auto text-center">
        {/* Logo/Brand */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center">
              <Gamepad2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Gaming Creator
            </span>
          </div>
          <p className="text-gray-400 max-w-md mx-auto">
            Passionate gaming content creator dan streamer yang selalu siap menghibur dan menginspirasi komunitas gaming.
          </p>
        </div>

        {/* Links */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-6 text-gray-400">
            <a href="#home" className="hover:text-purple-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
            <a href="#content" className="hover:text-purple-400 transition-colors">Content</a>
            <a href="#social" className="hover:text-purple-400 transition-colors">Social Media</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <span>© 2024 Gaming Creator. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>for the gaming community</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
