import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration as WebpackConfiguration } from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import Dotenv from "dotenv-webpack";

interface Configuration extends WebpackConfiguration {
  devServer?: DevServerConfiguration;
}

const config: Configuration = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "boundle.js",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new Dotenv({
      path: path.resolve(__dirname, ".env"),
      safe: true,
      systemvars: true,
      allowEmptyValues: false,
    }),
  ],
  devServer: {
    port: 3000,
    open: true,
    static: {
      directory: path.join(__dirname, "build"),
    },
  },
} as Configuration & { devServer: DevServerConfiguration };

export default config;
