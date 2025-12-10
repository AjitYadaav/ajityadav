import { ArrowDown } from "lucide-react"

const HeroSection = () => {
  return (
    <div id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">Ajit </span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Yadav</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">I’m Ajit Yadav, a data science enthusiast and student at NIT Warangal. I work with Python, SQL, and machine learning libraries, and enjoy analyzing data and building data-driven solutions.</p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform translate-x-1/2 flex flex-col items-center animate-bounce text-center">
         <span className="text-sm text-muted-foreground mb-2">Scroll
            <ArrowDown className="h-5 w-h text-primary"/>
         </span>
        </div>
    </div>
  )
}

export default HeroSection
