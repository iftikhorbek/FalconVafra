import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Factory, Award, Zap } from "lucide-react";
import heroImage from "@/assets/hero-factory.jpg";

const Hero = () => {
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

  const stats = [
    { 
      icon: Factory, 
      value: "20", 
      unit: "Trucks/Month", 
      label: "PVC Profile Production",
      color: "text-accent"
    },
    { 
      icon: Award, 
      value: "1,000", 
      unit: "m²/Day", 
      label: "Glass Processing Capacity",
      color: "text-primary"
    },
    { 
      icon: Zap, 
      value: "250", 
      unit: "Frames/Day", 
      label: "Window Assembly Rate",
      color: "text-success"
    },
  ];

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
              <span className="text-accent font-semibold text-sm">Industry Leader</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-space font-bold text-white leading-tight fade-in-up delay-100">
                Modern Window
                <span className="block text-accent font-bold">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-white/90 font-light max-w-2xl fade-in-up delay-200">
                Full-cycle PVC profiles and glass units manufacturing with world-class equipment. 
                From extrusion to assembly - we deliver excellence in every window.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 fade-in-up delay-300">
              <Button className="btn-energy group">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button className="btn-ghost-industrial group">
                <Play className="mr-2 h-5 w-5" />
                Watch Process
              </Button>
            </div>

            {/* Features List */}
            <div className="flex flex-wrap gap-6 fade-in-up delay-400">
              {["Full Production Cycle", "ISO Certified", "Energy Efficient", "International Quality"].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full pulse-glow"></div>
                  <span className="text-white/80 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats Cards */}
          <div className="space-y-6 fade-in-up delay-500">
            <div className="grid gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={index}
                    className="glass-card p-6 hover:shadow-floating transition-all duration-500 hover:scale-105 group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 ${stat.color}`}>
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <div className="flex items-baseline space-x-1">
                          <span className="text-3xl font-bold text-white">{stat.value}</span>
                          <span className="text-sm text-white/70 font-medium">{stat.unit}</span>
                        </div>
                        <p className="text-white/80 text-sm">{stat.label}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quality Badge */}
            <div className="glass-card p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-success to-success-light rounded-2xl mb-4">
                <Award className="text-white" size={28} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">ISO 9001:2008 Certified</h3>
              <p className="text-white/70 text-sm">International quality standards compliance</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-up delay-600">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-white/60 text-sm">Scroll to explore</span>
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