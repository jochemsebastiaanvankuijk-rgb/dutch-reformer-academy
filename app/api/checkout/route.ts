import { NextRequest, NextResponse } from "next/server";

const packagePrices: Record<string, number> = {
  "trainer-level-a": 1000,
  "trainer-level-b": 799,
  "trainer-level-c": 799
};

export async function POST(request: NextRequest) {
  const apiKey = process.env.MOLLIE_API_KEY;
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || request.nextUrl.origin;

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Mollie is nog niet gekoppeld. Voeg MOLLIE_API_KEY toe om iDEAL-betalingen te activeren."
      },
      { status: 503 }
    );
  }

  const body = await request.json();
  const packageSlug = String(body.packageSlug || "");
  const amount = packagePrices[packageSlug];

  if (!amount) {
    return NextResponse.json(
      { error: "Ongeldig opleidingstraject." },
      { status: 400 }
    );
  }

  const description = `Dutch Reformer Academy - ${body.packageName || "Opleiding"}`;
  const isLocalhost = siteUrl.includes("localhost") || siteUrl.includes("127.0.0.1");

  const molliePayload: Record<string, unknown> = {
    amount: {
      currency: "EUR",
      value: amount.toFixed(2)
    },
    method: "ideal",
    description,
    redirectUrl: `${siteUrl}/bedankt`,
    metadata: {
      packageSlug,
      packageName: body.packageName,
      date: body.date,
      name: body.name,
      email: body.email,
      phone: body.phone,
      message: body.message
    }
  };

  if (!isLocalhost) {
    molliePayload.webhookUrl = `${siteUrl}/api/mollie-webhook`;
  }

  const response = await fetch("https://api.mollie.com/v2/payments", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(molliePayload)
  });

  const payment = await response.json();

  if (!response.ok) {
    return NextResponse.json(
      { error: payment.detail || "Mollie betaling kon niet worden aangemaakt." },
      { status: response.status }
    );
  }

  return NextResponse.json({
    paymentId: payment.id,
    checkoutUrl: payment?._links?.checkout?.href
  });
}
