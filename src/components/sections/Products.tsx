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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideOffset, setSlideOffset] = useState(0);
  const [animatingDirection, setAnimatingDirection] = useState<'left' | 'right' | null>(null);

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

  // Get visible images (4 at a time during transition, 3 normally)
  const getVisibleImages = () => {
    const visibleImages = [];

    if (slideOffset > 0) {
      // Sliding right (prev) - show previous image on left
      for (let i = -1; i < 3; i++) {
        const index = (currentStartIndex + i + allImages.length) % allImages.length;
        visibleImages.push({
          ...allImages[index],
          position: i,
          actualIndex: index
        });
      }
    } else if (slideOffset < 0) {
      // Sliding left (next) - show next image on right
      for (let i = -1; i < 3; i++) {
        const index = (currentStartIndex + i + allImages.length) % allImages.length;
        visibleImages.push({
          ...allImages[index],
          position: i,
          actualIndex: index
        });
      }
    } else {
      // Static - show 3 images
      for (let i = 0; i < 3; i++) {
        const index = (currentStartIndex + i) % allImages.length;
        visibleImages.push({
          ...allImages[index],
          position: i,
          actualIndex: index
        });
      }
    }

    return visibleImages;
  };

  // Auto-advance carousel every 7 seconds (resets on manual navigation)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextImage();
      }
    }, 7000);

    return () => clearInterval(interval);
  }, [allImages.length, isTransitioning, currentStartIndex]); // Reset when currentStartIndex changes

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

  // Navigation functions for profile carousel with smooth sliding
  const nextImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    // Update index immediately so dots transition in parallel
    const newIndex = (currentStartIndex + 1) % allImages.length;
    setCurrentStartIndex(newIndex);
    setSlideOffset(-100); // Slide left (negative)

    // After animation, reset position
    setTimeout(() => {
      setSlideOffset(0);
      setIsTransitioning(false);
    }, 500);
  };

  const prevImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    // Update index immediately so dots transition in parallel
    const newIndex = (currentStartIndex - 1 + allImages.length) % allImages.length;
    setCurrentStartIndex(newIndex);
    setSlideOffset(100); // Slide right (positive)

    // After animation, reset position
    setTimeout(() => {
      setSlideOffset(0);
      setIsTransitioning(false);
    }, 500);
  };

  // Navigation functions for glass images with ultra-smooth transitions
  const nextGlassImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentGlassImage((prev) => (prev + 1) % glassProcessingImages.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevGlassImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentGlassImage((prev) => (prev - 1 + glassProcessingImages.length) % glassProcessingImages.length);
    setTimeout(() => setIsTransitioning(false), 300);
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
      features: t.products.glassTypes.standardDouble.features,
      icon: Layers
    },
    {
      name: t.products.glassTypes.triple.name,
      description: t.products.glassTypes.triple.description,
      features: t.products.glassTypes.triple.features,
      icon: Shield
    },
    {
      name: t.products.glassTypes.specialty.name,
      description: t.products.glassTypes.specialty.description,
      features: t.products.glassTypes.specialty.features,
      icon: Zap
    }
  ];

  const certifications = [
    "ISO 9001:2008", "ISO 14001:2004", "GOST", "IFT", "RAL", "UKR-Cepro", "INCERC", "TSE"
  ];

  return (
    <section className="min-h-screen py-16 bg-gradient-to-br from-[#002952] via-[#001a33] to-[#002952] text-white relative overflow-hidden flex items-center" id="products">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-[1600px] w-full mx-auto px-6 lg:px-12 relative z-10">

        {/* Compact Header */}
        <div className="text-center mb-8">
          <Badge className="mb-3 px-4 py-1.5 bg-accent/20 border border-accent/40 text-accent backdrop-blur-xl">
            {t.products.badge}
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-space font-bold tracking-tight mb-2 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            {t.products.title}
          </h2>
          <p className="text-4xl lg:text-6xl font-space font-bold text-accent mb-1">
            {t.products.titleAccent}
          </p>
        </div>

        {/* Compact Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 h-12 p-1.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl">
            <TabsTrigger
              value="profiles"
              className="text-sm font-semibold text-gray-400 rounded-lg transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary-light data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-primary/50"
            >
              {t.products.tabs.profiles}
            </TabsTrigger>
            <TabsTrigger
              value="glass"
              className="text-sm font-semibold text-gray-400 rounded-lg transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary-light data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-primary/50"
            >
              {t.products.tabs.glass}
            </TabsTrigger>
          </TabsList>

          {/* PVC Profiles Tab */}
          <TabsContent value="profiles" className="mt-8" id="pvc-profiles">

            {/* Compact 3D Carousel */}
            <div className="relative">

              {/* 3D Card Carousel */}
              <div className="relative px-4 lg:px-16">
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-0 lg:-left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gradient-to-r from-accent to-accent-dark rounded-xl flex items-center justify-center hover:scale-105 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 group"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} className="text-white group-hover:scale-105 transition-transform duration-300" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-0 lg:-right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gradient-to-r from-accent to-accent-dark rounded-xl flex items-center justify-center hover:scale-105 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 group"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} className="text-white group-hover:scale-105 transition-transform duration-300" />
                </button>

                {/* 3-Column Grid with Smooth Sliding */}
                <div className="relative overflow-hidden px-1">
                  <div
                    className="flex gap-4 lg:gap-6 -mx-1"
                    style={{
                      transform: `translateX(${slideOffset / 3}%)`,
                      transition: slideOffset !== 0 ? 'transform 500ms ease-in-out' : 'none'
                    }}
                  >
                    {getVisibleImages().map((image, index) => {
                      // For sliding right: positions -1,0,1,2 → center is at index 1
                      // For sliding left: positions 0,1,2,3 → center is at index 1
                      // For static: positions 0,1,2 → center is at index 1
                      const isCenter = (slideOffset > 0 ? index === 1 : slideOffset < 0 ? index === 1 : index === 1);

                      return (
                        <div
                          key={`${image.actualIndex}-${index}`}
                          className={`group relative flex-shrink-0 w-full md:w-[calc((100%-2rem)/3)] lg:w-[calc((100%-3rem)/3)] ${
                            isCenter ? 'lg:scale-102 lg:z-10' : 'lg:scale-98 lg:opacity-90'
                          } transition-all duration-500`}
                        >
                        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-1 shadow-2xl shadow-primary/20 hover:shadow-accent/40 transition-all duration-500 border-2 border-transparent group-hover:border-accent">
                          {/* Glow Effect Border */}
                          <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent-light to-accent rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"></div>

                          {/* Image Container */}
                          <div className="relative bg-slate-900 rounded-2xl overflow-hidden aspect-square">
                            <img
                              src={image.src}
                              alt={image.title}
                              className="w-full h-full object-cover carousel-image-smooth group-hover:scale-105"
                            />
                            {/* Gradient Overlay on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-accent/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                        </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Animated Progress Indicators */}
                <div className="flex justify-center mt-6 space-x-2">
                  {allImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStartIndex(index)}
                      className={`relative rounded-full transition-all duration-500 ease-in-out ${
                        currentStartIndex === index
                          ? 'w-10 h-2.5'
                          : 'w-2.5 h-2.5 hover:w-3'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    >
                      <div className={`absolute inset-0 rounded-full transition-all duration-500 ease-in-out ${
                        currentStartIndex === index
                          ? 'bg-gradient-to-r from-accent to-accent-dark shadow-lg shadow-accent/50'
                          : 'bg-gray-700 hover:bg-gray-500'
                      }`}></div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Compact CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button
                className="group relative px-10 py-3 bg-gradient-to-r from-accent to-accent-dark rounded-xl font-semibold text-base overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl shadow-accent/30 hover:shadow-accent/50"
                onClick={() => window.open('https://t.me/bussinesuzbekistan/25183', '_blank')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent-dark to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center gap-2">
                  <Download className="h-4 w-4" />
                  {t.products.actions.downloadCatalog}
                </div>
              </button>
              <a
                href="#contact"
                className="group relative px-10 py-3 bg-white/5 backdrop-blur-xl border-2 border-white/20 rounded-xl font-semibold text-base hover:bg-white/10 hover:border-accent/40 hover:scale-105 transition-all duration-300 shadow-2xl text-center"
              >
                <div className="flex items-center justify-center gap-2">
                  {t.products.actions.requestSpecs}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </div>
          </TabsContent>

          {/* Glass Units Tab */}
          <TabsContent value="glass" className="mt-8" id="glass-units">

            <div className="grid lg:grid-cols-2 gap-6 items-center">

              {/* Hero Image - Compact */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
                <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
                  <img
                    key={currentGlassImage}
                    src={glassProcessingImages[currentGlassImage].src}
                    alt={glassProcessingImages[currentGlassImage].alt}
                    className="w-full h-full object-cover carousel-image-smooth hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#002952]/90 via-[#002952]/30 to-transparent"></div>

                  {/* Navigation */}
                  <button
                    onClick={prevGlassImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-gradient-to-r from-accent to-accent-dark rounded-lg flex items-center justify-center hover:scale-105 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 group backdrop-blur-xl"
                    aria-label="Previous glass image"
                  >
                    <ChevronLeft size={20} className="text-white group-hover:scale-105 transition-transform duration-300" />
                  </button>

                  <button
                    onClick={nextGlassImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-gradient-to-r from-accent to-accent-dark rounded-lg flex items-center justify-center hover:scale-105 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 group backdrop-blur-xl"
                    aria-label="Next glass image"
                  >
                    <ChevronRight size={20} className="text-white group-hover:scale-105 transition-transform duration-300" />
                  </button>


                  {/* Progress Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 bg-black/30 backdrop-blur-xl px-4 py-2 rounded-full">
                    {glassProcessingImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentGlassImage(index)}
                        className={`relative rounded-full transition-all duration-400 ${
                          currentGlassImage === index ? 'w-8 h-2' : 'w-2 h-2 hover:w-3'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      >
                        <div className={`absolute inset-0 rounded-full transition-all duration-400 ${
                          currentGlassImage === index
                            ? 'bg-gradient-to-r from-accent to-accent-dark shadow-lg shadow-accent/50'
                            : 'bg-white/40 hover:bg-white/60'
                        }`}></div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Glass Types - Compact Cards */}
              <div className="space-y-3">
                {glassTypes.map((glass, index) => {
                  const IconComponent = glass.icon;
                  return (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-1 hover:scale-105 transition-all duration-500 shadow-xl border-2 border-transparent group-hover:border-accent"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent-light to-accent rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"></div>

                      <div className="relative bg-slate-900 rounded-xl p-4 flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-accent/20 to-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-accent" />
                        </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-bold mb-1 text-white group-hover:text-accent transition-colors">
                          {glass.name}
                        </h4>
                        <p className="text-gray-400 text-xs mb-2 leading-relaxed line-clamp-2">
                          {glass.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {glass.features.slice(0, 3).map((feature, fIndex) => (
                            <span key={fIndex} className="text-[10px] text-gray-500 flex items-center">
                              <span className="w-1 h-1 rounded-full bg-accent/50 mr-1"></span>
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>
          </TabsContent>

        </Tabs>
      </div>
    </section>
  );
};

export default Products;