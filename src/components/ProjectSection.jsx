import { ArrowRight, ExternalLink, Github } from "lucide-react";
import img1 from "../assets/spotifyClone.png";
import img2 from "../assets/amazonClone.png";
import img3 from "../assets/backgroundChanger.png"
const projects = [
  {
    id: 1,
    title: "iPhone 15 Pro Showcase",
    description: "A visually rich promotional design for the iPhone 15 Pro, featuring a titanium-themed dark layout and a sleek product render. This project highlights my skills in modern UI, animations, and responsive layout.",
    image: "https://kunkoku.jp/wp-content/uploads/2023/09/0913b01.jpg",
    technologies: ["React", "TailwindCSS", "JavaScript", "Figma"],
    demoUrl: "https://your-live-site-link.com",
    githubUrl: "https://github.com/your-username/iphone15pro-showcase",
  },
  {
    id: 2,
    title: "Spotify Landing Page",
    description: "A clone of Spotify's landing page using HTML, CSS, and JavaScript. Focuses on layout precision, modern design aesthetics, and responsiveness.",
    image: img1,
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://spotify-front-page.netlify.app/",
    githubUrl: "https://github.com/AjitYadaav/amazon-clone-html-css.git",
  },
  {
    id: 3,
    title: "Amazon Landing Page",
    description: "A sleek and responsive Amazon landing page built with React and TailwindCSS. Features modern UI/UX practices, reusable components, and animations.",
    image: img2,
    technologies: ["React", "TailwindCSS", "Framer Motion"],
    demoUrl: "https://amazon-front-page-ui.netlify.app/",
    githubUrl: "https://github.com/your-username/amazon-clone",
  },
  {
  id: 4,
  title: "Background Color Changer",
  description: "A simple yet interactive React app that changes the background color on user interaction. It's designed to demonstrate useState hooks, dynamic styling, and smooth UI effects using TailwindCSS and Framer Motion.",
  image: img3, // Make sure img3 is imported at the top like: import img3 from "../assets/bgColorChanger.png"
  technologies: ["React", "CSS", "HTML"],
  demoUrl: "https://background-color-changer-ajityadav.netlify.app/",
  githubUrl: "https://github.com/AjitYadaav/BackgroundColorChanger",
},
];



const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span></h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance and user experience.
        </p>

        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project,key)=>(
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                <div className="h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                </div>

                {/* <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projects.map((project)=>(
                      <span>{project.description}</span>
                    ))}
                  </div>
                </div> */}
                
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                <div>
                  <div className="flex space-x-3">
                    <a href={project.demoUrl} target="_blank" className="text-foreground/80">
                      <ExternalLink/>
                    </a>
                    <a href={project.githubUrl} target="_blank">
                      <Github/>
                    </a>
                  </div>
                </div>
              </div>
              
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="https://github.com/AjitYadaav" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
            Check My Github <ArrowRight size={16}/>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProjectSection