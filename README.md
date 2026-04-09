# LOCKEDIN

Marketing site for **Locked[In]**, a panel series where attendees connect with hosts and panelists. Single-page layout: hero, upcoming events, hosts, panelists, and a short CTA.

## Stack

- [Next.js](https://nextjs.org) (App Router)
- [Tailwind CSS](https://tailwindcss.com)
- TypeScript

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Development server       |
| `npm run build` | Production build        |
| `npm run start` | Run production server   |
| `npm run lint`  | ESLint                  |

## Editing content

Most copy and data live in **`src/app/page.tsx`**: event list (`registrationUrl` per event), hosts, and panelists. Shared person UI is in **`src/components/PersonCard.tsx`**. Global styles are in **`src/app/globals.css`**.

## Deploy

Deploy like any Next.js app (e.g. [Vercel](https://vercel.com) or your host of choice). See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.
