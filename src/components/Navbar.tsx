import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Pricing", path: "/pricing" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b-2 border-gold shadow-lg">
      <div className="container mx-auto flex items-center justify-between h-20 md:h-24 px-4">
        <Link to="/" className="flex flex-col leading-none">
          <div className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl text-accent">⚖</span>
            <span className="font-heading text-2xl md:text-3xl font-semibold text-foreground tracking-tight hover:text-accent transition-colors">
              USK
            </span>
          </div>
          <span className="text-[10px] md:text-xs font-body uppercase tracking-premium text-accent font-semibold">
            Services & Strategies
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 text-xs font-body uppercase tracking-wider transition-all border-b-2 ${
                location.pathname === link.path
                  ? "text-accent font-semibold border-b-2 border-accent"
                  : "text-muted-foreground hover:text-foreground border-b-2 border-transparent hover:border-gold/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-6 px-6 py-2.5 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider border-2 border-accent rounded-sm hover:bg-accent/90 transition-all shadow-md"
          >
            Book a Consultation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b-2 border-gold overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 text-xs uppercase tracking-wider font-body transition-all border-l-2 ${
                    location.pathname === link.path
                      ? "text-accent bg-muted border-l-gold font-semibold"
                      : "text-muted-foreground hover:text-foreground border-l-transparent hover:border-l-gold/50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block mt-4 px-6 py-3 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider text-center border-2 border-accent hover:bg-accent/90 transition-all"
              >
                Book a Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
