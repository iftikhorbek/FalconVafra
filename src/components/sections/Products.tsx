import { useState, useEffect } from "react";
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
  Zap,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import glassProcessingImage from "@/assets/glass-processing.jpg";

const Products = () => {
  const [activeProfile, setActiveProfile] = useState(0);
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const [currentGlassImage, setCurrentGlassImage] = useState(0);

  const profileSystems = [];

  // Define 4 glass processing images for carousel
  const glassProcessingImages = [
    {
      src: glassProcessingImage,
      alt: "Advanced glass processing equipment and precision manufacturing",
      title: "Precision Manufacturing"
    },
    {
      src: glassProcessingImage, // Placeholder - you can replace with actual different images
      alt: "Double glazing assembly process",
      title: "Double Glazing Assembly"
    },
    {
      src: glassProcessingImage, // Placeholder - you can replace with actual different images
      alt: "Quality control and testing",
      title: "Quality Control"
    },
    {
      src: glassProcessingImage, // Placeholder - you can replace with actual different images
      alt: "Final inspection and packaging",
      title: "Final Inspection"
    }
  ];

  // Define 6 total images for the carousel
  const allImages = [
    { icon: Layers, gradient: "from-secondary to-secondary/50", bgColor: "bg-primary/10", iconColor: "text-primary", title: "Profile Showcase 1" },
    { icon: Shield, gradient: "from-accent/10 to-accent/5", bgColor: "bg-accent/10", iconColor: "text-accent", title: "Profile Showcase 2" },
    { icon: Award, gradient: "from-primary/10 to-primary/5", bgColor: "bg-primary/10", iconColor: "text-primary", title: "Profile Showcase 3" },
    { icon: Thermometer, gradient: "from-success/10 to-success/5", bgColor: "bg-success/10", iconColor: "text-success", title: "Advanced Profile 1" },
    { icon: Volume2, gradient: "from-purple-100 to-purple-50", bgColor: "bg-purple-100", iconColor: "text-purple-600", title: "Advanced Profile 2" },
    { icon: Zap, gradient: "from-orange-100 to-orange-50", bgColor: "bg-orange-100", iconColor: "text-orange-600", title: "Premium Profile" }
  ];

  // Get current visible images (3 at a time)
  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentStartIndex + i) % allImages.length;
      visibleImages.push(allImages[index]);
    }
    return visibleImages;
  };

  // Auto-advance carousel every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStartIndex((prev) => (prev + 1) % allImages.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [allImages.length]);

  // Auto-advance glass images every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGlassImage((prev) => (prev + 1) % glassProcessingImages.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [glassProcessingImages.length]);

  // Navigation functions for profile carousel
  const nextImage = () => {
    setCurrentStartIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentStartIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  // Navigation functions for glass images
  const nextGlassImage = () => {
    setCurrentGlassImage((prev) => (prev + 1) % glassProcessingImages.length);
  };

  const prevGlassImage = () => {
    setCurrentGlassImage((prev) => (prev - 1 + glassProcessingImages.length) % glassProcessingImages.length);
  };

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

              {/* Carousel Container */}
              <div className="relative">
                {/* Left Arrow */}
                <button
                  onClick={prevImage}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white shadow-floating rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} className="group-hover:scale-110 transition-transform" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={nextImage}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white shadow-floating rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} className="group-hover:scale-110 transition-transform" />
                </button>

                {/* Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
                  {getVisibleImages().map((image, index) => {
                    const IconComponent = image.icon;
                    return (
                      <Card key={`${currentStartIndex}-${index}`} className="p-6 hover:shadow-industrial transition-all duration-300 aspect-square group">
                        <div className={`w-full h-full bg-gradient-to-br ${image.gradient} rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                          <div className="text-center">
                            <div className={`w-16 h-16 mx-auto mb-4 ${image.bgColor} rounded-2xl flex items-center justify-center`}>
                              <IconComponent className={image.iconColor} size={24} />
                            </div>
                            <p className="text-muted-foreground text-sm">{image.title}</p>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center mt-8 space-x-2">
                  {allImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStartIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentStartIndex === index
                          ? 'bg-primary scale-125'
                          : 'bg-secondary hover:bg-primary/50'
                      }`}
                      aria-label={`Start from image ${index + 1}`}
                    />
                  ))}
                </div>
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
              
              {/* Glass Processing Image Carousel */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl shadow-floating">
                  {/* Left Arrow */}
                  <button
                    onClick={prevGlassImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 shadow-lg rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group"
                    aria-label="Previous glass image"
                  >
                    <ChevronLeft size={18} className="text-primary group-hover:scale-110 transition-transform" />
                  </button>

                  {/* Right Arrow */}
                  <button
                    onClick={nextGlassImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 shadow-lg rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group"
                    aria-label="Next glass image"
                  >
                    <ChevronRight size={18} className="text-primary group-hover:scale-110 transition-transform" />
                  </button>

                  <img
                    src={glassProcessingImages[currentGlassImage].src}
                    alt={glassProcessingImages[currentGlassImage].alt}
                    className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent"></div>

                  {/* Image Title */}
                  <div className="absolute bottom-6 left-6">
                    <div className="glass-card p-3 rounded-xl">
                      <h3 className="text-white font-semibold">{glassProcessingImages[currentGlassImage].title}</h3>
                    </div>
                  </div>

                  {/* Progress Indicators */}
                  <div className="absolute bottom-6 right-6 flex space-x-2">
                    {glassProcessingImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentGlassImage(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          currentGlassImage === index
                            ? 'bg-white scale-125'
                            : 'bg-white/50 hover:bg-white/80'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Capacity Badge */}
                  <div className="absolute top-6 right-6">
                    <div className="glass-card p-4 float-animation rounded-2xl border-2 border-primary">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-black">1,000m²</div>
                        <div className="text-black/80 text-sm">Daily Capacity</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Equipment Info */}
                <div className="absolute -bottom-6 left-6 right-6">
                  <Card className="p-6 shadow-floating bg-gradient-industrial text-white border-2 border-primary rounded-2xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                        <Zap className="text-white" size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">Advanced Equipment</h4>
                        <p className="text-sm text-white/80">Bilge Cam Makina & Isıcam Sinerji</p>
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

                <Card className="p-6 shadow-md border rounded-2xl bg-gradient-to-br from-white to-secondary/20">
                  <div className="space-y-4">
                    {glassTypes.map((glass, index) => (
                      <div key={index} className="group">
                        <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                          {glass.name}
                        </h4>
                        <p className="text-muted-foreground mb-2 text-sm">{glass.description}</p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {glass.features.map((feature, fIndex) => (
                            <Badge key={fIndex} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>

        </Tabs>
      </div>
    </section>
  );
};

export default Products;