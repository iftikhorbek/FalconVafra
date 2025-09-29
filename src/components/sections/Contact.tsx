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
  Building2,
  Instagram,
  ExternalLink,
  Facebook
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "+998 ",
    projectType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      // Ensure +998 is always present and not deletable
      if (!value.startsWith('+998 ')) {
        setFormData(prev => ({
          ...prev,
          [name]: '+998 '
        }));
        return;
      }

      // Extract only the numbers after +998
      const numbersAfter998 = value.slice(5).replace(/\D/g, '');
      let formatted = '+998 ';

      if (numbersAfter998.length <= 2) {
        formatted += `(${numbersAfter998}`;
      } else if (numbersAfter998.length <= 5) {
        formatted += `(${numbersAfter998.slice(0, 2)}) ${numbersAfter998.slice(2)}`;
      } else if (numbersAfter998.length <= 7) {
        formatted += `(${numbersAfter998.slice(0, 2)}) ${numbersAfter998.slice(2, 5)}-${numbersAfter998.slice(5)}`;
      } else {
        formatted += `(${numbersAfter998.slice(0, 2)}) ${numbersAfter998.slice(2, 5)}-${numbersAfter998.slice(5, 7)}-${numbersAfter998.slice(7, 9)}`;
      }

      setFormData(prev => ({
        ...prev,
        [name]: formatted
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    const cursorPos = input.selectionStart || 0;

    // Prevent deletion of "+998 " prefix
    if ((e.key === 'Backspace' || e.key === 'Delete') && cursorPos <= 5) {
      e.preventDefault();
    }
  };

  const handlePhoneFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const input = e.target;
    // Set cursor position after "+998 " when focusing
    setTimeout(() => {
      const pos = Math.max(5, input.value.length);
      input.setSelectionRange(pos, pos);
    }, 0);
  };

  const contactMethods = [
    {
      icon: Phone,
      label: "Phone Numbers",
      items: [
        "+998 (90) 212−07-73",
        "+998 (90) 996−75-58"
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
        "t.me/bussinesuzbekistan"
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
      features: ["Full Production Line", "Quality Lab", "Showroom"],
      mapLink: "https://yandex.uz/maps/-/CLucARlJ"
    },
    {
      title: "Samarkand Branch",
      address: "Dashteobod Street",
      city: "Samarkand, Uzbekistan",
      type: "Regional Office",
      features: ["Sales Office", "Local Support", "Consultation"],
      mapLink: "https://yandex.uz/maps/-/CLucIKLi"
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

              <div className="space-y-3">
                {/* Phone Numbers */}
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="text-primary" size={18} />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-sm text-muted-foreground">+998 (90) 212−07-73</div>
                    <div className="text-sm text-muted-foreground">+998 (90) 996−75-58</div>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="text-primary" size={18} />
                  </div>
                  <div className="text-sm text-muted-foreground">pulodteshaev@gmail.com</div>
                </div>

                {/* Telegram */}
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Send className="text-primary relative" style={{ left: "-1px" }} size={18} />
                  </div>
                  <a
                    href="https://t.me/bussinesuzbekistan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    @bussinesuzbekistan
                  </a>
                </div>

                {/* Instagram */}
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Instagram className="text-primary" size={18} />
                  </div>
                  <a
                    href="https://www.instagram.com/falcon_window_systems"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    @falcon_window_systems
                  </a>
                </div>

                {/* Facebook */}
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Facebook className="text-primary" size={18} />
                  </div>
                  <a
                    href="https://www.facebook.com/falconprofil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    @falconprofil
                  </a>
                </div>

                {/* Tashkent Address */}
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="text-primary" size={18} />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-sm text-muted-foreground">Yangihayot district, Yangi Kipchok mahalla</div>
                    <div className="text-sm text-muted-foreground">Tashkent, Uzbekistan</div>
                    <div className="mt-2">
                      <a
                        href="https://yandex.uz/maps/-/CLucARlJ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center space-x-1"
                      >
                        <span>Open on Maps</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Samarkand Address */}
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="text-primary" size={18} />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-sm text-muted-foreground">Dashteobod Street</div>
                    <div className="text-sm text-muted-foreground">Samarkand, Uzbekistan</div>
                    <div className="mt-2">
                      <a
                        href="https://yandex.uz/maps/-/CLucIKLi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center space-x-1"
                      >
                        <span>Open on Maps</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
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

              <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Full Name *</label>
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
                    <label className="block text-sm font-medium mb-1">Company</label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Email Address *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="h-12"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone Number</label>
                    <div className="relative">
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onKeyDown={handlePhoneKeyDown}
                        onFocus={handlePhoneFocus}
                        className="h-12"
                        maxLength={19}
                      />
                      {formData.phone === "+998 " && (
                        <div className="absolute inset-0 flex items-center px-3 pointer-events-none text-muted-foreground">
                          <span className="invisible">+998 </span>
                          <span>(XX) XXX-XX-XX</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Project Type</label>
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
                  <label className="block text-sm font-medium mb-1">Project Details</label>
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


      </div>
    </section>
  );
};

export default Contact;