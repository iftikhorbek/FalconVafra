import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Layers, 
  Shield, 
  Thermometer, 
  Volume2, 
  CheckCircle,
  ArrowRight,
  Award,
  Zap
} from "lucide-react";
import glassProcessingImage from "@/assets/glass-processing.jpg";

const Products = () => {
  const [activeProfile, setActiveProfile] = useState(0);

  const profileSystems = [];

  const premiumLines = [
    {
      name: "Noble 91mm",
      description: "Seven-chamber sound-insulated design with optional triple glazing",
      features: ["Triple Glazing Ready", "Superior Sound Insulation", "High Strength Design", "Premium Aesthetics"],
      highlight: "Luxury Series"
    },
    {
      name: "Advance 81mm", 
      description: "Advanced six-chamber system for demanding applications",
      features: ["Enhanced Durability", "Energy Star Rated", "Weather Resistant", "Modern Profile"],
      highlight: "Performance Series"
    }
  ];

  const glassTypes = [
    {
      name: "Standard Double Glazing",
      description: "High-quality double-glazed units with precise sealing",
      features: ["4-6-4mm configuration", "Argon gas filling", "Low-E coating", "Energy efficient"]
    },
    {
      name: "Triple Glazing",
      description: "Ultimate thermal and acoustic performance", 
      features: ["4-6-4-6-4mm configuration", "Superior insulation", "Maximum energy savings", "Premium quality"]
    },
    {
      name: "Specialty Glass",
      description: "Custom solutions for specific requirements",
      features: ["Laminated safety glass", "Tinted options", "Decorative patterns", "Custom sizes"]
    }
  ];

  const certifications = [
    "ISO 9001:2008", "ISO 14001:2004", "GOST", "IFT", "RAL", "UKR-Cepro", "INCERC", "TSE"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-secondary/30" id="products">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Badge variant="outline" className="mb-6 px-4 py-2 text-primary border-primary/20">
            Product Portfolio
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-space font-bold mb-6">
            Advanced PVC Systems &
            <span className="block text-accent font-bold">
              Glass Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We offer comprehensive premium PVC window solutions and advanced glass units
            that meet the highest international quality standards.
          </p>
        </div>

        {/* Product Tabs */}
        <Tabs defaultValue="profiles" className="mb-16">
          <TabsList className="grid w-full lg:w-fit mx-auto grid-cols-2 h-14 p-2 bg-secondary rounded-2xl">
            <TabsTrigger value="profiles" className="text-base font-semibold rounded-xl">
              PVC Profiles
            </TabsTrigger>
            <TabsTrigger value="glass" className="text-base font-semibold rounded-xl">
              Glass Units
            </TabsTrigger>
          </TabsList>

          {/* PVC Profiles Tab */}
          <TabsContent value="profiles" className="mt-12">

            {/* Creative Image Showroom */}
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">Creative Image Showroom</h3>
                <p className="text-muted-foreground text-lg">
                  Discover our premium PVC profile solutions through our visual showcase
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Image placeholder 1 */}
                <Card className="p-6 hover:shadow-industrial transition-all duration-300 aspect-square group">
                  <div className="w-full h-full bg-gradient-to-br from-secondary to-secondary/50 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                        <Layers className="text-primary" size={24} />
                      </div>
                      <p className="text-muted-foreground text-sm">Profile Showcase 1</p>
                    </div>
                  </div>
                </Card>

                {/* Image placeholder 2 */}
                <Card className="p-6 hover:shadow-industrial transition-all duration-300 aspect-square group">
                  <div className="w-full h-full bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-2xl flex items-center justify-center">
                        <Shield className="text-accent" size={24} />
                      </div>
                      <p className="text-muted-foreground text-sm">Profile Showcase 2</p>
                    </div>
                  </div>
                </Card>

                {/* Image placeholder 3 */}
                <Card className="p-6 hover:shadow-industrial transition-all duration-300 aspect-square group">
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                        <Award className="text-primary" size={24} />
                      </div>
                      <p className="text-muted-foreground text-sm">Profile Showcase 3</p>
                    </div>
                  </div>
                </Card>

              </div>

              {/* Call to Action */}
              <div className="text-center mt-12">
                <Button className="btn-energy group">
                  Request Product Specifications
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Glass Units Tab */}
          <TabsContent value="glass" className="mt-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Glass Processing Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl shadow-floating">
                  <img 
                    src={glassProcessingImage} 
                    alt="Advanced glass processing equipment and precision manufacturing"
                    className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent"></div>
                  
                  {/* Capacity Badge */}
                  <div className="absolute top-6 right-6">
                    <div className="glass-card p-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">1,000m²</div>
                        <div className="text-white/80 text-sm">Daily Capacity</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Equipment Info */}
                <div className="absolute -bottom-6 left-6 right-6">
                  <Card className="p-6 shadow-floating">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-energy rounded-xl flex items-center justify-center">
                        <Zap className="text-white" size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold">Advanced Equipment</h4>
                        <p className="text-sm text-muted-foreground">Bilge Cam Makina & Isıcam Sinerji</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Glass Types */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold mb-6">Glass Unit Solutions</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    Our state-of-the-art glass processing facility produces precision double-glazed units 
                    with advanced sealing technology for maximum energy efficiency and durability.
                  </p>
                </div>

                <div className="space-y-6">
                  {glassTypes.map((glass, index) => (
                    <Card key={index} className="p-6 hover:shadow-industrial transition-all duration-300 group">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                          <Volume2 className="text-primary" size={20} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                            {glass.name}
                          </h4>
                          <p className="text-muted-foreground mb-4">{glass.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {glass.features.map((feature, fIndex) => (
                              <Badge key={fIndex} variant="secondary" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

        </Tabs>
      </div>
    </section>
  );
};

export default Products;