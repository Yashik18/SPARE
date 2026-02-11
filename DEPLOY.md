# Deployment Guide for Spare App

This guide explains how to deploy your Next.js application to **Vercel**, the recommended platform for Next.js.

## Prerequisites

1.  **GitHub Repository**: Ensure your project is pushed to a GitHub repository.
2.  **Vercel Account**: Sign up at [vercel.com](https://vercel.com).
3.  **MongoDB Atlas**: You need a production MongoDB database (your current URI might work if it allows access from anywhere, but a dedicated production cluster is recommended).
4.  **Google Cloud Console**: You need to update your OAuth credentials to allow the production domain.

## Step 1: Deploy to Vercel

1.  Go to the [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **"Add New..."** -> **"Project"**.
3.  Import your **Spare App** repository from GitHub.
4.  In the **Configure Project** step:
    *   **Framework Preset**: Next.js (should be auto-detected).
    *   **Root Directory**: `sparee` (since your app is in a subdirectory).

## Step 2: Environment Variables

Expand the **"Environment Variables"** section and add the following keys from your `.env.local` file:

| Key | Value Description |
| :--- | :--- |
| `MONGODB_URI` | Your MongoDB connection string. Ensure "Network Access" in MongoDB Atlas allows Vercel IPs (or allow `0.0.0.0/0` for simplicity). |
| `GOOGLE_CLIENT_ID` | Your Google OAuth Client ID. |
| `GOOGLE_CLIENT_SECRET` | Your Google OAuth Client Secret. |
| `AUTH_SECRET` | A strong random string. You can generate one with `openssl rand -base64 32` or just use a long random phrase. |
| `NEXTAUTH_URL` | **Do not set this on Vercel.** Vercel automatically sets `NEXTAUTH_URL` for you. |
| `GEMINI_API_KEY` | Your Google Gemini API Key. |

## Step 3: Update Google OAuth

Once your deployment is live (or created), Vercel will give you a domain (e.g., `spare-app.vercel.app`).

1.  Go to **Google Cloud Console** -> **APIs & Services** -> **Credentials**.
2.  Edit your **OAuth 2.0 Client ID**.
3.  Add your Vercel domain to **Authorized JavaScript origins**:
    *   `https://your-project.vercel.app`
4.  Add your Vercel redirect URI to **Authorized redirect URIs**:
    *   `https://your-project.vercel.app/api/auth/callback/google`

## Step 4: Finalize Deployment

1.  Click **"Deploy"** on Vercel.
2.  Wait for the build to complete.
3.  Once deployed, test the **Sign In** and **Space Estimator** features to ensure environment variables are working correctly.

## Debugging

If the build fails on Vercel:
- Check the **Build Logs** in Vercel.
- Ensure all dependencies are in `package.json`.
- Ensure all TypeScript errors are resolved (run `npm run build` locally to check).

**Common Issue**: If images from Google don't load, ensure `next.config.ts` includes the remote patterns (which we updated).
