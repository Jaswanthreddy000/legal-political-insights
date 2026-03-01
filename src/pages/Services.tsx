import { Link } from "react-router-dom";
import { TrendingUp, Compass, Scale, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";

const services = [
  {
    icon: TrendingUp,
    title: "Political Analysis & Election Forecasting",
    desc: "Assembly & parliamentary election analysis with constituency-level intelligence.",
    features: [
      "Assembly & Parliamentary Election Analysis",
      "Constituency-Level Trend Mapping",
      "Voter Sentiment Intelligence",
      "Swing Analysis",
      "Booth-Level Strategic Forecasting",
      "West Bengal & Tamil Nadu Focus (Current Research)",
    ],
    highlight: null,
  },
  {
    icon: Compass,
    title: "Strategic Election Consulting",
    desc: "Campaign structuring and voter influence frameworks for winning strategies.",
    features: [
      "Campaign Structuring",
      "Voter Majority Influence Framework",
      "Messaging Optimization",
      "Opposition Risk Mapping",
      "Grassroot Mobilization Planning",
    ],
    highlight: "Case Highlight: Tanuku Assembly Election – Developed structured voter consolidation strategy.",
  },
  {
    icon: Scale,
    title: "Legal Advisory & Mediation",
    desc: "Time-saving, cost-saving resolution mechanisms for legal disputes.",
    features: [
      "Dispute Mediation",
      "Negotiation Structuring",
      "Conflict Resolution Strategy",
      "Pre-Litigation Advisory",
      "Structured Settlement Planning",
    ],
    highlight: "Focus: Time-saving, cost-saving resolution mechanisms.",
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="bg-primary section-padding">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-premium text-accent font-body font-semibold mb-6">Services</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-primary-foreground leading-tight mb-8">
                Our Services
              </h1>
              <p className="text-primary-foreground/50 text-lg leading-relaxed max-w-2xl font-light">
                Structured advisory engagements across political intelligence, election strategy, and legal mediation — tailored to your unique needs.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 bg-charcoal">
        <div className="container mx-auto">
          <div className="space-y-px bg-charcoal max-w-4xl mx-auto">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.1}>
                <div className="group bg-charcoal p-10 md:p-14 border-2 border-gold hover:bg-charcoal/80 hover:shadow-lg transition-all duration-500">
                  <div className="flex items-start gap-6">
                    <service.icon className="w-6 h-6 text-gold shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-heading font-semibold text-background mb-4">{service.title}</h3>
                      <p className="text-background/60 leading-relaxed mb-8 font-light">{service.desc}</p>
                      <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-center gap-3 text-sm text-background/70 font-light">
                            <div className="w-1 h-1 rounded-full bg-gold shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      {service.highlight && (
                        <p className="text-sm text-gold font-medium italic mb-6">{service.highlight}</p>
                      )}
                      <Link to="/contact" className="inline-flex items-center gap-2 text-xs font-semibold text-gold uppercase tracking-wider group-hover:gap-3 transition-all">
                        Get Started <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 px-4 bg-background">
        <div className="container mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
              Not Sure What You Need?
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-10 font-light">
              Schedule a confidential discovery call and we'll help identify the right solutions for your situation.
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-accent text-accent-foreground font-semibold text-xs uppercase tracking-wider border-2 border-accent hover:bg-accent/90 transition-all shadow-md"
            >
              Book a Consultation
            </Link>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
