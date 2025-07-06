
import { Gamepad2, Trophy, Target, Star, Users, Clock, Award, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const specialties = [
    {
      icon: Target,
      title: "FPS Games",
      description: "Expert dalam first-person shooter seperti Valorant dan CS2"
    },
    {
      icon: Trophy,
      title: "Battle Royale",
      description: "Menguasai PUBG, Apex Legends, dan game battle royale lainnya"
    },
    {
      icon: Gamepad2,
      title: "Strategy Games",
      description: "Ahli dalam game strategi dan MOBA seperti Mobile Legends"
    },
    {
      icon: Zap,
      title: "Horror Games",
      description: "Berani menghadapi game horror untuk konten yang menghibur"
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "50K+",
      label: "Total Followers",
      description: "Di seluruh platform"
    },
    {
      icon: Clock,
      number: "2000+",
      label: "Streaming Hours",
      description: "Live streaming experience"
    },
    {
      icon: Gamepad2,
      number: "100+",
      label: "Games Played",
      description: "Berbagai genre game"
    },
    {
      icon: Award,
      number: "25+",
      label: "Achievements",
      description: "Gaming accomplishments"
    }
  ];

  const favoriteGames = [
    {
      name: "Valorant",
      genre: "FPS Tactical",
      rating: "9.5/10",
      hours: "500+ hours"
    },
    {
      name: "Mobile Legends",
      genre: "MOBA",
      rating: "9.0/10",
      hours: "800+ hours"
    },
    {
      name: "PUBG Mobile",
      genre: "Battle Royale",
      rating: "8.5/10",
      hours: "400+ hours"
    },
    {
      name: "Genshin Impact",
      genre: "Action RPG",
      rating: "9.2/10",
      hours: "300+ hours"
    },
    {
      name: "Call of Duty",
      genre: "FPS",
      rating: "8.8/10",
      hours: "350+ hours"
    },
    {
      name: "Apex Legends",
      genre: "Battle Royale",
      rating: "8.7/10",
      hours: "250+ hours"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Tentang Saya
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Saya adalah seorang content creator dan streamer gaming yang passionate dalam 
            dunia gaming. Dengan pengalaman bertahun-tahun, saya fokus pada menciptakan 
            konten yang menghibur dan mengedukasi komunitas gaming.
          </p>
        </div>

        {/* Specialties Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Specialties
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 hover:border-purple-500/50">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full">
                    <specialty.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">{specialty.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{specialty.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats & Achievements Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Stats & Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border-slate-700 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-1">{stat.label}</h4>
                  <p className="text-gray-400 text-sm">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Favorite Games Section */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Favorite Games
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteGames.map((game, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 hover:border-cyan-500/50 group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <Gamepad2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {game.name}
                      </h4>
                      <p className="text-gray-400 text-sm">{game.genre}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Rating:</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white font-semibold">{game.rating}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Playtime:</span>
                      <span className="text-purple-400 font-semibold">{game.hours}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
