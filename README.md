This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

> Package manager: **pnpm** (use `pnpm install` / `pnpm dev`, not npm).

## Overview

This homepage showcases multiple apps from emptea studios, with support for Supabase Auth email confirmation for each app via dedicated subdirectories (e.g., `/rise/auth/confirm`).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Supabase Email Confirmation Setup

This project supports email confirmation for Supabase Auth. Follow these steps to configure it:

-### 1. Environment Variables

Create a `.env.local` file in the root directory with the Supabase credentials for each app you plan to host. Use uppercase project slugs to form the env-var names:

```bash
NEXT_PUBLIC_RISE_SUPABASE_URL=your-rises-project-url
NEXT_PUBLIC_RISE_SUPABASE_ANON_KEY=your-rises-anon-key
NEXT_PUBLIC_PENPAL_SUPABASE_URL=your-penpal-project-url
NEXT_PUBLIC_PENPAL_SUPABASE_ANON_KEY=your-penpal-anon-key
```

The helper in `lib/supabase` will normalize the slug you pass to `createClient()` (defaulting to `rise`), so make sure every new app has its own pair of vars before wiring the routes.

Get these values from your [Supabase Dashboard](https://app.supabase.com):
- Navigate to your project
- Go to **Project Settings > API**
- Copy the **Project URL** and **anon/public key**

### 2. Configure Supabase Dashboard

In your Supabase project dashboard:

1. Go to **Authentication > URL Configuration**
2. Set the **Site URL** to your production domain (e.g., `https://yourdomain.com`)
3. Add the following to **Redirect URLs**:
   - For local development: `http://localhost:3000/rise/auth/confirm`
   - For production: `https://yourdomain.com/rise/auth/confirm`

### 3. Email Template Configuration

Configure your email templates to use the confirmation endpoint:

1. Go to **Authentication > Email Templates**
2. For the **Confirm signup** template, ensure the confirmation link uses:
   ```
   {{ .SiteURL }}/rise/auth/confirm?token_hash={{ .TokenHash }}&type=email
   ```

### Endpoints

- **Email confirmation**: `/rise/auth/confirm`
- **Success page**: `/rise/auth/confirmed`
- **Error page**: `/rise/auth/error`

### Adding More Apps

To add email confirmation for additional apps:

1. Create a new subdirectory: `app/[app-name]/auth/`
2. Copy the `confirm`, `confirmed`, and `error` routes from `app/rise/auth/`
3. Update the Supabase redirect URLs to include the new app's endpoint

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
