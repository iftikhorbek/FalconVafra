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
    <section className="py-12 bg-gradient-to-br from-secondary via-white to-secondary/50" id="company" ref={sectionRef}>
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <Badge variant="outline" className="mb-3 px-4 py-1.5 text-primary border-primary/20">
            {t.company.badge}
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-space font-bold mb-3">
            {t.company.title}
            <span className="block text-primary font-bold">
              {t.company.titleAccent}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.company.description}
          </p>
        </div>

        {/* Production Workshops Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {workshops.map((workshop, index) => {
            const IconComponent = workshop.icon;
            return (
              <Card
                key={index}
                className="workshop-card opacity-0 p-6 hover:shadow-floating transition-all duration-500 hover:scale-[1.02] group border-0 shadow-industrial"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${workshop.gradient} shadow-lg`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {workshop.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                      {workshop.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                        {workshop.capacity}
                      </Badge>
                      <Badge variant="outline" className="border-accent/20 text-accent text-xs">
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
        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* Left - Image */}
          <div className="relative mt-6">
            <div className="relative overflow-hidden rounded-3xl shadow-floating">
              <img
                src={pvcProfilesImage}
                alt="High-quality PVC window profiles showing multi-chamber design"
                className="w-full h-[400px] object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent"></div>
              
              {/* Quality Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-gradient-to-r from-primary/90 to-primary-dark/90 backdrop-blur-xl border border-white/20 shadow-lg rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                      <Award className="text-white" size={16} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">{t.company.advantages.qualityBadge.title}</h4>
                      <p className="text-white/80 text-xs">{t.company.advantages.qualityBadge.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 glass-card p-3 float-animation rounded-xl border-2 border-primary">
              <div className="text-center">
                <div className="text-xl font-bold text-primary">50+</div>
                <div className="text-xs text-muted-foreground">{t.company.equipmentTypes}</div>
              </div>
            </div>
          </div>

          {/* Right - Advantages */}
          <div className="space-y-3">
            <div>
              <h3 className="text-2xl font-bold mb-2">{t.company.advantages.title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                {t.company.advantages.description}
              </p>
            </div>

            <Card className="p-3 border shadow-md">
              <div className="grid gap-2.5">
                {advantages.map((advantage, index) => {
                  const IconComponent = advantage.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start space-x-2 group"
                    >
                      <div className="p-1.5 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="text-primary" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-0.5 group-hover:text-primary transition-colors">
                          {advantage.title}
                        </h4>
                        <p className="text-muted-foreground text-xs leading-relaxed">{advantage.description}</p>
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