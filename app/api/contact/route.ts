import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

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

  console.log("Nieuwe contactaanvraag", {
    type: body.type || "Contactvraag",
    name: body.name,
    email: body.email,
    phone: body.phone || "",
    company: body.company || "",
    level: body.level || "",
    participants: body.participants || "",
    question: body.question
  });

  return NextResponse.json({ ok: true });
}
