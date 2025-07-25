# 🚀 Complete Deployment Instructions

## STEP 1: Download These Files from Replit

**Right-click each file and "Download" or use the file menu:**

### Root Directory Files:
1. `index.html` ✅ (Your main landing page)
2. `styles.css` ✅ (All styling)
3. `crohns-logo.jpg` ✅ (Your actual logo)
4. `kate-photo.jpg` ✅ (Kate's professional photo)
5. `vercel.json` ✅ (Vercel configuration)
5. `.gitignore` ✅ (Git ignore rules)
6. `README.md` ✅ (Project documentation)
7. `drizzle.config.json` ✅ (Database configuration)

### Server Directory Files:
8. `server/index.js` ✅ (Main server)
9. `server/api.ts` ✅ (API endpoints)
10. `server/db.ts` ✅ (Database connection)
11. `server/storage.ts` ✅ (Database operations)

### Shared Directory Files:
12. `shared/schema.ts` ✅ (Database schema)

### Special Files:
13. `package-production.json` ✅ (Rename this to `package.json`)

**Total: 14 files to download**

---

## STEP 2: Create GitHub Account & Repository

1. **Go to GitHub.com** → Sign up for FREE account
2. **Click "New Repository"**
   - Name: `crohns-survival-kit-landing`
   - Description: `High-conversion landing page for Crohn's Survival Kit`
   - ✅ Public repository
   - ✅ Add a README file
   - Click "Create repository"

---

## STEP 3: Upload Files to GitHub

**Method 1: Web Upload (Easiest)**
1. In your new repository, click "uploading an existing file"
2. Create folder structure:
   ```
   crohns-survival-kit-landing/
   ├── index.html
   ├── styles.css
   ├── crohns-logo.jpg
   ├── kate-photo.jpg
   ├── package.json (renamed from package-production.json)
   ├── vercel.json
   ├── .gitignore
   ├── README.md
   ├── drizzle.config.json
   ├── server/
   │   ├── index.js
   │   ├── api.ts
   │   ├── db.ts
   │   └── storage.ts
   └── shared/
       └── schema.ts
   ```
3. Commit message: "Initial commit - Crohn's Survival Kit landing page"
4. Click "Commit changes"

---

## STEP 4: Set Up FREE Database (Neon)

1. **Go to neon.tech** → Sign up FREE
2. **Create New Project**
   - Name: "Crohn's Survival Kit Database"
   - Select region closest to you
3. **Copy Database URL** (looks like: `postgresql://username:password@hostname/database`)
4. **Save this URL** - you'll need it for Vercel

---

## STEP 5: Deploy to Vercel (FREE)

1. **Go to vercel.com** → Sign up with GitHub account
2. **Click "New Project"**
3. **Import your repository** → Select `crohns-survival-kit-landing`
4. **Configure Project:**
   - Framework Preset: `Other`
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `./`
   - Install Command: `npm install`
5. **Add Environment Variables:**
   - Variable: `DATABASE_URL`
   - Value: Your Neon database URL from Step 4
6. **Click "Deploy"**

**Your site will be live in 2-3 minutes at:** `https://your-project.vercel.app`

---

## STEP 6: Set Up Custom Domain (Optional - $9/year)

1. **Buy Domain:**
   - Recommended: Cloudflare ($8.57/year for .com)
   - Alternative: Namecheap, GoDaddy
   
2. **Add to Vercel:**
   - Project Settings → Domains
   - Add your domain name
   
3. **Update DNS Records:**
   - In your domain registrar (Cloudflare, etc.)
   - Add CNAME: `www` → `cname.vercel-dns.com`
   - Add A Record: `@` → `76.76.19.61`

---

## TOTAL COSTS:
- GitHub: **FREE** ✅
- Vercel Hosting: **FREE** ✅
- Database (Neon): **FREE** ✅
- Custom Domain: **$9-12/year** (optional)

**Monthly cost: $0 or $1/month with custom domain**

---

## Making Future Changes:

1. **Go to your GitHub repository**
2. **Click on any file** (e.g., `index.html`)
3. **Click the pencil icon** to edit
4. **Make your changes** (pricing, text, etc.)
5. **Click "Commit changes"**
6. **Vercel automatically updates your live site** in 2-3 minutes

**No technical knowledge required for updates!**

---

## ✅ Quick Checklist:

- [ ] Downloaded all 13 files from Replit
- [ ] Created GitHub account & repository
- [ ] Uploaded files to GitHub
- [ ] Set up Neon database
- [ ] Deployed to Vercel
- [ ] Added DATABASE_URL to Vercel
- [ ] (Optional) Set up custom domain

**Need help? Your landing page will work perfectly on the free Vercel URL first, then you can add a custom domain later.**