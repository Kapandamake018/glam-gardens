import {cn} from "@/lib/utils";   
import { X } from "lucide-react";
import { useEffect, useState } from "react";  
import { Menu } from "lucide-react";


const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {  
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
        // Close menu on scroll for better UX
        if (isMenuOpen) setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // Add isMenuOpen as dependency so effect runs when menu state changes
}, [isMenuOpen]);
return (
    <nav
        className={cn(
            "fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}
    >
        <div className="container flex items-center justify-between">
            <a className="text-xl font-bold flex items-center gap-3"
                href="#hero"
            >
                <img 
                    src="/logo.jpg" 
                    alt="Glam Gardens Logo" 
                    className="h-12 w-12 object-cover rounded-full border-2 border-primary/30 shadow-lg hover:border-primary transition-all duration-300"
                />
                <span className="relative z-10">
                    <span className="text-primary font-bold">Glam </span>
                    <span className="text-primary">Gardens</span>
                </span>
            </a>

            {/* desktop nav */}
            <div className="hidden md:flex space-x-8" >
                {navItems.map((item, key) => (
                    <a  
                        key={key}
                        href={item.href} 
                        className="text-foreground/80 hover:text-primary transition-colors duration-300 relative group"
                    > 
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
                    </a>
                ))}
            </div>

            {/* mobile nav button */}
            <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="md:hidden p-2 rounded-md text-foreground/80 z-50"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>

        {/* mobile menu overlay */}
        <div
            className={cn(
                "fixed top-0 left-0 w-screen h-screen bg-background/95 backdrop-blur-md z-[100] flex flex-col items-center justify-center",
                "transition-all duration-300 md:hidden",
                isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}
            style={{
                touchAction: isMenuOpen ? "none" : "auto",
                overflowY: isMenuOpen ? "auto" : "unset"
            }}
        >
            {/* Close button inside overlay */}
            <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-md text-foreground/80"
                aria-label="Close menu"
            >
                <X size={32} />
            </button>
            <div className="flex flex-col space-y-8 text-xl">
                {navItems.map((item, key) => (
                    <a
                        key={key}
                        href={item.href}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {item.name}
                    </a>
                ))}
            </div>
        </div>
    </nav>
    );
}