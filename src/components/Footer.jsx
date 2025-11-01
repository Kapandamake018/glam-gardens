import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative mt-12 pt-8 flex flex-wrap justify-between items-center" style={{borderTop: '2px solid', borderImage: 'linear-gradient(90deg, #EC4899, #FFD700, #EC4899) 1'}}>
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} <span className="font-semibold" style={{color: '#D4AF37'}}>Glam Gardens</span>. All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full hover:scale-110 transition-transform duration-300"
        style={{background: 'linear-gradient(135deg, #EC4899, #FFD700)', color: 'white'}}
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};