import { Card } from '@/components/ui/card';
import {
  Target,
  Megaphone,
  Palette,
  Monitor,
  Users,
  Package,
  Award,
  Mic,
  Smartphone,
  CalendarCheck,
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const Services = () => {
  const servicesRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  const services = [
    {
      icon: Target,
      title: 'Digital Marketing',
      description: 'SEO, SEM, Meta Ads, Audience Targeting, Funnels, Brand Awareness Campaigns.',
    },
    {
      icon: Megaphone,
      title: 'Traditional Marketing',
      description: 'Banners, Hoardings, Print Materials, Public Promotions.',
    },
    {
      icon: Palette,
      title: 'Graphic Designing',
      description: 'Logos, Brand Identity Kits, Packaging, Corporate Presentations.',
    },
    {
      icon: Monitor,
      title: 'Web Designing',
      description: 'Business Websites, Landing Pages, Portfolio Sites, E-commerce UI.',
    },
    {
      icon: Users,
      title: 'Corporate Manpower Support',
      description: 'Trained promotional staff, event manpower, corporate communication support.',
    },
    {
      icon: Package,
      title: 'Product Sampling & Promotions',
      description: 'Market sampling, trial campaigns, customer interaction activities.',
    },
    {
      icon: Award,
      title: 'Branding Solutions',
      description: 'Visual identity, brand messaging, brand guideline creation.',
    },
    {
      icon: CalendarCheck,
      title: 'Event Support',
      description: 'Stage coordination, promotional staff, event logistics management.',
    },
    {
      icon: Mic,
      title: 'Anchoring / MC Services',
      description: 'Professional anchors and Masters of Ceremony for corporate events, product launches, brand activations, cultural events, promotional campaigns, and stage shows. Our MCs ensure smooth flow, audience engagement, and a professional presentation for any event.',
    },
    {
      icon: Smartphone,
      title: 'Lookwalker Advertising',
      description: 'On-street advertising with LED backpack walkers.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-in-up">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in">
            Comprehensive Marketing & Branding Solutions Tailored to Your Needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            ref={servicesRef.ref}
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${
              servicesRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-glow transition-smooth group cursor-pointer animate-scale-in border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mb-6 rounded-full gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-smooth">
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-primary transition-smooth">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div 
          ref={ctaRef.ref}
          className={`container mx-auto px-4 lg:px-8 text-center transition-all duration-700 ${
            ctaRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-heading font-bold mb-6">
            Ready to <span className="text-primary">Elevate Your Brand?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business grow with our comprehensive marketing solutions.
          </p>
          <a href="/contact">
            <button className="px-8 py-4 gradient-primary text-white font-semibold rounded-lg hover:opacity-90 transition-smooth shadow-glow">
              Get In Touch
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
