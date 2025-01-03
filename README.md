# Next.js with Supabase Authentication

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), featuring authentication powered by [Supabase](https://supabase.io).

## Getting Started

To start the development server, run:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to view the application.

You can begin editing the page by modifying `app/page.tsx`. The page will automatically update as you make changes.

## Supabase Authentication Setup

1. **Create a Supabase Project**: Go to [Supabase](https://supabase.io) and create a new project.

2. **Get API Keys**: After creating your project, navigate to the settings to find your API keys.

3. **Environment Variables**: Add your Supabase URL and Anon Key to your `.env.local` file:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

4. **Implement Authentication**: Use the Supabase client to implement authentication in your application. Refer to the [Supabase Auth documentation](https://supabase.io/docs/guides/auth) for more details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
