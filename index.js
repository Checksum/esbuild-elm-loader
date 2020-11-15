const { compileToString } = require("node-elm-compiler");
const { minify } = require("terser");

module.exports = (options = {}) => ({
  name: "elm-loader",
  setup(build) {
    build.onResolve({ filter: /\.elm$/ }, (args) => ({
      path: args.path,
      namespace: "elm",
    }));

    build.onLoad({ filter: /.*/, namespace: "elm" }, (args) =>
      compileToString([args.path], options).then((js) => {
        if (!options.optimize) {
          return {
            contents: js,
            loader: "js",
          };
        }
        // If Elm's optimize flag is passed, we can perform further
        // compression using terser. This removes some dead code that
        // esbuild doesn't (the example goes from 77k to 28k)
        // https://gist.github.com/evancz/fc6ff4995395a1643155593a182e2de7
        return minify(js, {
          compress: {
            pure_funcs: [
              "F2","F3","F4","F5","F6","F7","F8","F9",
              "A2","A3","A4","A5","A6","A7","A8","A9",
            ],
            pure_getters: true,
            keep_fargs: false,
            unsafe_comps: true,
            unsafe: true,
          },
        })
          .then((output) => minify(output.code, { mangle: true }))
          .then((output) => ({
            contents: output.code,
            loader: "js",
          }));
      })
    );
  },
});
