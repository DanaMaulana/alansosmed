
import { Youtube, Music, Instagram, Twitter, Twitch } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SocialLinks = () => {
  const socialPlatforms = [
    {
      name: "YouTube",
      icon: Youtube,
      followers: "50K+ Subscribers",
      description: "Gaming videos, tutorials, dan live streams",
      color: "from-red-500 to-red-600",
      hoverColor: "hover:from-red-600 hover:to-red-700",
      url: "https://www.youtube.com/channel/UCqAgWDVXsXu3wOAGW8jL8rg"
    },
    {
      name: "TikTok",
      icon: Music,
      followers: "25K+ Followers",
      description: "Short gaming content dan highlights",
      color: "from-pink-500 to-purple-600",
      hoverColor: "hover:from-pink-600 hover:to-purple-700",
      url: "https://www.tiktok.com/@alanmaulana1224"
    },
    {
      name: "Instagram",
      icon: Instagram,
      followers: "15K+ Followers",
      description: "Behind the scenes dan gaming lifestyle",
      color: "from-purple-500 to-pink-500",
      hoverColor: "hover:from-purple-600 hover:to-pink-600",
      url: "https://www.instagram.com/_alan9_9/"
    },
    {
      name: "Twitter",
      icon: Twitter,
      followers: "10K+ Followers",
      description: "Gaming updates dan community interaction",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:from-blue-500 hover:to-blue-700",
      url: "https://x.com/DanaMaulanaDev"
    },
    // {
    //   name: "Twitch",
    //   icon: Twitch,
    //   followers: "8K+ Followers",
    //   description: "Live gaming streams",
    //   color: "from-purple-600 to-indigo-600",
    //   hoverColor: "hover:from-purple-700 hover:to-indigo-700",
    //   url: "#"
    // }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Follow Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ikuti saya di berbagai platform sosial media untuk update konten terbaru
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {socialPlatforms.map((platform, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 hover:border-purple-500/50 group">
              <CardContent className="p-6">
                <div className="text-center">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${platform.color} rounded-full mb-4 group-hover:scale-110 transition-transform`}>
                    <platform.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Platform Info */}
                  <h3 className="text-2xl font-bold text-white mb-2">{platform.name}</h3>
                  <p className="text-purple-400 font-semibold mb-3">{platform.followers}</p>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">{platform.description}</p>

                  {/* Follow Button */}
                  <Button 
                    className={`w-full bg-gradient-to-r ${platform.color} ${platform.hoverColor} text-white font-semibold transition-all duration-300`}
                    onClick={() => window.open(platform.url, '_blank')}
                  >
                    Follow
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 hover:border-purple-500/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Quick Links</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white">
                  <a href="https://www.youtube.com/channel/UCqAgWDVXsXu3wOAGW8jL8rg" target='_blank'>YouTube</a>
                </Button>
                <Button variant="outline" className="border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white">
                  <a href="https://www.tiktok.com/@alanmaulana1224" target='_blank'>TikTok</a>
                </Button>
                <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white">
                  <a href="https://www.instagram.com/_alan9_9/" target='_blank'>Instagram</a>
                </Button>
                <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
                  <a href="https://x.com/DanaMaulanaDev" target='_blank'>Twitter</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
