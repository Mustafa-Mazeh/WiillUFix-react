# WillUFix — React conversion

The original static site (WillUFix.com) converted to a React app, with all the
custom CSS combined into one stylesheet.

## What changed
- **Step 1 — Combined CSS:** `css/style.css`, `style2.css`, `style3.css` and
  `stylef.css` are merged into a single file: `src/styles/styles.css`.
  Overlapping rules (header, footer, nav, etc.) were resolved so one stylesheet
  works on every page. Bootstrap stays as a CDN link (it's a framework, not
  custom CSS).
- **Step 2 — React:** every HTML page is now a React page/route.
  - `index.html`        → `src/pages/Home.js`        (route `/`)
  - `Services.html`     → `src/pages/Services.js`    (route `/services`)
  - `Applications.html` → `src/pages/Applications.js`(route `/applications`)
  - `CnUS.html`         → `src/pages/Contact.js`     (route `/contact`)
  - Shared header/footer/back-to-top → `src/components/`
  - The jQuery code in `main.js` (header scroll, mobile menu, carousels,
    back-to-top) is reimplemented as React components.

## Run it
```bash
npm install
npm start          # development server at http://localhost:5173
```

## Build for production
```bash
npm run build      # output goes to dist/
npm run preview    # preview the production build
```

Upload the contents of `dist/` to any static host.

## Project structure
```
index.html              app shell (loads Bootstrap + Font Awesome + fonts)
src/
  main.js              entry point
  App.js               routes
  styles/styles.css     ← the combined stylesheet (Step 1)
  components/           Header, Footer, BackToTop, HeroCarousel, TestimonialCarousel
  pages/                Home, Services, Applications, Contact
  data/                 applications.js, content.js (card/text content)
public/img/             all images
```

## Notes
- Forms (contact + booking) currently reset on submit; no backend is wired up
  (the original HTML had none either).
- Routes use clean paths. For static hosts that 404 on refresh of deep links,
  switch `BrowserRouter` to `HashRouter` in `src/main.js`.
