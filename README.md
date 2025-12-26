# Marcian Benedict D - Portfolio Website

A modern, responsive personal portfolio website built with React, Vite, Tailwind CSS, and Express.js featuring a beautiful pastel theme with smooth animations.

## 🌟 Features

- **Modern Design**: Soft pastel color palette (lavender, mint, peach, sky blue)
- **Fully Responsive**: Mobile-first design optimized for all screen sizes
- **Smooth Animations**: Fade-in, slide-in, and floating animations
- **Contact Form**: Fully functional email integration with Nodemailer
- **Multiple Pages**: Home, About, Skills, Projects, Experience, Achievements, Contact
- **Professional UI**: Clean, minimal, and modern interface
- **Fast Performance**: Built with Vite and optimized for speed
- **Type-Safe**: Full TypeScript support

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ installed
- pnpm installed (`npm install -g pnpm`)

### Installation

1. **Install Dependencies**

   ```bash
   pnpm install
   ```

2. **Configure Email** (Optional but recommended)
   - Copy `.env.example` to `.env`
   - Get Gmail app password from [Google Account Settings](https://support.google.com/accounts/answer/185833)
   - Update the `.env` file with your email credentials:
     ```
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASSWORD=your-16-char-app-password
     OWNER_EMAIL=your-email@gmail.com
     ```

3. **Add Resume** (Optional)
   - Place your resume PDF at `public/resume.pdf`
   - The download button on the home page will automatically work

4. **Run Development Server**
   ```bash
   pnpm dev
   ```
   The app will be available at `http://localhost:5173`

## 📁 Project Structure

```
.
├── client/
│   ├── pages/                 # Page components
│   │   ├── Index.tsx          # Home page
│   │   ├── About.tsx          # About section
│   │   ├── Skills.tsx         # Technical skills
│   │   ├── Projects.tsx       # Project showcase
│   │   ├── Experience.tsx     # Internship experience
│   │   ├── Achievements.tsx   # Awards & certifications
│   │   └── Contact.tsx        # Contact form
│   ├── components/
│   │   ├── Navigation.tsx     # Header navigation
│   │   └── Layout.tsx         # Main layout wrapper
│   ├── App.tsx                # App routing setup
│   ├── global.css             # Global styles & colors
│   └── vite-env.d.ts         # Vite type definitions
├── server/
│   ├── routes/
│   │   ├── contact.ts         # Contact form API
│   │   └── demo.ts            # Demo endpoint
│   └── index.ts               # Express server setup
├── shared/
│   └── api.ts                 # Shared types
├── public/
│   └── resume.pdf            # Resume (add here)
├── package.json              # Dependencies
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript config
└── DEPLOYMENT_GUIDE.md       # Deployment instructions
```

## 🎨 Customization

### Colors

Edit `client/global.css` to customize the pastel color palette:

```css
:root {
  --color-lavender: 270 60% 80%;
  --color-mint: 150 60% 80%;
  --color-peach: 25 85% 80%;
  --color-sky-blue: 200 70% 80%;
  --color-cream: 40 100% 95%;
}
```

### Content

Update these files to customize your portfolio:

- `client/pages/Index.tsx` - Home page intro
- `client/pages/Skills.tsx` - Technical skills
- `client/pages/Projects.tsx` - Your projects
- `client/pages/Experience.tsx` - Work experience
- `client/pages/Achievements.tsx` - Certifications & awards
- `client/components/Navigation.tsx` - Navigation links

### Contact Form Email

Configure email settings in `.env` file:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
OWNER_EMAIL=where-to-receive-messages@gmail.com
```

## 📚 Technology Stack

### Frontend

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS 3** - Styling
- **React Router 6** - Navigation
- **Lucide React** - Icons
- **TypeScript** - Type safety

### Backend

- **Express.js** - Web server
- **Nodemailer** - Email handling
- **Zod** - Data validation
- **TypeScript** - Type safety

### Tools

- **pnpm** - Package manager
- **Prettier** - Code formatting
- **Vitest** - Testing framework

## 📝 Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm test         # Run tests
pnpm typecheck    # Check TypeScript types
pnpm format.fix   # Format code with Prettier
```

## 🌐 Deployment

### Netlify (Recommended for Frontend)

1. Push code to GitHub
2. Connect repository to Netlify
3. Set environment variables in Netlify dashboard
4. Deploy automatically on push

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions.

### Vercel

Similar process to Netlify, with automatic environment variable setup.

### Render (for Backend)

Deploy the Express backend separately for production email handling.

## ✨ Features Breakdown

### Home Page

- Animated hero section with typing effect
- Contact information
- Quick stats
- Call-to-action buttons
- Resume download

### About Page

- Professional summary
- Key highlights
- Education timeline
- Interests and passions

### Skills Page

- Categorized technical skills
- Certifications showcase
- Organized by technology type

### Projects Page

- Project cards with descriptions
- Technology stack tags
- Impact highlights
- Links to view projects

### Experience Page

- Internship details
- Timeline visualization
- Leadership activities
- Workshop attendance

### Achievements Page

- Awards and recognition
- Certifications with descriptions
- Technical presentations
- Workshop participation

### Contact Page

- Contact information cards
- Fully functional contact form
- Email validation
- Success/error messaging
- Social media links

## 🔐 Security

- Email credentials stored in `.env` (never committed)
- Input validation with Zod
- Gmail app passwords instead of main password
- HTTPS enforced in production

## 🐛 Troubleshooting

### Contact form not sending emails?

- Check that `.env` file has correct email credentials
- Verify Gmail 2-Step Verification is enabled
- Use App Password, not main Gmail password
- Check spam/trash folder

### Resume not downloading?

- Ensure `public/resume.pdf` exists
- Check file is readable
- Clear browser cache

### Build errors?

- Delete `node_modules` and `pnpm-lock.yaml`
- Run `pnpm install` again
- Check Node.js version (16+)

## 📞 Support

For questions or issues:

- Email: marciandavid1904@gmail.com
- GitHub: [Marcian's GitHub](https://github.com/MARCIANBENEDICT)
- LinkedIn: [Marcian's LinkedIn](https://www.linkedin.com/in/marcian-benedict-9b1331282/)

## 📄 License

This portfolio is created for Marcian Benedict D. All rights reserved.

---

Built with ❤️ for a modern portfolio experience.
