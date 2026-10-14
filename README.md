# Cafesa website (Next.js + TypeScript + Tailwind)
## Run locally
1. Install Node.js 18.17+
2. `npm install`
3. `cp .env.example .env.local` and set `NEXT_PUBLIC_WHATSAPP_NUMBER`
4. `npm run dev` then open http://localhost:3000
## Edit content
`src/data/site.ts` holds details, hours, menu (sample prices), gallery (set `src` to real images in `public/`) and sample reviews.
## Structure
src/app (layout, page, css) · src/components (Cart, Menu, ReservationForm, Sections) · src/data/site.ts · src/lib/wa.ts
## Notes
Orders and reservations open WhatsApp; nothing is confirmed or paid online. Add an API route or ordering/payment service later.
