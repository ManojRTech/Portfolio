import { Code } from "lucide-react";    
import { User } from "lucide-react";    
import { Briefcase } from "lucide-react";    

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center"> 
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Passionate Web Developer & Problem Solver in Tech
                        </h3>

                        <p className="text-muted-foreground"> 
                            I love turning ideas into interactive web applications and continuously push myself to 
                            explore new tools, frameworks, and creative solutions in tech.
                        </p>
                        <p className="text-muted-foreground">
                            I'm passionate about building clean, responsive web applications that solve real problems. I have a strong grasp 
                            of DSA and specialize in full-stack development using HTML, CSS, JavaScript, React, Node.js, Express, PostgreSQL, 
                            Tailwind, Java, and C++. I focus on creating smooth user experiences backed by efficient, scalable systems.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button"> 
                                Get In Touch
                            </a>

                            <a href="/Resume (Manoj).pdf" download = "Resume (Manoj).pdf" className=" px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 "> 
                                Download Resume
                            </a>

                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="bg-card p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Full-Stack Development</h4>
                                    <p className="text-muted-foreground">
                                        Developing complete web solutions from user interfaces to server logic and databases.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-card p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Problem-Solving / DSA</h4>
                                    <p className="text-muted-foreground">
                                        Applying Data Structures & Algorithms to build optimized solutions and improve application performance.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-card p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Database Management</h4>
                                    <p className="text-muted-foreground">
                                        Designing schemas, writing queries, and managing data with SQL & PostgreSQL.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};