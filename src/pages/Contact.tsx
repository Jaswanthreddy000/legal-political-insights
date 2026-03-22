import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="bg-primary section-padding">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-premium text-accent font-body font-semibold mb-6">Contact</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-primary-foreground leading-tight mb-8">
                Let's Start a<br />Conversation
              </h1>
              <p className="text-primary-foreground/50 text-lg font-light">
                Ready to discuss your needs? Reach out and we'll get back to you within 24 hours.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-16 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <FadeIn>
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-8">Get in Touch</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <Mail className="w-4 h-4 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1 font-body">Email</p>
                      <p className="text-foreground text-sm font-light">uskservices1111@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-4 h-4 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1 font-body">Phone</p>
                      <p className="text-foreground text-sm font-light">+91 7396999626</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-4 h-4 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1 font-body">Office</p>
                      <p className="text-foreground text-sm font-light">Sri Satya Towers, Chekkavari Street<br />Tanuku, West Godavari<br />Andhra Pradesh, India</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.2}>
                {submitted ? (
                  <div className="bg-muted/30 p-16 text-center border border-border/30">
                    <Send className="w-8 h-8 text-accent mx-auto mb-6" />
                    <h3 className="text-2xl font-heading font-semibold text-foreground mb-3">Message Sent</h3>
                    <p className="text-muted-foreground font-light">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2 font-body">First Name</label>
                        <input type="text" required className="w-full px-4 py-3.5 bg-transparent border border-border/50 text-foreground text-sm focus:outline-none focus:border-accent transition-colors font-light" />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2 font-body">Last Name</label>
                        <input type="text" required className="w-full px-4 py-3.5 bg-transparent border border-border/50 text-foreground text-sm focus:outline-none focus:border-accent transition-colors font-light" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2 font-body">Email</label>
                      <input type="email" required className="w-full px-4 py-3.5 bg-transparent border border-border/50 text-foreground text-sm focus:outline-none focus:border-accent transition-colors font-light" />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2 font-body">Service Interested In</label>
                      <select className="w-full px-4 py-3.5 bg-transparent border border-border/50 text-foreground text-sm focus:outline-none focus:border-accent transition-colors font-light">
                        <option>Political Analysis & Forecasting</option>
                        <option>Strategic Election Consulting</option>
                        <option>Legal Advisory & Mediation</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2 font-body">Message</label>
                      <textarea rows={5} required className="w-full px-4 py-3.5 bg-transparent border border-border/50 text-foreground text-sm focus:outline-none focus:border-accent transition-colors resize-none font-light" />
                    </div>
                    <button type="submit" className="w-full py-4 bg-accent text-accent-foreground font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity">
                      Send Message
                    </button>
                  </form>
                )}
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
