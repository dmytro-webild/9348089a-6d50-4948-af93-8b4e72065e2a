import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // 1. Validate incoming data
    const { name, email, phone, message } = formData;
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // --- Backend Lead Submission Logic (Placeholders) ---

    // 2. Prevent duplicate submissions (Example: check email in database/cache)
    // In a real application, you might check if this email (or combination of fields)
    // has submitted a lead recently to prevent spam or accidental duplicates.
    // For now, we'll just log a placeholder.
    console.log(`Checking for duplicate submission from: ${email}`);
    // Example: const existingLead = await db.collection('leads').findOne({ email });
    // if (existingLead && (Date.now() - existingLead.timestamp < 3600000)) { // e.g., within 1 hour
    //   return NextResponse.json({ message: "Duplicate submission prevented. Please try again later." }, { status: 409 });
    // }

    // 3. Save to database
    console.log("Saving lead to database...");
    // Example:
    // await db.collection('leads').insertOne({
    //   name,
    //   email,
    //   phone,
    //   message,
    //   submissionDate: new Date(),
    //   status: 'new'
    // });

    // 4. Save to Google Sheets (if applicable)
    console.log("Saving lead to Google Sheets...");
    // This would typically involve Google Sheets API integration:
    // import { GoogleSpreadsheet } from 'google-spreadsheet';
    // const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);
    // await doc.useServiceAccountAuth({
    //   client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    //   private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    // });
    // await doc.loadInfo();
    // const sheet = doc.sheetsByIndex[0]; // or by title: doc.sheetsByTitle['Leads']
    // await sheet.addRow({
    //   Name: name,
    //   Email: email,
    //   Phone: phone,
    //   Message: message,
    //   'Submission Date': new Date().toLocaleString(),
    // });

    // 5. Send email notification to business owner
    console.log("Sending email notification to business owner...");
    // This would typically involve an email service like Nodemailer, SendGrid, etc.
    // import nodemailer from 'nodemailer';
    // const transporter = nodemailer.createTransport({
    //   service: 'gmail', // or your SMTP details
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS,
    //   },
    // });
    // await transporter.sendMail({
    //   from: process.env.EMAIL_FROM,
    //   to: process.env.BUSINESS_OWNER_EMAIL,
    //   subject: `New Lead Submission: ${name}`,
    //   html: `
    //     <p>You have a new lead submission from your website:</p>
    //     <ul>
    //       <li><strong>Name:</strong> ${name}</li>
    //       <li><strong>Email:</strong> ${email}</li>
    //       <li><strong>Phone:</strong> ${phone || 'N/A'}</li>
    //       <li><strong>Message:</strong> ${message}</li>
    //       <li><strong>Submission Date/Time:</strong> ${new Date().toLocaleString()}</li>
    //     </ul>
    //     <p>Please log in to your dashboard to review this lead.</p>
    //   `,
    // });

    console.log("Lead submission successful for:", formData);

    return NextResponse.json(
      { message: "Lead submitted successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error submitting lead:", error);
    return NextResponse.json(
      { message: "Internal server error.", error: error.message },
      { status: 500 }
    );
  }
}
