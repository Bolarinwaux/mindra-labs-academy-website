import { NextResponse } from 'next/server';
import { EnquiryFormData } from '@/types/enquiry';

export async function POST(request: Request) {
  try {
    const body: EnquiryFormData = await request.json();

    // Basic validation
    if (!body.parentName || !body.email || !body.phone || !body.ageGroup || !body.programme) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    if (!body.consent) {
      return NextResponse.json(
        { success: false, message: 'Parental consent is required to submit an enquiry.' },
        { status: 400 }
      );
    }

    // In production, dispatch notification email via Resend, SendGrid, or Nodemailer
    console.log('[Mindra Labs Enquiry Received]:', {
      timestamp: new Date().toISOString(),
      parentName: body.parentName,
      email: body.email,
      phone: body.phone,
      country: body.country,
      ageGroup: body.ageGroup,
      programme: body.programme,
      format: body.format,
      message: body.message,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for reaching out! An academic mentor will contact you shortly.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing enquiry:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit enquiry. Please try contacting via WhatsApp.' },
      { status: 500 }
    );
  }
}

