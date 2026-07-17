import React from "react";
import { Scale, CheckCircle, Cpu, Users, ShieldAlert, MapPin } from "lucide-react";

export const metadata = { title: "Terms of Service | NexVera Technologies" };

export default function TermsOfService() {
  const lastUpdated = "July 17, 2026";

  return (
    <main className="min-h-screen relative bg-brand-black pt-40 pb-24 overflow-hidden border-b border-white/5">
      
      {/* ---------------- LIQUID UI BACKGROUND ---------------- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Top Right Gold Blob */}
        <div className="absolute top-[0%] right-[10%] w-[600px] h-[600px] rounded-[100%] bg-gradient-to-bl from-gold-primary/10 to-transparent blur-[120px] animate-[spin_35s_linear_infinite]" />
        
        {/* Bottom Left Blue Blob */}
        <div className="absolute bottom-[0%] left-[10%] w-[700px] h-[700px] rounded-[100%] bg-gradient-to-tr from-blue-600/10 to-transparent blur-[150px] animate-[spin_45s_linear_infinite_reverse]" />
      </div>
      
      {/* Ambient Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-[1]" />
      {/* ------------------------------------------------------ */}

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-mono text-gold-primary uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <Scale size={14} className="text-gold-primary" /> Legal & Compliance
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
            Terms of <span className="text-gradient-gold">Service</span>
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
                <CheckCircle className="text-gold-primary" size={24} />
                1. Agreement to Terms
              </h2>
              <p className="text-lg">
                By accessing and utilizing the digital infrastructure, web applications, or services provided by NexVera Technologies, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, please discontinue your use of our website and enterprise services immediately.
              </p>
            </section>

            <div className="w-full h-px bg-gradient-to-r from-white/5 via-white/10 to-transparent" />

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-5 flex items-center gap-3 tracking-tight">
                <Cpu className="text-gold-primary" size={24} />
                2. Intellectual Property
              </h2>
              <p className="text-lg">
                All content residing on this website—including but not limited to custom software architectures, AI models, UI/UX designs, branding logos, text, and marketing copy—is the exclusive intellectual property of NexVera Technologies. These assets are strictly protected by applicable copyright and trademark laws. Unauthorized reproduction or distribution is prohibited.
              </p>
            </section>

            <div className="w-full h-px bg-gradient-to-r from-white/5 via-white/10 to-transparent" />

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-5 flex items-center gap-3 tracking-tight">
                <Users className="text-gold-primary" size={24} />
                3. User Responsibilities
              </h2>
              <p className="text-lg">
                Clients and users must ensure that any data, specifications, or corporate information provided to us through our contact forms or onboarding processes is strictly accurate. Furthermore, you warrant that you possess the necessary authorization to share such information on behalf of your respective organization.
              </p>
            </section>

            <div className="w-full h-px bg-gradient-to-r from-white/5 via-white/10 to-transparent" />

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-5 flex items-center gap-3 tracking-tight">
                <ShieldAlert className="text-gold-primary" size={24} />
                4. Limitation of Liability
              </h2>
              <p className="text-lg">
                While we engineer our platforms for maximum uptime and security, NexVera Technologies shall not be held liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services, software deliverables, or website.
              </p>
            </section>

            <div className="w-full h-px bg-gradient-to-r from-white/5 via-white/10 to-transparent" />

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-5 flex items-center gap-3 tracking-tight">
                <MapPin className="text-gold-primary" size={24} />
                5. Governing Law
              </h2>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                <p className="text-lg text-white">
                  These terms are governed by and construed in accordance with the laws of <strong>India</strong>, specifically within the jurisdiction of <strong>Uttar Pradesh</strong>. Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts of Meerut, Uttar Pradesh.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}