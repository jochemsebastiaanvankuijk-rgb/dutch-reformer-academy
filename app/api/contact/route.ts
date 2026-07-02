import { NextResponse } from "next/server";

function escapeHtml(value: unknown) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  const body = await request.json();
  const resendApiKey = process.env.RESEND_API_KEY;
  const contactToEmail = process.env.CONTACT_TO_EMAIL;
  const contactFromEmail =
    process.env.CONTACT_FROM_EMAIL || "Reformer Pilates Academy <onboarding@resend.dev>";

  const isTeamQuote = body.type === "Team offerte";
  const requiredFields = isTeamQuote
    ? ["name", "email", "participants"]
    : ["name", "email", "question"];
  const missingField = requiredFields.find((field) => !String(body[field] || "").trim());

  if (missingField) {
    return NextResponse.json(
      { error: "Niet alle verplichte velden zijn ingevuld." },
      { status: 400 }
    );
  }

  const lead = {
    type: body.type || "Contactvraag",
    name: body.name,
    email: body.email,
    phone: body.phone || "",
    company: body.company || "",
    level: body.level || "",
    participants: body.participants || "",
    question: body.question
  };

  if (!resendApiKey || !contactToEmail) {
    console.log("Nieuwe contactaanvraag", lead);

    return NextResponse.json(
      {
        error:
          "E-mail is nog niet gekoppeld. Voeg RESEND_API_KEY en CONTACT_TO_EMAIL toe in Vercel."
      },
      { status: 503 }
    );
  }

  const rows = [
    ["Type", lead.type],
    ["Naam", lead.name],
    ["E-mail", lead.email],
    ["Telefoon", lead.phone],
    ["Bedrijf/studio", lead.company],
    ["Opleiding", lead.level],
    ["Aantal deelnemers", lead.participants],
    ["Vraag/opmerking", lead.question]
  ].filter(([, value]) => String(value || "").trim());

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: contactFromEmail,
      to: [contactToEmail],
      reply_to: String(lead.email),
      subject: `Nieuwe ${lead.type} - ${lead.name}`,
      html: `
        <div style="font-family: Inter, Arial, sans-serif; color: #181716; line-height: 1.6;">
          <h1 style="font-size: 24px; margin-bottom: 16px;">Nieuwe aanvraag via Reformer Pilates Academy</h1>
          <table style="width: 100%; border-collapse: collapse;">
            ${rows
              .map(
                ([label, value]) => `
                  <tr>
                    <td style="padding: 10px 12px; border-bottom: 1px solid #eee; font-weight: 700; width: 180px;">${escapeHtml(label)}</td>
                    <td style="padding: 10px 12px; border-bottom: 1px solid #eee;">${escapeHtml(value)}</td>
                  </tr>
                `
              )
              .join("")}
          </table>
        </div>
      `
    })
  });

  if (!response.ok) {
    const error = await response.text();
    console.error("Contactmail kon niet worden verstuurd", error);

    return NextResponse.json(
      { error: "De aanvraag kon niet per e-mail worden verstuurd." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
