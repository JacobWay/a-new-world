const path = require("path");
const debug = process.NODE_ENV !== "production";

module.exports = {
    devtool: debug ? "source-map" : "",
    entry: {
        //t: "./src/scripts/t.js"
        main: "./src/scripts/main.js"
    },
    output: {
        filename: "[name].bundle.js",
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
    plugins: {
    },
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
