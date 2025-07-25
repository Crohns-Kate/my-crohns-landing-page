# Complete Deployment Instructions

## What I've Prepared For You

✅ **All deployment files are ready:**
- `vercel.json` - Vercel configuration
- `package-production.json` - Production package.json 
- `.gitignore` - Git ignore rules
- `.env.example` - Environment variable template
- `README.md` - Project documentation
- This deployment guide

✅ **Your project is fully configured for:**
- Vercel hosting
- PostgreSQL database integration
- Static file serving
- API endpoints
- Production environment

## Your Action Steps (30 minutes total)

### Step 1: Download Project (5 minutes)
1. In Replit: Click the three dots menu (⋯) → "Download as zip"
2. Extract the zip file to your computer
3. **Important**: Before uploading to GitHub, **rename** `package-production.json` to `package.json`

### Step 2: Create GitHub Repository (10 minutes)
1. Go to [GitHub.com](https://github.com) and login
2. Click "New repository" (green + button)
3. Repository name: `crohns-survival-kit-landing`
4. Set to Public or Private (your choice)
5. **Don't** add README/gitignore (we have them)
6. Click "Create repository"

### Step 3: Upload Files (5 minutes)
1. Click "uploading an existing file" 
2. **Exclude these files when uploading:**
   - `.replit`
   - `replit.nix` 
   - Any `.env` files with real passwords
3. **Include everything else**, especially:
   - `index.html`, `styles.css`
   - `server/` folder
   - `privacy-policy.html`, `terms-conditions.html`
   - All image files
   - `vercel.json`
   - `package.json` (renamed from package-production.json)
4. Commit with message: "Initial commit - Landing page ready for deployment"

### Step 4: Set Up Database (5 minutes)
1. Go to [Neon.tech](https://neon.tech)
2. Sign up (free tier)
3. Create new project: "crohns-landing-db"
4. Copy the connection string (starts with `postgresql://`)

### Step 5: Deploy on Vercel (5 minutes)
1. Go to [Vercel.com](https://vercel.com)
2. Sign up/login with your GitHub account
3. Click "New Project"
4. Import your `crohns-survival-kit-landing` repository
5. **Environment Variables** - Add these in Vercel:
   ```
   DATABASE_URL = [paste your Neon database URL]
   NODE_ENV = production
   ```
6. Click "Deploy"

## After Deployment

Your site will be live at: `https://your-project-name.vercel.app`

✅ **Test checklist:**
- Landing page loads
- Images display correctly  
- Countdown timer works
- Forms can be submitted
- Stripe checkout buttons work
- Mobile responsive

## Next Steps

1. **Custom domain** (optional): Add in Vercel settings
2. **Analytics**: Add Google Analytics if needed
3. **Marketing**: Start driving traffic!

## Files Ready For Upload

All files in your Replit project are production-ready. The server will automatically handle:
- Static file serving
- API endpoints for forms
- Database connections
- Analytics tracking

Your landing page is professionally configured and ready to generate sales! 🚀

## Support

If any step doesn't work, check:
1. All files uploaded to GitHub correctly
2. Environment variables set in Vercel
3. Database connection string is correct

The configuration I've created handles all technical requirements for production deployment.