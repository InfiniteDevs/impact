import { EmailTemplate } from "@/templates/email";
import { Resend } from "resend";
import * as React from "react";

const resend = new Resend("re_vAi4ytTc_FNZ48fw9rYREmDoQRfZK76pu");

export async function POST(request: Request) {
  const body = await request.json();
  const { firstName, lastName, email, phone, text } = body;

  const { data, error } = await resend.emails.send({
    from: "Impact <onboarding@resend.dev>",
    to: ["avalynndev@gmail.come"],
    subject: "New Impact Order",
    react: EmailTemplate({
      firstName,
      lastName,
      email,
      number: phone || "no phone number",
      text: text || "no message",
    }) as React.ReactElement,
  });

  if (error) {
    return Response.json({ error }, { status: 500 });
  }

  return Response.json({ data });
}
