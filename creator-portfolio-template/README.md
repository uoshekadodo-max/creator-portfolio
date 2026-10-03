# Creator Portfolio + Media Kit Template

A premium, static creator portfolio designed for content creators, influencers, UGC creators and social-media personalities.

It uses only:

- HTML5
- CSS3
- Vanilla JavaScript
- Remote Unsplash sample photographs for the demo visuals
- One optional local PDF media-kit file

No PHP, database, framework, CSS library or authentication is required.

## Why this version is structured this way

A creator media kit should quickly communicate identity, niche, audience context, platform performance, content quality, services, previous work/proof and contact information. The template therefore puts those items into a brand-manager-friendly flow instead of treating the site like a normal resume.

The audience section is intentionally included because follower count alone does not explain whether a creator's audience fits a campaign.

## Project structure

```text
creator-portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   │   ├── profile.svg
│   │   ├── work-01.svg
│   │   ├── work-02.svg
│   │   ├── work-03.svg
│   │   ├── work-04.svg
│   │   ├── work-05.svg
│   │   └── work-06.svg
│   └── media-kit.pdf
└── README.md
```

## 1. Customize the creator

Open:

```text
js/script.js
```

At the top you will find:

```js
const creator = {
  name: "Maya Johnson",
  niche: "Lifestyle • Beauty • UGC Creator",
  location: "Lagos, Nigeria",
  ...
};
```

Change:

- name
- niche
- location
- specialty
- languages
- email
- WhatsApp
- Instagram URL
- TikTok URL
- YouTube URL
- platform statistics
- engagement rate
- audience location
- audience age
- audience focus
- monthly reach

The page automatically updates the places that use these values.

### Important

Only publish accurate statistics. If you use engagement rate, reach, impressions or campaign results, use figures from the creator's actual platform analytics or another reliable source.

## 2. Replace the profile image

The demo profile currently uses a sample photo loaded from Unsplash in `index.html`. Replace its image URL with the creator’s own portrait before publishing a real portfolio.

You can replace it with:

```text
assets/images/profile.jpg
```

Then change the image path in `index.html`:

```html
<img src="./assets/images/profile.jpg" alt="Creator portrait">
```

Keep a useful alt description rather than leaving alt text empty.

## 3. Replace portfolio images

The six portfolio cards currently use sample photographs loaded from Unsplash URLs in `index.html`. You can keep these as visual examples for a demo, or replace each image URL with a locally stored JPG, PNG or WebP file. These are stock/demo visuals, not proof of actual creator campaigns. Replace them with the creator’s own work before presenting the portfolio as a real creator’s work. The remote images require an internet connection to load.

Also replace:

- project titles
- platform names
- descriptions
- categories
- content URLs
- any performance claims

Do not present demo brands as real collaborations.

## 4. Add a real media-kit PDF

The current button points to:

```text
assets/media-kit.pdf
```

Replace that file with the creator's real PDF using the same filename.

If you use another filename, update:

```html
href="./assets/media-kit.pdf"
```

A useful media kit can contain:

- short biography
- creator positioning
- platform statistics
- audience demographics
- content examples
- previous partnerships
- services
- rates or "rates available on request"
- contact details

Keep the PDF concise and visually consistent with the website.

## 5. Change the colors

Open:

```text
css/style.css
```

At the beginning, edit the variables inside `:root`.

For example:

```css
--ink: #171512;
--paper: #f4f0e8;
--white: #fffdf8;
--accent: #9a5c3f;
```

The design intentionally uses a restrained editorial palette instead of gradients and neon colors.

## 6. Add another social platform

Add another link to the social row in `index.html`.

Example:

```html
<a data-social="facebook" href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
  Facebook
</a>
```

Then add the real Facebook URL to the `social` object in `js/script.js`.

For a simple text link, no other JavaScript is required.

## 7. Add another portfolio project

Copy one existing `<article class="work-card">...</article>` inside `.work-grid`.

Change:

- `data-category`
- image path
- image alt text
- platform
- project title
- description
- content link

Available filter categories in the demo are:

```text
beauty
ugc
fashion
lifestyle
```

If you create a new category, add a matching filter button.

## 8. Contact form

This is intentionally NOT a fake backend.

Submitting the form creates a prepared email using:

```text
mailto:
```

The visitor's default email application opens with the campaign information.

For a real production version, you can later connect the form to:

- your own PHP backend
- a form service
- another secure email/form provider

Do not collect sensitive information through a static demo form.

## 9. Local testing

You can double-click `index.html` and inspect the website locally.

For development, a local server is also useful:

```bash
python -m http.server
```

Then open the local address shown by the terminal.

## 10. GitHub Pages deployment

1. Create a GitHub repository.
2. Upload the entire `creator-portfolio` folder.
3. Make sure `index.html` is at the repository root.
4. Open repository Settings.
5. Open Pages.
6. Select deployment from the main branch/root folder.
7. Save.
8. GitHub will provide the public site URL.

Keep relative paths such as:

```text
./css/style.css
./js/script.js
./sample Unsplash profile photo URL
```

This makes the template portable.

## 11. Before selling the template

Remove all demo claims and clearly document every place the buyer should customize.

At minimum, check:

- creator name
- profile image
- bio
- social URLs
- follower counts
- engagement rate
- audience demographics
- portfolio projects
- brand collaborations
- testimonials
- services
- rates
- email
- WhatsApp
- media-kit PDF
- copyright text

Do not sell a version containing fictional testimonials or fictional partnerships presented as real.

## Design philosophy

This template is deliberately:

- editorial
- restrained
- mobile-first in its information priorities
- lightweight
- accessible
- dependency-free
- easy to customize
- suitable for GitHub Pages or other static hosting

It avoids:

- gradients
- excessive glassmorphism
- excessive rounded cards
- unnecessary animation
- framework dependencies
- fake backend behavior
- fake proof
