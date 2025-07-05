
import { Play, Eye, ThumbsUp, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContentShowcase = () => {
  const contents = [
    {
      title: "Epic Gaming Moments #1",
      platform: "YouTube",
      views: "125K",
      likes: "8.2K",
      comments: "432",
      thumbnail: "bg-gradient-to-br from-red-500 to-orange-500",
      type: "video"
    },
    {
      title: "Live Stream Highlights",
      platform: "TikTok",
      views: "89K",
      likes: "12.5K",
      comments: "267",
      thumbnail: "bg-gradient-to-br from-purple-500 to-pink-500",
      type: "short"
    },
    {
      title: "Gaming Tips & Tricks",
      platform: "YouTube",
      views: "67K",
      likes: "5.8K",
      comments: "198",
      thumbnail: "bg-gradient-to-br from-cyan-500 to-blue-500",
      type: "tutorial"
    },
    {
      title: "Funny Gaming Fails",
      platform: "TikTok",
      views: "203K",
      likes: "18.7K",
      comments: "856",
      thumbnail: "bg-gradient-to-br from-green-500 to-teal-500",
      type: "entertainment"
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Konten Terbaru
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Lihat koleksi konten gaming terbaik saya di berbagai platform
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contents.map((content, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 hover:border-cyan-500/50 group">
              <CardContent className="p-0">
                {/* Thumbnail */}
                <div className={`relative h-48 ${content.thumbnail} rounded-t-lg flex items-center justify-center group-hover:opacity-90 transition-opacity`}>
                  <div className="absolute inset-0 bg-black/20 rounded-t-lg"></div>
                  <Play className="w-16 h-16 text-white opacity-80 group-hover:scale-110 transition-transform" />
                  <div className="absolute top-4 left-4 px-2 py-1 bg-black/60 rounded-full text-xs text-white font-medium">
                    {content.platform}
                  </div>
                </div>

                {/* Content Info */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">
                    {content.title}
                  </h3>
                  
                  {/* Stats */}
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{content.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{content.likes}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{content.comments} komentar</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Lihat Semua Konten
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContentShowcase;
