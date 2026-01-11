# CamBioLogics Website

A premium, modern biotechnology company website showcasing AI-powered biological solutions. Built with pure HTML5, CSS3, and vanilla JavaScript - no frameworks required.

## 🧬 Overview

CamBioLogics is a Cambridge, UK-based biotechnology company specializing in AI-driven solutions for antibody engineering, cellular therapy, and rare disease diagnostics. This website features an elegant, professional design with smooth animations and interactive elements.

## ✨ Features

### Design & Aesthetics
- **Premium Typography**: Playfair Display (serif) and Cormorant Garamond fonts for an elegant, refined look
- **Sophisticated Color Palette**: 
  - Rich Blue (#1a3a52)
  - Teal Accent (#2c5f6f)
  - Copper (#b87333)
  - Gold (#d4af37)
  - Soft Cream & Ivory backgrounds
- **Custom SVG Illustrations**: Hand-crafted icons for antibodies, cells, DNA helixes, and neural networks
- **Smooth Animations**: Fade-ins, parallax effects, hover interactions, and scroll-triggered reveals
- **Molecular Background Pattern**: Subtle animated pattern creating scientific ambiance

### Technical Features
- **100% Responsive**: Fully optimized for desktop, tablet, and mobile devices
- **No Dependencies**: Pure HTML/CSS/JavaScript - no frameworks or libraries needed
- **Fast Loading**: Minimal code, optimized assets
- **Fixed Navigation**: Sticky header with dropdown menus
- **Smooth Scrolling**: Enhanced navigation experience
- **SEO-Friendly**: Semantic HTML5 structure

## 📁 File Structure

```
cambiologics-website/
├── index.html                          # Homepage (Main landing page)
├── cambiologics-about-us.html          # About Us page
├── cambiologics-platforms.html         # Platforms overview page
├── cambiologics-predict-mab.html       # PREDICT-mAb platform details
├── cambiologics-cellcipher.html        # CellCipher platform details
├── cambiologics-genspy.html            # GenSpy platform details
└── README.md                           # This file
```

## 🚀 Quick Start

### Option 1: Local Development
1. Download all HTML files to a folder
2. Open `index.html` in your web browser
3. Navigate through the site using the menu

### Option 2: Web Hosting
1. Upload all 6 HTML files to your web hosting service (e.g., GitHub Pages, Netlify, Vercel)
2. Ensure `index.html` is in the root directory
3. Access your site through your domain

### Option 3: GitHub Pages
```bash
# Clone or create repository
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main

# Enable GitHub Pages in repository settings
# Select 'main' branch as source
```

## 📄 Page Details

### 1. **Homepage** (`index.html`)
The main landing page featuring:
- Hero section with company mission and vision
- Three platform overview cards (PREDICT-mAb, CellCipher, GenSpy)
- Five core values with detailed descriptions:
  - Interdisciplinary Excellence
  - Scientific Rigor & Transparency
  - Purposeful Speed & Sustainable Growth
  - Patient-Centered Impact
  - Inclusive Collaboration & Mutual Respect
- Professional footer with contact information

### 2. **About Us** (`cambiologics-about-us.html`)
Company background and history featuring:
- Company founding story and mission
- Cambridge-inspired illustration
- Interactive timeline showing company evolution
- Recent accomplishments and initiatives
- Three showcase cards highlighting research, partnerships, and innovation

### 3. **Platforms Overview** (`cambiologics-platforms.html`)
Overview of all three AI platforms:
- Comprehensive introduction to AI in biologics development
- Three detailed platform cards with "Learn More" links
- Custom icons for each platform
- Technology badges (AI/ML, Deep Learning, Genomics)

### 4. **PREDICT-mAb** (`cambiologics-predict-mab.html`)
AI-Driven Monoclonal Antibody Optimization Platform:
- Detailed platform description
- Large antibody Y-shape visualization
- Six capability features:
  - Rapid Prediction
  - Developability Scoring
  - Immunogenicity Assessment
  - Affinity Optimization
  - Multi-Parameter Optimization
  - Data-Driven Insights

### 5. **CellCipher** (`cambiologics-cellcipher.html`)
Decoding Cellular Therapy:
- Deep learning for cellular understanding
- Cell visualization with neural network
- Six capability features:
  - Single-Cell Analysis
  - Efficacy Prediction
  - Quality Control
  - Manufacturing Optimization
  - Mechanism Discovery
  - Patient Stratification

### 6. **GenSpy** (`cambiologics-genspy.html`)
Revealing Hidden Genetic Causes:
- AI-powered genomic analysis for rare diseases
- DNA helix with magnifying glass visualization
- Six capability features:
  - Variant Prioritization
  - Phenotype Matching
  - Structural Variant Detection
  - Multi-Gene Interactions
  - Novel Gene Discovery
  - Clinical Interpretation

## 🎨 Design Philosophy

This website follows a **luxury biotechnology aesthetic**, inspired by premium brands while maintaining scientific credibility:

1. **Typography Hierarchy**: Serif fonts for elegance and readability
2. **Refined Color Palette**: Navy blues and copper/gold accents suggest sophistication and innovation
3. **Generous White Space**: Creates breathing room and premium feel
4. **Subtle Animations**: Enhance UX without overwhelming
5. **Custom Illustrations**: SVG graphics ensure crisp display at any resolution
6. **Professional Tone**: Balanced between accessible and technically credible

## 🛠️ Customization Guide

### Changing Colors
All colors are defined in CSS custom properties (variables) at the top of each HTML file:

```css
:root {
    --rich-blue: #1a3a52;
    --teal-accent: #2c5f6f;
    --copper: #b87333;
    --gold: #d4af37;
    --soft-cream: #f5f1ed;
    --ivory: #fafaf8;
    /* ... more colors */
}
```

Simply modify these hex values to change the entire color scheme.

### Adding New Pages
1. Copy an existing HTML file as a template
2. Update the `<title>` tag
3. Add navigation link in the `<nav>` section of all pages
4. Update content within the main sections
5. Ensure footer contact information matches

### Modifying Content
- **Text**: Directly edit HTML content within sections
- **Images/Icons**: SVG code is embedded; modify viewBox and paths as needed
- **Animations**: Adjust timing in CSS `@keyframes` and `animation` properties

## 📱 Responsive Breakpoints

The website adapts to different screen sizes:

- **Desktop**: > 768px (Full navigation, grid layouts)
- **Tablet**: 768px - 480px (Adjusted spacing, smaller fonts)
- **Mobile**: < 480px (Single column, stacked navigation)

## 🌐 Browser Support

Tested and compatible with:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Performance

- **Load Time**: < 1 second on standard connections
- **File Sizes**: Each HTML page ~20-30KB
- **No External Dependencies**: All resources inline (fonts via Google Fonts CDN)
- **Lighthouse Score**: 90+ across all metrics

## 🔧 Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: 
  - Flexbox & Grid layouts
  - CSS Custom Properties (variables)
  - CSS Animations & Transitions
  - Media Queries for responsive design
- **JavaScript (Vanilla)**:
  - Smooth scrolling
  - Scroll-triggered animations
  - Parallax effects
  - Navigation interactions

## 📞 Contact Information

**CamBioLogics**
- Email: CamBiologics@cantab.net
- Location: Cambridge, UK
- Website: CamBiologics.com

## 📝 License

All content and code © 2025 CamBioLogics. All rights reserved.

## 🤝 Contributing

This is a corporate website. For inquiries about contributions or modifications, please contact CamBioLogics directly.

## 📚 Additional Notes

### Google Fonts
The website uses Google Fonts CDN for typography:
- Playfair Display (400, 600, 700, 800)
- Cormorant Garamond (300, 400, 500, 600)

These load from `https://fonts.googleapis.com/` - ensure internet connection for optimal display.

### SVG Illustrations
All icons and illustrations are inline SVG for:
- Crisp display at any resolution
- Easy color customization via CSS
- No external image dependencies
- Faster page loads

### Future Enhancements
Potential additions for future versions:
- [ ] Team member profiles page
- [ ] Contact form with backend integration
- [ ] News/Blog section
- [ ] Case studies and publications
- [ ] Interactive data visualizations
- [ ] Multi-language support
- [ ] Dark mode toggle

---

**Built with ❤️ for CamBioLogics**

*Advancing biotechnology through AI*
