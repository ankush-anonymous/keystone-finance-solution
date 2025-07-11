import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Phone validation regex (basic format)
const phoneRegex = /^[+]?[1-9][\d]{0,15}$/

export async function POST(request: NextRequest) {
  try {
    console.log("✅ SMTP_HOST is:", process.env.SMTP_HOST)

    const body = await request.json()
    const { firstName, lastName, email, phone, service, message } = body

    // Validation
    const errors: string[] = []

    if (!firstName || firstName.trim().length < 2) {
      errors.push("First name must be at least 2 characters long")
    }

    if (!lastName || lastName.trim().length < 2) {
      errors.push("Last name must be at least 2 characters long")
    }

    if (!email || !emailRegex.test(email)) {
      errors.push("Please enter a valid email address")
    }

    if (!phone || phone.trim().length < 10) {
      errors.push("Please enter a valid phone number")
    }

    if (!message || message.trim().length < 10) {
      errors.push("Message must be at least 10 characters long")
    }

    if (errors.length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 })
    }

    // Create transporter
   const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number.parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})


    // Email content for company
    const companyEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Form Submission</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #374151; margin-bottom: 5px; display: block; }
            .value { background: white; padding: 12px; border-radius: 6px; border-left: 4px solid #10b981; }
            .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }
            .priority { background: #fef3c7; border-left-color: #f59e0b; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 New Contact Form Submission</h1>
              <p>Keystone - Financial Solutions</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">👤 Full Name:</span>
                <div class="value">${firstName} ${lastName}</div>
              </div>
              
              <div class="field">
                <span class="label">📧 Email Address:</span>
                <div class="value">${email}</div>
              </div>
              
              <div class="field">
                <span class="label">📱 Phone Number:</span>
                <div class="value">${phone}</div>
              </div>
              
              <div class="field">
                <span class="label">🏢 Service Interest:</span>
                <div class="value">${service || "Not specified"}</div>
              </div>
              
              <div class="field">
                <span class="label">💬 Message:</span>
                <div class="value priority">${message}</div>
              </div>
              
              <div class="field">
                <span class="label">📅 Submitted At:</span>
                <div class="value">${new Date().toLocaleString()}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from your Keystone contact form.</p>
              <p>Please respond to the customer within 24 hours for best service.</p>
            </div>
          </div>
        </body>
      </html>
    `

    // Email content for customer confirmation
    const customerEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Thank You for Contacting Keystone</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1e40af, #3b82f6); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .highlight { background: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6; }
            .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }
            .contact-info { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✅ Thank You, ${firstName}!</h1>
              <p>Your message has been received</p>
            </div>
            <div class="content">
              <p>Dear ${firstName} ${lastName},</p>
              
              <p>Thank you for reaching out to <strong>Keystone</strong>! We've successfully received your inquiry and our team is already reviewing your request.</p>
              
              <div class="highlight">
                <h3>🚀 What happens next?</h3>
                <ul>
                  <li><strong>Within 24 hours:</strong> Our specialist will review your inquiry</li>
                  <li><strong>Within 48 hours:</strong> You'll receive a personalized response</li>
                  <li><strong>Quick approval:</strong> Most applications are processed within 24-48 hours</li>
                </ul>
              </div>
              
              <div class="contact-info">
                <h3>📞 Need immediate assistance?</h3>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Email:</strong> info@Keystone.com</p>
                <p><strong>Business Hours:</strong> Mon-Fri 9AM-6PM, Sat 10AM-4PM</p>
              </div>
              
              <p>We specialize in helping Canadian businesses in aesthetics and hospitality secure the funding they need with speed, flexibility, and trust.</p>
              
              <p>Best regards,<br>
              <strong>The Keystone Team</strong><br>
              Your Trusted Partner in Financial Solutions</p>
            </div>
            <div class="footer">
              <p>This is an automated confirmation email.</p>
              <p>© 2024 Keystone. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `

    // Send email to company
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.COMPANY_EMAIL,
      subject: `🔥 New Contact Form Submission - ${firstName} ${lastName}`,
      html: companyEmailHtml,
      replyTo: email,
    })

    // Send confirmation email to customer
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: "Thank You for Contacting Keystone - We'll Be In Touch Soon!",
      html: customerEmailHtml,
    })

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully! We'll get back to you within 24 hours.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Sorry, there was an error sending your message. Please try again or contact us directly.",
      },
      { status: 500 },
    )
  }
}
