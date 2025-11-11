import { Trophy, Award, Users, Code, Star, Calculator } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      title: "",
      organization: "",
      year: "",
      icon: <Code className="h-8 w-8" />,
      description: "",
      category: "Competitive Programming"
    },
    {
      title: "",
      organization: "",
      year: "",
      icon: <Calculator className="h-8 w-8" />,
      description: "",
      category: "Mathematical Excellence"
    }
  ];


  return (
    <section id="awards" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Awards & <span className="text-gradient">Recognition</span>
          </h2>

          {/* Awards in a nice grid layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <div 
                key={index}
                className="card-gradient rounded-2xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 group animate-fade-up relative overflow-hidden border-2 border-primary/20 hover:border-primary/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Subtle glow effect on hover */}
                <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
                
                {/* Award icon and title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-primary group-hover:scale-105 transition-all duration-300 p-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 shadow-md">
                    <div className="scale-125">
                      {award.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {award.title}
                    </h3>
                    <span className="px-3 py-1 bg-gradient-to-r from-primary/30 to-primary/20 text-primary rounded-full text-xs font-bold border border-primary/40">
                      {award.year}
                    </span>
                  </div>
                </div>

                {/* Award details and description */}
                <div className="space-y-3">
                  <p className="text-primary/90 font-semibold text-base">
                    {award.organization}
                  </p>
                  <p className="text-white/70 leading-relaxed text-sm">
                    {award.description}
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

export default Awards;