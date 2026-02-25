import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  const formData = await req.formData();
  const name = String(formData.get('name') || '');
  const email = String(formData.get('email') || '');
  const message = String(formData.get('message') || '');

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL) {
    return NextResponse.json(
      {
        ok: false,
        mode: 'disabled',
        message: 'Email sending is disabled. Set RESEND_API_KEY and CONTACT_TO_EMAIL in env.'
      },
      { status: 503 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>',
    to: process.env.CONTACT_TO_EMAIL,
    subject: `New portfolio contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`
  });

  return NextResponse.json({ ok: true });
}
