# Move — Landing

Marketing/landing page for Move (The Movement Clan). Next.js 15 App Router, standalone repo (extracted from the `movethemovementclan` monorepo, history preserved).

## Develop

```bash
cp .env.example .env   # already gitignored
pnpm install
pnpm dev                # http://localhost:3001
```

## Scripts

- `pnpm dev` — dev server on port 3001
- `pnpm build` / `pnpm start` — production build/serve
- `pnpm lint` — eslint
- `pnpm check-types` — `next typegen` + `tsc --noEmit`
- `pnpm test` / `pnpm test:watch` — vitest

## Deployment

Deploys to Vercel. Set `NEXT_PUBLIC_API_BASE_URL` and `NEXT_PUBLIC_APP_URL` in the Vercel project's environment variables — no secrets are required, this app has none server-side. If/when it starts calling the Move API, add this app's Vercel domain(s) to the API's `CORS_ORIGINS`.
