import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="space-y-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:abdulshadabkhan24@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  abdulshadabkhan24@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <a
                  href="tel:+916309250249"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91-6309250249
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <span className="text-muted-foreground">Warangal, Telangana</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-medium mb-4">Connect With Me</h4>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/shadab-khan-a1a751257/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="hover:text-primary transition-colors" />
              </a>
              <a
                href="https://github.com/Shadabkhan2004"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
