# Crohn's Survival Kit - GitHub & Vercel Deployment Guide

## Files to Download from Replit

Download these files and maintain the folder structure:

**Root Files:**
- `index.html` - Main landing page
- `styles.css` - All styling
- `crohns-logo.jpg` - Your actual logo
- `vercel.json` - Vercel configuration
- `.gitignore` - Git ignore rules
- `README.md` - Project documentation
- `drizzle.config.json` - Database configuration

**Server Folder:**
- `server/index.js` - Main server file
- `server/api.ts` - API endpoints
- `server/db.ts` - Database connection
- `server/storage.ts` - Database storage layer

**Shared Folder:**
- `shared/schema.ts` - Database schema

**Package File:**
- Copy `package-production.json` and rename to `package.json`

## Step-by-Step Deployment

### 1. Create GitHub Repository
- Go to github.com, sign up for free
- Click "New Repository"
- Name: `crohns-survival-kit-landing`
- Make it Public
- Add README file
- Create repository

### 2. Upload Files
- Click "uploading an existing file"
- Drag all downloaded files (keep folder structure)
- Commit message: "Initial commit - Crohn's Survival Kit landing page"
- Commit changes

### 3. Set Up Database (Neon - Free)
- Go to neon.tech
- Sign up for free account
- Create new project: "Crohn's Survival Kit"
- Copy the DATABASE_URL (starts with postgresql://)

### 4. Deploy to Vercel
- Go to vercel.com
- Sign up with GitHub account
- Click "New Project"
- Import your repository
- Add environment variable: `DATABASE_URL` = your Neon database URL
- Deploy

### 5. Custom Domain (Optional)
- Buy domain from Cloudflare ($8.57/year for .com)
- In Vercel: Project Settings → Domains → Add domain
- Update DNS records in Cloudflare

## Your Live URLs
- Vercel URL: `https://your-project-name.vercel.app`
- Custom domain: `https://yourdomain.com`

## Future Edits
- Edit files directly in GitHub web interface
- Changes automatically deploy to Vercel in 2-3 minutes
- No technical knowledge required for content updates

## Total Cost
- GitHub: Free
- Vercel: Free
- Database: Free (Neon)
- Domain: $8-12/year (optional)

**Monthly cost: $0 (or $1/month with custom domain)**