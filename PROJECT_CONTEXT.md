# CamBioLogics — Project Context

> **Purpose:** This document captures the full context of the CamBioLogics website project so any future conversation can quickly understand the codebase, design system, team, and architecture.

---

## 1. Company Overview

**CamBioLogics** is a Cambridge, UK-based biotechnology company specializing in AI-driven solutions for antibody engineering, cellular therapy, and rare disease diagnostics.

- **Domain:** [cambiologics.com](https://cambiologics.com) (hosted via GitHub Pages, CNAME configured)
- **Email:** CamBiologics@cantab.net
- **Location:** Cambridge, UK
- **Founded:** 2025

---

## 2. Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Pure HTML5, CSS3, Vanilla JavaScript (no frameworks) |
| Fonts | Google Fonts — Playfair Display (headings), Cormorant Garamond (body), Inter (CARchitect UI) |
| Icons/Illustrations | Inline SVG (no external image deps) |
| Auth Backend | Supabase (auth + session management) |
| Hosting | GitHub Pages |
| Responsive | CSS Media Queries (breakpoints: 768px, 480px) |

---

## 3. Design System

### Color Palette (CSS Custom Properties)

| Token | Hex | Usage |
|-------|-----|-------|
| `--rich-blue` | #1a3a52 | Primary text, headings |
| `--teal-accent` | #2c5f6f | Secondary accent, nav tagline |
| `--copper` | #b87333 | Warm accent, buttons, highlights |
| `--gold` | #d4af37 | Premium accent |
| `--soft-cream` | #f5f1ed | Light backgrounds |
| `--ivory` | #f0ece6 | Page background |
| `--deep-navy` | #0f1419 | Dark mode/contrast |
| `--midnight` | #0a0e14 | Deepest dark |
| `--sage` | #8b9d83 | Muted green accent |

### Gradients
- `--gradient-primary`: linear-gradient(135deg, #1a3a52 → #2c5f6f → #3d7a8a)
- `--gradient-accent`: linear-gradient(135deg, #b87333 → #d4af37 → #b87333)

### Typography
- **Headings:** Playfair Display (700, 800, 900) — serif, elegant
- **Body:** Cormorant Garamond (300–600) — serif, refined
- **CARchitect UI:** Inter (300–900) — sans-serif, functional

### Visual Signature
- Molecular background pattern (subtle animated radial gradients at 3% opacity)
- Glassmorphism nav (backdrop-filter blur on scroll)
- Scroll-triggered fade-in animations
- Copper/gold border accents on interactive elements

---

## 4. Site Map & File Structure

```
CamBiologics/
├── index.html                          # Homepage — hero, platform cards, core values
├── cambiologics-about-us.html          # About Us — founding story, timeline, accomplishments
├── cambiologics-platforms.html         # Platforms overview — all 3 AI platforms
├── cambiologics-predict-mab.html       # PREDICT-mAb — antibody optimization platform
├── cambiologics-cellcipher.html        # CellCipher — cellular therapy decoding
├── cambiologics-genspy.html            # GenSpy — rare disease genomic analysis
├── team.html                           # Team page — core team + advisory board
├── contact.html                        # Contact page
├── industry-updates.html               # News/updates in cell & gene therapy
├── CARchitect-Homepage-Redesign.html   # CARchitect landing page (dark theme, glassmorphism)
├── auth/
│   ├── login.html                      # Supabase-backed login for CARchitect
│   ├── dashboard.html                  # CARchitect CAR construct designer (main app)
│   ├── css/style.css                   # Auth styles
│   └── js/
│       ├── supabase-config.js          # Supabase client init (anon key)
│       └── auth.js                     # Sign-up/sign-in logic
├── images/                             # Site images
├── team-photos/                        # Team member headshots
├── CNAME                               # GitHub Pages custom domain → cambiologics.com
├── README.md                           # Original project readme
├── CARchitect-Redesign-UX-Guide.md    # UX design guide for CARchitect redesign
├── Cambilogics_new_logo_transparent.png # Current logo (transparent)
├── New_Logo_Cambiologics_1Mar.png      # Latest logo (March update)
└── CamBiologics Team.pptx             # Team presentation deck
```

### Backup/Variant Files
- `index.html_bak`, `index_backup_original.html` — earlier homepage versions
- `index_new.html`, `index_shade_preview.html`, `shade_comparison.html` — redesign experiments

---

## 5. Page Descriptions

### Homepage (`index.html`)
Hero section with company mission, three platform overview cards (PREDICT-mAb, CellCipher, GenSpy), five core values (Interdisciplinary Excellence, Scientific Rigor, Purposeful Speed, Patient-Centered Impact, Inclusive Collaboration), footer.

### About Us (`cambiologics-about-us.html`)
Founding story, Cambridge-inspired illustration, interactive timeline, recent accomplishments, research/partnerships/innovation showcase cards.

### Platforms Overview (`cambiologics-platforms.html`)
Introduction to AI in biologics development, three detailed platform cards with tech badges (AI/ML, Deep Learning, Genomics).

### PREDICT-mAb (`cambiologics-predict-mab.html`)
AI-driven monoclonal antibody optimization. Features: Rapid Prediction, Developability Scoring, Immunogenicity Assessment, Affinity Optimization, Multi-Parameter Optimization, Data-Driven Insights. Large antibody Y-shape SVG visualization.

### CellCipher (`cambiologics-cellcipher.html`)
Deep learning for cellular therapy. Features: Single-Cell Analysis, Efficacy Prediction, Quality Control, Manufacturing Optimization, Mechanism Discovery, Patient Stratification.

### GenSpy (`cambiologics-genspy.html`)
AI-powered genomic analysis for rare diseases. Features: Variant Prioritization, Phenotype Matching, Structural Variant Detection, Multi-Gene Interactions, Novel Gene Discovery, Clinical Interpretation.

### Team (`team.html`)
Core team members + advisory board with headshots and bios.

### Contact (`contact.html`)
Contact form and company information.

### Industry Updates (`industry-updates.html`)
Curated news in cell & gene therapy, AI drug discovery, regulatory developments, and industry events.

### CARchitect (`CARchitect-Homepage-Redesign.html`)
A separate product landing page with a dark theme (#020617), glassmorphism UI, animated gradient headline, stats bar (50+ components, 6 targets, CAR-T/NK, 5 generations), feature cards, CAR architecture pipeline visualization (Leader → scFv → Hinge → TM → Co-stim → Signal), FDA targets tag cloud. Uses Inter font, indigo/purple brand identity.

### CARchitect Dashboard (`auth/dashboard.html`)
The main CARchitect web app — a CAR construct designer where authenticated users can build CAR-T constructs by selecting validated components (signal peptides, scFv domains, hinges, transmembrane domains, costimulatory domains, signaling domains, safety switches). Uses Supabase for auth. Has a demo mode for local/unauthenticated access.

---

## 6. Team

### Core Team
| Name | Role |
|------|------|
| **Dr. Vikash Singh** | Founder & Chief Scientific Officer |
| **Shalu Grewal** | Director |
| **Dr. Suman Dhanda** | Business Development Officer, Head India |
| **Satyawan S. (Satya)** | Chief Technology Officer |

### Advisory Board
| Name | Affiliation |
|------|------------|
| **Dr. Nitin Kumar** | Founder & Director, Pangenomix |
| **Dr. Rahuman S. Malik Sheriff** | Senior Project Leader, EMBL-EBI |
| **Dr. Elise Kaplan** | Senior Researcher, CNRS, France |

---

## 7. Key Products / Platforms

### PREDICT-mAb
AI-driven monoclonal antibody optimization platform. Predicts and optimizes antibody properties (affinity, developability, immunogenicity) using machine learning.

### CellCipher
Deep learning platform for decoding cellular therapy. Analyzes single-cell data to predict efficacy, optimize manufacturing, and stratify patients for cell therapies.

### GenSpy
AI-powered genomic analysis for rare diseases. Prioritizes genetic variants, matches phenotypes, and discovers novel genes involved in rare diseases.

### CARchitect
Interactive web tool for designing CAR (Chimeric Antigen Receptor) constructs. Users select validated components to build CAR-T/NK cell therapy constructs. Features a visual pipeline builder, component library (50+ components), FDA-validated targets (CD19, CD22, BCMA, CD20, CD30, GD2, HER2, Mesothelin, EGFR), and sequence export.

---

## 8. Authentication & Backend

- **Provider:** Supabase
- **URL:** `https://wyeouenrdlpmwetnfdtj.supabase.co`
- **Auth flow:** Email/password sign-up and sign-in via `auth.js`
- **Dashboard:** Protected route; checks session on load, falls back to demo mode if no Supabase connection
- **Login page:** `auth/login.html` with branded UI matching site design

---

## 9. Navigation Structure

The site uses a fixed/sticky navigation bar across all pages with these links:

- Home
- About
- Platforms (dropdown: PREDICT-mAb, CellCipher, GenSpy, CARchitect)
- Team
- Industry Updates
- Contact

CARchitect has its own nav with: Home, Platform (dropdown with CARchitect featured), Components, Launch Builder CTA.

---

## 10. Design Philosophy

"Luxury biotechnology aesthetic" — inspired by premium brands while maintaining scientific credibility:
1. Serif fonts for elegance and readability
2. Navy blues and copper/gold accents for sophistication
3. Generous white space for premium feel
4. Subtle animations that enhance without overwhelming
5. Custom inline SVG graphics for crisp display at any resolution
6. Professional tone balanced between accessible and technically credible

---

## 11. Notes for Future Work

- All CSS is inline within each HTML file (no shared stylesheet except auth/)
- Each page is self-contained — updating shared elements (nav, footer) requires editing each file
- Logo files: `New_Logo_Cambiologics_1Mar.png` is the latest; `Cambilogics_new_logo_transparent.png` for transparent version
- The CARchitect redesign uses a separate dark design system distinct from the main site
- Team photos are in `/team-photos/` with naming like `vikash-singh.png`
- Supabase anon key is committed (public key, safe for client-side)
- Site is deployed to GitHub Pages with custom domain `cambiologics.com`

---

*Last updated: March 3, 2026*
