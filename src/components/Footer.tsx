import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <h3 className="font-heading text-3xl font-semibold mb-1">USK</h3>
              <p className="text-xs uppercase tracking-premium text-primary-foreground/50 font-body">Services & Strategies</p>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed font-light">
              Legal, political, and strategic advisory backed by 20+ years of ground-level experience across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-premium font-body font-semibold mb-6 text-primary-foreground/50">Navigation</h4>
            <div className="space-y-3">
              {[
                { label: "About", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Case Studies", path: "/case-studies" },
                { label: "Pricing", path: "/pricing" },
                { label: "Blog", path: "/blog" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="block text-sm text-primary-foreground/60 hover:text-accent transition-colors font-light">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-premium font-body font-semibold mb-6 text-primary-foreground/50">Expertise</h4>
            <div className="space-y-3">
              {["Political Analysis", "Election Forecasting", "Strategic Consulting", "Legal Advisory", "Mediation"].map((s) => (
                <p key={s} className="text-sm text-primary-foreground/60 font-light">{s}</p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-premium font-body font-semibold mb-6 text-primary-foreground/50">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <Mail size={14} className="text-accent shrink-0" />
                <span className="font-light">sravankunar9169@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <Phone size={14} className="text-accent shrink-0" />
                <span className="font-light">+91 7396999626</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/60">
                <MapPin size={14} className="text-accent shrink-0 mt-0.5" />
                <span className="font-light">Sri Satya Towers, Chekkavari Street<br />Tanuku, West Godavari, AP, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40 font-light">
            © 2026 Usk Services and Strategies Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-primary-foreground/40 font-light">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
