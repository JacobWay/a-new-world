const path = require("path");
const debug = process.NODE_ENV !== "production";

module.exports = {
    devtool: debug ? "source-map" : "",
    entry: {
        t: "./src/scripts/t.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "./dist/"),
        publicPath: "/a-new-world/dist/"
    },
    modules: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: {
    },
    devServer: {
        contentBase: ".",
        host: "0.0.0.0",
        port: 9999,
        noInfo: true
    }
};
