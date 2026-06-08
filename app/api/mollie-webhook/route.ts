import { NextResponse } from "next/server";

export async function POST() {
  // Mollie stuurt hier statusupdates naartoe zodra de site publiek bereikbaar is.
  // Koppel dit later aan e-mail, CRM of een database als reserveringen opgeslagen moeten worden.
  return NextResponse.json({ received: true });
}
