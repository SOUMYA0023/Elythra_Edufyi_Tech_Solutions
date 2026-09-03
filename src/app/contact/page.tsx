"use client";

import { useState } from "react";
import SectionReveal from "@/components/SectionReveal";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <main className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full bg-brand-core/10 text-brand-core text-xs font-bold font-heading uppercase tracking-widest mb-3">
              GET IN TOUCH
            </span>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-text-primary mb-4">
              We&apos;re Here to Help You Build Your Career
            </h1>
            <p className="text-lg text-text-muted leading-relaxed">
              Have questions about our course domains, internship tracks, or placement assistance? Send us a message or visit one of our official campus branches.
            </p>
          </div>
        </SectionReveal>

        {/* 2-Column Balanced Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Left Column: Contact Information, Working Hours & 3 Branch Addresses */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Contact Card */}
            <SectionReveal>
              <div className="glass-card p-6 sm:p-8 space-y-6">
                <h2 className="text-xl font-heading font-bold text-text-primary border-b border-border-light pb-4">
                  Contact Information
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-sky flex items-center justify-center text-brand-core flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold font-heading uppercase text-text-muted">Email Us</p>
                      <a href={`mailto:${siteConfig.contact.email}`} className="text-sm font-semibold text-brand-core hover:underline">
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-sky flex items-center justify-center text-brand-core flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold font-heading uppercase text-text-muted">Phone & WhatsApp</p>
                      <a href={`tel:${siteConfig.whatsapp.number}`} className="text-sm font-semibold text-brand-core hover:underline block">
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-sky flex items-center justify-center text-brand-core flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold font-heading uppercase text-text-muted">Working Hours</p>
                      <p className="text-sm font-semibold text-text-primary">
                        {siteConfig.contact.workingHours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>

            {/* Official Branch Locations Card (Three Distinct Branches) */}
            <SectionReveal delay={80}>
              <div className="glass-card p-6 sm:p-8 space-y-5">
                <h2 className="text-xl font-heading font-bold text-text-primary border-b border-border-light pb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-core" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  Our Campus Branches (3)
                </h2>

                <div className="space-y-4 divide-y divide-border-light/60">
                  {/* Branch 1 */}
                  <div className="pt-2 first:pt-0">
                    <p className="text-xs font-bold font-heading uppercase tracking-wider text-brand-deep mb-1">
                      BRANCH 1 — HSR Layout
                    </p>
                    <p className="text-xs text-text-primary leading-relaxed">
                      Third Floor, Seven Hills,<br />
                      #424, Tenth Cross Street,<br />
                      27th Main Road, Sector 1, HSR Layout,<br />
                      Bangalore, Karnataka 560102
                    </p>
                  </div>

                  {/* Branch 2 */}
                  <div className="pt-3">
                    <p className="text-xs font-bold font-heading uppercase tracking-wider text-brand-deep mb-1">
                      BRANCH 2 — HSR Layout
                    </p>
                    <p className="text-xs text-text-primary leading-relaxed">
                      Fourth Floor,<br />
                      Near Baskin Robbins,<br />
                      Tenth Cross Street, 27th Main Road, Sector 1, HSR Layout,<br />
                      Bangalore, Karnataka 560102
                    </p>
                  </div>

                  {/* Branch 3 */}
                  <div className="pt-3">
                    <p className="text-xs font-bold font-heading uppercase tracking-wider text-brand-deep mb-1">
                      BRANCH 3 — Ernakulam
                    </p>
                    <p className="text-xs text-text-primary leading-relaxed">
                      Liju Mahal,<br />
                      ARA 10, Building No. 41/2053 A, First Floor,<br />
                      Village Office Road, Ernakulam,<br />
                      Kerala 682028
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>

            {/* Direct WhatsApp Callout Card */}
            <SectionReveal delay={120}>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.265-1.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base">Instant Response on WhatsApp</h3>
                    <p className="text-xs text-white/80">Connect directly with our counselor</p>
                  </div>
                </div>
                <p className="text-xs text-white/90 leading-relaxed">
                  Prefer instant messaging? Click below to start a chat on WhatsApp with our enrollment desk.
                </p>
                <a
                  href={siteConfig.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl bg-white text-emerald-800 font-heading text-sm font-bold shadow-md hover:bg-emerald-50 transition-colors gap-2"
                >
                  Start WhatsApp Chat
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </SectionReveal>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <SectionReveal delay={150}>
              <div className="glass-card p-6 sm:p-10 border border-border-light shadow-xl">
                <h2 className="text-2xl font-heading font-bold text-text-primary mb-2">
                  Send Us a Message
                </h2>
                <p className="text-sm text-text-muted mb-8">
                  Fill out the form below and our team will get back to you within 24 business hours.
                </p>

                {submitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fade-in">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-xl font-bold">
                      ✓
                    </div>
                    <h3 className="font-heading font-bold text-lg text-emerald-900">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                      Thank you for reaching out to Elythra Edufyi Tech Solutions. One of our career advisors will contact you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2 text-xs font-semibold font-heading text-emerald-700 bg-emerald-100 rounded-lg hover:bg-emerald-200 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-xs font-bold uppercase font-heading tracking-wider text-text-primary mb-2"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-border-light bg-white text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand-core/30 focus:border-brand-core transition-all"
                          placeholder="e.g. Rahul Sharma"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="emailAddress"
                          className="block text-xs font-bold uppercase font-heading tracking-wider text-text-primary mb-2"
                        >
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="emailAddress"
                          type="email"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-border-light bg-white text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand-core/30 focus:border-brand-core transition-all"
                          placeholder="rahul@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="phoneNumber"
                          className="block text-xs font-bold uppercase font-heading tracking-wider text-text-primary mb-2"
                        >
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="phoneNumber"
                          type="tel"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-border-light bg-white text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand-core/30 focus:border-brand-core transition-all"
                          placeholder="+91 98765 43210"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="interestDomain"
                          className="block text-xs font-bold uppercase font-heading tracking-wider text-text-primary mb-2"
                        >
                          Interested Domain
                        </label>
                        <select
                          id="interestDomain"
                          className="w-full px-4 py-3 rounded-xl border border-border-light bg-white text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand-core/30 focus:border-brand-core transition-all"
                        >
                          <option value="">Select a Domain (Optional)</option>
                          <option value="Full Stack Web Development">Full Stack Web Development</option>
                          <option value="Data Science & ML">Data Science & ML</option>
                          <option value="AI & Machine Learning">AI & Machine Learning</option>
                          <option value="DevOps & Cloud">DevOps & Cloud</option>
                          <option value="UI/UX Design">UI/UX Design</option>
                          <option value="Cyber Security">Cyber Security</option>
                          <option value="Non-Technical (Finance/Marketing)">Non-Technical Domains</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="messageContent"
                        className="block text-xs font-bold uppercase font-heading tracking-wider text-text-primary mb-2"
                      >
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="messageContent"
                        rows={4}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border-light bg-white text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand-core/30 focus:border-brand-core transition-all resize-y"
                        placeholder="Tell us about your background and what you're hoping to achieve..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-brand-core hover:bg-brand-deep text-white font-heading font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </main>
  );
}
