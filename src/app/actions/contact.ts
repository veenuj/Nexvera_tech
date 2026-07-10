"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  
  try {
    // 1. Email to You (The Company)
    await resend.emails.send({
      from: "NexVera <info@nexveratechnologies.com>", // Replace with your domain email
      to: "info@nexveratechnologies.com",
      subject: `New Lead: ${data.firstName} from ${data.company}`,
      html: `
        <h1>New Project Inquiry</h1>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.workEmail}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Budget:</strong> ${data.budget}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    });

    // 2. Auto-responder to Customer
    await resend.emails.send({
      from: "NexVera <info@nexveratechnologies.com>",
      to: data.workEmail as string,
      subject: "Thank you for reaching out to NexVera Technologies",
      html: `
        <h2>We've received your request!</h2>
        <p>Hi ${data.firstName},</p>
        <p>Thank you for contacting NexVera. Our engineering team has received your inquiry and we will get back to you within 24 hours.</p>
        <p>Best regards,<br>The NexVera Team</p>
      `,
    });

    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to send email" };
  }
}