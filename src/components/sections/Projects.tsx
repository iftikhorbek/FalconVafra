import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  MapPin,
  Users,
  Clock,
  Award,
  ArrowRight,
  Star,
  CheckCircle2,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import silverTower1 from "@/assets/silver tower1.png";
import silverTower2 from "@/assets/silver tower2.png";
import silverTower3 from "@/assets/silver tower3.png";
import silverTower4 from "@/assets/silver tower4.png";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [silverTowerImageIndex, setSilverTowerImageIndex] = useState(0);

  // Silver Tower image carousel
  const silverTowerImages = [
    silverTower1,
    silverTower2,
    silverTower3,
    silverTower4
  ];

  const projects = [
    {
      name: "Silver Tower",
      location: "Tashkent, Uzbekistan",
      type: "Luxury Residential",
      year: "2024",
      units: "500+ windows",
      profile: "7-Chamber Premium",
      description: "Premium high-rise residential complex requiring superior insulation and acoustic performance.",
      challenges: ["High-altitude installation", "Sound insulation requirements", "Energy efficiency standards"],
      solutions: ["Noble 91mm profiles", "Triple glazing system", "Custom lamination finishes"],
      results: ["40% energy savings", "95% noise reduction", "100% client satisfaction"],
      image: silverTower1,
      category: "Residential",
      hasCarousel: true,
      carouselImages: silverTowerImages
    },
    {
      name: "Manhattan Complex",
      location: "Tashkent, Uzbekistan", 
      type: "Mixed-Use Development",
      year: "2023",
      units: "800+ windows",
      profile: "6-Chamber Advanced",
      description: "Large-scale mixed-use development combining residential and commercial spaces.",
      challenges: ["Large scale production", "Multiple specifications", "Tight deadlines"],
      solutions: ["Advance 81mm system", "Flexible production scheduling", "Quality assurance protocols"],
      results: ["On-time delivery", "Zero defects", "Long-term partnership"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      category: "Mixed-Use"
    },
    {
      name: "Rohat - Olmos",
      location: "Tashkent, Uzbekistan",
      type: "Commercial Office",
      year: "2022", 
      units: "300+ windows",
      profile: "5-Chamber Standard",
      description: "Modern office complex requiring energy-efficient solutions and professional aesthetics.",
      challenges: ["Commercial grade requirements", "Design specifications", "Weather resistance"],
      solutions: ["5-chamber profiles", "Special glazing", "Architectural finishes"],
      results: ["LEED compliance", "Enhanced building value", "Tenant satisfaction"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      category: "Commercial"
    },
    {
      name: "Gagarin Avenue",
      location: "Tashkent, Uzbekistan",
      type: "Residential Complex",
      year: "2022",
      units: "600+ windows", 
      profile: "4-Chamber Efficient",
      description: "Affordable housing project focusing on cost-effective yet quality window solutions.",
      challenges: ["Budget constraints", "Volume production", "Quality maintenance"],
      solutions: ["4-chamber system", "Efficient production", "Value engineering"],
      results: ["Cost savings achieved", "Quality standards met", "Community satisfaction"],
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop",
      category: "Residential"
    }
  ];


  const stats = [
    { label: "Projects Completed", value: "500+", icon: Building2 },
    { label: "Windows Installed", value: "50,000+", icon: Award },
    { label: "Client Satisfaction", value: "98%", icon: Star },
    { label: "Years Experience", value: "20+", icon: Clock }
  ];

  // Silver Tower carousel navigation
  const nextSilverTowerImage = () => {
    setSilverTowerImageIndex((prev) => (prev + 1) % silverTowerImages.length);
  };

  const prevSilverTowerImage = () => {
    setSilverTowerImageIndex((prev) => (prev - 1 + silverTowerImages.length) % silverTowerImages.length);
  };

  // Reset carousel when switching to Silver Tower
  const handleProjectSelect = (index) => {
    setActiveProject(index);
    if (index === 0) { // Silver Tower is first project
      setSilverTowerImageIndex(0);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-white to-accent/5" id="projects">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Badge variant="outline" className="mb-6 px-4 py-2 text-primary border-primary/20">
            Our Projects
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-space font-bold mb-6">
            Building Excellence
            <span className="block text-primary font-bold">
              Across Uzbekistan
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From luxury residential towers to major commercial developments, our windows have been 
            chosen for prestigious projects across the country.
          </p>
        </div>

        {/* Project Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-floating transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-industrial rounded-2xl flex items-center justify-center">
                  <IconComponent className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </Card>
            );
          })}
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-4 gap-6 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-industrial ${
                activeProject === index 
                  ? 'border-primary shadow-floating bg-primary/5 scale-105' 
                  : 'hover:border-primary/50'
              }`}
              onClick={() => handleProjectSelect(index)}
            >
              <div className="aspect-video mb-4 overflow-hidden rounded-xl">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg">{project.name}</h3>
                  <Badge variant={activeProject === index ? "default" : "secondary"}>
                    {project.category}
                  </Badge>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin size={16} />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Users size={16} />
                  <span>{project.units}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Active Project Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          
          {/* Project Info */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-3xl font-bold">{projects[activeProject].name}</h3>
                <Badge variant="outline" className="border-primary text-primary">
                  {projects[activeProject].year}
                </Badge>
              </div>
              <div className="flex items-center space-x-4 text-muted-foreground mb-6">
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>{projects[activeProject].location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Building2 size={16} />
                  <span>{projects[activeProject].type}</span>
                </div>
              </div>
              <p className="text-lg leading-relaxed">{projects[activeProject].description}</p>
            </div>

            {/* Project Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h4 className="font-bold text-lg mb-4 text-primary">Project Scope</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Units:</span>
                    <span className="font-semibold">{projects[activeProject].units}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Profile:</span>
                    <span className="font-semibold">{projects[activeProject].profile}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type:</span>
                    <span className="font-semibold">{projects[activeProject].type}</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h4 className="font-bold text-lg mb-4 text-accent">Key Results</h4>
                <div className="space-y-3">
                  {projects[activeProject].results.map((result, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle2 size={16} className="text-success" />
                      <span className="text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

          </div>

          {/* Project Image & Testimonials */}
          <div className="space-y-8">
            {/* Large Project Image */}
            <div className="relative overflow-hidden rounded-3xl shadow-floating">
              {/* Conditional rendering: Carousel for Silver Tower, single image for others */}
              {activeProject === 0 ? (
                <>
                  {/* Left Arrow for Silver Tower */}
                  <button
                    onClick={prevSilverTowerImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 shadow-lg rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group"
                    aria-label="Previous Silver Tower image"
                  >
                    <ChevronLeft size={20} className="text-primary group-hover:scale-110 transition-transform" />
                  </button>

                  {/* Right Arrow for Silver Tower */}
                  <button
                    onClick={nextSilverTowerImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 shadow-lg rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group"
                    aria-label="Next Silver Tower image"
                  >
                    <ChevronRight size={20} className="text-primary group-hover:scale-110 transition-transform" />
                  </button>

                  {/* Silver Tower Carousel Image */}
                  <img
                    src={silverTowerImages[silverTowerImageIndex]}
                    alt={`Silver Tower view ${silverTowerImageIndex + 1}`}
                    className="w-full h-[400px] object-cover transition-opacity duration-300"
                  />

                  {/* Progress Indicators for Silver Tower */}
                  <div className="absolute top-6 right-6 flex space-x-2">
                    {silverTowerImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setSilverTowerImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          silverTowerImageIndex === index
                            ? 'bg-white scale-125'
                            : 'bg-white/50 hover:bg-white/80'
                        }`}
                        aria-label={`Go to Silver Tower image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              ) : (
                /* Regular single image for other projects */
                <img
                  src={projects[activeProject].image}
                  alt={projects[activeProject].name}
                  className="w-full h-[400px] object-cover"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent"></div>
              {activeProject !== 0 && (
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-card p-4">
                    <h4 className="text-white font-semibold text-lg">{projects[activeProject].name}</h4>
                    <p className="text-white/80">{projects[activeProject].type}</p>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;