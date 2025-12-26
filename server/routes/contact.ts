import "dotenv/config";
import { RequestHandler } from "express";
import { z } from "zod";
import nodemailer from "nodemailer";

// Validation schema
const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

type ContactData = z.infer<typeof ContactSchema>;

// Initialize nodemailer transporter
const getTransporter = () => {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASSWORD;

  // Debug: Log if credentials are missing (without exposing the password)
  if (!user || !pass) {
    console.error("Email configuration check:");
    console.error("EMAIL_USER:", user ? "✓ Set" : "✗ Missing");
    console.error("EMAIL_PASSWORD:", pass ? "✓ Set" : "✗ Missing");
    throw new Error("Email credentials not configured");
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });
};

export const handleSendEmail: RequestHandler = async (req, res) => {
  try {
    // Validate request body
    const validatedData = ContactSchema.parse(req.body);

    // Send email to owner
    const transporter = getTransporter();

    // Verify transporter connection
    await transporter.verify();

    const ownerEmail = process.env.OWNER_EMAIL || process.env.EMAIL_USER;
    if (!ownerEmail) {
      throw new Error("Owner email not configured");
    }

    // Email to owner
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: ownerEmail,
      subject: `New Contact Form Submission: ${validatedData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Subject:</strong> ${validatedData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // Optional: Send confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: validatedData.email,
      subject: "We received your message",
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${validatedData.name},</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br>Marcian Benedict D</p>
      `,
    });

    res.json({
      success: true,
      message: "Email sent successfully. Thank you for reaching out!",
    });
  } catch (error) {
    console.error("Error sending email:", error);

    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: error.errors,
      });
    }

    // Provide more detailed error message
    let errorMessage = "Failed to send email. Please try again later.";
    if (error instanceof Error) {
      console.error("Error details:", error.message);
      // Don't expose sensitive details, but log them
      if (error.message.includes("Invalid login")) {
        errorMessage = "Email authentication failed. Please check your email credentials.";
      } else if (error.message.includes("credentials")) {
        errorMessage = "Email credentials not configured. Please check your .env file.";
      } else {
        errorMessage = `Email error: ${error.message}`;
      }
    }

    res.status(500).json({
      success: false,
      message: errorMessage,
    });
  }
};
