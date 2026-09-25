import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Alle felter er påkrævede" },
        { status: 400 }
      );
    }

    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Fodboldlandshold.dk <noreply@fodboldlandshold.dk>",
      to: "info@mondomedia.dk",
      replyTo: email,
      subject: `Kontaktformular: ${name}`,
      text: `Navn: ${name}\nE-mail: ${email}\n\nBesked:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Der opstod en fejl" },
      { status: 500 }
    );
  }
}
