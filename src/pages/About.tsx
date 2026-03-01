import { Award, BookOpen, Users, Target, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import uskservices from "@/assets/uskservices.jpeg"
const achievements = [
  "Successfully predicted Andhra Pradesh Assembly Election outcomes (2019 & 2024) with approximately 80% accuracy.",
  "Developed winning strategic framework in Tanuku Assembly elections focusing on voter majority consolidation.",
  "Mediated multiple legal disputes resulting in mutually satisfactory outcomes without prolonged litigation.",
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary section-padding">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-premium text-accent font-body font-semibold mb-6">About</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-primary-foreground leading-tight mb-8">
                Two Decades at the<br />Intersection of Law<br />
                <span className="italic text-gradient">and Politics</span>
              </h1>
              <p className="text-primary-foreground/50 text-lg leading-relaxed max-w-2xl font-light">
                With over 20 years of experience in political field analysis and legal mediation, Usk Services and Strategies Pvt Ltd has provided strategic advisory across multiple electoral and governance environments.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-12 md:py-16 px-4 bg-charcoal">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="bg-muted aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
                <img src={uskservices} alt="Founder Portrait" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div>
                <p className="text-xs uppercase tracking-premium text-gold font-body font-semibold mb-4">Our Expertise</p>
                <h2 className="text-3xl md:text-4xl font-heading font-semibold text-background mb-8 leading-tight">
                  Ground Intelligence<br />Meets Analytical Depth
                </h2>
                <div className="space-y-4 text-background/60 leading-relaxed font-light">
                  <p className="text-background">Our expertise combines:</p>
                  <ul className="space-y-3">
                    {["Ground intelligence", "Data-backed election forecasting", "Legal mediation", "Political behavior analysis", "Constituency-level planning"].map((item) => (
                      <li key={item} className="flex items-center gap-4">
                        <div className="w-1 h-1 rounded-full bg-gold shrink-0" />
                        <span className="text-sm text-background">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-12 md:py-16 px-4 bg-background">
        <div className="container mx-auto">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs uppercase tracking-premium text-accent font-body font-semibold mb-4">Key Achievements</p>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground">
                Proven Track Record
              </h2>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto space-y-4">
            {achievements.map((a, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-muted p-8 border-2 border-gold flex items-start gap-5 rounded-sm">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-foreground leading-relaxed font-light">{a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-12 md:py-16 px-4 bg-charcoal">
        <div className="container mx-auto">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs uppercase tracking-premium text-gold font-body font-semibold mb-4">Our Philosophy</p>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-background mb-12">
                Clarity in Every Domain
              </h2>
              <div className="grid md:grid-cols-3 gap-px bg-gold/20">
                {[
                  { title: "Strategy", desc: "Strategy without data is noise." },
                  { title: "Law", desc: "Law without resolution is delay." },
                  { title: "Politics", desc: "Politics without insight is risk." },
                ].map((item) => (
                  <div key={item.title} className="bg-charcoal p-8 border border-gold/30">
                    <h3 className="font-heading text-lg font-semibold text-gold mb-3 italic">{item.title}</h3>
                    <p className="text-background/60 text-sm font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-background/60 mt-10 font-light">
                We operate with discretion, analytical depth, and execution clarity.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    

      {/* Values */}
      <section className="py-12 md:py-16 px-4 bg-background">
        <div className="container mx-auto">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs uppercase tracking-premium text-accent font-body font-semibold mb-4">Our Values</p>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground">
                What Drives Us
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/50">
            {[
              { icon: Award, title: "Excellence", desc: "We deliver the highest standard of advisory services." },
              { icon: BookOpen, title: "Integrity", desc: "Ethical practice is the foundation of everything we do." },
              { icon: Target, title: "Precision", desc: "Data-driven insights with actionable recommendations." },
              { icon: Users, title: "Discretion", desc: "All engagements are handled with complete confidentiality." },
            ].map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div className="bg-muted p-10 text-center border-2 border-gold rounded-sm">
                  <v.icon className="w-6 h-6 text-accent mx-auto mb-5" />
                  <h3 className="font-heading font-semibold text-foreground mb-3">{v.title}</h3>
                  <p className="text-muted-foreground text-sm font-light">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
