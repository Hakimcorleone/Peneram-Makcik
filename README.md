# Peneram Makcik

A clean, responsive Next.js catalog website for Peneram Makcik. The site shows product options, prices, postage rules, COD area, FAQ, and WhatsApp ordering links.

## Run the project

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Replace product images

Upload the two JPG files into `public/images` with these exact names:

- `peneram-small-pack.jpg`
- `peneram-round-container.jpg`

The website already uses:

- `/images/peneram-small-pack.jpg`
- `/images/peneram-round-container.jpg`

## Change prices and product details

Edit `lib/site-data.ts`. Product names, quantities, prices, minimum order rules, postage rules, descriptions, and promo copy are stored in the `products` array.

## Change WhatsApp numbers

Edit `contacts` in `lib/site-data.ts`. Use the Malaysian international format without `+`, for example `60186959795`.

## Edit WhatsApp messages

Edit `whatsappMessages` in `lib/site-data.ts`. Links are generated automatically by `lib/whatsapp.ts`.

## Edit testimonials

Edit the `testimonials` array in `lib/site-data.ts`. Replace the placeholder text with real customer feedback when available.

## Deploy later

The easiest option is Vercel:

1. Import this GitHub repository into Vercel.
2. Keep the default Next.js settings.
3. Deploy.

No backend, database, cart, checkout, login, or payment gateway is required.
