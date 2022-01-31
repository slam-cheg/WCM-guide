const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: { main: "./src/pages/index.js" },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "main.js",
        publicPath: "",
    },
    mode: "development",
    devServer: {
        static: path.resolve(__dirname, "./dist"),
        compress: true,
        port: 8080,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: "/node_modules/",
            },
            { test: /\.(png|svg|jpg|gif|ico|woff(2)?|eot|ttf|otf)$/, type: "asset/resource" },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: { importLoaders: 1 },
                    },
                    "postcss-loader",
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),
        new HtmlWebpackPlugin({
            filename: "menu.html",
            template: "./src/pages/menu.html",
        }),
        new HtmlWebpackPlugin({
            filename: "header.html",
            template: "./src/pages/header.html",
        }),
        new HtmlWebpackPlugin({
            filename: "wcm-structure.html",
            template: "./src/wcm-structure.html",
        }),
        new HtmlWebpackPlugin({
            filename: "campaigns.html",
            template: "./src/campaigns.html",
        }),
        new HtmlWebpackPlugin({
            filename: "campaign-structure.html",
            template: "./src/campaign-structure.html",
        }),
        new HtmlWebpackPlugin({
            filename: "campaign-report.html",
            template: "./src/campaign-report.html",
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
    ],
};
