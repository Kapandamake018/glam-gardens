import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const HeroSection = () => {
return ( 
  <section id="hero" className="relative min-h-[80vh] flex items-center justify-center py-20"> 
    <div className="container max-w-5xl mx-auto px-4"> 
      <div className="text-center space-y-8">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"> 
            <span className="block">Welcome to </span>
            <span className="block">
              <span className="text-primary">Glam </span>
              <span className="text-primary">Gardens</span>
            </span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-4xl font-light italic mb-12"
          style={{color: '#D4AF37'}}
        >
          Embrace the glossy side of life
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <a href="#about" className="glam-button">
            Discover More
          </a>
          <a href="#contact" className="glam-button">
            Get In Touch
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);
};
