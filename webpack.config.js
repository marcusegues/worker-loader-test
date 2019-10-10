const webpack = require("webpack");

module.exports = {
  entry: "./index.ts",
  output: { filename: "output.bundle.js" },
  module: {
    rules: [
      {
        test: /\.(j|t)s(x?)$/,
        exclude: /node_modules/,
        use: {
          loader: "awesome-typescript-loader",
          options: {
            transpileOnly: true,
            useTranspileModule: true,
            useBabel: true
          }
        }
      },
      {
        test: /\.worker\.ts$/,
        use: [
          { loader: "worker-loader" },
          {
            loader: "awesome-typescript-loader",
            options: {
              transpileOnly: true,
              useTranspileModule: true,
              useBabel: true
            }
          }
        ]
      }
    ]
  }
};
