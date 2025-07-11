
import { Play, Users, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoAm from '@/assets/logo_am.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-cyan-500/20 to-pink-500/20 animate-pulse"></div>
      
      {/* Floating gaming elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute bottom-32 right-20 w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-30 animate-pulse delay-300"></div>
      <div className="absolute top-1/3 right-10 w-8 h-8 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full opacity-25 animate-bounce delay-700"></div>
      
      <div className="text-center z-10 max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="mb-8 relative inline-block">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 p-1 animate-spin-slow">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
              {/* <Users className="w-16 h-16 md:w-20 md:h-20 text-white" /> */}
              <img src={logoAm} alt="Alan Maulana Logo" className="w-full h-full rounded-full object-cover" />
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900 flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold py-4 mb-4 leading-tight bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent animate-fade-in">
          Alan Maulana
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in delay-200">
          Streamer • Content Creator • Gaming Enthusiast
        </p>
        
        {/* Description */}
        <div className="max-w-2xl mx-auto mb-10">
          <p className="text-lg text-gray-400 leading-relaxed animate-fade-in delay-300">
            Selamat datang di dunia gaming saya! Saya adalah content creator yang passionate 
            dalam dunia gaming, streaming live di berbagai platform, dan berbagi konten gaming 
            terbaik untuk komunitas.
          </p>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-8 mb-12 animate-fade-in delay-500">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Play className="w-6 h-6 text-red-400 mr-2" />
              <span className="text-2xl font-bold text-white">50K+</span>
            </div>
            <p className="text-gray-400 text-sm">YouTube Subscribers</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-6 h-6 text-purple-400 mr-2" />
              <span className="text-2xl font-bold text-white">25K+</span>
            </div>
            <p className="text-gray-400 text-sm">TikTok Followers</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Heart className="w-6 h-6 text-pink-400 mr-2" />
              <span className="text-2xl font-bold text-white">100K+</span>
            </div>
            <p className="text-gray-400 text-sm">Total Likes</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-700">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            <a href="https://www.youtube.com/channel/UCqAgWDVXsXu3wOAGW8jL8rg" target='_blank'>Watch My Streams</a>
          </Button>
          <Button variant="outline" className="border-2 border-cyan-400 text-cyan-400 bg-transparent hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            <a href="https://www.tiktok.com/@alanmaulana1224" target='_blank'>Follow Me</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
