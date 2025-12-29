import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import logo from '@/assets/flare-hub-logo.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img 
                src={logo} 
                alt="Flare Hub Promotions" 
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Your Partner in Branding, Marketing, and Corporate Promotion.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/flarehub_promotions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary flex items-center justify-center transition-smooth"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com/flarehub_promotions.fb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary flex items-center justify-center transition-smooth"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-primary transition-smooth">
                Home
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-primary transition-smooth">
                About
              </Link>
              <Link to="/services" className="block text-gray-400 hover:text-primary transition-smooth">
                Services
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-primary transition-smooth">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  5/87 R.S Puram, Near Ayyar & Co Bakes<br />
                  Coimbatore – 641002
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a href="tel:+916383154411" className="text-gray-400 text-sm hover:text-primary transition-smooth">
                  +91 63831 54411
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a
                  href="mailto:flarehub.pvt@gmail.com"
                  className="text-gray-400 text-sm hover:text-primary transition-smooth"
                >
                  flarehub.pvt@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Flare Hub Promotions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
