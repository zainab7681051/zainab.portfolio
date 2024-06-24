import { VueLoaderPlugin } from 'vue-loader';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import autoprefixer from 'autoprefixer';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the file URL
const __filename = fileURLToPath(import.meta.url);
// Get the directory name
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === 'production';
export default {
    mode: isProduction ? 'production' : 'development',
    entry: {
        main: "./src/main.js",
    },
    output: {
        filename: "[name].[contenthash:8].js",
        path: path.resolve(__dirname, isProduction ? 'docs' : 'dist'),
        chunkFilename: "[name].[contenthash:8].js",
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
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
                loader: "file-loader",
                options: {
                    name: "[name][contenthash:8].[ext]",
                },
            },
            {
                test: /\.(png|jpe?g|gif|webm|mp4|svg)$/,
                loader: "file-loader",
                options: {
                    name: "[name][contenthash:8].[ext]",
                    outputPath: "assets/img",
                    esModule: false,
                },
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
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
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash:8].css",
            chunkFilename: "[name].[contenthash:8].css",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
            favicon: "./public/favicon.svg",
        }),
    ],
    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm-bundler.js",
        },
        extensions: [".*", ".js", ".vue", ".json"],
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
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        hot: true,
        host: 'localhost',
        historyApiFallback: true,
        open: true,
        port: 4210
    },
};
