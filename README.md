# Futuristic Portfolio Monorepo (Next.js + Sanity)

## Structure
- `apps/web`: Next.js App Router frontend
- `apps/studio`: Sanity Studio CMS

## Setup
1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Copy env files:
   ```bash
   cp apps/web/.env.example apps/web/.env.local
   cp apps/studio/.env.example apps/studio/.env
   ```
3. Fill Sanity project values in both env files.

## Run locally
```bash
pnpm dev
```
- Web: http://localhost:3000
- Studio: http://localhost:3333

## Build / Lint
```bash
pnpm lint
pnpm build
```

## Sanity setup
1. `cd apps/studio`
2. `pnpm dev`
3. Create/populate documents:
   - `siteSettings`, `navigation`, `homePage`, `aboutPage`, `service`, `project`, `testimonial`, `blogPost`, `contactPage`

## Contact email (disabled placeholder mode)
By default `/api/contact` returns disabled mode unless configured.
Set these in `apps/web/.env.local`:
- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- Optional: `CONTACT_FROM_EMAIL`

## Preview mode
Set:
- `SANITY_READ_TOKEN`
- `SANITY_PREVIEW_SECRET`

Enable preview:
`/api/preview?secret=YOUR_SECRET&redirect=/projects`

Exit preview:
`/api/exit-preview`

## Deploy
- Web deploy: Vercel (`apps/web`)
- Studio deploy: `cd apps/studio && pnpm sanity deploy`

## Seed content hints
Create at least:
- one `siteSettings`
- one `navigation`
- one `homePage`
- 3+ `project`
- 2+ `service`
- 2+ `testimonial`
- one `aboutPage`, `contactPage`, optional `blogPost`
