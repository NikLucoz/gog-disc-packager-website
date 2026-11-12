import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
import site from "./site.config.js";

const tokens = {
  "%APP_GITHUB_URL%": site.githubUrl,
  "%APP_RELEASES_URL%": site.releasesUrl,
  "%APP_VIDEO_URL%": site.videoUrl,
};

export default defineConfig({
  // A custom domain or a <user>.github.io repository should set SITE_BASE=/.
  base:
    process.env.SITE_BASE ??
    (process.env.GITHUB_ACTIONS ? "/gog-disc-packager-website/" : "/"),
  plugins: [
    {
      name: "site-link-tokens",
      transformIndexHtml: (html) =>
        html.replace(/%APP_[A-Z_]+%/g, (token) => tokens[token] ?? token),
    },
  ],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
        generator: fileURLToPath(
          new URL("./generator/index.html", import.meta.url),
        ),
      },
    },
  },
});
