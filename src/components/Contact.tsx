import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Building2,
  Users,
  Award
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["webuild1@gmail.com"],
      description: "We reply within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["123 Business District", "Singapore 018956"],
      description: "By appointment only"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      description: "Emergency services available 24/7"
    }
  ];

  const features = [
    {
      icon: Building2,
      title: "Free Consultation",
      description: "Get expert advice on your construction project at no cost"
    },
    {
      icon: Users,
      title: "Dedicated Project Manager",
      description: "Your single point of contact throughout the project"
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "All our work comes with comprehensive warranty coverage"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6 animate-fade-in">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="shadow-soft hover:shadow-medium transition-all duration-300 border-0"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-primary p-3 rounded-lg">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-1">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-foreground font-medium">
                            {detail}
                          </p>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Features */}
            <div className="space-y-4 pt-6">
              <h3 className="text-xl font-bold text-primary">Why Choose WEBUILD?</h3>
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-trust/10 p-2 rounded-lg">
                    <feature.icon className="w-5 h-5 text-trust" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;