var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const StaticSiteGeneratorPlugin = require("static-site-generator-webpack-plugin");

const PATHS = [
  "/",
  "/about",
];

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  // Add resolve.extensions.
  // '' is needed to allow imports without an extension.
  // Note the .'s before extensions as it will fail to match without!!!
  resolve: {
    extensions: ["", ".js", ".jsx"],
    alias: {
      components: path.join(__dirname, "src", "components"),
      utils: path.join(__dirname, "src", "utils"),
    }
  },
  output: {
    path: path.join(__dirname, "public"),
    filename: "index.js",
    libraryTarget: "umd",
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
        loader: ExtractTextPlugin.extract(
          "style",
          "css?modules&importLoaders=2&sourceMap!autoprefixer-loader?browsers=last 2 versions!less?outputStyle=expanded&sourceMap=true&sourceMapContents=true"
        ),
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin(
      path.join("stylesheets", "[name].css"),
      {
        allChunks: true,
      }
    ),
    new StaticSiteGeneratorPlugin("main", PATHS, {
      stylesheets: [
        "stylesheets/main.css",
      ],
    }),
  ],
};
