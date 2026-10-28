# Dipanshu Thakur – Personal Portfolio Website

A modern, professional, fully responsive personal portfolio website designed for **Dipanshu Thakur**, a 2nd-year B.Tech student specializing in **Cybersecurity & IoT** at **Baderia Global Institute of Engineering and Management (BGIEM)**.

---

## 🌟 Highlights & Features

- **Domain-Authentic Visual Design**: Clean white/light aesthetic (`#f8fafc` / `#ffffff`) with deep navy blue (`#0f172a`, `#1e293b`) and indigo (`#4f46e5`) accents.
- **Typography & Rhythm**: Google Font *Plus Jakarta Sans* with clean hierarchy, balanced headers, and tabular numerals for data.
- **Strict Anti-Slop & Zero-Pills**: Adheres strictly to genuine, unboxed metadata (`·` typographic separators) without artificial scoreboards or pseudo-code commentary.
- **Truthful & Transparent**:
  - Python and Cybersecurity represented strictly through curriculum and conceptual topics. No fabricated proficiency percentages or experience levels.
  - Tasteful empty state for projects with an honest academic pipeline and roadmap.
  - Clearly labeled placeholders for GitHub and LinkedIn with an interactive helper modal.
- **Accessible & Recruiter-Friendly**: Direct `mailto:thakurdipanshu2006@gmail.com` link, 1-click email copy button with toast feedback, and an integrated mail composition assistant.
- **Dynamic Footer**: Dynamic current year computation (`new Date().getFullYear()`).
- **Interactive Deployment Guide & Standalone HTML**: Built-in modal guide with 1-click standalone HTML export for offline sharing or attaching to job applications.

---

## 📁 Project Structure

```text
├── index.html                     # HTML5 entry point with OpenGraph, Twitter card, & JSON-LD schema
├── metadata.json                  # Application metadata & capabilities
├── package.json                   # Project scripts and dependencies (React 19, Tailwind CSS v4, Lucide)
├── tsconfig.json                  # Strict TypeScript configuration
├── vite.config.ts                 # Vite bundler configuration
├── src/
│   ├── main.tsx                   # React root mount
│   ├── App.tsx                    # Main layout assembling all sections & modals
│   ├── index.css                  # Global styles with Tailwind CSS v4 and typography
│   ├── assets/
│   │   └── images/                # Studio-generated photography assets (Student portrait, IoT workspace)
│   ├── data/
│   │   └── portfolioData.ts       # Central verified student data model & profile content
│   └── components/
│       ├── Navbar.tsx             # 3-Zone top navigation bar (responsive mobile drawer)
│       ├── Hero.tsx               # Split-screen hero with portrait, bio, CTAs & key facts strip
│       ├── About.tsx              # Authentic narrative, academic snapshot & lab visual
│       ├── Skills.tsx             # Python, Cybersecurity & IoT cards with interactive filter
│       ├── Projects.tsx           # Tasteful empty state with planned academic lab roadmap
│       ├── Education.tsx          # BGIEM degree card & relevant coursework
│       ├── Contact.tsx            # Direct mailto, copy button, interactive mail draft helper
│       ├── PlaceholderModal.tsx   # Interactive helper for updating GitHub/LinkedIn links
│       ├── DeploymentModal.tsx    # Step-by-step deploy instructions & standalone HTML download
│       └── Footer.tsx             # Dynamic year copyright, navigation, & quick links
└── README.md                      # Complete setup, customization, and deployment instructions
```

---

## 🚀 Local Setup & Development

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Steps
1. **Clone or download the project files**:
   ```bash
   git clone <repository-url>
   cd dipanshu-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The compiled, production-ready static files will be generated in the `dist/` directory.

---

## 🌐 Deployment Instructions

### 1. Deploying to Netlify (Fastest & Simplest)

#### Option A: Drag & Drop (Zero Git configuration required)
1. Run `npm run build` in your terminal.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop) in your web browser.
3. Drag and drop the generated `dist` folder into the drop zone.
4. Your website is instantly live with a free custom Netlify URL!

#### Option B: Connect to GitHub
1. Push your code to a GitHub repository.
2. In Netlify, click **"Add new site"** &rarr; **"Import an existing project"** &rarr; **"GitHub"**.
3. Choose your repository.
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **"Deploy site"**. Netlify will automatically build and publish your site on every commit.

---

### 2. Deploying to GitHub Pages

1. Push your repository to GitHub.
2. Open your repository on GitHub and navigate to **Settings** &rarr; **Pages**.
3. Under **Build and deployment**:
   - Set **Source** to **GitHub Actions**.
   - GitHub will propose the standard Vite / Static HTML workflow.
4. Or use the automated `gh-pages` package:
   ```bash
   npm install -D gh-pages
   ```
   Add to `package.json` scripts:
   ```json
   "deploy": "vite build && gh-pages -d dist"
   ```
   Run:
   ```bash
   npm run deploy
   ```
5. Your portfolio will be accessible at `https://<your-username>.github.io/<repository-name>/`.

---

## ✏️ How to Customize Your Links

All profile data is organized in a single file: `/src/data/portfolioData.ts`.

To add your real GitHub and LinkedIn URLs:
1. Open `/src/data/portfolioData.ts`.
2. Locate `socialLinks`:
   ```typescript
   github: {
     url: "https://github.com/your-username",
     isPlaceholder: false,
     placeholderLabel: "GitHub Profile",
   },
   linkedin: {
     url: "https://linkedin.com/in/your-username",
     isPlaceholder: false,
     placeholderLabel: "LinkedIn Profile",
   },
   ```
3. Save the file. The portfolio will automatically update everywhere!

---

## 📄 License
This project is open-source under the Apache-2.0 License.
