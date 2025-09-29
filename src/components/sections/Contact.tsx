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
  Clock, 
  Send,
  MessageCircle,
  Building2,
  Users,
  Award,
  CheckCircle2
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

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "+998 90 212 0773",
        "+998 99 348 8823", 
        "+998 950 44 99 30",
        "+998 933 08 88 36"
      ],
      action: "Call Now",
      color: "from-primary to-primary-light"
    },
    {
      icon: Mail,
      title: "Email Addresses", 
      details: [
        "pulodteshaev@gmail.com",
        "falcon.kompen.profil@gmail.com",
        "shamsfromsodom88@gmail.com"
      ],
      action: "Send Email",
      color: "from-accent to-accent-dark"
    },
    {
      icon: MessageCircle,
      title: "Telegram Channel",
      details: [
        "t.me/falconprofil",
        "Instant messaging",
        "Quick responses"
      ],
      action: "Open Telegram",
      color: "from-success to-success-light"
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

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 7:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 5:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  const services = [
    "Free Site Measurement",
    "Professional Installation", 
    "Quality Warranty",
    "After-Sales Support",
    "Technical Consultation",
    "Custom Solutions"
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
          <div className="lg:col-span-1 space-y-8">
            
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-floating transition-all duration-300 group">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-2xl bg-gradient-to-br ${contact.color} group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                          {contact.title}
                        </h3>
                        <div className="space-y-2 mb-4">
                          {contact.details.map((detail, dIndex) => (
                            <p key={dIndex} className="text-muted-foreground text-sm">{detail}</p>
                          ))}
                        </div>
                        <Button variant="outline" size="sm" className="w-full">
                          {contact.action}
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Business Hours */}
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-industrial rounded-xl flex items-center justify-center">
                  <Clock className="text-white" size={18} />
                </div>
                <h3 className="font-bold text-lg">Business Hours</h3>
              </div>
              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                    <span className="text-muted-foreground">{schedule.day}</span>
                    <span className="font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Services */}
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-energy rounded-xl flex items-center justify-center">
                  <Award className="text-white" size={18} />
                </div>
                <h3 className="font-bold text-lg">Our Services</h3>
              </div>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 size={16} className="text-success" />
                    <span className="text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 shadow-floating">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Request a Quote</h3>
                <p className="text-muted-foreground">
                  Fill out the form below and our team will get back to you within 24 hours 
                  with a detailed quote and consultation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
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

                <div>
                  <label className="block text-sm font-medium mb-2">Project Details</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project requirements, approximate number of windows, timeline, and any specific needs..."
                    rows={5}
                    className="resize-none"
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

        {/* Accessibility Notice */}
        <div className="text-center mt-12 p-6 bg-success/5 rounded-2xl border border-success/20">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <Users className="text-success" size={20} />
            <span className="font-semibold text-success">Accessibility Committed</span>
          </div>
          <p className="text-muted-foreground text-sm">
            Our facilities are wheelchair accessible with dedicated parking spaces, ramps, and barrier-free access.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;