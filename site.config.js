// Single source of truth for the outbound links shown by the site.
//
// Point appOwner/appRepo at a fork or another maintained release source.
// The values are injected into the HTML at build time by vite.config.js.
export const appOwner = "east35";
export const appRepo = "GOG-Disc-Packager";

const appBase = `https://github.com/${appOwner}/${appRepo}`;

export default {
  appOwner,
  appRepo,
  githubUrl: appBase,
  releasesUrl: `${appBase}/releases/latest`,
  videoUrl: "https://www.youtube.com/watch?v=HWElimyy0rs",
};
