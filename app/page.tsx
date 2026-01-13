'use client';

import { useState } from 'react';

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'What We Do', id: 'what-we-do' },
    { label: 'Who We Work With', id: 'who-we-work-with' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Packages', id: 'packages' },
    { label: 'Engagement', id: 'engagement' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 bg-surface border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-fg">Fee The Developer LLC</div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium text-muted hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-0"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <button
          type="button"
          onClick={() => scrollToSection('contact')}
          className="hidden md:block btn-cta text-sm"
        >
          Start a conversation
        </button>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-0"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-border py-4 bg-surface">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.id}
                onClick={() => {
                  scrollToSection(link.id);
                  setMobileMenuOpen(false);
                }}
                className="text-left text-sm font-medium text-muted hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-0"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                scrollToSection('contact');
                setMobileMenuOpen(false);
              }}
              className="btn-cta text-sm w-full text-center"
            >
              Start a conversation
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

const HeroSection = () => {
  return (
    <section id="hero" className="bg-surface py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Production-Ready Software Engineering for Growing Businesses
        </h1>
        <p className="text-lg md:text-xl text-muted mb-8 leading-relaxed">
          Fee The Developer LLC designs, builds, and deploys scalable software systems for startups, SMBs, and organizations that need senior-level engineering execution—without the overhead of a full internal team.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-cta text-base md:text-lg"
          >
            Start a conversation
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-secondary text-base md:text-lg"
          >
            Request a quote
          </button>
        </div>
      </div>
    </section>
  );
};

