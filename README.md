# SimpleVLA

A personal build log by Yahya Masri.

SimpleVLA is a long-form, single-page site documenting the journey to
understand and build Vision-Language-Action (VLA) models from first
principles. The visual writing style is intentionally inspired by
[tinytpu.com](https://tinytpu.com/), adapted for this project.

## Style and structure

- Serif-first, article-like layout
- Soft paper-toned background
- Figure + caption rhythm for technical sections
- Footnotes, references, and important resources at the end

## Tech stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS 4
- KaTeX (`react-katex`) for math rendering
- Vercel Analytics

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Optional Turbopack mode:

```bash
npm run dev:turbo
```

## Edit guide

- Main page content: `src/app/page.js`
- Top-left label + metadata: `src/app/layout.js`
- Global colors/type/zoom: `src/app/globals.css`
- Main visual asset: `public/vla.svg`

## Footnotes pattern (for future writing)

Use a marker in the text:

```jsx
...from first principles.<sup id="fn1-ref"><a href="#fn1">[1]</a></sup>
```

Define the note in the Footnotes section:

```jsx
<p id="fn1">
  [1] Your footnote text.
  <a href="#fn1-ref">↩ back</a>
</p>
```

## Build and verify

```bash
npm run lint
npm run build
npm run start
```

## Credits

- Design direction inspired by [tinytpu.com](https://tinytpu.com/)
- Content and implementation by Yahya Masri
