# Portfolio Website - Deployment Guide

## Local Development Setup

### Prerequisites

- Node.js 16+ and pnpm installed
- Gmail account with app password enabled
- GitHub account for version control

### Step 1: Clone and Install Dependencies

```bash
pnpm install
```

### Step 2: Configure Email Environment Variables

1. Copy `.env.example` to `.env` in the project root
2. Get Gmail App Password:
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Step Verification if not already enabled
   - Generate an [App Password](https://support.google.com/accounts/answer/185833)
   - Copy the 16-character password

3. Update `.env` file:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
OWNER_EMAIL=your-email@gmail.com
```

### Step 3: Add Resume PDF

1. Download or export Marcian's resume as PDF
2. Place the file at: `public/resume.pdf`
3. The download button will automatically work

### Step 4: Run Locally

```bash
pnpm dev
```

The app will be available at `http://localhost:5173`

### Step 5: Test Contact Form

1. Navigate to the Contact page
2. Fill out the form and submit
3. Check your email for the submission and confirmation

---

## Production Deployment

### Option 1: Netlify (Recommended)

1. **Push Code to GitHub**
   - Create a new repository on GitHub
   - Push your code: `git push origin main`

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Choose the repository

3. **Configure Build Settings**
   - Build command: `pnpm build`
   - Publish directory: `dist/spa`
   - Click "Deploy"

4. **Set Environment Variables**
   - In Netlify dashboard, go to Site settings → Environment
   - Add the same variables from `.env`:
     - `EMAIL_USER`
     - `EMAIL_PASSWORD`
     - `OWNER_EMAIL`

5. **Deploy Backend as Netlify Function**
   - The backend is already configured to work with Netlify Functions
   - The contact form will work automatically once env vars are set

6. **Add Custom Domain** (Optional)
   - In Site settings → Domain management
   - Add your custom domain

### Option 2: Vercel

1. **Push Code to GitHub** (same as above)

2. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

3. **Import Project**
   - Click "New Project"
   - Select your repository
   - Vercel will auto-detect the configuration

4. **Set Environment Variables**
   - In Project Settings → Environment Variables
   - Add:
     - `EMAIL_USER`
     - `EMAIL_PASSWORD`
     - `OWNER_EMAIL`

5. **Deploy**
   - Click "Deploy"
   - Your site is live!

### Option 3: Render (Node.js Backend)

For backend-only deployment:

1. **Create Render Account**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub

2. **Create New Web Service**
   - Select your repository
   - Build command: `pnpm build`
   - Start command: `pnpm start`

3. **Set Environment Variables**
   - Add all variables from `.env`

4. **Deploy**
   - Render will automatically deploy

---

## Post-Deployment Checklist

- [ ] Email form sends successfully
- [ ] Resume PDF downloads properly
- [ ] All pages load and are responsive
- [ ] Links to social media work
- [ ] Navigation works on mobile
- [ ] Performance is good (test with Lighthouse)
- [ ] SEO is configured (meta tags, robots.txt)

---

## Troubleshooting

### Email not sending?

- Check that EMAIL_USER and EMAIL_PASSWORD are correct
- Verify Gmail app password is set (not regular password)
- Ensure 2-Step Verification is enabled on Gmail
- Check spam/trash folder

### Resume not downloading?

- Ensure `public/resume.pdf` exists
- Check file permissions
- Verify the path is correct in the HTML

### Contact form shows 500 error?

- Check server logs
- Verify all environment variables are set
- Ensure email credentials are valid

### CORS errors?

- The app is configured with CORS enabled
- Make sure API calls use correct endpoint: `/api/send-email`

---

## Security Best Practices

1. **Never commit `.env` to Git**
   - Add `.env` to `.gitignore`
   - Use platform-specific env variable management

2. **Use App Passwords**
   - Never use main Gmail password
   - Generate app-specific password

3. **Validate Input**
   - Backend validates all form inputs with Zod
   - Sanitize before database storage

4. **Monitor Submissions**
   - Check spam folder regularly
   - Keep email configurations updated

5. **HTTPS**
   - All deployment platforms provide free HTTPS
   - Ensure SSL certificate is valid

---

## Maintenance

### Regular Tasks

- Monitor form submissions
- Update skills and projects section
- Keep dependencies updated
- Test contact form monthly
- Monitor site performance

### Update Project Information

To update portfolio content, edit these files:

- `client/pages/Index.tsx` - Home page
- `client/pages/Skills.tsx` - Skills
- `client/pages/Projects.tsx` - Projects
- `client/pages/Experience.tsx` - Internships
- `client/pages/Achievements.tsx` - Certifications
- `tailwind.config.ts` - Colors and theme

Then push changes to trigger auto-deployment.

---

## Support

- GitHub Issues: Add any bugs or feature requests
- Email: marciandavid1904@gmail.com
- LinkedIn: Your LinkedIn profile

---

Generated for Marcian Benedict D - Full-Stack Developer
