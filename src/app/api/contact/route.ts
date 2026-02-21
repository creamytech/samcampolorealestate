import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, interest, message, preferredContact, timeline } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !interest) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Format the email body
    const emailBody = `
New Contact Form Submission
============================

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || "Not provided"}
Interested In: ${interest}
Timeline: ${timeline || "Not specified"}
Preferred Contact: ${preferredContact || "email"}

Message:
${message || "No message provided"}

---
Sent from samcampolorealestate.com
    `.trim();

    // Try to send via Resend if API key is available
    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (resendApiKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendApiKey);

      await resend.emails.send({
        from: "Sam Campolo Website <noreply@samcampolorealestate.com>",
        to: ["sam.campolo@compass.com"],
        replyTo: email,
        subject: `New Lead: ${firstName} ${lastName} - ${interest}`,
        text: emailBody,
      });

      return NextResponse.json({ success: true, method: "resend" });
    }

    // Fallback: Log the submission (useful during development)
    console.log("=== CONTACT FORM SUBMISSION ===");
    console.log(emailBody);
    console.log("=== END SUBMISSION ===");
    console.log(
      "NOTE: Set RESEND_API_KEY environment variable to enable email delivery."
    );

    return NextResponse.json({
      success: true,
      method: "logged",
      message:
        "Form submitted successfully. Email delivery requires RESEND_API_KEY.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
