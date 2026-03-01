import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";

const posts = [
  {
    category: "Political Analysis",
    title: "West Bengal Assembly Political Trends 2026",
    excerpt: "A comprehensive look at the evolving political landscape in West Bengal, including coalition dynamics and voter sentiment shifts.",
    date: "Feb 20, 2026",
    readTime: "10 min read",
  },
  {
    category: "Election Strategy",
    title: "Tamil Nadu Electoral Strategy & Policy Impact",
    excerpt: "Analysis of strategic positioning and policy impact on upcoming Tamil Nadu electoral dynamics.",
    date: "Feb 15, 2026",
    readTime: "12 min read",
  },
  {
    category: "Regional Insight",
    title: "South India Regional Political Shifts",
    excerpt: "Understanding the broader political realignment happening across South Indian states and its implications for national politics.",
    date: "Feb 8, 2026",
    readTime: "8 min read",
  },
  {
    category: "Political Analysis",
    title: "Coalition Probability Mapping: 2026 Outlook",
    excerpt: "Data-driven analysis of potential coalition formations and their probability in upcoming state elections.",
    date: "Jan 30, 2026",
    readTime: "9 min read",
  },
  {
    category: "Voter Behavior",
    title: "Voter Behavior in Semi-Urban Constituencies",
    excerpt: "How semi-urban voters are reshaping election outcomes — patterns, influences, and strategic implications.",
    date: "Jan 22, 2026",
    readTime: "7 min read",
  },
  {
    category: "Legal Insight",
    title: "Mediation vs Litigation: A Cost-Benefit Analysis",
    excerpt: "Why structured mediation is increasingly preferred over prolonged litigation for dispute resolution in India.",
    date: "Jan 15, 2026",
    readTime: "6 min read",
  },
];

const Blog = () => {
  return (
    <Layout>
      <section className="bg-primary section-padding">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-premium text-accent font-body font-semibold mb-6">Blog & Insights</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-primary-foreground leading-tight mb-8">
                Political Intelligence<br />& Legal Analysis
              </h1>
              <p className="text-primary-foreground/50 text-lg font-light">
                Data-based articles, constituency breakdown reports, and strategic insights from the ground.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/50">
            {posts.map((post, i) => (
              <FadeIn key={post.title} delay={i * 0.08}>
                <div className="bg-background p-8 h-full flex flex-col group hover:bg-muted/30 transition-all duration-500">
                  <p className="text-[10px] uppercase tracking-premium text-accent font-body font-semibold mb-6">{post.category}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={10} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6 font-light">{post.excerpt}</p>
                  <Link to="#" className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-wider group-hover:gap-3 transition-all">
                    Read More <ArrowRight size={14} />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="bg-muted/30 section-padding">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">Stay Informed</h2>
            <p className="text-muted-foreground mb-8 font-light">
              Subscribe for the latest political intelligence and legal insights delivered to your inbox.
            </p>
            <form className="flex gap-0" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 bg-background border border-border/50 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-accent/50 font-light"
              />
              <button type="submit" className="px-8 py-4 bg-accent text-accent-foreground font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
