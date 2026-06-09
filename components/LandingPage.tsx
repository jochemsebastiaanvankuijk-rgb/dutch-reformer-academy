"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { trainingDates as dates } from "@/lib/trainingDates";
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
  Mail,
  MapPin,
  Medal,
  MessageCircle,
  Move3D,
  ParkingCircle,
  PenLine,
  Phone,
  Send,
  ShieldCheck,
  Star,
  Train,
  UserCheck,
  Users
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";

const heroImage =
  "https://images.unsplash.com/photo-1600881333168-2ef49b341f30?auto=format&fit=crop&w=2200&q=82";

const trainerImages = [
  "https://images.pexels.com/photos/6739930/pexels-photo-6739930.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/28246590/pexels-photo-28246590.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/20044028/pexels-photo-20044028.jpeg?auto=compress&cs=tinysrgb&w=900"
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

const reviews = [
  {
    quote:
      "Een van de meest complete opleidingen die ik heb gevolgd. Direct toepasbaar in mijn studio.",
    name: "Sanne",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80"
  },
  {
    quote:
      "De persoonlijke begeleiding maakte het verschil. Ik voelde mij na vijf dagen klaar om les te geven.",
    name: "Mila",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=80"
  },
  {
    quote:
      "Premium locatie, sterke methodiek en trainers die echt zien wat je nodig hebt.",
    name: "Nora",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=240&q=80"
  },
  {
    quote:
      "De balans tussen anatomie, techniek en praktijk was precies goed. Zeer professioneel.",
    name: "Eva",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=240&q=80"
  },
  {
    quote:
      "Kleine groep, hoge standaard. Dit voelde als een boutique academy in plaats van een cursus.",
    name: "Lotte",
    image:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=240&q=80"
  },
  {
    quote:
      "Ik heb mijn lessen direct kunnen verbeteren. De cueing modules waren uitzonderlijk waardevol.",
    name: "Iris",
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
    "Ja. Na succesvolle afronding ontvang je een officieel certificaat van de Reformer Pilates Academy."
  ],
  [
    "Kan ik in termijnen betalen?",
    "Nee, het is helaas niet mogelijk om in termijnen te betalen gezien de opleiding 5 aaneengesloten dagen is."
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
    "We werken met groepen van maximaal 15 deelnemers zodat er voldoende aandacht is voor techniek, vragen en persoonlijke feedback tijdens het oefenen."
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
    "Kan ik doorgroeien naar Reformer Instructeur Level B of C?",
    "Ja. Na Reformer Instructeur Level A kun je verder verdiepen richting Reformer Instructeur Level B en uiteindelijk Reformer Instructeur Level C."
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
    name: "Reformer Instructeur Level A",
    price: "€999",
    originalPrice: "€1.499",
    dealLabel: "Summer Deal",
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
    name: "Reformer Instructeur Level B",
    price: "€899",
    text: "Verdieping voor trainers die meer willen werken met progressies, programmering en verfijnde coaching.",
    features: [
      "3 opleidingsdagen",
      "Advanced reformer progressies",
      "Verdiepende techniek",
      "Lesopbouw voor verschillende niveaus",
      "Coaching en cueing op hoger niveau",
      "Opleiding start bij voldoende aanmeldingen"
    ]
  },
  {
    name: "Reformer Instructeur Level C",
    price: "€899",
    text: "Voor ervaren trainers die hun rol willen uitbreiden richting mentoring, docentontwikkeling en opleiding.",
    features: [
      "3 opleidingsdagen",
      "Train-the-trainer verdieping",
      "Docentontwikkeling",
      "Begeleiden van instructeurs",
      "Masterclass format en evaluatie",
      "Opleiding start bij voldoende aanmeldingen"
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

function packageSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

function PrimaryCta({ light = false }: { light?: boolean }) {
  return (
    <a href="/inschrijven" className={light ? "cta-button-light" : "cta-button"}>
      Reserveer jouw plek
      <ChevronDown aria-hidden="true" className="h-4 w-4 -rotate-90" />
    </a>
  );
}

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [contactSent, setContactSent] = useState(false);
  const [contactSending, setContactSending] = useState(false);
  const [quoteSent, setQuoteSent] = useState(false);
  const [quoteSending, setQuoteSending] = useState(false);

  return (
    <main className="overflow-hidden bg-porcelain">
      <section className="relative flex min-h-[60vh] items-start pt-20 text-white sm:pt-24 lg:min-h-[60vh] lg:pt-28">
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
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/45 bg-white/10 text-[0.7rem] font-bold tracking-[0.16em] text-white shadow-glow backdrop-blur-md sm:h-12 sm:w-12 sm:text-xs">
                RPA
              </span>
              <p className="font-display text-[1.35rem] font-bold leading-none sm:text-[2rem]">
                Reformer Pilates Academy
              </p>
            </div>
          </div>
        </div>
        <div className="section-shell relative z-10">
          <div className="grid items-start gap-10">
            <motion.div
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-5xl"
            >
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-clay/90">
                Premium Reformer Pilates instructeur opleidingen
              </p>
              <h1 className="text-balance font-display text-5xl font-bold leading-[0.9] sm:text-7xl lg:text-[5.8rem]">
                Word Gecertificeerd Reformer Pilates Instructeur
                <span className="mt-3 block text-3xl leading-none text-clay sm:text-5xl lg:text-6xl">
                  Level A, B of C
                </span>
              </h1>
            </motion.div>
          </div>
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
            <div className="grid items-stretch gap-4 lg:grid-cols-3">
              {packages.map((item, index) => (
                <article
                  key={item.name}
                  className="flex h-full flex-col rounded-lg border border-ink/10 bg-white/90 p-6 text-ink shadow-soft"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-[0.28em] text-bronze"
                      >
                        Pakket {index + 1}
                      </p>
                      <h3 className="mt-3 font-display text-4xl font-bold">
                        {item.name}
                      </h3>
                    </div>
                    <div className="text-right">
                      {"dealLabel" in item ? (
                        <p className="mb-2 inline-flex rounded-full bg-bronze/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-bronze">
                          {item.dealLabel}
                        </p>
                      ) : null}
                      {"originalPrice" in item ? (
                        <p className="text-sm font-semibold text-graphite/45 line-through">
                          Van {item.originalPrice}
                        </p>
                      ) : null}
                      <p className="font-display text-3xl font-bold">
                        {item.price}
                      </p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-graphite/55">
                        Excl. 21% btw
                      </p>
                      {"dealLabel" in item ? (
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-graphite/55">
                          Nu tijdelijk
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <p
                    className="mt-4 leading-7 text-graphite/70"
                  >
                    {item.text}
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {item.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check
                          aria-hidden="true"
                          className="mt-0.5 h-4 w-4 shrink-0 text-bronze"
                        />
                        <span
                          className="text-sm leading-6 text-graphite/70"
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={`/inschrijven?pakket=${packageSlug(item.name)}`}
                    className="mt-auto inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-ink bg-ink px-5 py-3 text-sm font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-bronze focus:outline-none focus:ring-4 focus:ring-bronze/30"
                  >
                    Reserveer jouw plek
                    <ChevronDown aria-hidden="true" className="h-4 w-4 -rotate-90" />
                  </a>
                </article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="opleidingsdata" className="soft-dark-section py-24 sm:py-32">
        <div className="section-shell">
          <SectionIntro title="Beschikbare opleidingsdata" light />
          <div className="mt-14 grid items-stretch gap-4 lg:grid-cols-3">
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
                  className="flex h-full min-h-[430px] flex-col rounded-lg border border-white/10 bg-white p-6 text-ink shadow-soft transition duration-300 hover:-translate-y-1"
                >
                  <div className="mb-8 flex items-center gap-4">
                    <CalendarDays aria-hidden="true" className="h-7 w-7 text-bronze" />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-ink">{item.date}</h3>
                  <div className="mt-4 rounded-lg border border-ink/10 bg-linen p-4">
                    <p className="text-sm font-semibold text-ink">{item.level}</p>
                    <div className="mt-3 grid gap-1.5 text-sm text-graphite/70">
                      <p>Locatie: {item.location}</p>
                      <p>Duur: {item.duration}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-graphite/70">{item.status}</p>
                  <div className="mt-7 h-1.5 rounded-full bg-ink/10">
                    <div
                      className="h-full rounded-full bg-bronze"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="mt-2 text-right text-sm text-graphite/60">{progress}%</p>
                  <a
                    href={`/inschrijven?pakket=${packageSlug(item.level)}&datum=${encodeURIComponent(item.date)}`}
                    className="mt-auto inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-ink bg-ink px-5 py-3 text-sm font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-bronze focus:outline-none focus:ring-4 focus:ring-bronze/30"
                  >
                    Reserveer jouw plek
                    <ChevronDown aria-hidden="true" className="h-4 w-4 -rotate-90" />
                  </a>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-24 sm:py-32">
        <div className="section-shell">
          <SectionIntro eyebrow="Master trainers" title="Ontmoet onze trainers" />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {trainerImages.map((src, index) => (
              <motion.article
                key={src}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.08, duration: 0.62 }}
                className="overflow-hidden rounded-lg border border-ink/10 bg-white shadow-soft"
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
                <div className="border-t border-ink/10 p-7">
                  <h3 className="text-2xl font-semibold text-ink">Trainer Naam</h3>
                  <p className="mt-1 text-sm uppercase tracking-[0.22em] text-bronze">
                    Master Trainer Reformer Pilates
                  </p>
                  <p className="mt-5 leading-7 text-graphite/70">
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


      <section className="soft-dark-section py-24 sm:py-32">
        <div className="section-shell">
          <SectionIntro
            eyebrow="Academy standard"
            title="Waarom kiezen voor onze Reformer Pilates Opleiding?"
            light
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

      <section className="soft-dark-section py-24 sm:py-32">
        <div className="section-shell">
          <SectionIntro
            eyebrow="Reformer Instructeur Level A · 5 dagen, 40 contacturen"
            title="Opleidingsprogramma"
            light
          />
          <div className="mx-auto mt-16 max-w-4xl">
            {program.map(([day, title], index) => (
              <motion.div
                key={day}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.06, duration: 0.6 }}
                className="relative grid gap-5 border-l border-white/15 pb-10 pl-8 last:pb-0 sm:grid-cols-[140px_1fr]"
              >
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-[#24221f] bg-bronze shadow-glow" />
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-bronze">
                  {day}
                </p>
                <div className="rounded-lg border border-white/10 bg-white p-6 shadow-soft">
                  <h3 className="text-2xl font-semibold text-ink">{title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
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
              className="absolute inset-0 h-full w-full border-0"
            />
            <div className="absolute inset-0 bg-ink/10 mix-blend-multiply" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/42 to-transparent" />
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-lg border border-white/55 bg-white/82 px-8 py-7 text-center shadow-soft backdrop-blur-xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white shadow-glow">
                <MapPin aria-hidden="true" className="h-7 w-7" />
              </div>
              <p className="text-xl font-semibold text-ink">Reformer Pilates Academy</p>
              <p className="mt-2 text-graphite/60">Roosendaal</p>
            </div>
          </motion.div>
        </div>
      </section>


      <section className="soft-dark-section py-24 sm:py-32">
        <div className="section-shell">
          <SectionIntro title="Wat deelnemers zeggen" light />
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
              Na succesvolle afronding ontvang je een certificaat van de
              Reformer Pilates Academy als bewijs van deelname en behaalde
              competenties.
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
                Reformer Pilates Academy
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

      <section className="soft-dark-section py-24 sm:py-32">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="eyebrow mb-4">Persoonlijk advies</p>
            <h2 className="font-display text-4xl font-bold leading-tight text-white sm:text-6xl">
              Neem contact met mij op
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/72 sm:text-lg">
              Heb je een vraag over Reformer Instructeur Level A, B of C? Laat je gegevens
              achter, dan nemen we persoonlijk contact met je op.
            </p>
            <div className="mt-8 grid gap-4">
              {[
                {
                  icon: Phone,
                  title: "Persoonlijke opvolging",
                  text: "We denken graag mee over welk traject het beste past."
                },
                {
                  icon: Mail,
                  title: "Vraag stellen",
                  text: "Stel je vraag over data, inhoud, betaling of niveau."
                }
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-bronze shadow-soft">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-white/60">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onSubmit={async (event) => {
              event.preventDefault();
              const form = event.currentTarget;
              const formData = new FormData(form);

              setContactSending(true);
              await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(Object.fromEntries(formData))
              });
              setContactSending(false);
              setContactSent(true);
              form.reset();
            }}
            className="rounded-lg border border-ink/10 bg-white p-6 shadow-soft sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-graphite">
                Naam
                <input
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="min-h-12 rounded-lg border border-ink/10 bg-porcelain px-4 outline-none transition focus:border-bronze focus:ring-4 focus:ring-bronze/10"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-graphite">
                Telefoonnummer
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="min-h-12 rounded-lg border border-ink/10 bg-porcelain px-4 outline-none transition focus:border-bronze focus:ring-4 focus:ring-bronze/10"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-graphite">
                E-mailadres
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="min-h-12 rounded-lg border border-ink/10 bg-porcelain px-4 outline-none transition focus:border-bronze focus:ring-4 focus:ring-bronze/10"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-graphite">
                Interesse in
                <select
                  name="level"
                  defaultValue="Reformer Instructeur Level A"
                  className="min-h-12 rounded-lg border border-ink/10 bg-porcelain px-4 outline-none transition focus:border-bronze focus:ring-4 focus:ring-bronze/10"
                >
                  <option>Reformer Instructeur Level A</option>
                  <option>Reformer Instructeur Level B</option>
                  <option>Reformer Instructeur Level C</option>
                  <option>Ik twijfel nog</option>
                </select>
              </label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-medium text-graphite">
              Vraag of opmerking
              <textarea
                required
                name="question"
                rows={5}
                className="rounded-lg border border-ink/10 bg-porcelain px-4 py-3 outline-none transition focus:border-bronze focus:ring-4 focus:ring-bronze/10"
              />
            </label>
            {contactSent ? (
              <p className="mt-5 rounded-lg bg-linen px-4 py-3 text-sm font-semibold text-ink">
                Bedankt. Je bericht is ontvangen.
              </p>
            ) : null}
            <button
              type="submit"
              disabled={contactSending}
              className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-ink bg-white px-6 py-3 text-sm font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-white focus:outline-none focus:ring-4 focus:ring-bronze/30 sm:w-auto"
            >
              {contactSending ? "Versturen..." : "Verstuur vraag"}
              <Send aria-hidden="true" className="h-4 w-4" />
            </button>
          </motion.form>
        </div>
      </section>

      <section className="luxury-band py-24 sm:py-32">
        <div className="section-shell">
          <div className="grid gap-12 rounded-lg border border-ink/10 bg-white p-6 shadow-soft sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:p-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="eyebrow mb-4">Voor studio's en teams</p>
              <h2 className="font-display text-4xl font-bold leading-tight text-ink sm:text-6xl">
                Met je hele team een training volgen?
              </h2>
              <p className="mt-6 body-copy">
                Voor nieuwe studio's, bestaande teams en ketens gelden speciale
                prijzen. Ideaal wanneer je meerdere instructeurs tegelijk wilt
                opleiden volgens dezelfde standaard.
              </p>
              <div className="mt-8 grid gap-4">
                {[
                  "Speciale teamprijzen vanaf meerdere deelnemers",
                  "Geschikt voor nieuwe reformer studio's en studio-ketens",
                  "Offerte op maat voor planning, niveau en groepsgrootte"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check
                      aria-hidden="true"
                      className="mt-1 h-4 w-4 shrink-0 text-bronze"
                    />
                    <p className="leading-7 text-graphite/70">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.form
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onSubmit={async (event) => {
                event.preventDefault();
                const form = event.currentTarget;
                const formData = new FormData(form);

                setQuoteSending(true);
                await fetch("/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    type: "Team offerte",
                    ...Object.fromEntries(formData)
                  })
                });
                setQuoteSending(false);
                setQuoteSent(true);
                form.reset();
              }}
              className="rounded-lg border border-ink/10 bg-porcelain p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-graphite">
                  Naam
                  <input
                    required
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="min-h-12 rounded-lg border border-ink/10 bg-white px-4 outline-none transition focus:border-bronze focus:ring-4 focus:ring-bronze/10"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-graphite">
                  Studio of organisatie
                  <input
                    name="company"
                    type="text"
                    autoComplete="organization"
                    className="min-h-12 rounded-lg border border-ink/10 bg-white px-4 outline-none transition focus:border-bronze focus:ring-4 focus:ring-bronze/10"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-graphite">
                  E-mailadres
                  <input
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="min-h-12 rounded-lg border border-ink/10 bg-white px-4 outline-none transition focus:border-bronze focus:ring-4 focus:ring-bronze/10"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-graphite">
                  Telefoonnummer
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="min-h-12 rounded-lg border border-ink/10 bg-white px-4 outline-none transition focus:border-bronze focus:ring-4 focus:ring-bronze/10"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-graphite sm:col-span-2">
                  Aantal deelnemers
                  <select
                    required
                    name="participants"
                    defaultValue=""
                    className="min-h-12 rounded-lg border border-ink/10 bg-white px-4 outline-none transition focus:border-bronze focus:ring-4 focus:ring-bronze/10"
                  >
                    <option value="" disabled>
                      Kies aantal deelnemers
                    </option>
                    <option>2 deelnemers</option>
                    <option>3 deelnemers</option>
                    <option>4 deelnemers</option>
                    <option>5 deelnemers</option>
                    <option>6 tot 10 deelnemers</option>
                    <option>Meer dan 10 deelnemers</option>
                  </select>
                </label>
              </div>
              <label className="mt-5 grid gap-2 text-sm font-medium text-graphite">
                Wensen of planning
                <textarea
                  name="question"
                  rows={4}
                  className="rounded-lg border border-ink/10 bg-white px-4 py-3 outline-none transition focus:border-bronze focus:ring-4 focus:ring-bronze/10"
                />
              </label>
              {quoteSent ? (
                <p className="mt-5 rounded-lg bg-linen px-4 py-3 text-sm font-semibold text-ink">
                  Bedankt. We nemen contact op met een offerte op maat.
                </p>
              ) : null}
              <button
                type="submit"
                disabled={quoteSending}
                className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-ink bg-ink px-6 py-3 text-sm font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-bronze focus:outline-none focus:ring-4 focus:ring-bronze/30 sm:w-auto"
              >
                {quoteSending ? "Versturen..." : "Ontvang offerte op maat"}
                <Send aria-hidden="true" className="h-4 w-4" />
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
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

      <section className="soft-dark-section py-24 sm:py-32">
        <div className="section-shell text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-4xl"
          >
            <h2 className="font-display text-5xl font-bold leading-tight text-white sm:text-7xl">
              Start jouw carrière als Reformer Pilates Instructeur
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/72">
              Premium opleiding, Kleine groepen, Persoonlijke begeleiding,
              Praktijkgericht.
            </p>
            <div className="mt-10">
              <PrimaryCta light />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/20 bg-ink/90 p-3 shadow-glow backdrop-blur-xl sm:hidden">
        <PrimaryCta light />
      </div>
    </main>
  );
}
