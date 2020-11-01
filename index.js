const { compileToString } = require("node-elm-compiler");

module.exports = {
  name: "elm-loader",
  setup(build) {
    build.onResolve({ filter: /\.elm$/ }, (args) => ({
      path: args.path,
      namespace: "elm",
    }));

    build.onLoad({ filter: /.*/, namespace: "elm" }, (args) =>
      compileToString([args.path], {}).then((output) => ({
        contents: output,
        loader: "js",
      }))
    );
  },
};
