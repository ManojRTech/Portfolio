import { ArrowDown } from "lucide-react";


export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex fles-col items-center justify-center px-4 max-w-5xl mx-auto px-4">
            <div className="container max-w-4x; mx-auto text-center z-10 text-center max-w-3xl mx-auto">
                <div className="space-y-6">

                    <img
                        src="/images/manoj.jpg"  // replace with your image path
                        alt="Manoj R"
                        className="w-38 h-38 rounded-full mx-auto border-4 border-primary shadow-lg"
                    />

                    <h1 className="text-4xl md:text-4xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Manoj</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> R</span>
                    </h1>

                    <p className="text-lg md:text-xltext-muted-foreground max-2-2xl mx-auti opacity-0 animate-fade-in-delay-3">
                        A dedicated tech enthusiast with a strong foundation in Data Structures, Algorithms, and modern web development. 
                        I build efficient, user-focused applications and actively seek to expand my skills through hands-on problem-solving.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>

        </section>
    );
}
