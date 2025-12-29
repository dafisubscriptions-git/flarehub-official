import { Card } from '@/components/ui/card';
import { Target, Eye, Award, Users } from 'lucide-react';
import mdPhoto from '@/assets/md-photo.jpg';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const About = () => {
  const storyRef = useScrollAnimation();
  const visionRef = useScrollAnimation();
  const leaderRef = useScrollAnimation();
  const featuresRef = useScrollAnimation();

  const features = [
    { icon: Award, title: 'Professional corporate service' },
    { icon: Target, title: 'Creative design excellence' },
    { icon: Users, title: 'Dedicated manpower team' },
    { icon: Target, title: '360° promotional solutions' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-in-up">
            About <span className="text-primary">Flare Hub</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in">
            Professional Marketing Solutions Provider Based in Coimbatore
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            ref={storyRef.ref}
            className={`max-w-4xl mx-auto transition-all duration-700 ${
              storyRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl font-heading font-bold mb-8 text-center">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Story</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center mb-12 animate-fade-in">
              Flare Hub Promotions is a professional marketing solutions provider based in Coimbatore, serving clients across Tamil Nadu. We specialise in helping brands create a powerful market presence through modern digital strategies, traditional marketing channels, branding solutions, and reliable manpower support.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            ref={visionRef.ref}
            className={`grid md:grid-cols-2 gap-12 max-w-5xl mx-auto transition-all duration-700 ${
              visionRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Vision */}
            <Card className="p-8 hover:shadow-glow transition-smooth animate-slide-in border-border">
              <div className="w-16 h-16 mb-6 rounded-full gradient-primary flex items-center justify-center shadow-glow">
                <Eye size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                "To empower brands with creative and measurable promotional strategies that drive impactful growth."
              </p>
            </Card>

            {/* Mission */}
            <Card className="p-8 hover:shadow-glow transition-smooth animate-slide-in border-border" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 mb-6 rounded-full gradient-primary flex items-center justify-center shadow-glow">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Our Mission</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Deliver innovative and data-driven marketing solutions</li>
                <li>• Support corporate clients with reliable manpower</li>
                <li>• Provide world-class design & brand experiences</li>
                <li>• Ensure brand identity consistency & visibility</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-center mb-16">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Leadership</span>
          </h2>
          
          <div 
            ref={leaderRef.ref}
            className={`max-w-2xl mx-auto transition-all duration-700 ${
              leaderRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Card className="p-8 text-center hover:shadow-glow transition-smooth animate-scale-in border-border">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-glow ring-4 ring-primary/20">
                <img 
                  src={mdPhoto} 
                  alt="Sethumathava B.E - Managing Director" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-2">Sethumathava B.E</h3>
              <p className="text-primary font-semibold mb-4">Managing Director</p>
              <p className="text-muted-foreground leading-relaxed">
                Dedicated to offering strategic marketing solutions with over 5 years of industry-smart experience.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-center mb-16">
            What Sets <span className="bg-gradient-primary bg-clip-text text-transparent">Us Apart</span>
          </h2>
          
          <div 
            ref={featuresRef.ref}
            className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto transition-all duration-700 ${
              featuresRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-glow transition-smooth cursor-pointer group animate-fade-in border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <feature.icon className="text-primary" size={32} />
                </div>
                <h3 className="font-heading font-semibold">{feature.title}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
