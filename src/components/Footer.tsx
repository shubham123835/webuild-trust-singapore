import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin,
  Building2
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Commercial Construction",
    "Residential Development", 
    "Industrial Projects",
    "Renovation & Remodeling",
    "Interior Fit-Outs",
    "Sustainable Building"
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Get Quote", href: "#contact" },
    { name: "Careers", href: "#" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-secondary p-3 rounded-lg">
                <Building2 className="w-8 h-8 text-secondary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">WEBUILD</h2>
                <p className="text-sm text-primary-foreground/80">Construction Excellence</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 mb-6 leading-relaxed">
              Singapore's premier construction and development company, delivering 
              exceptional building projects with unwavering commitment to quality, 
              safety, and client satisfaction.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10 text-primary-foreground hover:text-secondary">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10 text-primary-foreground hover:text-secondary">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10 text-primary-foreground hover:text-secondary">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200 flex items-center space-x-2"
                  >
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200 flex items-center space-x-2"
                  >
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/90">
                    123 Business District<br />
                    Singapore 018956
                  </p>
                </div>
              </div>
              
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/90">webuild.singapore@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6 p-4 bg-primary-foreground/5 rounded-lg">
              <h4 className="font-semibold text-secondary mb-2">Business Hours</h4>
              <div className="text-sm text-primary-foreground/80 space-y-1">
                <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="text-sm text-primary-foreground/70 mb-4 lg:mb-0">
              © {currentYear} WEBUILD Construction & Development. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-primary-foreground/70">
              <a href="#" className="hover:text-secondary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-secondary transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-secondary transition-colors duration-200">
                Safety Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;