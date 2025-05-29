import sgMail, { MailDataRequired } from '@sendgrid/mail';
import { NextRequest, NextResponse } from 'next/server';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

interface ContactFormData {
  email: string;
  name: string;
  phone: string;
  prefer: string;
  message: string;
  language: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactFormData = await req.json();
    const { email, name, phone, prefer, message, language } = body;

    const sender = process.env.SENDER_MAIL as string;
    const recipient = process.env.RECIPIENT_MAIL as string;

    const msg: MailDataRequired = {
      from: sender,
      subject: 'AUTOMAX-GARAGE Contact us',
      personalizations: [
        {
          to: [{ email: recipient }],
        },
        {
          to: [{ email: sender }],
        },
      ],
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Contact Preference: ${prefer}
        Message: ${message}
        Language: ${language}
      `,
      html: `
        <div>
          <p>A visitor to the Automax Garage website would like to contact you.</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>I prefer to communicate via:</strong> ${prefer}</p>
          <p><strong>Message:</strong> ${message}</p>
          <p><strong>Language:</strong> ${language}</p>

        </div>
      `,
    };

    const response = await sgMail.send(msg);

    return NextResponse.json({
      message: 'Mail sent successfully',
      statusCode: response[0].statusCode,
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      {
        message: 'Error sending mail',
        error: error?.response?.body || error.message || 'Unknown error',
      },
      { status: 500 }
    );
  }
}
