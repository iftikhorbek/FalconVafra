import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";
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
  ChevronRight,
  Download
} from "lucide-react";
import windows1 from "@/assets/windows1.png";
import windows2 from "@/assets/windows2.png";
import windows3 from "@/assets/windows3.png";
import windows4 from "@/assets/windows4.png";
import windows5 from "@/assets/windows5.png";
import windows6 from "@/assets/windows6.png";
import instruments1 from "@/assets/instruments1.png";
import instruments2 from "@/assets/instruments2.png";
import instruments3 from "@/assets/instruments3.png";
import instruments4 from "@/assets/instruments4.png";

const Products = () => {
  const { t } = useLanguage();
  const [activeProfile, setActiveProfile] = useState(0);
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const [currentGlassImage, setCurrentGlassImage] = useState(0);
  const [activeTab, setActiveTab] = useState("profiles");

  const profileSystems = [];

  // Define 4 instruments images for carousel
  const glassProcessingImages = [
    {
      src: instruments1,
      alt: "Advanced glass processing equipment and precision manufacturing",
      title: "Precision Manufacturing"
    },
    {
      src: instruments2,
      alt: "Double glazing assembly process",
      title: "Double Glazing Assembly"
    },
    {
      src: instruments3,
      alt: "Quality control and testing",
      title: "Quality Control"
    },
    {
      src: instruments4,
      alt: "Final inspection and packaging",
      title: "Final Inspection"
    }
  ];

  // Define 6 total images for the carousel
  const allImages = [
    { src: windows1, title: "Profile Showcase 1" },
    { src: windows2, title: "Profile Showcase 2" },
    { src: windows3, title: "Profile Showcase 3" },
    { src: windows4, title: "Advanced Profile 1" },
    { src: windows5, title: "Advanced Profile 2" },
    { src: windows6, title: "Premium Profile" }
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

  // Handle URL hash to switch tabs
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#glass-units') {
        setActiveTab('glass');
      } else if (hash === '#pvc-profiles') {
        setActiveTab('profiles');
      }
    };

    // Check hash on component mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

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
      name: t.products.glassTypes.standardDouble.name,
      description: t.products.glassTypes.standardDouble.description,
      features: t.products.glassTypes.standardDouble.features
    },
    {
      name: t.products.glassTypes.triple.name,
      description: t.products.glassTypes.triple.description,
      features: t.products.glassTypes.triple.features
    },
    {
      name: t.products.glassTypes.specialty.name,
      description: t.products.glassTypes.specialty.description,
      features: t.products.glassTypes.specialty.features
    }
  ];

  const certifications = [
    "ISO 9001:2008", "ISO 14001:2004", "GOST", "IFT", "RAL", "UKR-Cepro", "INCERC", "TSE"
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-secondary/30" id="products">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <Badge variant="outline" className="mb-3 px-4 py-1.5 text-primary border-primary/20">
            {t.products.badge}
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-space font-bold mb-3">
            {t.products.title}
            <span className="block text-accent font-bold">
              {t.products.titleAccent}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.products.description}
          </p>
        </div>

        {/* Product Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full lg:w-fit mx-auto grid-cols-2 h-12 p-1.5 bg-secondary rounded-2xl">
            <TabsTrigger value="profiles" className="text-base font-semibold rounded-xl">
              {t.products.tabs.profiles}
            </TabsTrigger>
            <TabsTrigger value="glass" className="text-base font-semibold rounded-xl">
              {t.products.tabs.glass}
            </TabsTrigger>
          </TabsList>

          {/* PVC Profiles Tab */}
          <TabsContent value="profiles" className="mt-6" id="pvc-profiles">

            {/* Creative Image Showroom */}
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{t.products.profileShowroom.title}</h3>
                <p className="text-muted-foreground text-base">
                  {t.products.profileShowroom.description}
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-500">
                  {getVisibleImages().map((image, index) => {
                    return (
                      <Card key={`${currentStartIndex}-${index}`} className="p-4 hover:shadow-industrial transition-all duration-300 aspect-square group overflow-hidden">
                        <div className="w-full h-full rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                          <img
                            src={image.src}
                            alt={image.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </Card>
                    );
                  })}
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center mt-4 space-x-2">
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <Button
                  className="btn-energy group"
                  onClick={() => window.open('https://t.me/bussinesuzbekistan/25183', '_blank')}
                >
                  <Download className="mr-2 h-5 w-5" />
                  {t.products.actions.downloadCatalog}
                </Button>
                <Button asChild className="btn-energy group">
                  <a href="#contact">
                    {t.products.actions.requestSpecs}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Glass Units Tab */}
          <TabsContent value="glass" className="mt-6" id="glass-units">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              
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
                    className="w-full h-[400px] object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent"></div>


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
                </div>

                {/* Capacity Badge - Outside image container */}
                <div className="absolute -top-6 -right-6 z-30">
                  <div className="glass-card p-4 float-animation rounded-2xl border-2 border-primary">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-black">1,000m²</div>
                      <div className="text-black/80 text-sm">{t.products.dailyCapacity}</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Glass Types */}
              <div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{t.products.glassUnits.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    {t.products.glassUnits.description}
                  </p>
                </div>

                <Card className="p-5 shadow-md border rounded-2xl bg-gradient-to-br from-white to-secondary/20">
                  <div className="space-y-3">
                    {glassTypes.map((glass, index) => (
                      <div key={index} className="group">
                        <h4 className="font-bold text-base mb-1 group-hover:text-primary transition-colors">
                          {glass.name}
                        </h4>
                        <p className="text-muted-foreground mb-1.5 text-sm">{glass.description}</p>
                        <div className="flex flex-wrap gap-1 mb-2">
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