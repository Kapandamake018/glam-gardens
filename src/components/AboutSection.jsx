import { Briefcase, Code, Heart, Rose } from "lucide-react";
import { User } from "lucide-react";


export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Us</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Column */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-primary">
                            Who We Are
                        </h3>
                        <p className="text-lg text-foreground/90 leading-relaxed">
                            At <strong className="text-primary">Glam Gardens</strong>, we celebrate beauty, confidence, and thoughtful giving. Our range of glossy lip products and curated gift sets are designed to make every moment feel special, whether you're treating yourself or surprising someone you love.
                        </p>
                        <p className="text-lg text-foreground/90 leading-relaxed">
                            It's more than beauty, it's a lifestyle.
                        </p>
                        <p className="text-2xl font-light italic mt-6 text-muted-foreground" style={{color: '#D4AF37'}}>
                            "Embrace the glossy side of life"
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <a href="#products" className="glam-button">Shop Now</a>
                            <a href="#contact" className="gold-button">Get In Touch</a>
                        </div>
                    </div>

{/* Right Column */}
<div className="grid grid-cols-1 gap-6">
    {/* Quality Products */}
    <div className="gradient-border p-6 card-hover bg-card">
        <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/20">
                <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <div className="text-left">
                <h4 className="font-semibold text-lg">Premium Quality</h4>
                <p className="text-muted-foreground">
                    Carefully curated glossy lip products made with high-quality ingredients for a luxurious feel and lasting shine.
                </p>
            </div>
        </div>
    </div>

    {/* Gift Sets */}
    <div className="gradient-border p-6 card-hover bg-card">
        <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/20">
                <Rose className="h-6 w-6 text-primary" />
            </div>
            <div className="text-left">
                <h4 className="font-semibold text-lg">Thoughtful Gifting</h4>
                <p className="text-muted-foreground">
                    Beautifully packaged gift sets perfect for any occasion. Show someone you care with the gift of glam.
                </p>
            </div>
        </div>
    </div>

    {/* Lifestyle */}
    <div className="gradient-border p-6 card-hover bg-card">
        <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/20">
                <Heart className="h-6 w-6 text-primary" />
            </div>
            <div className="text-left">
                <h4 className="font-semibold text-lg">Beauty Lifestyle</h4>
                <p className="text-muted-foreground">
                    More than just makeup - it's about confidence, self-expression, and embracing your most glamorous self every day.
                </p>
            </div>
        </div>
    </div>
</div>


        
                </div>
            </div>
        </section>
    );
};
 