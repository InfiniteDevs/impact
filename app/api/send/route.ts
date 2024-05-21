import { EmailTemplate } from '@/templates/email';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Impact <onboarding@resend.dev>',
      to: ['avalynndev@gmail.com'],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John" }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}