import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, MapPin, Shield, Clock, Award } from 'lucide-react';
import officeImage from '@/assets/office-building.jpg';
import teamImage from '@/assets/construction-team.jpg';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed construction company with comprehensive insurance coverage"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "ISO certified processes ensuring the highest standards of construction"
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Proven track record of completing projects on schedule and within budget"
    },
    {
      icon: MapPin,
      title: "Singapore Based",
      description: "Local expertise with deep understanding of Singapore regulations"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Building Trust Through Excellence
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Based in Singapore, WEBUILD has been delivering exceptional construction 
              and development projects for over 15 years. Our commitment to quality, 
              safety, and client satisfaction has made us a trusted partner for 
              residential, commercial, and industrial projects across the city-state.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-trust" />
                <span className="text-foreground">15+ years of construction excellence</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-trust" />
                <span className="text-foreground">200+ successful projects completed</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-trust" />
                <span className="text-foreground">100% client satisfaction rate</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-trust" />
                <span className="text-foreground">ISO certified quality management</span>
              </div>
            </div>

            <Button variant="trust" size="lg">
              Learn More About Us
            </Button>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-6 animate-scale-in">
            <div className="space-y-6">
              <img 
                src={officeImage} 
                alt="Modern office building in Singapore" 
                className="w-full h-64 object-cover rounded-lg shadow-medium hover:shadow-strong transition-all duration-300"
              />
              <div className="bg-primary text-primary-foreground p-6 rounded-lg shadow-soft">
                <h3 className="text-xl font-bold mb-2">Our Office</h3>
                <p className="text-primary-foreground/80">
                  Located in the heart of Singapore's business district
                </p>
              </div>
            </div>
            <div className="pt-12">
              <img 
                src={teamImage} 
                alt="Professional construction team" 
                className="w-full h-64 object-cover rounded-lg shadow-medium hover:shadow-strong transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-primary p-3 rounded-lg w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;