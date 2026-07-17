import React from "react";

export const metadata = { title: "Terms of Service" };

export default function TermsOfService() {
  return (
    <main className="container mx-auto px-6 py-24 max-w-4xl text-brand-lightGray">
      <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
      
      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Agreement to Terms</h2>
      <p className="mb-4">By accessing NexVera Technologies, you agree to be bound by these Terms of Service. If you disagree with any part, please do not use our website.</p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Intellectual Property</h2>
      <p className="mb-4">All content on this website, including software designs, logos, text, and marketing copy, is the property of NexVera Technologies and protected by copyright laws.</p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. User Responsibilities</h2>
      <p className="mb-4">Users must ensure that any data provided to us through our contact forms is accurate and that they have the authority to share such information on behalf of their organization.</p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Limitation of Liability</h2>
      <p className="mb-4">NexVera Technologies is not liable for any indirect, incidental, or consequential damages arising from the use of our services or website.</p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Governing Law</h2>
      <p>These terms are governed by the laws of India, specifically within the jurisdiction of Uttar Pradesh.</p>
    </main>
  );
}