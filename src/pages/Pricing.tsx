import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";

const plans = [
  {
    name: "Basic Insight",
    price: "₹5,000",
    period: "/month",
    desc: "For individuals seeking foundational political or legal guidance.",
    features: [
      "1 Strategy Call (60 mins)",
      "Monthly Political Trend Summary",
      "1 Legal Advisory Consultation",
      "Email Support (48-hour response)",
      "Access to Monthly Insights Brief",
    ],
    featured: false,
  },
  {
    name: "Essential Advisory",
    price: "₹7,500",
    period: "/month",
    desc: "For local leaders and small campaign teams.",
    features: [
      "2 Strategy Sessions per Month",
      "Constituency Trend Snapshot",
      "Legal Mediation Guidance",
      "Voter Sentiment Overview",
      "Email & WhatsApp Support",
    ],
    featured: false,
  },
  {
    name: "Professional",
    price: "₹10,000",
    period: "/month",
    desc: "Designed for active election campaigns and strategic political engagement.",
    features: [
      "Bi-Weekly Strategy Sessions",
      "Detailed Political Trend Reports",
      "Opposition & Swing Analysis",
      "Legal Advisory Support (2 Sessions)",
      "Messaging & Voter Targeting Strategy",
      "West Bengal & Tamil Nadu Updates",
      "Priority Support",
    ],
    featured: true,
  },
  {
    name: "Advanced Campaign",
    price: "₹12,500",
    period: "/month",
    desc: "For high-intensity campaign environments.",
    features: [
      "Weekly Strategy Calls",
      "Booth-Level Strategic Framework",
      "Demographic & Influence Mapping",
      "Crisis Response Planning",
      "Legal Mediation Advisory",
      "Ongoing Political Intelligence Updates",
      "Direct Consultation Access",
    ],
    featured: false,
  },
  {
    name: "Executive Strategic",
    price: "₹15,000",
    period: "/month",
    desc: "Comprehensive advisory for high-stakes political and legal environments.",
    features: [
      "Unlimited Strategy Consultations",
      "Real-Time Political Intelligence",
      "Complete Campaign Blueprint",
      "Advanced Voter Consolidation",
      "Legal Conflict Resolution Oversight",
      "Confidential Priority Access",
      "Custom Research & Analysis Reports",
    ],
    featured: false,
  },
];

const Pricing = () => {
  return (
    <Layout>
      <section className="bg-primary section-padding">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-xs uppercase tracking-premium text-accent font-body font-semibold mb-4">Pricing</p>
              <h1 className="text-4xl md:text-5xl font-heading font-semibold text-primary-foreground mb-6 leading-tight">
                Flexible Advisory<br />Packages
              </h1>
              <p className="text-primary-foreground/50 text-lg font-light">
                Structured Advisory Engagements Designed for Impact.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          {/* Top 3 */}
          <div className="grid md:grid-cols-3 gap-px bg-border/50 max-w-5xl mx-auto mb-px">
            {plans.slice(0, 3).map((plan, i) => (
              <FadeIn key={plan.name} delay={i * 0.1}>
                <div
                  className={`p-10 h-full flex flex-col ${
                    plan.featured
                      ? "bg-primary text-primary-foreground"
                      : "bg-background text-foreground"
                  }`}
                >
                  {plan.featured && (
                    <span className="inline-block self-start px-3 py-1 bg-accent text-accent-foreground text-[10px] font-semibold uppercase tracking-wider mb-6">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-heading text-xl font-semibold">{plan.name}</h3>
                  <div className="mt-4 mb-4">
                    <span className="text-3xl font-heading font-semibold">{plan.price}</span>
                    <span className={`text-sm font-light ${plan.featured ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
                      {plan.period}
                    </span>
                  </div>
                  <p className={`text-sm leading-relaxed mb-8 font-light ${plan.featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                    {plan.desc}
                  </p>
                  <ul className="space-y-3 flex-1 mb-10">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <Check className="w-4 h-4 shrink-0 mt-0.5 text-accent" />
                        <span className={`font-light ${plan.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`block text-center py-3.5 text-xs font-semibold uppercase tracking-wider transition-opacity hover:opacity-90 ${
                      plan.featured
                        ? "bg-accent text-accent-foreground"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Bottom 2 */}
          <div className="grid md:grid-cols-2 gap-px bg-border/50 max-w-4xl mx-auto">
            {plans.slice(3).map((plan, i) => (
              <FadeIn key={plan.name} delay={(i + 3) * 0.1}>
                <div className="p-10 h-full flex flex-col bg-background text-foreground">
                  <h3 className="font-heading text-xl font-semibold">{plan.name}</h3>
                  <div className="mt-4 mb-4">
                    <span className="text-3xl font-heading font-semibold">{plan.price}</span>
                    <span className="text-sm font-light text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm leading-relaxed mb-8 font-light text-muted-foreground">{plan.desc}</p>
                  <ul className="space-y-3 flex-1 mb-10">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <Check className="w-4 h-4 shrink-0 mt-0.5 text-accent" />
                        <span className="font-light text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="block text-center py-3.5 text-xs font-semibold uppercase tracking-wider bg-primary text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Contact for Onboarding
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
