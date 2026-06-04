import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { fullName, emailAddress, phoneNumber, serviceNeeded, projectDescription } = data;

    // Validate required fields
    if (!fullName || !emailAddress || !phoneNumber || !serviceNeeded) {
      return NextResponse.json({ message: 'Missing required fields: Full Name, Email Address, Phone Number, Service Needed.' }, { status: 400 });
    }

    const submissionTime = new Date().toLocaleString();

    // Simulate saving lead to Webuild Inbox (replace with actual integration)
    console.log("--- New Lead Submission ---");
    console.log(`Name: ${fullName}`);
    console.log(`Phone: ${phoneNumber}`);
    console.log(`Email: ${emailAddress}`);
    console.log(`Service Needed: ${serviceNeeded}`);
    console.log(`Project Description: ${projectDescription || 'N/A'}`);
    console.log(`Date & Time Submitted: ${submissionTime}`);
    console.log("Lead simulated to be saved in Webuild Inbox.");

    // Simulate sending email notification (replace with actual integration)
    const emailSubject = "New Lead - Stevenson's Hardwood Floors";
    const emailBody = `
New Lead Received\n\nName: ${fullName}\nPhone: ${phoneNumber}\nEmail: ${emailAddress}\nService Needed: ${serviceNeeded}\nProject Description: ${projectDescription || 'N/A'}\nSubmitted: ${submissionTime}\n`;
    console.log("--- Email Notification Simulated ---");
    console.log(`Subject: ${emailSubject}`);
    console.log(`Body:\n${emailBody}`);
    console.log("Email notification simulated to be sent.");

    // In a real application, you would integrate with a CRM/database
    // and an email service (e.g., SendGrid, Mailgun) here.
    // This is a placeholder for demonstrating the flow.

    return NextResponse.json({ message: 'Lead submitted successfully!' }, { status: 200 });

  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json({ message: 'Internal server error.' }, { status: 500 });
  }
}
