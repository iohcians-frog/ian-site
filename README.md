# Institute for Applied Nonsense (IAN)

Scientifically valid, existentially void. We collect peer-reviewed research that technically makes sense... but really, really doesn't.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview build
npm start
```

Visit `http://localhost:5173`

---

## 📝 How to Add a New Case

### Step 1: Create the Markdown File

Create a new file in `content/cases/your-case-slug.md`:

```markdown
---
slug: your-case-slug
title: Your Amazing Research Title
verdict: elegant
tags: [Field Name, Subfield]
date: 2025-01-15
summary: One-line summary of the absurdity.
paperLink: https://doi.org/10.1234/example
---

## The Paper

Brief description of what the researchers did...

---

## Sense ✅

Why the methodology is solid:
- Point 1
- Point 2

---

## Nonsense 🤔

Why it's absurd in practice:
- Problem 1
- Problem 2

---

## Lesson 📚

What this teaches us about science/research/humanity...
```

### Step 2: Add Metadata Entry

Edit `src/data/cases.ts` and add your case to the array:

```typescript
{
  slug: "your-case-slug",
  title: "Your Amazing Research Title",
  verdict: "elegant",  // or "genius", "nice-demo", "over-engineered"
  tags: ["Field Name", "Subfield"],
  date: "2025-01-15",
  summary: "One-line summary of the absurdity.",
  paperLink: "https://doi.org/10.1234/example",
}
```

### Step 3: Build and Deploy

```bash
npm run build
git add .
git commit -m "Add case: Your Research Title"
git push
```

GitHub Actions will automatically deploy to GitHub Pages!

---

## 🎨 Content Guidelines

### Verdict Types

- 🧠 **genius** - Genius curiosity (brilliant but useless)
- 🪄 **nice-demo** - Nice demo (proves a point, but that's it)
- 🧰 **over-engineered** - Over-engineered (sledgehammer for a nail)
- 🧪 **elegant** - Elegant nonsense (perfect methodology, zero utility)

### Writing Style

**Structure**: Sense → Nonsense → Lesson

**Tone**: 
- Be witty, not cruel
- Critique the work, not the researchers
- Celebrate the absurdity
- Find the teaching moment

**Length**: 
- Minimum: 500 words
- Sweet spot: 1000-1500 words
- Maximum: Don't bore us

---

## 📁 Project Structure

```
ian-site/
├── content/
│   └── cases/              # Markdown files for each case
│       ├── microwave-regen.md
│       ├── graphs-persuasion.md
│       └── ml-candle.md
├── public/
│   ├── frog.svg            # Site mascot
│   └── ...
├── src/
│   ├── components/
│   │   ├── CaseCard.tsx    # Case listing card
│   │   ├── Layout.tsx      # Site layout wrapper
│   │   └── VerdictBadge.tsx
│   ├── data/
│   │   └── cases.ts        # Case metadata (for listings)
│   ├── pages/
│   │   ├── index.tsx       # Home page
│   │   ├── about.tsx       # About page
│   │   ├── manifesto.tsx   # Manifesto
│   │   └── cases/
│   │       ├── index.tsx   # Cases listing
│   │       └── [slug].tsx  # Individual case page (reads .md files)
│   └── styles/
│       └── globals.css
├── next.config.js          # Next.js config (basePath for GitHub Pages)
├── tailwind.config.js
└── package.json
```

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (Pages Router)
- **Styling**: Tailwind CSS 3 + Typography plugin
- **Content**: Markdown with gray-matter + marked
- **Hosting**: GitHub Pages
- **Deployment**: GitHub Actions

---

## 📊 Scaling to 1000+ Cases

The architecture is designed to scale:

### Current (1-100 cases)
- ✅ Flat directory: `content/cases/*.md`
- ✅ Single metadata file: `src/data/cases.ts`

### Future (100-1000+ cases)

**Option 1: Organize by date**
```
content/cases/
├── 2025/
│   ├── 01-january/
│   ├── 02-february/
│   └── ...
└── 2024/
    └── ...
```

**Option 2: Organize by field**
```
content/cases/
├── engineering/
├── psychology/
├── data-science/
└── ...
```

**Option 3: Add a CMS**
- Use Netlify CMS or Decap CMS for a web-based editor
- Non-technical contributors can add cases
- Still stores in GitHub

---

## 🚢 Deployment

### Automatic Deployment (Current)

Pushes to `main` branch automatically deploy via GitHub Actions.

Workflow: `.github/workflows/deploy.yml`

### Manual Deployment

```bash
npm run build
# Copy 'out/' folder to your hosting
```

---

## 🎯 Future Enhancements

- [ ] Full-text search across cases
- [ ] Related cases recommendations
- [ ] RSS feed for new cases
- [ ] Social sharing cards (OpenGraph)
- [ ] Analytics (Plausible)
- [ ] Comment system (GitHub Discussions)
- [ ] Submit case form (GitHub Issues)
- [ ] Tag-based navigation
- [ ] Author profiles (if no longer anonymous)

---

## 📜 License

Content: Creative Commons (your choice)
Code: MIT License

---

## 🐸 About

**Institute for Applied Nonsense (IAN)**  
*A division of the Reductionphobia Collective*

We roast patterns, not people.  
We love science enough to laugh at its bad habits.

**Contact**: [Create an issue](https://github.com/iohcians-frog/ian-site/issues)

---

Built with curiosity, caffeine, and questionable grant proposals. 🐸
