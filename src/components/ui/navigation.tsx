import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/translations";
import falconLogo from "@/assets/falcon.png";
import falconLogoWhite from "@/assets/falcon logo white.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.company, href: "#company" },
    {
      name: t.nav.products,
      href: "#products",
      dropdown: [t.nav.pvcProfiles, t.nav.glassUnits]
    },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.contact, href: "#contact" },
  ];

  const languages = [
    { code: 'ru' as Language, name: 'Русский', flag: '🇷🇺' },
    { code: 'uz' as Language, name: 'O\'zbek', flag: '🇺🇿' },
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' }
  ];

  const currentLang = languages.find(lang => lang.code === language);

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
            <a href="#home" className="transition-transform duration-300 hover:scale-105">
              <img
                src={isScrolled ? falconLogo : falconLogoWhite}
                alt="Falcon by Vafra Group"
                className={cn(
                  "transition-all duration-300",
                  isScrolled ? "h-10" : "h-12"
                )}
              />
            </a>
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
                      <a
                        href="#pvc-profiles"
                        className="block px-4 py-3 text-foreground hover:bg-secondary rounded-xl transition-colors duration-200"
                      >
                        {t.nav.pvcProfiles}
                      </a>
                      <a
                        href="#glass-units"
                        className="block px-4 py-3 text-foreground hover:bg-secondary rounded-xl transition-colors duration-200"
                      >
                        {t.nav.glassUnits}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
            {/* Language Switcher */}
            <div className="relative group ml-4">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={cn(
                  "flex items-center space-x-2 px-3 py-2 rounded-xl transition-all duration-300 hover:scale-105",
                  isScrolled
                    ? "text-foreground hover:bg-secondary"
                    : "text-white hover:bg-white/10"
                )}
              >
                <Globe size={16} />
                <span className="text-sm font-medium">{currentLang?.flag} {currentLang?.name}</span>
                <ChevronDown size={14} className={cn(
                  "transition-transform duration-200",
                  isLangOpen ? "rotate-180" : ""
                )} />
              </button>

              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-2xl shadow-floating border border-border/50 overflow-hidden z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={cn(
                        "w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-secondary transition-colors duration-200",
                        language === lang.code ? "bg-secondary text-primary font-medium" : "text-foreground"
                      )}
                    >
                      <span>{lang.flag}</span>
                      <span className="text-sm">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Button asChild className="btn-energy ml-4">
              <a href="#contact">{t.nav.getQuote}</a>
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
              {/* Mobile Language Switcher */}
              <div className="border-t border-border pt-4 mt-4">
                <div className="text-sm font-medium text-foreground mb-3">Language / Язык / Til</div>
                <div className="grid grid-cols-3 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsOpen(false);
                      }}
                      className={cn(
                        "flex flex-col items-center space-y-1 p-3 rounded-xl transition-colors duration-200",
                        language === lang.code
                          ? "bg-primary text-white"
                          : "bg-secondary hover:bg-secondary/80 text-foreground"
                      )}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="text-xs font-medium">{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <Button asChild className="btn-energy w-full mt-4">
                <a href="#contact">{t.nav.getQuote}</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;