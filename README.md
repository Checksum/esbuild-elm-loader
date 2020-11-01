# esbuild-elm-loader

An [Elm](https://elm-lang.org) file loader for [esbuild](https://esbuild.github.io).

## Installation

```
yarn add --dev https://github.com/Checksum/esbuild-elm-loader esbuild@0.8.1
```

## Usage

The esbuild [plugin API](https://github.com/evanw/esbuild/issues/111) isn't supported via CLI yet, so use a custom build script like so:

```js
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
```

To build and run the example:

```
cd examples
node build.js
python3 -m http.server
open http://localhost:8000
```
