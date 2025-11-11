import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  location?: string;
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "Ibility LLC",
      position: "Artificial Intelligence Intern",
      period: "August 2023 – September 2024",
      location: "Washington, DC (Remote)",
      description: "Developed a retrieval-augmented generation (RAG) chatbot to help veterans, web scraping and structuring tens of thousands of procedural documents into a knowledge graph with vector search.",
      achievements: [
        "Built chatbot prototype for Veterans Affairs claims assistance to help veterans navigate complex financial aid processes",
        "Deployed web scraping pipeline to extract 30,000+ legal documents from the VA's M28C manual and VR&E program documentation, overcoming JavaScript rendering, anti-bot protections, and inconsistent HTML structures across multiple chapters",
        "Designed custom text embedding and chunking system with token optimization strategies to manage context windows, ensuring accurate retrieval of legal information while eliminating model hallucinations on sensitive veteran benefit queries"
      ],
      technologies: ["Python", "Selenium", "Pandas", "NumPy", "BeautifulSoup", "Dash"]
    },
    {
      company: "Archimedes Infinitum Design Team",
      position: "Back End Developer",
      period: "September 2025 - Present",
      location: "Blacksburg, Virginia",
      description: "Competing in the Microsoft Imagine Cup Competition by developing and building software addressing real-world problems.",
      achievements: [
        "Developing patent-pending physical therapy app that leverages NLP and real-time computer vision to generate personalized treatment plans and provide exercise form correction based on patient goals and mobility assessments",
        "Architecting two care pathways enabling patients to receive support through clinician-prescribed plans or independently via AI-guided therapy, extending physical therapy to users without healthcare provider access",
        "Implementing cloud-based data management to synchronize patient exercise data, performance metrics, and completion reports across wide range of platforms, facilitating healthcare provider oversight"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "YOLOv8", "OpenCV", "MediaPipe", "Azure", "React", "Cosmos DB"]
    },
    {
      company: "Key Club",
      position: "President",
      period: "August 2022 - June 2025",
      description: "Directed all club operations, presiding over weekly meetings and coordinating committees to execute monthly service projects benefiting the school and local community.",
      achievements: [
        "Coordinated 9 community service projects including neighborhood cleanups, food bank assistance, and senior center visits, while participating in 30+ volunteer events with District Key Club and Kiwanis Club",
        "Developed organizational and leadership skills through strategic community impact initiatives, helping serve underserved populations"
      ],
      technologies: []
    },
    {
       company: "Humanitarian Aid Club",
       position: "Secretary",
       period: "September 2022 - June 2025",
       description: "Researched and presented on global humanitarian issues, motivating members to take action on poverty, conflict, and crisis situations.",
       achievements: [
          "Raised $750 through coordinated fundraisers, managing logistics, tracking donations, and ensuring financial goals were met for supported causes",
          "Led club discussions that challenged member perspectives and converted awareness into engagement through eﬀective communication and presentation skills"
      ],
      technologies: []
  }
  ];

  return (
    <section id="experience" className="py-20 hero-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Work <span className="text-gradient">Experience</span>
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="card-gradient rounded-2xl p-8 shadow-medium hover:shadow-hard hover:scale-105 transition-all duration-300 animate-fade-up border border-primary/20 hover:border-primary/40"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Company and role info */}
                <div className="mb-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{exp.company}</h3>
                      <p className="text-lg font-semibold text-primary mb-3">{exp.position}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-muted-foreground">
                      {exp.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>

                {/* What I accomplished */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Key Achievements</h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
                        <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools and technologies I used */}
                {exp.technologies.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;