import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Play, Factory, Award, Zap } from "lucide-react";
import heroImage from "@/assets/hero-factory.jpg";
import profileWindowImage from "@/assets/profile_window2.png";

const Hero = () => {
  const { t } = useLanguage();
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);


  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="home">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Modern PVC window manufacturing facility" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        <div className="absolute inset-0 bg-primary/20"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-accent/20 rounded-full blur-xl float-animation"></div>
      <div className="absolute bottom-40 left-20 w-32 h-32 bg-primary/20 rounded-full blur-2xl float-animation delay-300"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-success/20 rounded-full blur-lg float-animation delay-500"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 fade-in-up">
              <span className="text-accent font-semibold text-sm">{t.hero.badge}</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-space font-bold text-white leading-tight fade-in-up delay-100">
                {t.hero.title}
                <span className="block text-accent font-bold">
                  {t.hero.titleAccent}
                </span>
              </h1>
              <p className="text-xl text-white/90 font-light max-w-2xl fade-in-up delay-200">
                {t.hero.subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 fade-in-up delay-300">
              <Button className="btn-energy group">
                {t.hero.getQuote}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button className="btn-ghost-industrial group">
                <Play className="mr-2 h-5 w-5" />
                {t.hero.watchProcess}
              </Button>
            </div>

            {/* Features List */}
            <div className="flex flex-wrap gap-6 fade-in-up delay-400">
              {[t.hero.features.fullCycle, t.hero.features.isoCertified, t.hero.features.energyEfficient, t.hero.features.internationalQuality].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full pulse-glow"></div>
                  <span className="text-white/80 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Window Image */}
          <div className="relative fade-in-up delay-500">
            <div className="relative">
              <img
                src={profileWindowImage}
                alt="Professional PVC window profile cross-section"
                className="w-full h-auto max-w-lg mx-auto rounded-2xl shadow-floating"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent rounded-2xl"></div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-up delay-600">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-white/60 text-sm">{t.hero.scrollText}</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;