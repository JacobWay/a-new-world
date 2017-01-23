const path = require("path");
var debug = process.env.NODE_ENV !== "production";
const webpack = require("webpack");

/*
 * plugins
 */
var plugins = [];
var pluginsProduction = [];

if(!debug){
    pluginsProduction = [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
    ] ;
    plugins = plugins.concat(pluginsProduction);
}


module.exports = {
    devtool: debug ? "source-map" : "",
    entry: {
        //t: "./src/scripts/t.js"
        main: "./src/scripts/main.js",
        main_EN: "./src/scripts/main_EN.js"
    },
    output: {
        filename: "scripts/[name].bundle.js",
        path: path.resolve(__dirname, "./dist/"),
        publicPath: "/a-new-world/dist/"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    babelrc: true
                }
            },
            {
                test: /\.(jpe?g|png)$/i,
                loader: "responsive"
            }
        ]
    },
    plugins: plugins,
    responsiveLoader: {
        sizes: [100, 200, 300],
        placeholder: true,
        placeholderSize: 50
    },
    devServer: {
        contentBase: ".",
        host: "0.0.0.0",
        port: 9999,
        noInfo: true
    }
};
