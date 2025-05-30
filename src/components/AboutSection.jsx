import { Briefcase, Code, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-24 relative">
      {/* {" "} */}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">
            Passionate Web Developer & Student 🧑🏻‍🎓
          </h3>
          <p className="text-muted-foreground">
            Hello! I'm Ajit Yadav, a web development enthusiast with a deep
            passion for coding and continuous learning. I believe that great
            user experiences come from attention to detail and a love for
            solving problems creatively.
          </p>
          <p className="text-muted-foreground">
            I'm a dedicated and curious web developer currently studying at NIT
            Warangal. I enjoy building clean, responsive websites and exploring
            new technologies like React, Tailwind CSS, and Node.js. Whether it's
            designing interactive UIs or solving tough coding problems, I love
            turning ideas into reality through code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#contact" className="cosmic-button">
              Get In Touch
            </a>
            <a
              href="https://ajityadav.tiiny.site"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              Download CV
            </a>
          </div>
        </div>

        {/*Right section */}
        <div className="grid grid-cols-1 gap-6">
          <div className="gradient-border p-6 card-hover ">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Web Development</h4>
                <p>
                  Creating responsive websites and web applications with modern
                  frameworks.
                </p>
              </div>
            </div>
          </div>

          <div className="gradient-border p-6 card-hover ">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Personal Growth</h4>
                <p>
                  Sharing real-life insights, lessons from mistakes, and mindful
                  approaches to daily challenges.
                </p>
              </div>
            </div>
          </div>

          <div className="gradient-border p-6 card-hover ">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Career & Productivity</h4>
                <p>
                  Exploring strategies, habits, and tech tools that boost focus,
                  efficiency, and long-term success.
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
