const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const page = ['index', 'about', 'blog'];

module.exports = {
    mode: 'production',
    entry: page.reduce((config, page) => {
        config[page] = `./src/tscBase/${page}.ts`;
        return config;
    }, {}),

    module: {
        rules: [
            //FOR THE TYPESCRIPT AND BABEL
            {
                test: /\.(js|ts)$/,
                exclude: /node_modules/,
                //without additional settings, this will reference .babelrc
                loader: 'babel-loader',
            },

            //FOR THE CSS AND SASS
            {
                test: /\.s?css$/i,

                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        //options: { publicPath: "" }
                    },
                    {
                        loader: 'css-loader',
                        // options: { ...}
                    },

                    /* 
                    resolve-url-loader enables fully relative asset paths instead of root relative paths 
                    reference documentation of resolve-url-loader for details
                    */
                    {
                        loader: 'resolve-url-loader', // <-- VERY IMPORTANT
                        // options: { ...}
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true, // <-- !!IMPORTANT!!
                        }
                    }
                ],
            },

            //FOR THE IMAGES
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset", //"asset/resource" //outputs into folder // ==== //"asset/inline" //in lines it into the javascript output file //best use for small images === //"asset" it automatically determines whether it should be inline or resource according to size of files

                // parser: {  //determining the size of the files that can be allowed for "asset/resource"
                //     dataUrlCondition: {
                //         maxSize: 30* 1024
                //     }
                // }
            },


            //FOR THE FONTS
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            outputPath: 'fonts',
                        }
                    },

                ]
            },
        ]
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js",
        assetModuleFilename: "assets/[hash][ext][query]" //output folder for images in dist
    },

    // optimization: {
    //     splitChunks: {
    //         chunks: "all",
    //     },
    // },

    plugins: [].concat(
        page.map(
            (page) =>
                new HtmlWebpackPlugin({
                    inject: true,
                    template: `./src/${page}.html`,
                    filename: `${page}.html`,
                    chunks: [page],
                })
        ),

        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new FaviconsWebpackPlugin({
            logo: './src/assets/favicon/favicon-32x32.png',
        }),
    ),

    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },


    devtool: 'source-map',

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 8000,
        open: true,
        historyApiFallback: true,
    }

}


/*

*/