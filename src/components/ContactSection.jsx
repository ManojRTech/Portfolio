import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { cn } from '@/lib/utils';
import { useToast } from "@/hooks/use-toast";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {

    // ✅ correct ref name
    const formRef = useRef();
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
            .sendForm(
                "service_dsbb7ql",   // from EmailJS
                "template_6hp82vn",  // from EmailJS
                formRef.current,
                "W7AiQ2zAApT-oHkmD"    // from EmailJS
            )
            .then(() => {
                toast({
                    title: "Message sent! 🎉",
                    description: "Thank you for reaching out. I'll get back to you soon.",
                });
                setIsSubmitting(false);
                formRef.current.reset();
            })
            .catch((err) => {
                toast({
                    title: "Failed to send ❌",
                    description: JSON.stringify(err),
                    variant: "destructive",
                });
                setIsSubmitting(false);
            });
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open for discussing new opportunities.
                </p>

                <div className="grid grind-cols-1 md:grid-cols-2 gap-12">
                    {/* Left side - Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full pg-primary/10">
                                    <Phone className="text-primary h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium"> Phone</h4>
                                    <a href="tel:+919972437999" className="text-muted-foreground hover:text-primary transition-colors">
                                        +91 9972437999
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full pg-primary/10">
                                    <MapPin className="text-primary h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium"> Location</h4>
                                    <span className="text-muted-foreground hover:text-primary transition-colors">
                                        Bangalore, Karnataka, India
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full pg-primary/10">
                                    <Mail className="text-primary h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium"> Email</h4>
                                    <a href="mailto:manoj.r1357@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        manoj.r1357@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/manojr-tech/" target="_blank"><Linkedin /></a>
                                <a href="https://github.com/ManojRTech" target="_blank"><Github /></a>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Contact Form */}
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name</label>
                                {/* ✅ changed name="user_name" */}
                                <input
                                    type="text"
                                    id="name"
                                    name="user_name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background 
                                    focus:outlined-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Manoj R..."
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2"> Your Email</label>
                                {/* ✅ changed name="user_email" */}
                                <input
                                    type="email"
                                    id="email"
                                    name="user_email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background 
                                    focus:outlined-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="manoj.r1357@gmail.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2"> Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background 
                                    focus:outlined-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};