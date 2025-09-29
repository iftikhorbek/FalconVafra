import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
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
  const { t } = useLanguage();
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
      title: t.company.workshops.pvcExtrusion.title,
      description: t.company.workshops.pvcExtrusion.description,
      capacity: t.company.workshops.pvcExtrusion.capacity,
      equipment: t.company.workshops.pvcExtrusion.equipment,
      gradient: "from-primary to-primary-light"
    },
    {
      icon: Settings,
      title: t.company.workshops.glassProcessing.title,
      description: t.company.workshops.glassProcessing.description,
      capacity: t.company.workshops.glassProcessing.capacity,
      equipment: t.company.workshops.glassProcessing.equipment,
      gradient: "from-accent to-accent-dark"
    },
    {
      icon: Award,
      title: t.company.workshops.windowAssembly.title,
      description: t.company.workshops.windowAssembly.description,
      capacity: t.company.workshops.windowAssembly.capacity,
      equipment: t.company.workshops.windowAssembly.equipment,
      gradient: "from-success to-success-light"
    },
    {
      icon: Zap,
      title: t.company.workshops.laminationLine.title,
      description: t.company.workshops.laminationLine.description,
      capacity: t.company.workshops.laminationLine.capacity,
      equipment: t.company.workshops.laminationLine.equipment,
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  const advantages = [
    { icon: Factory, title: t.company.advantages.list.fullCycle.title, description: t.company.advantages.list.fullCycle.description },
    { icon: Settings, title: t.company.advantages.list.worldClassEquipment.title, description: t.company.advantages.list.worldClassEquipment.description },
    { icon: Leaf, title: t.company.advantages.list.energyEfficient.title, description: t.company.advantages.list.energyEfficient.description },
    { icon: Shield, title: t.company.advantages.list.qualityAssured.title, description: t.company.advantages.list.qualityAssured.description },
    { icon: Zap, title: t.company.advantages.list.flexibleProduction.title, description: t.company.advantages.list.flexibleProduction.description },
    { icon: Globe, title: t.company.advantages.list.internationalStandards.title, description: t.company.advantages.list.internationalStandards.description }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-secondary via-white to-secondary/50" id="company" ref={sectionRef}>
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Badge variant="outline" className="mb-6 px-4 py-2 text-primary border-primary/20">
            {t.company.badge}
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-space font-bold mb-6">
            {t.company.title}
            <span className="block text-primary font-bold">
              {t.company.titleAccent}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {t.company.description}
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
          <div className="relative mt-12">
            <div className="relative overflow-hidden rounded-3xl shadow-floating">
              <img 
                src={pvcProfilesImage} 
                alt="High-quality PVC window profiles showing multi-chamber design"
                className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent"></div>
              
              {/* Quality Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-gradient-to-r from-primary/90 to-primary-dark/90 backdrop-blur-xl border border-white/20 shadow-lg rounded-xl p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <Award className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{t.company.advantages.qualityBadge.title}</h4>
                      <p className="text-white/80 text-sm">{t.company.advantages.qualityBadge.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 glass-card p-4 float-animation rounded-2xl border-2 border-primary">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">{t.company.equipmentTypes}</div>
              </div>
            </div>
          </div>

          {/* Right - Advantages */}
          <div className="space-y-4">
            <div>
              <h3 className="text-3xl font-bold mb-3">{t.company.advantages.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {t.company.advantages.description}
              </p>
            </div>

            <Card className="p-4 border shadow-md">
              <div className="grid gap-3">
                {advantages.map((advantage, index) => {
                  const IconComponent = advantage.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start space-x-3 group"
                    >
                      <div className="p-2 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="text-primary" size={18} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors">
                          {advantage.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">{advantage.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;