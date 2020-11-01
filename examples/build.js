const esbuild = require("esbuild");
const elmLoader = require("..");

esbuild
  .build({
    entryPoints: ["index.js"],
    bundle: true,
    outfile: "dist/bundle.js",
    plugins: [elmLoader],
    logLevel: "info",
  })
  .catch(() => process.exit(1));
