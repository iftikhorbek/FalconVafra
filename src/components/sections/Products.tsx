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

  const profileSystems = [
    {
      name: "4-Chamber System",
      thickness: "61mm",
      chambers: 4,
      features: ["Standard Insulation", "Cost-Effective", "Residential Use"],
      thermal: "1.4 W/m²K",
      grade: "Standard",
      applications: ["Residential", "Light Commercial"]
    },
    {
      name: "5-Chamber System", 
      thickness: "71mm",
      chambers: 5,
      features: ["Enhanced Insulation", "Multi-Purpose", "Balanced Performance"],
      thermal: "1.2 W/m²K",
      grade: "Enhanced",
      applications: ["Residential", "Commercial", "Office Buildings"]
    },
    {
      name: "6-Chamber System",
      thickness: "81mm", 
      chambers: 6,
      features: ["Superior Insulation", "High Performance", "Premium Quality"],
      thermal: "1.0 W/m²K",
      grade: "Premium", 
      applications: ["Premium Residential", "Commercial", "Hotels"]
    },
    {
      name: "7-Chamber System",
      thickness: "91mm",
      chambers: 7,
      features: ["Maximum Insulation", "Sound Barrier", "Ultimate Performance"],
      thermal: "0.8 W/m²K", 
      grade: "Ultimate",
      applications: ["Luxury", "High-Rise", "Extreme Climate"]
    }
  ];

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
            From 4-chamber standard profiles to 7-chamber premium systems, we offer comprehensive 
            window solutions that meet the highest international quality standards.
          </p>
        </div>

        {/* Product Tabs */}
        <Tabs defaultValue="profiles" className="mb-16">
          <TabsList className="grid w-full lg:w-fit mx-auto grid-cols-3 h-14 p-2 bg-secondary rounded-2xl">
            <TabsTrigger value="profiles" className="text-base font-semibold rounded-xl">
              PVC Profiles
            </TabsTrigger>
            <TabsTrigger value="glass" className="text-base font-semibold rounded-xl">
              Glass Units
            </TabsTrigger>
            <TabsTrigger value="solutions" className="text-base font-semibold rounded-xl">
              Complete Solutions
            </TabsTrigger>
          </TabsList>

          {/* PVC Profiles Tab */}
          <TabsContent value="profiles" className="mt-12">
            
            {/* Profile Systems Selector */}
            <div className="grid lg:grid-cols-4 gap-4 mb-12">
              {profileSystems.map((profile, index) => (
                <Card 
                  key={index}
                  className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-industrial ${
                    activeProfile === index 
                      ? 'border-primary shadow-floating bg-primary/5' 
                      : 'hover:border-primary/50'
                  }`}
                  onClick={() => setActiveProfile(index)}
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                      activeProfile === index 
                        ? 'bg-gradient-industrial text-white' 
                        : 'bg-secondary text-primary'
                    }`}>
                      <Layers size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{profile.name}</h3>
                    <Badge variant={activeProfile === index ? "default" : "secondary"} className="mb-2">
                      {profile.thickness}
                    </Badge>
                    <p className="text-sm text-muted-foreground">{profile.chambers} Chambers</p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Active Profile Details */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Profile Visualization */}
              <div className="space-y-6">
                <Card className="p-8 bg-gradient-to-br from-secondary to-white border-0 shadow-industrial">
                  <div className="text-center mb-6">
                    <h3 className="text-3xl font-bold mb-2">{profileSystems[activeProfile].name}</h3>
                    <Badge variant="outline" className="text-lg px-4 py-2 border-primary text-primary">
                      {profileSystems[activeProfile].thickness} Thickness
                    </Badge>
                  </div>
                  
                  {/* Chamber Visualization */}
                  <div className="flex justify-center mb-6">
                    <div className="flex space-x-1">
                      {Array.from({length: profileSystems[activeProfile].chambers}).map((_, i) => (
                        <div 
                          key={i}
                          className="w-8 h-20 bg-gradient-to-b from-primary to-primary-dark rounded border-2 border-white shadow-sm"
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white rounded-xl">
                      <Thermometer className="mx-auto mb-2 text-accent" size={24} />
                      <div className="font-bold">{profileSystems[activeProfile].thermal}</div>
                      <div className="text-sm text-muted-foreground">U-Value</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl">
                      <Shield className="mx-auto mb-2 text-success" size={24} />
                      <div className="font-bold">{profileSystems[activeProfile].grade}</div>
                      <div className="text-sm text-muted-foreground">Grade</div>
                    </div>
                  </div>
                </Card>

                {/* Premium Lines */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold">Premium Product Lines</h4>
                  {premiumLines.map((line, index) => (
                    <Card key={index} className="p-6 hover:shadow-industrial transition-all duration-300">
                      <div className="flex items-start justify-between mb-3">
                        <h5 className="font-bold text-lg">{line.name}</h5>
                        <Badge variant="outline" className="border-accent text-accent">
                          {line.highlight}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">{line.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {line.features.map((feature, fIndex) => (
                          <Badge key={fIndex} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Profile Features & Applications */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-2xl font-bold mb-6">Key Features</h4>
                  <div className="space-y-4">
                    {profileSystems[activeProfile].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-success to-success-light rounded-full flex items-center justify-center">
                          <CheckCircle size={16} className="text-white" />
                        </div>
                        <span className="text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-bold mb-6">Applications</h4>
                  <div className="grid gap-3">
                    {profileSystems[activeProfile].applications.map((app, index) => (
                      <div key={index} className="p-4 bg-secondary/50 rounded-xl flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-industrial rounded-lg flex items-center justify-center">
                          <Award size={16} className="text-white" />
                        </div>
                        <span className="font-medium">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="btn-energy w-full group">
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

          {/* Complete Solutions Tab */}
          <TabsContent value="solutions" className="mt-12">
            <div className="text-center space-y-8">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-3xl font-bold mb-6">Complete Window Solutions</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  From measurement to installation, we provide end-to-end window solutions with 
                  our integrated manufacturing capabilities and professional installation services.
                </p>
              </div>

              {/* Quality Certifications */}
              <div className="bg-secondary/30 rounded-3xl p-8">
                <h4 className="text-2xl font-bold mb-6">Quality Certifications</h4>
                <div className="flex flex-wrap justify-center gap-4">
                  {certifications.map((cert, index) => (
                    <Badge key={index} variant="outline" className="text-base px-6 py-3 border-primary/20">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-industrial">
                  Download Product Catalog
                </Button>
                <Button className="btn-energy">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Products;