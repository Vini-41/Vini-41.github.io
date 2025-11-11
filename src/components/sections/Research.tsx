import { FileText, Award, Users, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Research = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Show just the first couple sentences to keep cards clean
  const getTruncatedAbstract = (text: string) => {
    const sentences = text.split('. ');
    if (sentences.length <= 2) return text;
    return sentences.slice(0, 2).join('. ') + '...';
  };

  // Check if we need to truncate the abstract
  const shouldTruncate = (text: string) => {
    const sentences = text.split('. ');
    return sentences.length > 2;
  };

  const publications = [
    {
      title: "",
      authors: "",
      venue: "",
      type: "First Author",
      award: "",
      description: "",
      keywords: [],
      impact: "",
      link: ""
    },
    {
      title: "",
      authors: "",
      venue: "",
      type: "First Author",
      award: null,
      description: "",
      keywords: [],
      impact: "",
      link: ""
    },
    {
      title: "",
      authors: "",
      venue: "",
      type: "First Author",
      award: null,
      description: "",
      keywords: [],
      impact: "",
      link: ""
    },
    {
      title: "",
      authors: "",
      venue: "",
      type: "First Author",
      award: null,
      description: "",
      keywords: [],
      impact: "",
      link: ""
    }
  ];


  return (
    <section id="research" className="py-20 hero-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Research & <span className="text-gradient">Publications</span>
          </h2>


          {/* Publications */}
          <div className="space-y-8">
            {publications.map((pub, index) => (
              <div 
                key={index}
                className={`card-gradient rounded-xl p-8 shadow-medium transition-all duration-300 animate-fade-up border border-primary/20 relative ${
                  hoveredIndex === index 
                    ? 'hover:shadow-hard hover:scale-105 border-primary/40' 
                    : 'hover:shadow-hard hover:scale-105'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Quick impact summary */}
                {pub.impact && (
                  <div className="absolute -top-3 left-6 bg-accent text-black px-3 py-1 rounded-full text-base font-medium shadow-lg">
                    🎯 {pub.impact}
                  </div>
                )}

                {/* Paper title and read button */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <FileText className="h-7 w-7 text-primary" />
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-base font-medium">
                        {pub.type}
                      </span>
                      {pub.award && (
                        <div className="flex items-center gap-2 text-lg">
                          <Award className="h-6 w-6 text-accent" />
                          <span className="text-accent font-semibold">
                            Best Presentation Award
                          </span>
                        </div>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-2 leading-tight">{pub.title}</h3>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{pub.authors}</span>
                      </div>
                    </div>

                    <p className="text-primary font-medium mb-3 text-lg">{pub.venue}</p>
                  </div>

                  {/* Link to the actual paper */}
                  <Button 
                    size="lg"
                    variant="outline"
                    className="hover:scale-105 transition-transform duration-200 px-6 py-3 text-base flex-shrink-0 ml-4 hover:text-white hover:border-white hover:bg-transparent"
                    onClick={() => window.open(pub.link, '_blank')}
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Read Paper
                  </Button>
                </div>

                {/* Paper summary - expands on hover */}
                <div className="mb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {hoveredIndex === index ? pub.description : getTruncatedAbstract(pub.description)}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;