import { NextResponse } from 'next/server';

// In a real application, you would use a database or a CRM like Webuild Inbox
// This is a simple in-memory store for demonstration purposes
const submittedLeads: { email: string; submissionDate: string; sourcePage: string }[] = [];

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ message: 'Invalid email address provided.' }, { status: 400 });
    }

    const sourcePage = request.headers.get('referer') || 'unknown';
    const submissionDate = new Date().toISOString();

    // Prevent duplicates (simple check for demonstration: same email, same day)
    const isDuplicate = submittedLeads.some(
      (lead) => lead.email === email && new Date(lead.submissionDate).toDateString() === new Date(submissionDate).toDateString()
    );

    if (isDuplicate) {
      return NextResponse.json({ message: 'You have already submitted your email today.' }, { status: 409 });
    }

    // Simulate saving lead to Webuild Inbox with email, submission date, and source page
    const newLead = { email, submissionDate, sourcePage };
    submittedLeads.push(newLead);
    console.log('Lead saved to Webuild Inbox:', newLead);

    // Simulate sending email notification to business owner
    console.log(`Simulating email notification for new lead: ${email} from ${sourcePage}`);
    // In a real app, use a service like Nodemailer, SendGrid, etc.
    // await sendEmailToBusinessOwner({ email, sourcePage, submissionDate });

    return NextResponse.json({ message: 'Thank you for your submission! We will be in touch shortly.' }, { status: 200 });

  } catch (error) {
    console.error('Error processing lead submission:', error);
    return NextResponse.json({ message: 'An unexpected error occurred. Please try again later.' }, { status: 500 });
  }
}

// Placeholder for an actual email sending function (not implemented here)
// async function sendEmailToBusinessOwner({ email, sourcePage, submissionDate }: { email: string; sourcePage: string; submissionDate: string }) {
//   // Implement actual email sending logic here, e.g., using a third-party email service.
//   console.log('Simulating actual email send to business owner...');
//   // Example with Nodemailer (requires setup):
//   // const nodemailer = require('nodemailer');
//   // const transporter = nodemailer.createTransport({
//   //   service: 'gmail', // or any other email service
//   //   auth: {
//   //     user: 'your-email@gmail.com',
//   //     pass: 'your-email-password'
//   //   }
//   // });
//   // await transporter.sendMail({
//   //   from: '"Webuild Form" <no-reply@webuild.com>',
//   //   to: "business.owner@example.com", // Replace with the actual business owner's email
//   //   subject: "New Lead from Website Form",//   //   html: `<p>New lead submitted:</p><p>Email: ${email}</p><p>Source Page: ${sourcePage}</p><p>Submission Date: ${submissionDate}</p>`,
//   // });
// }
