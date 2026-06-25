# Cookie Services Landing

Single-page marketing site built with Next.js (App Router).

## Development

```bash
pnpm dev
```

Site runs at http://localhost:3000.

## Main Files

- `app/page.tsx`: Landing page sections and content.
- `app/globals.css`: Global styles and reusable section/button/card styles.
- `app/layout.tsx`: Root layout and site metadata.

## Contact Form (Mailjet SMTP)

- copy `.env.example` to `.env.local`
- set `MAILJET_API_KEY` and `MAILJET_SECRET_KEY` in `.env.local`
- run `pnpm install`
- run `pnpm dev`
