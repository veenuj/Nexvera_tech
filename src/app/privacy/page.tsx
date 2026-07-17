import React from "react";
import { Shield, Database, Eye, Globe, Mail, FileText } from "lucide-react";

export const metadata = { title: "Privacy Policy | NexVera Technologies" };

export default function PrivacyPolicy() {
  const lastUpdated = "July 16, 2026";

  return (
    <main className="min-h-screen relative bg-brand-black pt-40 pb-24 overflow-hidden border-b border-white/5">
      
      {/* ---------------- LIQUID UI BACKGROUND ---------------- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[0%] left-[10%] w-[600px] h-[600px] rounded-[100%] bg-gradient-to-br from-gold-primary/10 to-transparent blur-[120px] animate-[spin_30s_linear_infinite]" />
        <div className="absolute bottom-[0%] right-[10%] w-[700px] h-[700px] rounded-[100%] bg-gradient-to-tl from-blue-600/10 to-transparent blur-[150px] animate-[spin_40s_linear_infinite_reverse]" />
      </div>
      
      {/* Ambient Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-[1]" />
      {/* ------------------------------------------------------ */}

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-mono text-gold-primary uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <Shield size={14} className="text-gold-primary" /> Legal & Compliance
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
            Privacy <span className="text-gradient-gold">Policy</span>
          </h1>
          <p className="text-brand-lightGray font-mono text-sm tracking-widest">
            EFFECTIVE DATE: {lastUpdated}
          </p>
        </div>

        {/* Content Container (Glassmorphism) */}
        <div className="glass-panel p-8 md:p-14 rounded-[2.5rem] border border-white/10 bg-brand-black/60 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
          
          {/* Internal subtle top glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-gold-primary/40 to-transparent" />
          
          <div className="space-y-12 text-brand-lightGray font-light leading-relaxed">
            
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-5 flex items-center gap-3 tracking-tight">
                <FileText className="text-gold-primary" size={24} />
                1. Introduction
              </h2>
              <p className="text-lg">
                At NexVera Technologies, we value your privacy and are committed to protecting your personal data. This policy outlines how we collect, use, and protect your information when you interact with our website, digital infrastructure, and enterprise services.
              </p>
            </section>

            <div className="w-full h-px bg-gradient-to-r from-white/5 via-white/10 to-transparent" />

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-5 flex items-center gap-3 tracking-tight">
                <Database className="text-gold-primary" size={24} />
                2. Data Collection
              </h2>
              <p className="mb-6 text-lg">We collect specific information to improve our enterprise services and user experience. This includes:</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="w-2 h-2 rounded-full bg-gold-primary mt-2 shrink-0 shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                  <div>
                    <strong className="text-white font-medium block mb-1">Personal Data</strong> 
                    Name, email address, corporate contact details, and project specifications provided via our secure contact forms.
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="w-2 h-2 rounded-full bg-gold-primary mt-2 shrink-0 shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                  <div>
                    <strong className="text-white font-medium block mb-1">Usage Data</strong> 
                    We utilize Google Analytics (GA4) and Meta Pixel to securely track traffic, page views, and user behavior to optimize our digital marketing strategies and platform performance.
                  </div>
                </li>
              </ul>
            </section>

            <div className="w-full h-px bg-gradient-to-r from-white/5 via-white/10 to-transparent" />

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-5 flex items-center gap-3 tracking-tight">
                <Eye className="text-gold-primary" size={24} />
                3. Use of Information
              </h2>
              <p className="text-lg">
                We leverage this data exclusively to deliver our high-performance software development and marketing services. This includes communicating critical project updates, tailoring architectural solutions to your needs, and deploying targeted advertising to connect with potential enterprise partners.
              </p>
            </section>

            <div className="w-full h-px bg-gradient-to-r from-white/5 via-white/10 to-transparent" />

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-5 flex items-center gap-3 tracking-tight">
                <Globe className="text-gold-primary" size={24} />
                4. Third-Party Services
              </h2>
              <p className="text-lg">
                Our digital infrastructure integrates trusted third-party services such as Google AdSense and Meta for targeted advertising. These providers may utilize cookies to serve contextually relevant ads based on your engagement with our site and broader web ecosystem.
              </p>
            </section>

            <div className="w-full h-px bg-gradient-to-r from-white/5 via-white/10 to-transparent" />

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-5 flex items-center gap-3 tracking-tight">
                <Mail className="text-gold-primary" size={24} />
                5. Contact Us
              </h2>
              <p className="mb-6 text-lg">
                If you have inquiries regarding your data privacy, security compliance, or this policy, please reach out to our team:
              </p>
              <a 
                href="mailto:info@nexveratechnologies.com" 
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-gold-primary/10 hover:border-gold-primary/40 transition-all duration-300 text-white font-medium group"
              >
                <div className="w-10 h-10 rounded-full bg-brand-black flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  <Mail size={18} className="text-gold-primary" />
                </div>
                info@nexveratechnologies.com
              </a>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}