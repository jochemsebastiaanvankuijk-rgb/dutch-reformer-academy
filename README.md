# Dutch Reformer Academy

Premium landing page voor de Dutch Reformer Academy.

## Stack

- Next.js
- Tailwind CSS
- Framer Motion
- Lucide icons

## Lokaal starten

```bash
npm install
npm run dev
```

## Domein

Productiedomein: `https://dutchreformeracademy.nl`

## iDEAL via Mollie

Maak een `.env.local` bestand op basis van `.env.example`:

```bash
MOLLIE_API_KEY=test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_SITE_URL=https://dutchreformeracademy.nl
```

Gebruik eerst een Mollie test API-key. Voor live betalingen vervang je deze door
de live API-key uit het Mollie dashboard.

## Deployment

Aanbevolen hosting: Vercel.

Na deployment in Vercel:

- Voeg `dutchreformeracademy.nl` toe aan het project.
- Voeg ook `www.dutchreformeracademy.nl` toe.
- Stel DNS in bij TransIP volgens de instructies van Vercel.
