# esbuild-elm-loader

An [Elm](https://elm-lang.org) file loader for [esbuild](https://esbuild.github.io).

## Installation

```
yarn add --dev https://github.com/Checksum/esbuild-elm-loader esbuild@0.8.1
```

## Usage

The esbuild [plugin API](https://github.com/evanw/esbuild/issues/111) isn't supported via CLI yet, so use a custom build script like so.

```js
const esbuild = require("esbuild");
const elmLoader = require("esbuild-elm-loader");

esbuild
  .build({
    entryPoints: ["index.js"],
    bundle: true,
    outfile: "dist/bundle.js",
    plugins: [
      elmLoader({
        debug: true,
        optimize: false,
      }),
    ],
    logLevel: "info",
  })
  .catch(() => process.exit(1));
```

To build the example:

```
cd examples
node build.js
```
