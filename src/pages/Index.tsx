import { Link } from "react-router-dom";
import { Scale, TrendingUp, Compass, ArrowRight, Award, ShieldCheck, Eye, Lock } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "20+", label: "Years of Experience", icon: Award },
  { value: "80%", label: "Election Prediction Accuracy", icon: TrendingUp },
  { value: "Multi-State", label: "Intelligence Network", icon: Eye },
  { value: "Confidential", label: "Strategic Advisory", icon: Lock },
];

const services = [
  {
    icon: TrendingUp,
    title: "Political Analysis",
    desc: "Advanced constituency-level election forecasting and political trend assessment across key Indian states.",
  },
  {
    icon: Compass,
    title: "Strategic Consulting",
    desc: "Ground-level electoral strategy, voter influence planning, and campaign structuring.",
  },
  {
    icon: Scale,
    title: "Legal Advisory & Mediation",
    desc: "Resolution-focused legal guidance and structured mediation to protect interests while saving time and litigation costs.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Premium consulting" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <div className="inline-block mb-8 px-4 py-2 bg-accent/10 border border-accent/40 rounded-sm backdrop-blur-sm">
                <p className="text-xs uppercase tracking-wide-premium text-accent font-body font-semibold tracking-premium">
                  Legal • Political • Strategic Advisory
                </p>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-semibold text-white leading-[1.1] mb-8">
                Navigate Power,<br />
                Policy & Public<br />
                <span className="text-gradient italic">Mandates</span>
              </h1>
              <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-lg font-light">
                Delivering data-driven political intelligence, legal mediation expertise, and election strategy advisory backed by 20 years of ground-level experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-accent text-accent-foreground font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
                >
                  Book a Consultation
                </Link>
                <Link
                  to="/case-studies"
                  className="px-8 py-4 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider hover:bg-white/5 transition-colors"
                >
                  View Our Work
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </section>

      {/* Stats */}
      <section className="relative z-10 bg-charcoal pb-6">
        <div className="container mx-auto  ">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/50">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="bg-background p-8 md:p-10 text-center">
                  <stat.icon className="w-5 h-5 text-accent mx-auto mb-4" />
                  <p className="text-2xl md:text-3xl font-heading font-semibold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider font-body">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-20">
              <p className="text-xs uppercase tracking-premium text-accent font-body font-semibold mb-4">What We Do</p>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground leading-tight">
                Structured Advisory<br />Designed for Impact
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-px bg-border/50">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.15}>
                <div className="group bg-background p-10 md:p-12 hover:bg-muted/50 transition-all duration-500">
                  <service.icon className="w-6 h-6 text-accent mb-6" />
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8 font-light">{service.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-wider group-hover:gap-3 transition-all">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary section-padding">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <p className="text-xs uppercase tracking-premium text-accent font-body font-semibold mb-6">Ready to Begin</p>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-primary-foreground mb-6 leading-tight">
              Gain a Strategic<br />Advantage
            </h2>
            <p className="text-primary-foreground/50 max-w-md mx-auto mb-10 font-light">
              Schedule a confidential consultation to discuss your political, legal, or strategic needs.
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-accent text-accent-foreground font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Get Started Today
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Trust */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-20">
              <p className="text-xs uppercase tracking-premium text-accent font-body font-semibold mb-4">Why Choose Us</p>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground">
                Independent Advisory
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: ShieldCheck,
                title: "Discretion",
                desc: "All engagements are handled with the highest level of confidentiality and professional discretion.",
              },
              {
                icon: TrendingUp,
                title: "Data-Driven",
                desc: "Our political forecasting is backed by structured constituency mapping and sentiment analytics.",
              },
              {
                icon: Award,
                title: "20 Years Experience",
                desc: "Two decades of ground-level political analysis and legal mediation across multiple Indian states.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="text-center">
                  <item.icon className="w-6 h-6 text-accent mx-auto mb-5" />
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
