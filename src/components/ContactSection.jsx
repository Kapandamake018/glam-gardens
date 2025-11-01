import { Instagram, Mail, Phone } from "lucide-react"

export const ContactSection = () => {
    return (<section id="contact"
     className="py-24 px-4 relative bg-secondary/30">
        <div className="contsainer mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        We'd love to hear from you! Whether you have questions about our products, need help with an order, or want to discuss custom gift sets, feel free to reach out.
        </p>
         <div className="max-w-2xl mx-auto">
            <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-6">
                    Contact Information
                </h3>

            <div className="space-y-6 justify-center">
                {/* Email */}
                <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h4 className="font-medium">Email</h4>
                        <a
                            href="mailto:chimwemwemalubila0@gmail.com"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            chimwemwemalubila0@gmail.com
                        </a>
                    </div>
                </div>
                {/* Phone */}
                <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h4 className="font-medium">Phone</h4>
                        <a
                            href="tel:+260978020908"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            0978020908
                        </a>
                    </div>
                </div>
                {/* WhatsApp */}
                <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                        {/* WhatsApp SVG icon */}
                        <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <g>
                                <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.98L0 24l6.19-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.67-.5-5.23-1.44l-.37-.22-3.68.96.98-3.59-.24-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.98 2.43.02 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/>
                            </g>
                        </svg>
                    </div>
                    <div>
                        <h4 className="font-medium">WhatsApp</h4>
                        <a
                            href="https://wa.me/260978020908"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            <div className="pt-8">
                <h4 className="font-medium mb-4">View Our Work</h4>
                <div className="flex gap-6 justify-center">
                    <a
                        href="https://www.instagram.com/glam_gardens_?igsh=MTdjNWd2bXhyYWs5Mw%3D%3D&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform hover:scale-110"
                        aria-label="Instagram"
                    >
                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20">
                            <Instagram className="w-7 h-7 text-primary" />
                        </span>
                    </a>
                </div>
            </div>
            </div>
        </div>
        </div> 
       
        
    </section>
    );
}