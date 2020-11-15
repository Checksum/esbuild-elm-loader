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
    logLevel: "info",
  })
  .catch(() => process.exit(1));
