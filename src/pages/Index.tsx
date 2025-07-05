
import Hero from '@/components/Hero';
import About from '@/components/About';
import ContentShowcase from '@/components/ContentShowcase';
import SocialLinks from '@/components/SocialLinks';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Hero />
      <About />
      <ContentShowcase />
      <SocialLinks />
      <Footer />
    </div>
  );
};

export default Index;
