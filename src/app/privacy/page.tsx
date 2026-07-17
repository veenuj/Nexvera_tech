import React from "react";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-6 py-24 max-w-4xl text-brand-lightGray">
      <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
      <p className="mb-6">Effective Date: July 16, 2026</p>
      
      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Introduction</h2>
      <p className="mb-4">At NexVera Technologies, we value your privacy. This policy outlines how we collect, use, and protect your information when you interact with our website and services.</p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Data Collection</h2>
      <p className="mb-4">We collect information to improve our services. This includes:</p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Personal Data:</strong> Name, email, and company details provided via contact forms.</li>
        <li><strong>Usage Data:</strong> We use Google Analytics (GA4) and Meta Pixel to track traffic, page views, and user behavior to optimize our marketing strategies.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Use of Information</h2>
      <p className="mb-4">We use this data to provide our software development and marketing services, communicate project updates, and for targeted advertising purposes to reach potential enterprise clients.</p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Third-Party Services</h2>
      <p className="mb-4">Our site uses third-party services like Google AdSense and Meta for advertising. These providers may use cookies to serve ads based on your visit to our site and other websites.</p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Contact Us</h2>
      <p>If you have questions about your data, please contact us at <strong>contact@nexveratechnologies.com</strong>.</p>
    </main>
  );
}