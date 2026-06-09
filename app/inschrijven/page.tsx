"use client";

import { FormEvent, Suspense, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, Check, Lock, ShieldCheck } from "lucide-react";
import { trainingDates } from "@/lib/trainingDates";

const packages = [
  {
    slug: "reformer-instructeur-level-a",
    name: "Reformer Instructeur Level A",
    price: 999,
    days: "5 opleidingsdagen",
    description: "De volledige basisopleiding om zelfstandig professionele reformerlessen te verzorgen."
  },
  {
    slug: "reformer-instructeur-level-b",
    name: "Reformer Instructeur Level B",
    price: 799,
    days: "3 opleidingsdagen",
    description: "Verdieping voor progressies, programmering en verfijnde coaching."
  },
  {
    slug: "reformer-instructeur-level-c",
    name: "Reformer Instructeur Level C",
    price: 799,
    days: "3 opleidingsdagen",
    description: "Voor trainers die willen doorgroeien richting mentoring en docentontwikkeling."
  }
];

const vatRate = 0.21;

type CheckoutResponse = {
  checkoutUrl?: string;
  error?: string;
};

function RegisterPageContent() {
  const searchParams = useSearchParams();
  const packageParam = searchParams.get("pakket");
  const initialPackage = packages.some((item) => item.slug === packageParam)
    ? String(packageParam)
    : "reformer-instructeur-level-a";
  const initialDate = searchParams.get("datum") || trainingDates[0].date;
  const dateExists = trainingDates.some((item) => item.date === initialDate);
  const [selectedPackage, setSelectedPackage] = useState(initialPackage);
  const [selectedDate, setSelectedDate] = useState(
    dateExists ? initialDate : trainingDates[0].date
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const activePackage = useMemo(
    () => packages.find((item) => item.slug === selectedPackage) || packages[0],
    [selectedPackage]
  );
  const totalInclVat = activePackage.price * (1 + vatRate);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      packageSlug: activePackage.slug,
      packageName: activePackage.name,
      date: selectedDate,
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      message: String(formData.get("message") || "")
    };

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      const data = (await response.json()) as CheckoutResponse;

      if (!response.ok || !data.checkoutUrl) {
        throw new Error(data.error || "De betaling kon niet gestart worden.");
      }

      window.location.href = data.checkoutUrl;
    } catch (checkoutError) {
      setError(
        checkoutError instanceof Error
          ? checkoutError.message
          : "De betaling kon niet gestart worden."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-porcelain">
      <section className="border-b border-ink/10 bg-ink py-6 text-white">
        <div className="section-shell flex items-center justify-between gap-6">
          <div>
            <p className="font-display text-2xl font-bold leading-none">
              Reformer Pilates Academy
            </p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.28em] text-white/58">
              Inschrijving
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:bg-white hover:text-ink"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Terug
          </Link>
        </div>
      </section>

      <section className="section-shell grid gap-10 py-12 lg:grid-cols-[1fr_420px] lg:py-16">
        <form
          onSubmit={handleSubmit}
          className="rounded-lg border border-ink/10 bg-white p-6 shadow-soft sm:p-8"
        >
          <p className="eyebrow mb-4">Reserveer jouw plek</p>
          <h1 className="font-display text-4xl font-bold leading-tight text-ink sm:text-6xl">
            Inschrijven voor de opleiding
          </h1>
          <p className="mt-5 max-w-2xl leading-8 text-graphite/70">
            Vul je gegevens in. Daarna word je doorgestuurd naar de beveiligde
            iDEAL-betaalomgeving.
          </p>

          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-graphite">
              Traject
              <select
                value={selectedPackage}
                onChange={(event) => setSelectedPackage(event.target.value)}
                className="min-h-12 rounded-lg border border-ink/10 bg-porcelain px-4 outline-none transition focus:border-bronze focus:ring-4 focus:ring-bronze/10"
              >
                {packages.map((item) => (
                  <option key={item.slug} value={item.slug}>
                    {item.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium text-graphite">
              Gewenste datum
              <select
                value={selectedDate}
                onChange={(event) => setSelectedDate(event.target.value)}
                className="min-h-12 rounded-lg border border-ink/10 bg-porcelain px-4 outline-none transition focus:border-bronze focus:ring-4 focus:ring-bronze/10"
              >
                {trainingDates.map((item) => (
                  <option key={item.date} value={item.date}>
                    {item.date}
                    {item.disabled ? " - wachtlijst" : ""}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium text-graphite">
              Naam
              <input
                required
                name="name"
                autoComplete="name"
                className="min-h-12 rounded-lg border border-ink/10 bg-porcelain px-4 outline-none transition focus:border-bronze focus:ring-4 focus:ring-bronze/10"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-graphite">
              E-mail
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                className="min-h-12 rounded-lg border border-ink/10 bg-porcelain px-4 outline-none transition focus:border-bronze focus:ring-4 focus:ring-bronze/10"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-graphite sm:col-span-2">
              Telefoon
              <input
                required
                type="tel"
                name="phone"
                autoComplete="tel"
                className="min-h-12 rounded-lg border border-ink/10 bg-porcelain px-4 outline-none transition focus:border-bronze focus:ring-4 focus:ring-bronze/10"
              />
            </label>
          </div>

          <label className="mt-5 grid gap-2 text-sm font-medium text-graphite">
            Opmerking
            <textarea
              name="message"
              rows={4}
              className="rounded-lg border border-ink/10 bg-porcelain px-4 py-3 outline-none transition focus:border-bronze focus:ring-4 focus:ring-bronze/10"
            />
          </label>

          <div className="mt-7 rounded-lg border border-ink/10 bg-linen p-4">
            <div className="flex items-center gap-3">
              <ShieldCheck aria-hidden="true" className="h-5 w-5 text-bronze" />
              <p className="font-semibold text-ink">Betaling via iDEAL</p>
            </div>
            <p className="mt-2 text-sm leading-6 text-graphite/70">
              Je betaalt veilig via Mollie. Na betaling ontvang je een bevestiging
              van je reservering.
            </p>
          </div>

          {error ? (
            <p className="mt-5 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="cta-button mt-7 w-full disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Betaling starten..." : "Ga naar iDEAL betaling"}
            <Lock aria-hidden="true" className="h-4 w-4" />
          </button>
        </form>

        <aside className="lg:sticky lg:top-8">
          <div className="rounded-lg border border-ink/10 bg-white p-6 shadow-soft">
            <p className="eyebrow mb-4">Samenvatting</p>
            <h2 className="font-display text-4xl font-bold text-ink">
              {activePackage.name}
            </h2>
            <p className="mt-3 leading-7 text-graphite/70">
              {activePackage.description}
            </p>
            <div className="my-7 h-px bg-ink/10" />
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <span className="text-graphite/70">Traject</span>
                <span className="font-semibold text-ink">{activePackage.days}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-graphite/70">Datum</span>
                <span className="font-semibold text-ink">{selectedDate}</span>
              </div>
              <div className="flex items-center justify-between gap-4 border-t border-ink/10 pt-4">
                <span className="text-graphite/70">Prijs excl. btw</span>
                <span className="font-semibold text-ink">
                  €{activePackage.price.toLocaleString("nl-NL")}
                </span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-graphite/70">21% btw</span>
                <span className="font-semibold text-ink">
                  €
                  {(totalInclVat - activePackage.price).toLocaleString("nl-NL", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })}
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 border-t border-ink/10 pt-4">
                <span className="text-lg font-semibold text-ink">Totaal incl. btw</span>
                <span className="font-display text-4xl font-bold text-ink">
                  €
                  {totalInclVat.toLocaleString("nl-NL", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-lg border border-ink/10 bg-ink p-6 text-white shadow-soft">
            {[
              "Beveiligde betaling",
              "iDEAL via Mollie",
              "Bevestiging na betaling"
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 py-2">
                <Check aria-hidden="true" className="h-4 w-4 text-clay" />
                <span className="text-sm text-white/78">{item}</span>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
}

export default function RegisterPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-porcelain px-5">
          <div className="rounded-lg border border-ink/10 bg-white p-8 text-center shadow-soft">
            <p className="eyebrow mb-3">Inschrijving</p>
            <p className="font-display text-3xl font-bold text-ink">Laden...</p>
          </div>
        </main>
      }
    >
      <RegisterPageContent />
    </Suspense>
  );
}
