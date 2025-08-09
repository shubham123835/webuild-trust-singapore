import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import residentialImage from '@/assets/residential-project.jpg';
import officeImage from '@/assets/office-building.jpg';
import constructionImage from '@/assets/construction-team.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Marina Bay Residences",
      category: "Residential",
      location: "Marina Bay, Singapore",
      year: "2024",
      image: residentialImage,
      description: "Luxury residential development with 200 units featuring modern amenities and sustainable design.",
      status: "Completed",
      value: "S$120M"
    },
    {
      id: 2,
      title: "Orchard Central Office",
      category: "Commercial",
      location: "Orchard Road, Singapore",
      year: "2023",
      image: officeImage,
      description: "State-of-the-art office complex with innovative workspace design and smart building technology.",
      status: "Completed", 
      value: "S$85M"
    },
    {
      id: 3,
      title: "Jurong Industrial Hub",
      category: "Industrial",
      location: "Jurong, Singapore",
      year: "2024",
      image: constructionImage,
      description: "Modern manufacturing facility with advanced automation systems and sustainable operations.",
      status: "In Progress",
      value: "S$65M"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "200+" },
    { label: "Years of Experience", value: "15+" },
    { label: "Total Value Delivered", value: "S$2B+" },
    { label: "Client Satisfaction", value: "100%" }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our portfolio of successful construction projects across Singapore. 
            Each project showcases our commitment to quality, innovation, and excellence.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden hover:shadow-strong transition-all duration-500 hover:-translate-y-2 animate-fade-in border-0 shadow-medium"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <Badge 
                    variant="secondary" 
                    className="bg-secondary text-secondary-foreground font-semibold"
                  >
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant={project.status === 'Completed' ? 'default' : 'outline'}
                    className={project.status === 'Completed' ? 'bg-trust text-trust-foreground' : 'bg-background/90 text-foreground border-foreground/20'}
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-primary-light transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-primary">
                    {project.value}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center animate-fade-in">
          <Button variant="hero" size="xl" className="shadow-medium hover:shadow-strong">
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;