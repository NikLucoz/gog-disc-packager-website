# GOG Disc Packager — website and template generator

Standalone, community-maintained copy of the GOG Disc Packager website and its
printable case/disc template generator. The desktop application (Windows
packager, launcher, Linux companion) remains in the upstream repository:
<https://github.com/east35/GOG-Disc-Packager>.

This repository contains only the static site:

```text
index.html              landing page
main.js                 landing page carousel
style.css               shared styles
hero-overrides.css      landing page overrides
site.config.js          GitHub, release, and video links
generator/              browser-side template generator and PDF export
public/                 artwork, template assets, icons
docs/                   generator schema and architecture decisions
```

## Local development

```bash
npm ci
npm run dev
```

Open the printed URL for the landing page and `/generator/` for the template
generator. The Vite build includes both pages.

## Tests and build

```bash
node --test generator/model.test.js generator/pdf.test.js generator/template.test.js
npm run build
```

The build output is written to `dist/` and is not committed.

## Configuration

Edit [`site.config.js`](site.config.js) to change the GitHub repository,
release download, or video links. The values are replaced in the HTML at build
time, so there is no runtime fetch and the links work without JavaScript.

`vite.config.js` uses `/gog-disc-packager-website/` as the GitHub Pages project
subpath. Set `SITE_BASE=/` when deploying to a custom domain or a
`<user>.github.io` repository.

## Deployment

The workflow in [`.github/workflows/pages.yml`](.github/workflows/pages.yml)
runs on every push to `main` and on manual dispatch. In the repository settings,
set **Pages → Build and deployment → Source** to **GitHub Actions**.

## Documentation

- [Template generator schema](docs/TEMPLATE-GENERATOR-SCHEMA.md)
- [Template generator architecture](docs/TEMPLATE-GENERATOR-ARCHITECTURE.md)
- [Generator interface notes](generator/README.md)

## Artwork and attribution

Users download artwork themselves (for example from SteamGridDB) and upload it
into the generator. Keep source URLs and attribution with the artwork. GOG,
SteamGridDB, LaunchBox, and the respective game publishers are not affiliated
with this project.

## License

GNU GPLv3. See [LICENSE](LICENSE). The original website and generator were
created for GOG Disc Packager by its upstream authors.
