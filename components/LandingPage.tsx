"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  CalendarDays,
  Car,
  Check,
  ChevronDown,
  CircleDot,
  Dumbbell,
  HeartPulse,
  MapPin,
  Medal,
  MessageCircle,
  Move3D,
  ParkingCircle,
  PenLine,
  ShieldCheck,
  Star,
  Train,
  UserCheck,
  Users
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FormEvent, useState } from "react";

const heroImage =
  "https://images.unsplash.com/photo-1600881333168-2ef49b341f30?auto=format&fit=crop&w=2200&q=82";

const trainerImages = [
  "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1554244933-d876deb6b2ff?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80"
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

const whyCards = [
  {
    icon: Users,
    title: "Uiterst persoonlijk",
    text: "Kleine groepen zorgen voor maximale aandacht. Er is altijd voldoende ruimte voor het stellen van vragen."
  },
  {
    icon: Move3D,
    title: "Praktijkgericht leren",
    text: "De gehele training vindt plaats in de studio op de reformer. Super praktisch."
  },
  {
    icon: Medal,
    title: "Ervaren trainers",
    text: "Leer van professionals met jarenlange ervaring op de reformer en in lesgeven."
  },
  {
    icon: UserCheck,
    title: "Direct inzetbaar",
    text: "Na de training ben je klaar om te starten met het zelfstandig lesgeven."
  }
];

const learnCards = [
  { icon: HeartPulse, title: "Anatomie en houding" },
  { icon: ShieldCheck, title: "Veilig werken met de reformer" },
  { icon: Dumbbell, title: "Oefeningen voor beginners en gevorderden" },
  { icon: PenLine, title: "Lesopbouw" },
  { icon: MessageCircle, title: "Cueing en coaching" },
  { icon: CircleDot, title: "Correcties en techniek" }
];

const program = [
  ["Dag 1", "Fundamenten van Reformer Pilates"],
  ["Dag 2", "Beginner oefeningen en techniek"],
  ["Dag 3", "Intermediate progressies"],
  ["Dag 4", "Lesgeven en coaching"],
  ["Dag 5", "Praktijkexamen en certificering"]
];

const dates = [
  {
    date: "27 t/m 31 juli",
    filled: 12,
    status: "12 van 15 plekken bezet",
    tone: "Nog 3 plekken",
    disabled: false
  },
  {
    date: "10 t/m 14 augustus",
    filled: 8,
    status: "8 van 15 plekken bezet",
    tone: "Beschikbaar",
    disabled: false
  },
  {
    date: "24 t/m 28 augustus",
    filled: 15,
    status: "Volgeboekt",
    tone: "Wachtlijst",
    disabled: true
  }
];

const reviews = [
  {
    quote:
      "Een van de meest complete opleidingen die ik heb gevolgd. Direct toepasbaar in mijn studio.",
    name: "Sanne de Vries",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80"
  },
  {
    quote:
      "De persoonlijke begeleiding maakte het verschil. Ik voelde mij na vijf dagen klaar om les te geven.",
    name: "Mila Janssen",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=80"
  },
  {
    quote:
      "Premium locatie, sterke methodiek en trainers die echt zien wat je nodig hebt.",
    name: "Nora Bakker",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=240&q=80"
  },
  {
    quote:
      "De balans tussen anatomie, techniek en praktijk was precies goed. Zeer professioneel.",
    name: "Eva Smits",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=240&q=80"
  },
  {
    quote:
      "Kleine groep, hoge standaard. Dit voelde als een boutique academy in plaats van een cursus.",
    name: "Lotte Meijer",
    image:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=240&q=80"
  },
  {
    quote:
      "Ik heb mijn lessen direct kunnen verbeteren. De cueing modules waren uitzonderlijk waardevol.",
    name: "Iris van Dijk",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&q=80"
  }
];

const faqs = [
  [
    "Heb ik ervaring nodig?",
    "Basiservaring met Pilates, sport of beweging is waardevol, maar je hoeft nog geen instructeur te zijn. We starten bij de fundamenten en bouwen intensief op."
  ],
  [
    "Krijg ik een certificaat?",
    "Ja. Na succesvolle afronding ontvang je een certificaat van de Dutch Reformer Academy."
  ],
  [
    "Kan ik in termijnen betalen?",
    "Ja, termijnbetaling is mogelijk. Vermeld dit bij je reservering, dan nemen we de opties persoonlijk met je door."
  ],
  [
    "Wat gebeurt er als ik een dag mis?",
    "Omdat de opleiding compact en praktijkgericht is, adviseren we volledige aanwezigheid. In overleg bekijken we een passende inhaaloplossing."
  ],
  [
    "Kan ik direct lesgeven na de opleiding?",
    "Na afronding beschik je over de praktische basis, lesopbouw en techniek om zelfstandig professionele reformer lessen te verzorgen."
  ],
  [
    "Hoe groot is de groep?",
    "We werken met kleine groepen, zodat er voldoende aandacht is voor techniek, vragen en persoonlijke feedback tijdens het oefenen."
  ],
  [
    "Waar vindt de opleiding plaats?",
    "De opleiding vindt plaats in Roosendaal, in een luxe en volledig uitgeruste reformer studio voorzien van airco."
  ],
  [
    "Is lesmateriaal inbegrepen?",
    "Ja. Het lesmateriaal is inbegrepen, zodat je tijdens en na de opleiding kunt blijven oefenen, voorbereiden en teruglezen."
  ],
  [
    "Is er een praktijkexamen?",
    "Ja. Op de laatste dag werk je toe naar een praktijkmoment waarin techniek, lesopbouw, cueing en veiligheid samenkomen."
  ],
  [
    "Kan ik doorgroeien na Foundation?",
    "Ja. Na Foundation kun je verder verdiepen richting Advanced Trainer en uiteindelijk Master Trainer."
  ]
];

const locationItems: Array<{
  icon: LucideIcon;
  title: string;
  text: string;
}> = [
  {
    icon: MapPin,
    title: "Studio Roosendaal",
    text: "Centraal gelegen boutique studio"
  },
  {
    icon: ParkingCircle,
    title: "Gratis parkeren",
    text: "Direct bij de studio"
  },
  {
    icon: Train,
    title: "Goed bereikbaar met OV",
    text: "Korte verbinding vanaf station"
  },
  {
    icon: Car,
    title: "Rustige omgeving",
    text: "Ideaal voor focus en praktijk"
  }
];

const packages = [
  {
    name: "Foundation",
    price: "€1.000",
    text: "De volledige 5-daagse basisopleiding om zelfstandig professionele reformerlessen te verzorgen.",
    features: [
      "5 opleidingsdagen",
      "Lesuren van 10:00 tot 18:00",
      "Lesmateriaal",
      "Praktijkbegeleiding",
      "Certificaat",
      "Koffie en thee"
    ]
  },
  {
    name: "Advanced Trainer",
    price: "Op aanvraag",
    text: "Verdieping voor trainers die meer willen werken met progressies, programmering en verfijnde coaching.",
    features: [
      "Advanced reformer progressies",
      "Verdiepende techniek",
      "Lesopbouw voor verschillende niveaus",
      "Coaching en cueing op hoger niveau"
    ]
  },
  {
    name: "Master Trainer",
    price: "Op aanvraag",
    text: "Voor ervaren trainers die hun rol willen uitbreiden richting mentoring, docentontwikkeling en opleiding.",
    features: [
      "Train-the-trainer verdieping",
      "Docentontwikkeling",
      "Begeleiden van instructeurs",
      "Masterclass format en evaluatie"
    ]
  }
];

function SectionIntro({
  eyebrow,
  title,
  text,
  light = false
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-3xl text-center"
    >
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h2
        className={`font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p className={`mt-5 body-copy ${light ? "text-white/70" : ""}`}>{text}</p>
      ) : null}
    </motion.div>
  );
}

function PrimaryCta({ light = false }: { light?: boolean }) {
  return (
    <a href="#inschrijven" className={light ? "cta-button-light" : "cta-button"}>
      Reserveer jouw plek
      <ChevronDown aria-hidden="true" className="h-4 w-4 -rotate-90" />
    </a>
  );
}

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="overflow-hidden bg-porcelain">
      <section className="relative flex min-h-screen items-start pt-32 text-white sm:pt-36 lg:pt-40">
        <div className="image-vignette absolute inset-0">
          <Image
            src={heroImage}
            alt="Reformer Pilates training in een luxe studio"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-x-0 top-0 z-20 border-b border-white/10 bg-ink/10 backdrop-blur-md">
          <div className="section-shell flex h-20 items-center justify-between">
            <div>
              <p className="font-display text-xl font-bold leading-none sm:text-2xl">
                <span className="sm:hidden">RPA</span>
                <span className="hidden sm:inline">Dutch Reformer Academy</span>
              </p>
              <p className="mt-1 hidden text-[11px] uppercase tracking-[0.28em] text-white/58 sm:block">
                Instructor Education
              </p>
            </div>
          </div>
        </div>
        <div className="section-shell relative z-10">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_360px]">
            <motion.div
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-5xl"
            >
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-clay/90">
                Premium 5-daagse instructeursopleiding
              </p>
              <h1 className="text-balance font-display text-5xl font-bold leading-[0.9] sm:text-7xl lg:text-[5.8rem]">
                Word Gecertificeerd Reformer Pilates Instructeur
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
                Een intensieve 5-daagse opleiding in Roosendaal, gegeven door
                ervaren master trainers. Praktijkgericht, persoonlijk en exclusief
                voor maximaal 15 deelnemers per groep.
              </p>
              <div className="mt-9">
                <PrimaryCta light />
              </div>
            </motion.div>
            <motion.aside
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.32, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-16 hidden rounded-lg border border-white/15 bg-white/[0.08] p-6 shadow-soft backdrop-blur-2xl lg:block"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-clay">Cohort</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  ["40", "contacturen"],
                  ["15", "deelnemers max"],
                  ["5", "opleidingsdagen"],
                  ["1", "certificaat"]
                ].map(([value, label]) => (
                  <div key={label} className="border-t border-white/16 pt-4">
                    <p className="font-display text-5xl font-bold leading-none">
                      {value}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/58">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="section-shell">
          <SectionIntro
            eyebrow="Academy standard"
            title="Waarom kiezen voor onze Reformer Pilates Opleiding?"
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyCards.map(({ icon: Icon, title, text }, index) => (
              <motion.article
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.06, duration: 0.6 }}
                className="premium-card rounded-lg p-7"
              >
                <div className="mb-8 flex items-start justify-between gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-bronze/15 bg-linen text-bronze">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <span className="font-display text-4xl font-bold leading-none text-ink/10">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-ink">{title}</h3>
                <p className="mt-3 leading-7 text-graphite/70">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="luxury-band py-24 sm:py-32">
        <div className="section-shell">
          <SectionIntro title="Wat leer je tijdens deze opleiding?" />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {learnCards.map(({ icon: Icon, title }, index) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.04, duration: 0.58 }}
                className="premium-card flex min-h-36 items-center gap-5 rounded-lg p-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-white shadow-glow">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold leading-snug text-ink">{title}</h3>
              </motion.div>
            ))}
          </div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mt-12 max-w-2xl text-center text-xl font-medium leading-8 text-graphite"
          >
            Na afloop kun je zelfstandig professionele reformerlessen verzorgen.
          </motion.p>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="section-shell">
          <SectionIntro eyebrow="5 dagen, 40 contacturen" title="Opleidingsprogramma" />
          <div className="mx-auto mt-16 max-w-4xl">
            {program.map(([day, title], index) => (
              <motion.div
                key={day}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.06, duration: 0.6 }}
                className="relative grid gap-5 border-l border-ink/10 pb-10 pl-8 last:pb-0 sm:grid-cols-[140px_1fr]"
              >
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-porcelain bg-bronze shadow-glow" />
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-bronze">
                  {day}
                </p>
                <div className="rounded-lg border border-ink/10 bg-white/90 p-6 shadow-soft">
                  <h3 className="text-2xl font-semibold text-ink">{title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 text-white sm:py-32">
        <div className="section-shell">
          <SectionIntro eyebrow="Master trainers" title="Ontmoet onze trainers" light />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {trainerImages.map((src, index) => (
              <motion.article
                key={src}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.08, duration: 0.62 }}
                className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] shadow-soft"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={src}
                    alt={`Trainer Naam ${index + 1}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="border-t border-white/10 p-7">
                  <h3 className="text-2xl font-semibold">Trainer Naam</h3>
                  <p className="mt-1 text-sm uppercase tracking-[0.22em] text-clay">
                    Master Trainer Reformer Pilates
                  </p>
                  <p className="mt-5 leading-7 text-white/70">
                    15+ jaar ervaring in Pilates, bewegingsleer en
                    docentontwikkeling. Gespecialiseerd in het opleiden van
                    nieuwe instructeurs.
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="section-shell">
          <SectionIntro title="Beschikbare opleidingsdata" />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {dates.map((item, index) => {
              const progress = Math.round((item.filled / 15) * 100);
              return (
                <motion.article
                  key={item.date}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.06, duration: 0.6 }}
                className="premium-card rounded-lg p-7"
              >
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <CalendarDays aria-hidden="true" className="h-7 w-7 text-bronze" />
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        item.disabled
                          ? "bg-ink text-white"
                          : "bg-bronze/10 text-bronze"
                      }`}
                    >
                      {item.tone}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl font-bold text-ink">{item.date}</h3>
                  <p className="mt-3 text-graphite/70">{item.status}</p>
                  <div className="mt-7 h-1.5 rounded-full bg-ink/10">
                    <div
                      className="h-full rounded-full bg-bronze"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="mt-2 text-right text-sm text-graphite/60">{progress}%</p>
                  <div className="mt-7">
                    <PrimaryCta />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="luxury-band py-24 sm:py-32">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold sm:text-6xl">Locatie</h2>
            <p className="mt-6 body-copy">
              De opleiding vindt plaats in Roosendaal in een zeer luxe en
              volledig uitgeruste reformer studio voorzien van airco.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {locationItems.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-bronze">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-graphite/60">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[420px] overflow-hidden rounded-lg border border-ink/10 bg-porcelain shadow-soft"
          >
            <iframe
              title="Kaart van Roosendaal"
              src="https://www.google.com/maps?q=Roosendaal%2C%20Nederland&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0 grayscale"
            />
            <div className="absolute inset-0 bg-ink/10 mix-blend-multiply" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/42 to-transparent" />
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-lg border border-white/55 bg-white/82 px-8 py-7 text-center shadow-soft backdrop-blur-xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white shadow-glow">
                <MapPin aria-hidden="true" className="h-7 w-7" />
              </div>
              <p className="text-xl font-semibold text-ink">Dutch Reformer Academy</p>
              <p className="mt-2 text-graphite/60">Roosendaal</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="inschrijven" className="py-24 sm:py-32">
        <div className="section-shell">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-ink"
          >
            <div className="mb-8">
              <p className="eyebrow mb-4">Investering</p>
              <h2 className="font-display text-4xl font-bold leading-tight sm:text-6xl">
                Kies jouw opleidingstraject
              </h2>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {packages.map((item, index) => (
                <article
                  key={item.name}
                  className={`rounded-lg border p-6 shadow-soft ${
                    index === 0
                      ? "border-ink bg-ink text-white"
                      : "border-ink/10 bg-white/90 text-ink"
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p
                        className={`text-xs font-semibold uppercase tracking-[0.28em] ${
                          index === 0 ? "text-clay" : "text-bronze"
                        }`}
                      >
                        Pakket {index + 1}
                      </p>
                      <h3 className="mt-3 font-display text-4xl font-bold">
                        {item.name}
                      </h3>
                    </div>
                    <p className="font-display text-3xl font-bold">{item.price}</p>
                  </div>
                  <p
                    className={`mt-4 leading-7 ${
                      index === 0 ? "text-white/70" : "text-graphite/70"
                    }`}
                  >
                    {item.text}
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {item.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check
                          aria-hidden="true"
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            index === 0 ? "text-clay" : "text-bronze"
                          }`}
                        />
                        <span
                          className={`text-sm leading-6 ${
                            index === 0 ? "text-white/80" : "text-graphite/70"
                          }`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-10">
              <PrimaryCta />
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mt-14 max-w-4xl rounded-lg border border-ink/10 bg-white/92 p-6 shadow-soft sm:p-8"
          >
            <div className="mb-8">
              <p className="eyebrow mb-3">Inschrijving</p>
              <h2 className="font-display text-4xl font-bold text-ink">
                Reserveer jouw plek
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-graphite">
                Naam
                <input
                  required
                  name="name"
                  className="min-h-12 rounded-lg border border-ink/10 bg-porcelain px-4 outline-none transition focus:border-bronze focus:ring-4 focus:ring-bronze/10"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-graphite">
                E-mail
                <input
                  required
                  type="email"
                  name="email"
                  className="min-h-12 rounded-lg border border-ink/10 bg-porcelain px-4 outline-none transition focus:border-bronze focus:ring-4 focus:ring-bronze/10"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-graphite">
                Telefoon
                <input
                  required
                  type="tel"
                  name="phone"
                  className="min-h-12 rounded-lg border border-ink/10 bg-porcelain px-4 outline-none transition focus:border-bronze focus:ring-4 focus:ring-bronze/10"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-graphite">
                Gewenste datum
                <select
                  name="date"
                  className="min-h-12 rounded-lg border border-ink/10 bg-porcelain px-4 outline-none transition focus:border-bronze focus:ring-4 focus:ring-bronze/10"
                >
                  <option>27 t/m 31 juli</option>
                  <option>10 t/m 14 augustus</option>
                  <option>Wachtlijst 24 t/m 28 augustus</option>
                </select>
              </label>
            </div>
            <label className="mt-4 grid gap-2 text-sm font-medium text-graphite">
              Bericht
              <textarea
                name="message"
                rows={4}
                className="rounded-lg border border-ink/10 bg-porcelain px-4 py-3 outline-none transition focus:border-bronze focus:ring-4 focus:ring-bronze/10"
              />
            </label>
            <button type="submit" className="cta-button mt-6 w-full sm:w-auto">
              Reserveer jouw plek
              <ChevronDown aria-hidden="true" className="h-4 w-4 -rotate-90" />
            </button>
            {submitted ? (
              <p className="mt-4 rounded-lg bg-bronze/10 px-4 py-3 text-sm font-medium text-bronze">
                Dank je. Je reserveringsaanvraag is ontvangen.
              </p>
            ) : null}
          </motion.form>
        </div>
      </section>

      <section className="luxury-band py-24 sm:py-32">
        <div className="section-shell">
          <SectionIntro title="Wat deelnemers zeggen" />
          <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {reviews.map((review, index) => (
              <motion.article
                key={review.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.04, duration: 0.58 }}
                className="premium-card mb-5 break-inside-avoid rounded-lg p-7"
              >
                <div className="mb-5 flex text-bronze" aria-label="5 sterren">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      aria-hidden="true"
                      className="h-4 w-4 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-lg leading-8 text-graphite/80">
                  “{review.quote}”
                </blockquote>
                <div className="mt-7 flex items-center gap-4 border-t border-ink/10 pt-5">
                  <Image
                    src={review.image}
                    alt={`Portretfoto van ${review.name}`}
                    width={48}
                    height={48}
                    sizes="48px"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-ink">{review.name}</p>
                    <p className="mt-0.5 text-xs uppercase tracking-[0.2em] text-graphite/50">
                      Deelnemer
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="section-shell">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="eyebrow mb-4">Certificering</p>
            <h2 className="font-display text-4xl font-bold sm:text-6xl">
              Na afronding
            </h2>
            <p className="mt-6 body-copy">
              Na succesvolle afronding ontvang je een certificaat van de Reformer
              Dutch Reformer Academy als bewijs van deelname en behaalde competenties.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative mx-auto mt-12 w-full max-w-2xl rounded-lg border border-ink/10 bg-white p-8 shadow-soft sm:p-12"
          >
            <div className="rounded-lg border border-bronze/30 p-8 text-center">
              <Award aria-hidden="true" className="mx-auto h-14 w-14 text-bronze" />
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.32em] text-bronze">
                Certificate of Completion
              </p>
              <h3 className="mt-5 font-display text-4xl font-bold text-ink">
                Dutch Reformer Academy
              </h3>
              <div className="mx-auto my-8 h-px w-32 bg-bronze/40" />
              <p className="text-sm leading-7 text-graphite/60">
                Toegekend na het afronden van de 5-daagse Reformer Pilates
                Instructeursopleiding.
              </p>
              <BadgeCheck aria-hidden="true" className="mx-auto mt-8 h-8 w-8 text-bronze" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="luxury-band py-24 sm:py-32">
        <div className="section-shell">
          <SectionIntro title="Veelgestelde vragen" />
          <div className="mx-auto mt-14 max-w-3xl divide-y divide-ink/10 rounded-lg border border-ink/10 bg-white shadow-soft">
            {faqs.map(([question, answer], index) => (
              <div key={question}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left text-lg font-semibold text-ink transition hover:bg-linen/70 sm:px-7"
                  aria-expanded={openFaq === index}
                >
                  {question}
                  <ChevronDown
                    aria-hidden="true"
                    className={`h-5 w-5 shrink-0 transition ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? "auto" : 0, opacity: openFaq === index ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-6 leading-7 text-graphite/70 sm:px-7">
                    {answer}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 text-white sm:py-32">
        <div className="section-shell text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-4xl"
          >
            <h2 className="font-display text-5xl font-bold leading-tight sm:text-7xl">
              Start jouw carrière als Reformer Pilates Instructeur
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Kleine groepen. Persoonlijke begeleiding. Maximaal 15 deelnemers
              per opleiding.
            </p>
            <div className="mt-10">
              <PrimaryCta light />
            </div>
            <p className="mt-5 text-sm font-medium text-clay">
              Nog enkele plaatsen beschikbaar.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/20 bg-ink/90 p-3 shadow-glow backdrop-blur-xl sm:hidden">
        <PrimaryCta light />
      </div>
    </main>
  );
}
