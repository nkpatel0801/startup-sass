
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="container-section">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent mb-6 animate-fade-in">
            Launching Soon
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Streamline Your Workflow with Our SaaS Solution
          </h1>
          <p className="text-lg text-slate-600 mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Boost productivity and efficiency with our cutting-edge platform designed for modern teams.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <a href="#contact" className="button-primary flex items-center gap-2 w-full sm:w-auto justify-center">
              Get Started <ArrowRight size={20} />
            </a>
            <a href="#features" className="text-slate-900 flex items-center gap-2 hover:text-accent transition-colors w-full sm:w-auto justify-center">
              Learn More <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
