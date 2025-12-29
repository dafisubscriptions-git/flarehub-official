import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Users, Sparkles, TrendingUp, Target, Award, CalendarCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import heroImage from '@/assets/hero-bg.jpg';
import logo from '@/assets/flare-hub-logo.png';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import WorksGallery from '@/components/WorksGallery';

const Home = () => {
  const aboutRef = useScrollAnimation();
  const highlightsRef = useScrollAnimation();
  const whyUsRef = useScrollAnimation();

  const coreHighlights = [
    { icon: Target, title: 'Digital & Traditional Marketing', color: 'text-primary' },
    { icon: Sparkles, title: 'Meta Ads', color: 'text-primary' },
    { icon: Users, title: 'Corporate Manpower', color: 'text-primary' },
    { icon: Zap, title: 'Web & Graphics Designing', color: 'text-primary' },
    { icon: TrendingUp, title: 'Product Sampling', color: 'text-primary' },
    { icon: Award, title: 'Branding', color: 'text-primary' },
    { icon: CalendarCheck, title: 'Event Support', color: 'text-primary' },
  ];

  const whyChooseUs = [
    'Data-driven marketing strategies',
    'Creative design excellence',
    'Reliable manpower solutions',
    'End-to-end promotional support',
    '5+ years of industry experience',
    'Proven track record of success',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 gradient-hero opacity-80" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="animate-fade-in-up">
            <div className="mb-8 flex justify-center">
              <img 
                src={logo} 
                alt="Flare Hub Promotions" 
                className="h-32 w-auto object-contain animate-glow"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
              Igniting Brands.<br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Empowering Growth.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Digital & Traditional Marketing | Branding | Web & Graphic Design | Corporate Support
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button size="lg" className="gradient-primary text-white border-0 hover:opacity-90 transition-smooth shadow-glow group">
                  Explore Services
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" size={20} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-smooth">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            ref={aboutRef.ref}
            className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
              aboutRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Flare Hub</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Flare Hub Promotions is a full-scale marketing and branding agency delivering innovative promotional solutions, digital strategies, manpower support, and corporate communication services.
            </p>
          </div>
        </div>
      </section>

      {/* Works Gallery */}
      <WorksGallery />

      {/* Core Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 
            ref={highlightsRef.ref}
            className={`text-4xl md:text-5xl font-heading font-bold text-center mb-16 transition-all duration-700 ${
              highlightsRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Core Services</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {coreHighlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-glow transition-smooth cursor-pointer group animate-scale-in border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <item.icon className={`${item.color} group-hover:animate-pulse`} size={32} />
                </div>
                <h3 className="font-heading font-semibold text-sm">{item.title}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            ref={whyUsRef.ref}
            className={`max-w-4xl mx-auto transition-all duration-700 ${
              whyUsRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16">
              Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">Us?</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {whyChooseUs.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 flex items-start space-x-4 hover:shadow-card transition-smooth animate-fade-in border-border"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
                  <p className="text-foreground font-medium">{item}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
