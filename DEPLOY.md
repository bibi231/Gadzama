# Deploying gadzama.com (Next.js) to Vercel

This folder is a ready-to-deploy Git repository. Pick ONE of the two paths below.
Your Vercel account (team "beetrus' projects") is already set up.

--------------------------------------------------------------------
## Option A — Fastest to a shareable link (Vercel CLI, no GitHub needed)
--------------------------------------------------------------------
From inside this folder, run:

    npx vercel@latest --prod

- First run: it opens the browser to log in (use your existing Vercel account),
  then asks a few questions -> accept the defaults (Framework: Next.js).
- When it finishes it prints a URL like  https://gadzama-site.vercel.app
- That is the link to paste into the email thread.

To re-deploy after any change, run the same command again.

--------------------------------------------------------------------
## Option B — GitHub repo + auto-deploy (best for ongoing updates)
--------------------------------------------------------------------
1. Create a new EMPTY repo on GitHub, e.g.  github.com/bibi231/gadzama-site
   (do NOT add a README/gitignore — this folder already has them).
2. From inside this folder:

       git remote add origin https://github.com/bibi231/gadzama-site.git
       git branch -M main
       git push -u origin main

3. Go to vercel.com -> Add New -> Project -> Import  gadzama-site.
   Framework preset = Next.js (auto-detected). Click Deploy.
4. Vercel gives you  https://gadzama-site.vercel.app  and rebuilds on every push.

--------------------------------------------------------------------
## Contact form (optional, can be added after the first deploy)
--------------------------------------------------------------------
The enquiry form on /contact sends email via Resend. Until these are set it
returns a friendly "email us directly" message; the rest of the site is unaffected.

In Vercel -> Project -> Settings -> Environment Variables, add:

    RESEND_API_KEY   = <your Resend API key>
    CONTACT_TO       = info@gadzama.com   (where enquiries are delivered)
    CONTACT_FROM     = Gadzama Website <onboarding@resend.dev>

Then redeploy.

--------------------------------------------------------------------
## Custom domain (gadzama.com) — when ready
--------------------------------------------------------------------
Vercel -> Project -> Settings -> Domains -> add gadzama.com, then point the
domain's DNS to Vercel as instructed. The .vercel.app link works immediately in
the meantime.
