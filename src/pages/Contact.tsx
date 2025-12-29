import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const Contact = () => {
  const contactRef = useScrollAnimation();
  const mapRef = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: 'We will get back to you shortly.',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-in-up">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in">
            Let's Discuss How We Can Help Your Business Grow
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            ref={contactRef.ref}
            className={`grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto transition-all duration-700 ${
              contactRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-heading font-bold mb-8">
                  Contact <span className="bg-gradient-primary bg-clip-text text-transparent">Information</span>
                </h2>

                <Card className="p-6 mb-6 hover:shadow-glow transition-smooth border-border">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-2">Head Office</h3>
                      <p className="text-muted-foreground">
                        5/87 R.S Puram, Near Ayyar & Co Bakes<br />
                        Coimbatore – 641002
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 mb-6 hover:shadow-glow transition-smooth border-border">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={24} />
                    </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-2">Phone</h3>
                    <a href="tel:+916383154411" className="block text-muted-foreground hover:text-primary transition-smooth">
                      +91 63831 54411
                    </a>
                  </div>
                  </div>
                </Card>

                <Card className="p-6 mb-6 hover:shadow-glow transition-smooth border-border">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-2">Email</h3>
                      <a
                        href="mailto:flarehub.pvt@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-smooth"
                      >
                        flarehub.pvt@gmail.com
                      </a>
                    </div>
                  </div>
                </Card>

                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/flarehub_promotions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center hover:scale-110 transition-smooth shadow-glow"
                    aria-label="Instagram"
                  >
                    <Instagram className="text-white" size={24} />
                  </a>
                  <a
                    href="https://facebook.com/flarehub_promotions.fb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center hover:scale-110 transition-smooth shadow-glow"
                    aria-label="Facebook"
                  >
                    <Facebook className="text-white" size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8 animate-fade-in border-border" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-heading font-bold mb-6">
                Send us a <span className="bg-gradient-primary bg-clip-text text-transparent">Message</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full"
                  />
                </div>
                <Button type="submit" className="w-full gradient-primary text-white border-0 hover:opacity-90 transition-smooth shadow-glow">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            ref={mapRef.ref}
            className={`max-w-6xl mx-auto transition-all duration-700 ${
              mapRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl font-heading font-bold text-center mb-8">
              Find <span className="bg-gradient-primary bg-clip-text text-transparent">Us</span>
            </h2>
            <div className="aspect-video rounded-lg overflow-hidden shadow-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3!2d76.956!3d11.016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAwJzU3LjYiTiA3NsKwNTcnMjEuNiJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Flare Hub Promotions Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
