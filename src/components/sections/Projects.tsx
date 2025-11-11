import {ExternalLink, Github, Smartphone, Eye, Users, Utensils, Brain, BookOpen, ShieldCheck} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "A Novel RAG-Based Chatbot Solution to Improve Textbook Material Understanding",
      description: "Retrieval-Augmented Generation Chatbot combining semantic search with active recall methodologies to enhance textbook comprehension and study effectiveness, addressing limitations of mainstream LLMs in extracting relevant information from lengthy academic materials.",
      icon: <BookOpen className="h-8 w-8" />,
      period: "June 2025",
      technologies: ["Python", "pandas", "Pillow", "Deepgram", "HTML/CSS", "Javascript", "pytesseract"],
      achievements: [
        "Obtained 0.906/1.0 average performance score across 6 AP-level subjects, demonstrating strong reasoning capabilities and memory retention while providing credible academic assistance adaptable to diverse formats and subject domains",
        "Integrated Rephrase-and-Respond (RaR) strategy reducing hallucinations by 13% and improving output quality across technical subjects including Chemistry (0.921), History (0.952), and Physics (0.895)",
        "Engineered multi-format text extraction pipeline supporting PDFs, images, and MP3 audiobooks with 384-dimensional SBERT embeddings for semantic retrieval",
        "Reduced GPT-3.5 citation fabrication from 55% to 24%, achieving 76% citation correctness rate when sources were present through RAG framework implementation"
      ],
      links: {
        demo: "#",
        github: "https://github.com/Vini-41/textbook_RAG_chatbot"
      }
    },
    {
      title: "MAXGBoost: A Fast Heuristic Approach to Adaptive Learning Rates in Gradient Boosted Decision Trees",
      description: "Novel momentum approximation and adaptation framework for Gradient Boosted Decision Trees (GBDTs) that dynamically adjusts learning rates to optimize convergence speed, achieving state-of-the-art performance on highly imbalanced datasets",
      icon: <ShieldCheck className="h-8 w-8"/>,
      period: "January 2025",
      technologies: ["Python", "TensorFlow", "scikit-learn", "pandas", "NumPy", "Matplotlib"],
      achievements: [
          "Achieved 99.98% accuracy and 93.8% precision (6% improvement over baseline XGBoost) on 284,807 transactions with 0.2% fraud rate",
          "Minimized costly false positives while outperforming previous models",
          "Eliminated the need for manual hyperparameter tuning, reducing significant computational overhead for gradient boosting algorithms"
      ],
      links: {
          demo: "#",
          github: "https://github.com/Vini-41/MAXGBoost"
      }
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Featured <span className="text-gradient">Projects</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`card-gradient rounded-2xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 animate-fade-up group relative overflow-hidden border-2 border-primary/20 hover:border-primary/50 ${project.title === "NeurOS" ? "lg:col-span-2 lg:max-w-2xl lg:mx-auto" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Animated border glow */}
                <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
                
                {/* Project Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-primary group-hover:scale-105 transition-all duration-300 p-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 shadow-md">
                    <div className="scale-125">
                      {project.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-muted-foreground font-medium text-sm">{project.period}</span>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-white/80 mb-6 leading-relaxed text-base">
                  {project.description}
                </p>

                {/* Split into features and tech stack */}
                <div className="grid grid-cols-1 gap-6 mb-6">
                  {/* What makes this project special */}
                  <div>
                    <h4 className="font-bold text-white text-base mb-3">Key Features & Achievements</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-sm text-white/70">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack used */}
                  <div>
                    <h4 className="font-bold text-white text-base mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1.5 bg-primary/20 text-primary rounded-lg text-xs font-semibold border border-primary/30 hover:bg-primary/30 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Links to demo and source code */}
                {project.title !== "exception" && (
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-primary/20">
                    <Button 
                      variant="outline"
                      className="hover:scale-105 transition-all duration-200 border border-primary/30 hover:bg-transparent hover:text-white hover:border-white flex-1 sm:flex-none"
                      asChild
                    >
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Call to action for more projects */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Want to see more of my work? Check out my GitHub!
            </p>
            <Button 
              size="lg"
              variant="outline"
              className="hover:scale-105 transition-all duration-200 border border-primary/30 hover:bg-transparent hover:text-white hover:border-white"
              asChild
            >
              <a href="https://github.com/vini-41" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                View All Projects
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;