import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Sales | NexVera Technologies",
  description: "Get in touch with our enterprise engineering team to architect your next digital solution.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full pb-24 border-b border-brand-border/50">
      <ContactHero />
      
      <section className="relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}