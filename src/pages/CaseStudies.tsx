import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";

const caseStudies = [
  {
    category: "Political Analysis",
    title: "Andhra Pradesh Assembly Elections – 2019 & 2024",
    desc: "Delivered approximately 80% accuracy in election forecasting using structured constituency mapping and sentiment analytics.",
    result: "~80% Accuracy",
    outcome: "High-confidence advisory reports delivered to stakeholders prior to polling phases.",
  },
  {
    category: "Strategic Consulting",
    title: "Tanuku Assembly Election Strategy",
    desc: "Designed and implemented a voter majority influence framework targeting swing clusters.",
    result: "Majority Consolidation",
    outcome: "Majority consolidation achieved through segmented messaging and booth-level planning.",
  },
  {
    category: "Legal Advisory",
    title: "Legal Mediation Engagements",
    desc: "Mediated multiple legal disputes ensuring satisfactory outcomes for both involved parties.",
    result: "Cost & Time Savings",
    outcome: "Reduced litigation time and significant cost savings for stakeholders.",
  },
];

const CaseStudies = () => {
  return (
    <Layout>
      <section className="bg-primary section-padding">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-premium text-accent font-body font-semibold mb-6">Case Studies</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-primary-foreground leading-tight mb-8">
                Proven Results,<br />
                <span className="italic text-gradient">Real Impact</span>
              </h1>
              <p className="text-primary-foreground/50 text-lg leading-relaxed max-w-2xl font-light">
                Explore how we've delivered measurable outcomes through structured political analysis, election strategy, and legal mediation.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 bg-charcoal">
        <div className="container mx-auto">
          <div className="space-y-px bg-charcoal max-w-4xl mx-auto">
            {caseStudies.map((cs, i) => (
              <FadeIn key={cs.title} delay={i * 0.1}>
                <div className="bg-charcoal p-10 md:p-14 border-2 border-gold hover:bg-charcoal/80 hover:shadow-lg transition-all duration-500">
                  <p className="text-xs uppercase tracking-premium text-gold font-body font-semibold mb-4">{cs.category}</p>
                  <h3 className="text-2xl md:text-3xl font-heading font-semibold text-background mb-4">{cs.title}</h3>
                  <p className="text-background/60 leading-relaxed mb-6 font-light">{cs.desc}</p>
                  <div className="bg-charcoal/50 p-5 mb-8 border-l-2 border-gold">
                    <p className="text-sm text-background font-light"><strong className="font-medium">Outcome:</strong> {cs.outcome}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="px-4 py-2 bg-gold/20 text-gold text-xs font-semibold uppercase tracking-wider border border-gold">{cs.result}</span>
                    <Link to="/contact" className="inline-flex items-center gap-2 text-xs font-semibold text-gold uppercase tracking-wider hover:gap-3 transition-all">
                      Discuss Similar Project <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
