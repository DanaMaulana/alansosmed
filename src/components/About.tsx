
import { Gamepad2, Monitor, Mic, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    {
      icon: Gamepad2,
      title: "Gaming Expertise",
      description: "Ahli dalam berbagai genre game, dari FPS hingga RPG"
    },
    {
      icon: Monitor,
      title: "Live Streaming",
      description: "Pengalaman streaming live dengan engagement tinggi"
    },
    {
      icon: Mic,
      title: "Content Creation",
      description: "Membuat konten gaming yang entertaining dan educational"
    },
    {
      icon: Trophy,
      title: "Community Building",
      description: "Membangun komunitas gaming yang solid dan supportive"
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

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 hover:border-purple-500/50">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full">
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{skill.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed About */}
        <Card className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border-slate-700 backdrop-blur-sm">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Perjalanan Saya</h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Memulai journey sebagai gamer casual, saya kemudian mengembangkan passion 
                    untuk berbagi pengalaman gaming melalui platform digital. Dengan dedikasi 
                    dan konsistensi, saya berhasil membangun komunitas yang solid.
                  </p>
                  <p>
                    Kini, saya aktif melakukan live streaming di berbagai platform, menciptakan 
                    konten gaming yang variatif, dan terus belajar untuk memberikan yang terbaik 
                    bagi audience saya.
                  </p>
                  <p>
                    Visi saya adalah menjadi content creator yang tidak hanya menghibur, 
                    tetapi juga menginspirasi dan membantu sesama gamer untuk berkembang.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl backdrop-blur-sm border border-slate-600 flex items-center justify-center">
                  <div className="text-center">
                    <Monitor className="w-24 h-24 text-purple-400 mx-auto mb-4" />
                    <p className="text-gray-300 text-lg">Gaming Setup</p>
                    <p className="text-gray-400 text-sm">High-end streaming equipment</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
