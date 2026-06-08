import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ThanksPage() {
  return (
    <main className="flex min-h-screen items-center bg-porcelain py-16">
      <section className="section-shell">
        <div className="mx-auto max-w-2xl rounded-lg border border-ink/10 bg-white p-8 text-center shadow-soft sm:p-12">
          <CheckCircle aria-hidden="true" className="mx-auto h-14 w-14 text-bronze" />
          <p className="eyebrow mt-8">Bedankt</p>
          <h1 className="mt-4 font-display text-5xl font-bold leading-tight text-ink">
            Je betaling is gestart
          </h1>
          <p className="mt-5 leading-8 text-graphite/70">
            Zodra de betaling is verwerkt, ontvang je een bevestiging van je
            reservering voor de Dutch Reformer Academy.
          </p>
          <Link href="/" className="cta-button mt-8">
            Terug naar de academy
          </Link>
        </div>
      </section>
    </main>
  );
}