const WhatWeDo = () => {
  const services = [
    {
      title: 'Website Development & Hosting',
      description: 'Modern, responsive websites built with latest technologies and deployed on reliable infrastructure.',
    },
    {
      title: 'Software Engineering & Architecture',
      description: 'Scalable system design and technical architecture for complex applications.',
    },
    {
      title: 'Full-Stack Application Development',
      description: 'End-to-end development from database design to user interface.',
    },
    {
      title: 'Automation & Integration',
      description: 'Streamline workflows and integrate disparate systems seamlessly.',
    },
    {
      title: 'Technical Advisory',
      description: 'Expert guidance on technology decisions, audits, and strategic planning.',
    },
  ];

  return (
    <section id="what-we-do" className="bg-surface2 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">What We Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-surface p-6 rounded-lg border border-border hover:border-accent transition-colors">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HostingPackages = () => {
  const packages = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      features: [
        'Secure hosting',
        'SSL certificate',
        'Automated backups',
        'Basic performance monitoring',
        'Minor content updates',
      ],
    },
    {
      name: 'Growth',
      price: '$199',
      period: '/month',
      features: [
        'Everything in Starter',
        'Performance optimization',
        'Security monitoring & patching',
        'Monthly site health report',
        'Priority updates',
      ],
      highlight: true,
    },
    {
      name: 'Business',
      price: '$399',
      period: '/month',
      features: [
        'Everything in Growth',
        'High-availability hosting',
        'Advanced security hardening',
        'Uptime monitoring & alerts',
        'Dedicated support window',
      ],
    },
  ];

  return (
    <section id="packages" className="bg-surface py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">Hosting & Management Packages</h2>
        <p className="text-center text-muted mb-12 text-lg">
          Website builds are scoped separately or bundled with ongoing hosting.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-lg border-2 transition-all ${
                pkg.highlight
                  ? 'border-accent bg-surface2 scale-105'
                  : 'border-border bg-surface'
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-fg">{pkg.price}</span>
                <span className="text-muted">{pkg.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">✓</span>
                    <span className="text-muted">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full btn-cta">Choose Plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhoWeWorkWith = () => {
  return (
    <section id="who-we-work-with" className="bg-surface2 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">Who We Work With</h2>
        <div className="space-y-4 text-lg text-muted">
          <p>• Small and mid-sized businesses (10–250 employees)</p>
          <p>• Funded startups</p>
          <p>• Agencies needing senior engineering support</p>
          <p>• Organizations that value reliability, clarity, and execution</p>
          <p className="pt-4 border-t border-border text-fg font-semibold">
            If your business needs software that works—not experiments—we are built for you.
          </p>
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const reasons = [
    {
      title: 'Senior-Level Execution',
      description: 'Every project benefits from experienced engineering leadership and proven best practices.',
    },
    {
      title: 'Business-First Engineering',
      description: 'We optimize for your business goals, not technical complexity. Clear scope, measurable outcomes.',
    },
    {
      title: 'Veteran-Owned & Operated',
      description: 'Verified veteran-owned business with discipline, accountability, and operational rigor built into every engagement.',
    },
  ];

  return (
    <section id="why-us" className="bg-surface py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Why Fee The Developer</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <div key={idx} className="p-6">
              <h3 className="text-2xl font-bold mb-4">{reason.title}</h3>
              <p className="text-muted text-lg leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BuildPackages = () => {
  const packages = [
    {
      name: 'Launch Site',
      price: '$1,500',
      features: [
        '3–5 page professional website',
        'Mobile responsive design',
        'Contact form integration',
        'SEO-ready structure',
        'Deployment + handoff',
      ],
    },
    {
      name: 'Growth Site',
      price: '$3,000',
      features: [
        '5–10 page website',
        'Custom sections and layouts',
        'Conversion-focused structure',
        'Analytics integration',
        'Deployment + hosting setup',
      ],
    },
    {
      name: 'Business Site',
      price: '$5,000+',
      features: [
        'Custom-designed website',
        'Advanced functionality (forms, integrations, portals)',
        'Performance optimization',
        'Security hardening',
        'Priority deployment',
      ],
    },
  ];

  return (
    <section id="build-packages" className="bg-surface2 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Website Build Packages</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div key={idx} className="bg-surface p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-accent">{pkg.price}</span>
              </div>
              <ul className="space-y-3">
                {pkg.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-muted">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Engagement = () => {
  return (
    <section id="engagement" className="bg-surface py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">How Engagements Work</h2>
        <div className="space-y-4 text-lg text-muted mb-8">
          <p>• Monthly engineering retainers</p>
          <p>• Fixed-scope project builds</p>
          <p>• Advisory and audit engagements</p>
        </div>
        <p className="text-lg text-fg font-semibold border-t border-border pt-6">
          Each engagement begins with a clear scope, timeline, and success criteria.
        </p>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Client-side only - no backend submission
    const mailtoLink = `mailto:fee@feethedeveloper.com?subject=New Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="bg-surface2 text-fg py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">Let's Build</h2>
        <p className="text-lg text-muted mb-10 text-center leading-relaxed">
          If you are ready to move from ideas to reliable software systems—or want your website fully handled without stress—let's talk.
        </p>

        <div className="mb-8 text-center">
          <p className="text-xl mb-4">
            <strong>Email:</strong> fee@feethedeveloper.com
          </p>
          <a
            href="mailto:fee@feethedeveloper.com"
            className="inline-block px-6 py-3 bg-accent text-fg font-semibold rounded hover:bg-accentHover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-0"
          >
            Email Fee
          </a>
        </div>

        <div className="border-t border-border pt-8">
          <h3 className="text-2xl font-bold mb-6">Or fill out the form below</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-surface border border-border text-fg placeholder-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-0"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-surface border border-border text-fg placeholder-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-0"
                placeholder="Your company"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-surface border border-border text-fg placeholder-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-0"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 rounded bg-surface border border-border text-fg placeholder-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-0"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-accent text-fg font-semibold rounded hover:bg-accentHover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-0"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border py-8">
      <div className="container mx-auto px-4 text-center text-muted">
        <p>Fee The Developer LLC — Veteran-Owned Software Engineering & Managed Web Services</p>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <WhatWeDo />
      <HostingPackages />
      <WhoWeWorkWith />
      <WhyUs />
      <BuildPackages />
      <Engagement />
      <ContactForm />
      <Footer />
    </main>
  );
}
