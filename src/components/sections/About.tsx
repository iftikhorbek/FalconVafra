import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Factory, 
  Settings, 
  Award, 
  Leaf, 
  Zap,
  Shield,
  Users,
  Globe
} from "lucide-react";
import pvcProfilesImage from "@/assets/pvc-profiles.jpg";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.workshop-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('fade-in-up');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const workshops = [
    {
      icon: Factory,
      title: "PVC Profile Extrusion",
      description: "4 Cincinnati extrusion lines (SE-30, NSSV, MCV 75/25D) with 90-125 kW capacity each",
      capacity: "15-20 trucks/month",
      equipment: "Cincinnati (Germany, Italy, Turkey)",
      gradient: "from-primary to-primary-light"
    },
    {
      icon: Settings,
      title: "Glass Processing",
      description: "Advanced Bilge Cam Makina FCL 6032-SL V3 and Isıcam Sinerji precision equipment",
      capacity: "1,000 m²/day",
      equipment: "Bilge Cam Makina, Kirdar Grup",
      gradient: "from-accent to-accent-dark"
    },
    {
      icon: Award,
      title: "Window Assembly",
      description: "Murat Makina assembly line with welding, corner cleaning, and quality control",
      capacity: "250 frames/day",
      equipment: "Murat Makina (Turkey)",
      gradient: "from-success to-success-light"
    },
    {
      icon: Zap,
      title: "Lamination Line",
      description: "Decorative finishes with wood, metallic and custom textures in 50+ colors",
      capacity: "Custom finishes",
      equipment: "Advanced lamination technology",
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  const advantages = [
    { icon: Factory, title: "Full Production Cycle", description: "Complete manufacturing from raw materials to finished windows" },
    { icon: Settings, title: "World-Class Equipment", description: "Cincinnati, Bilge Cam, Murat Makina machinery" },
    { icon: Leaf, title: "Energy Efficient", description: "Eco-friendly processes and sustainable manufacturing" },
    { icon: Shield, title: "Quality Assured", description: "ISO 9001:2008, GOST, IFT, RAL certified" },
    { icon: Zap, title: "Flexible Production", description: "Scalable manufacturing for any project size" },
    { icon: Globe, title: "International Standards", description: "Worldwide supply with local expertise" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-secondary via-white to-secondary/50" id="company" ref={sectionRef}>
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Badge variant="outline" className="mb-6 px-4 py-2 text-primary border-primary/20">
            About Falcon by Vafra Group
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-space font-bold mb-6">
            Industrial Excellence in
            <span className="block text-primary font-bold">
              Window Manufacturing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            As one of Uzbekistan's largest PVC profile manufacturers, we operate a complete production 
            cycle with state-of-the-art equipment, delivering superior quality windows for major construction projects.
          </p>
        </div>

        {/* Production Workshops Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {workshops.map((workshop, index) => {
            const IconComponent = workshop.icon;
            return (
              <Card 
                key={index}
                className="workshop-card opacity-0 p-8 hover:shadow-floating transition-all duration-500 hover:scale-[1.02] group border-0 shadow-industrial"
              >
                <div className="flex items-start space-x-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${workshop.gradient} shadow-lg`}>
                    <IconComponent className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {workshop.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {workshop.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {workshop.capacity}
                      </Badge>
                      <Badge variant="outline" className="border-accent/20 text-accent">
                        {workshop.equipment}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Company Advantages */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-floating">
              <img 
                src={pvcProfilesImage} 
                alt="High-quality PVC window profiles showing multi-chamber design"
                className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent"></div>
              
              {/* Quality Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-success to-success-light rounded-xl flex items-center justify-center">
                      <Award className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Premium Quality</h4>
                      <p className="text-white/80 text-sm">4-7 chamber profiles available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 glass-card p-4 float-animation">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Equipment Types</div>
              </div>
            </div>
          </div>

          {/* Right - Advantages */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6">Why Choose Falcon?</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our commitment to excellence drives everything we do. From sourcing premium materials 
                to implementing cutting-edge manufacturing processes, we ensure every window meets 
                the highest international standards.
              </p>
            </div>

            <div className="grid gap-6">
              {advantages.map((advantage, index) => {
                const IconComponent = advantage.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-secondary/50 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                        {advantage.title}
                      </h4>
                      <p className="text-muted-foreground">{advantage.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;