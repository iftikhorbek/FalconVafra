import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import falconLogo from "@/assets/falcon.png";
import falconLogoWhite from "@/assets/falcon logo white.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { 
      name: "Company", 
      href: "#company",
      dropdown: ["About Us", "Infrastructure", "Certifications"]
    },
    { 
      name: "Products", 
      href: "#products",
      dropdown: ["PVC Profiles", "Glass Units", "Windows & Doors"]
    },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      isScrolled 
        ? "bg-white/90 backdrop-blur-xl shadow-industrial py-4" 
        : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={isScrolled ? falconLogo : falconLogoWhite}
              alt="Falcon by Vafra Group"
              className={cn(
                "transition-all duration-300",
                isScrolled ? "h-10" : "h-12"
              )}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <a
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-1 font-medium transition-all duration-300 hover:scale-105",
                    isScrolled 
                      ? "text-foreground hover:text-primary" 
                      : "text-white hover:text-accent"
                  )}
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown size={16} />}
                </a>
                
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-floating opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="p-2">
                      {item.dropdown.map((dropItem, dropIndex) => (
                        <a
                          key={dropIndex}
                          href={`#${dropItem.toLowerCase().replace(' ', '-')}`}
                          className="block px-4 py-3 text-foreground hover:bg-secondary rounded-xl transition-colors duration-200"
                        >
                          {dropItem}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Button asChild className="btn-energy ml-4">
              <a href="#contact">Get Quote</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-border transition-all duration-500 transform",
          isOpen 
            ? "opacity-100 translate-y-0 visible" 
            : "opacity-0 -translate-y-4 invisible"
        )}>
          <div className="container mx-auto px-6 py-6">
            <div className="space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block py-3 text-foreground hover:text-primary transition-colors duration-200 border-b border-border last:border-0"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button asChild className="btn-energy w-full mt-4">
                <a href="#contact">Get Quote</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;