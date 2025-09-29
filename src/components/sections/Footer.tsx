import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Facebook,
  Instagram,
  Send,
  Award,
  Shield,
  Leaf,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "About Us", href: "#company" },
    { name: "Products", href: "#products" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const productLinks = [
    { name: "Residential Projects", href: "#projects" },
    { name: "Commercial Buildings", href: "#projects" },
    { name: "Industrial Facilities", href: "#projects" },
    { name: "High-Rise Developments", href: "#projects" },
    { name: "Premium Installations", href: "#projects" },
    { name: "Custom Solutions", href: "#projects" },
  ];

  const certifications = [
    "ISO 9001:2008",
    "ISO 14001:2004", 
    "GOST",
    "IFT",
    "RAL",
    "UKR-Cepro"
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/falconprofil", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/falcon_window_systems", label: "Instagram" },
    { icon: Send, href: "https://t.me/bussinesuzbekistan", label: "Telegram" },
    { icon: MapPin, href: "https://yandex.uz/maps/-/CLucARlJ", label: "Maps" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-primary via-primary-dark to-foreground text-white overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-success rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center">
                <img
                  src="/src/assets/falcon logo white.png"
                  alt="Falcon Logo"
                  className="h-16 object-contain"
                />
              </div>
              
              <p className="text-white/90 leading-relaxed">
                Uzbekistan's leading manufacturer of premium PVC profiles and modern glass units.
                Delivering excellence through innovation and quality since 2003.
              </p>

              {/* Key Features */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Award className="text-accent" size={18} />
                  <span className="text-sm">ISO 9001:2008 Certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="text-accent" size={18} />
                  <span className="text-sm">Full Production Cycle</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Leaf className="text-accent" size={18} />
                  <span className="text-sm">Eco-Friendly Manufacturing</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300"
                    >
                      <IconComponent size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold">Quick Links</h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-white/80 hover:text-accent transition-colors duration-200 hover:translate-x-1 transform"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="pt-4">
                <h5 className="font-semibold mb-3">Production Capacity</h5>
                <div className="space-y-2 text-sm text-white/80">
                  <div>• 20 trucks PVC profiles/month</div>
                  <div>• 1,000 m² glass units/day</div>
                  <div>• 250 window frames/day</div>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold">Our Projects</h4>
              <div className="space-y-3">
                {productLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-white/80 hover:text-accent transition-colors duration-200 hover:translate-x-1 transform"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="pt-4">
                <h5 className="font-semibold mb-3">Quality Certifications</h5>
                <div className="flex flex-wrap gap-2">
                  {certifications.slice(0, 4).map((cert, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-white/30 text-white">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold">Contact Information</h4>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-accent mt-1" size={18} />
                  <div>
                    <div className="font-medium">Main Factory</div>
                    <div className="text-white/80 text-sm">
                      Yangihayot district, Yangi Kipchok mahalla<br />
                      Tashkent, Uzbekistan
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="text-accent mt-1" size={18} />
                  <div>
                    <div className="font-medium">Samarkand Branch</div>
                    <div className="text-white/80 text-sm">
                      Dashteobod Street<br />
                      Samarkand, Uzbekistan
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="text-accent" size={18} />
                  <div>
                    <div className="text-sm text-white/80">+998 (90) 212−07-73</div>
                    <div className="text-sm text-white/80">+998 (90) 996−75-58</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="text-accent" size={18} />
                  <div className="text-sm text-white/80">
                    pulodteshaev@gmail.com
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Send className="text-accent" size={18} />
                  <div className="text-sm text-white/80">
                    t.me/bussinesuzbekistan
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Button asChild className="btn-energy w-full">
                <a href="#contact">Get Free Quote</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20">
          <div className="container mx-auto px-6 py-6">
            <div className="text-center">
              <p className="text-white/80 text-sm">
                © 2024 Falcon by Vafra Group. All rights reserved.
              </p>
              <p className="text-white/60 text-xs mt-1">
                Premium PVC windows and glass solutions since 2003
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;