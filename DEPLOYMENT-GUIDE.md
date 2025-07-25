# Deployment Guide: Replit → GitHub → Vercel

This guide will help you deploy your Crohn's Survival Kit landing page to Vercel via GitHub.

## Step 1: Download Project from Replit

1. **In your Replit project:**
   - Click on the three dots menu (⋯) in the file explorer
   - Select "Download as zip"
   - Extract the zip file on your computer

## Step 2: Set Up GitHub Repository

1. **Create new GitHub repository:**
   - Go to [GitHub.com](https://github.com)
   - Click "New repository" (green button)
   - Name it: `crohns-survival-kit-landing`
   - Make it **Public** or **Private** (your choice)
   - **Don't** add README, .gitignore, or license (we have them)

2. **Upload your code:**
   - Click "uploading an existing file"
   - Drag all files from extracted folder **except**:
     - `.replit` file
     - `replit.nix` file  
     - Any `.env` files with actual passwords
   - Commit the files

## Step 3: Prepare for Vercel Deployment

1. **Database Setup:**
   - Sign up for [Neon](https://neon.tech) (free PostgreSQL)
   - Create a new database
   - Copy the connection string (starts with `postgresql://`)

## Step 4: Deploy on Vercel

1. **Connect to Vercel:**
   - Go to [Vercel.com](https://vercel.com)
   - Sign up/login with your GitHub account
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Environment Variables:**
   - In Vercel dashboard, go to your project
   - Click "Settings" → "Environment Variables"
   - Add these variables:
     ```
     DATABASE_URL = [your Neon database URL]
     NODE_ENV = production
     PORT = 5000
     ```

3. **Deploy:**
   - Vercel will automatically deploy
   - You'll get a live URL like: `your-project.vercel.app`

## Step 5: Set Up Database Schema

1. **After first deployment:**
   - The database tables need to be created
   - Contact me if you need help setting up the database schema

## Step 6: Test Your Live Site

1. **Check all functionality:**
   - Landing page loads correctly
   - Countdown timer works
   - Forms submit properly
   - Stripe checkout links work
   - Mobile responsiveness

## Troubleshooting

**Common issues:**
- **Build errors**: Check Vercel build logs in dashboard
- **Database connection**: Verify DATABASE_URL is correct
- **Static files not loading**: Ensure `vercel.json` is in root directory

## Next Steps After Deployment

1. **Custom Domain** (optional):
   - In Vercel dashboard: Settings → Domains
   - Add your custom domain

2. **Analytics Setup**:
   - Add Google Analytics ID to environment variables
   - Set up Facebook Pixel if needed

3. **Performance Monitoring**:
   - Vercel provides built-in analytics
   - Monitor conversion rates and page performance

## Support

If you encounter any issues during deployment, the files I've created should handle most common scenarios. The `vercel.json` configuration is specifically designed for your project structure.

Your landing page is now ready for production traffic! 🚀