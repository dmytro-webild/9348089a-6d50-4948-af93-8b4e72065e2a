import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, timestamp } = await request.json();

    // In a real application, you would send this data to your Webuild Inbox API
    // or another CRM/lead management system.
    // For this refactor, we are simulating the process by logging the lead data.
    console.log('--- New Lead Captured via Webuild Inbox Integration ---');
    console.log('Email:', email);
    console.log('Timestamp:', timestamp);
    console.log('----------------------------------------------------');

    // Simulate a successful response from Webuild Inbox
    return NextResponse.json({
      message: 'Lead captured and sent to Webuild Inbox successfully!',
      leadData: { email, timestamp },
      status: 'success'
    }, { status: 200 });

  } catch (error) {
    console.error('Failed to capture lead for Webuild Inbox:', error);
    return NextResponse.json({
      message: 'Failed to capture lead. Please try again.',
      status: 'error'
    }, { status: 500 });
  }
}
