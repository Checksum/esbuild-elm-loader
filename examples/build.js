const esbuild = require("esbuild");
const elmLoader = require("..");

const prodBuild = process.env.NODE_ENV === "production";

esbuild
  .build({
    entryPoints: ["index.js"],
    outfile: "dist/bundle.js",
    bundle: true,
    minify: prodBuild,
    plugins: [
      elmLoader({
        debug: !prodBuild,
        optimize: prodBuild,
      }),
    ],
    // Elm pure functions (https://gist.github.com/evancz/fc6ff4995395a1643155593a182e2de7)
    pure: [
      "F2",
      "F3",
      "F4",
      "F5",
      "F6",
      "F7",
      "F8",
      "F9",
      "A2",
      "A3",
      "A4",
      "A5",
      "A6",
      "A7",
      "A8",
      "A9",
    ],
    logLevel: "info",
  })
  .catch(() => process.exit(1));
