import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import autoprefixer from 'autoprefixer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProduction = process.env.NODE_ENV === 'production';
export default {
    mode: isProduction ? 'production' : 'development',
    entry: {
        main: path.resolve(__dirname, "src", "main.js"),
    },
    output: {
        filename: "[name].[contenthash:8].js",
        path: path.resolve(__dirname, isProduction ? 'docs' : 'dist'),
        chunkFilename: "[name].[contenthash:8].js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg|pdf)$/,
                loader: "file-loader",
                options: {
                    name: "[name][contenthash:8].[ext]",
                    outputPath: "assets",
                    esModule: false
                }
            },
            {
                test: /\.css$/,
                use: [
                    isProduction ?
                        MiniCssExtractPlugin.loader : "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    autoprefixer(),
                                ],
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: isProduction ? "[name].[contenthash:8].css" : "[name].css",
            chunkFilename: isProduction ? "[id].[contenthash:8].css" : "[id].css"
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "static", "index.html"),
            favicon: path.resolve(__dirname, "assets", "icon.svg"),
        }),
    ],
    resolve: {
        extensions: [".*", ".js", ".json"],
    },
    optimization: {
        moduleIds: "deterministic",
        runtimeChunk: "single",
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    priority: -10,
                    chunks: "all",
                },
            },
        },
    },
    stats: {
        errorDetails: true,
        children: true
    },
    devtool: isProduction ? false : 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        hot: true,
        host: 'localhost',
        historyApiFallback: true,
        open: true,
        port: 'auto',
    },
};


