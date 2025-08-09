import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Building, 
  Home, 
  Wrench, 
  PaintBucket, 
  Hammer, 
  TreePine,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Commercial Construction",
      description: "Office buildings, retail spaces, and commercial complexes built to the highest standards.",
      features: ["Office Buildings", "Retail Spaces", "Warehouses", "Mixed-Use Developments"]
    },
    {
      icon: Home,
      title: "Residential Development",
      description: "Custom homes, condominiums, and residential communities designed for modern living.",
      features: ["Custom Homes", "Condominiums", "Landed Properties", "Residential Complexes"]
    },
    {
      icon: Hammer,
      title: "Industrial Projects",
      description: "Factories, manufacturing facilities, and industrial infrastructure projects.",
      features: ["Manufacturing Plants", "Warehouses", "Industrial Parks", "Logistics Centers"]
    },
    {
      icon: Wrench,
      title: "Renovation & Remodeling",
      description: "Transform existing spaces with professional renovation and remodeling services.",
      features: ["Interior Renovation", "Facade Upgrades", "Space Optimization", "Modernization"]
    },
    {
      icon: PaintBucket,
      title: "Interior Fit-Outs",
      description: "Complete interior solutions for offices, retail, and residential spaces.",
      features: ["Office Fit-Outs", "Retail Interiors", "Residential Interiors", "Custom Millwork"]
    },
    {
      icon: TreePine,
      title: "Sustainable Building",
      description: "Eco-friendly construction practices and green building certifications.",
      features: ["Green Building", "Energy Efficiency", "Sustainable Materials", "LEED Certification"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Our Construction Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we provide comprehensive construction services 
            tailored to meet your specific needs and exceed your expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-strong transition-all duration-500 hover:-translate-y-2 animate-scale-in border-0 shadow-soft"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader className="pb-4">
                <div className="bg-gradient-primary p-4 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-primary group-hover:text-primary-light transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-center animate-fade-in">
          <h3 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get in touch with our team of experts to discuss your construction needs 
            and receive a personalized quote for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" className="shadow-medium hover:shadow-strong">
              Get Free Quote
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;