# esbuild-elm-loader

An [Elm](https://elm-lang.org) file loader for [esbuild](https://esbuild.github.io).

## Installation

```
yarn add --dev esbuild-elm-loader
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
    plugins: [elmLoader],
    logLevel: "info",
  })
  .catch(() => process.exit(1));
```

To build the example:

```
cd examples
node build.js
```
