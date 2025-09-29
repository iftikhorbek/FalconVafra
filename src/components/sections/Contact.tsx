import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageCircle,
  Building2,
  Instagram
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: Phone,
      label: "Phone Numbers",
      items: [
        "+998 90 212 0773",
        "+998 99 348 8823"
      ]
    },
    {
      icon: Mail,
      label: "Email Addresses",
      items: [
        "pulodteshaev@gmail.com",
        "falcon.kompen.profil@gmail.com"
      ]
    },
    {
      icon: Send,
      label: "Telegram Channel",
      items: [
        "t.me/falconprofil"
      ]
    },
    {
      icon: Instagram,
      label: "Instagram",
      items: [
        "https://www.instagram.com/falcon_window_systems"
      ]
    },
    {
      icon: MapPin,
      label: "Main Factory Address",
      items: [
        "Yangihayot district, Yangi Kipchok mahalla",
        "Tashkent, Uzbekistan"
      ]
    }
  ];

  const locations = [
    {
      title: "Main Factory",
      address: "Yangihayot district, Yangi Kipchok mahalla",
      city: "Tashkent, Uzbekistan",
      type: "Manufacturing Facility",
      features: ["Full Production Line", "Quality Lab", "Showroom"]
    },
    {
      title: "Samarkand Branch", 
      address: "Dashteobod Street",
      city: "Samarkand, Uzbekistan", 
      type: "Regional Office",
      features: ["Sales Office", "Local Support", "Consultation"]
    }
  ];


  return (
    <section className="py-24 bg-gradient-to-br from-secondary/30 via-white to-primary/5" id="contact">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Badge variant="outline" className="mb-6 px-4 py-2 text-primary border-primary/20">
            Get In Touch
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-space font-bold mb-6">
            Start Your Window
            <span className="block text-accent font-bold">
              Project Today
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ready to enhance your building with premium PVC windows? Our team is here to help 
            you find the perfect solution for your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="p-8 h-full hover:shadow-floating transition-all duration-300">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <p className="text-muted-foreground">
                  Reach out to us through any of these channels. We're here to help with your project needs.
                </p>
              </div>

              <div className="space-y-6">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent
                            className={`text-primary ${method.label === "Telegram Channel" ? "relative" : ""}`}
                            style={method.label === "Telegram Channel" ? { left: "-1px" } : {}}
                            size={18}
                          />
                        </div>
                        <h4 className="font-semibold text-base">{method.label}</h4>
                      </div>
                      <div className="ml-10 space-y-1">
                        {method.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="text-muted-foreground">
                            {method.label === "Instagram" ? (
                              <span className="text-sm break-all">@falcon_window_systems</span>
                            ) : (
                              <span className="text-sm">{item}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  We typically respond within 24 hours
                </p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 h-full flex flex-col hover:shadow-floating transition-all duration-300">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Request a Quote</h3>
                <p className="text-muted-foreground">
                  Fill out the form below and our team will get back to you within 24 hours 
                  with a detailed quote and consultation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+998 XX XXX XX XX"
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full h-12 px-3 rounded-xl border border-border bg-background"
                  >
                    <option value="">Select project type</option>
                    <option value="residential">Residential Building</option>
                    <option value="commercial">Commercial Building</option>
                    <option value="industrial">Industrial Facility</option>
                    <option value="renovation">Renovation Project</option>
                    <option value="custom">Custom Solution</option>
                  </select>
                </div>

                <div className="flex-1 flex flex-col">
                  <label className="block text-sm font-medium mb-2">Project Details</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project requirements, approximate number of windows, timeline, and any specific needs..."
                    className="resize-none flex-1 min-h-[120px]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" className="btn-energy flex-1 group">
                    Send Message
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button type="button" variant="outline" className="flex-1">
                    Schedule Site Visit
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>

        {/* Locations */}
        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <Card key={index} className="p-8 hover:shadow-floating transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-gradient-industrial rounded-2xl">
                  <Building2 className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{location.title}</h3>
                  <Badge variant="outline" className="border-primary text-primary mb-3">
                    {location.type}
                  </Badge>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin size={16} />
                      <span>{location.address}</span>
                    </div>
                    <div className="font-medium">{location.city}</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Available Services:</h4>
                <div className="flex flex-wrap gap-2">
                  {location.features.map((feature, fIndex) => (
                    <Badge key={fIndex} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Contact;