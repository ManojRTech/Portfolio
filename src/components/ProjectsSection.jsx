import { ExternalLink, Github ,ArrowRight} from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Amazon Clone frontend",
        description: "A clone of the Amazon website, built with HTML, CSS, and JavaScript. This project showcases my skills in frontend development and responsive design.",
        image: "/images/amazonClone.png",
        tags: ["HTML", "CSS"],
        githubUrl: "https://github.com/ManojRTech/Frontend-Amazon-Clone.git",
    },
    {
        id: 2,
        title: "Spam URLs and Messages Detection and Report",
        description: "A project that detects spam URLs and messages. It includes a user-friendly interface for reporting spam content.",
        image: "/images/spamURL&MsgDetector.png",
        tags: ["HTML", "CSS", "Python"],
        githubUrl: "https://github.com/ManojRTech/Spam-URL-and-Message-detector.git",
    },
    {
        id: 3,
        title: "Currency Converter",
        description: "A simple currency converter application that allows users to convert between different currencies.",
        image: "/images/currencyConverter.png",
        tags: ["HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/ManojRTech/currency-converter.git",
    }
]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative m-24 pb-24 -scroll-mt-10">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured<span className="text-primary"> Projects </span></h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects that showcase my skills and creativity. Each project was carefully crafted with attention to detail, performance, and user experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs  card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500" />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="text-xs bg-secondary border text-secondary-foreground px-2 py-1 rounded-full font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                         
                            <h3 className="text-xl font-semibold mb-1"> {project.title} </h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x3">
                                    <a 
                                        href={project.githubUrl} 
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    > 
                                        <Github size={20}/> 
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>

            <div className="text-center mt-12">
                <a  
                    className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                    target="_blank"
                    href="https://github.com/ManojRTech"
                >
                  Check My Github <ArrowRight size={16} />  
                </a>
            </div>

        </div>
    </section>
};