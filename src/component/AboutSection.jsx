import { Briefcase, Code, User } from "lucide-react";
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-xl ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          About<span className="text-primary"> Me</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-primary">Passionate Web devloper</h3>

          <p className="text-muted-foreground">
            I specialize in building responsive, accessible,
             and high-performance web applications using the 
             MERN stack and other modern tools.
          </p>

          <p className="text-muted-foreground">
            I'm passionate about turning real-world problems into
             practical solutions through clean code,intuitive design,
              and smart development practices.
          </p>
          <div className="flex flex-col md:flex-row gap-4 pt-4 justify-center">
            <a href="#contact" className="cosmic-button">
              Get in Touch
            </a>
            {/* i know i could have used cn 😋 */}
            <a
              href="./Wajid Ali.pdf" download="Wajid Ali"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="gradient-border p-6 card-hover ">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Code className="size-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semiBold text-lg text-primary">Web Development</h4>
                <p className="text-muted-foreground">
                  Developing modern, full-stack web applications with a focus on performance, 
                  scalability, and user accessibility.
                </p>
              </div>
            </div>
          </div>

          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <User className="size-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semiBold text-lg text-primary">UI/UX Design</h4>
                <p className="text-muted-foreground">
                  Crafting clean, user-centered interfaces that balance aesthetics with usability
                   to deliver smooth user experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Briefcase className="size-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semiBold text-lg text-primary">Project Management</h4>
                <p className="text-muted-foreground">
                  Managing and delivering end-to-end solutions using agile workflows, from ideation and 
                  design to deployment and iteration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
