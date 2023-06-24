# Template: Vite - React - TS (using styled-components and gh-pages)

## Setup

### Github

---

- go to template repo and select use this template
  - create new repo
- copy ssh code and in parent directory use `git clone <ssh code>`
- run `cd <repo name>`
- run `npm install`

### gh-pages (from [see comment section](https://dev.to/shashannkbawa/deploying-vite-app-to-github-pages-3ane))

---

- `vite.config.js`
  - replace `<repo>` in `base` with repo name
- `package.json`
  - replace `<repo>` in `homepage` with repo name

### Misc File Changes

---

- `package.json`
  - replace `template` in `name` with repo name
- `index.html`

  - favicon (should be all the same for FrontendMentor)
  - google font import(s)
  - title

### Challenge Files

---

- `public`

  - all design files (including `style-guide`) to `design`
  - static images to `images`

- `src`

  - any provided json (or similar) data to `data`
  - if any SVGs need to change (hover, active, etc) make an `Icons` file within `components`
    - return each SVG as own component
    - change any `fill`, `stroke`, etc to `currentColor` to control color easier

- replace `readme` with `readme-template` (can reference local/github template repo for any remaining steps)
- any implementation steps from challenge files `readme` should be added to `style-guide` (e.g. how filters should work)

### Theme

---

- `themes.tsx`

  - add fonts used to `fontFamily`
  - remove unused font weights from `fontWeight`
  - add/update themes

- `App.tsx`
  - update `Wrapper` and `StyledApp`
    - need to add things such as `fontFamily`, `fontWeight`, `color`, etc.

## Development

## Deployment

- make sure all steps from 'Setup' is complete for 'gh-pages'
- run `npm run deploy` to update live site
