var path = require("path");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  // Add resolve.extensions.
  // '' is needed to allow imports without an extension.
  // Note the .'s before extensions as it will fail to match without!!!
  resolve: {
    extensions: ["", ".js", ".jsx"],
    alias: {
      components: path.join(__dirname, "src", "components"),
      config: path.join(__dirname, "src", "config"),
      utils: path.join(__dirname, "src", "utils"),
    }
  },
  output: {
    path: path.join(__dirname, "public"),
    filename: "index.js",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"],
        }
      },
      {
        test: /\.less$/,
        loader: "style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!less?outputStyle=expanded&sourceMap",
      },
    ]
  },
};
