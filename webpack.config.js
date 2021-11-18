const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: path.resolve(__dirname, "src", "index.js"),
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	mode: process.env.NODE_ENV || "development",
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
		alias: {
			"@atoms": path.resolve(__dirname, "src", "components", "atoms"),
			"@molecules": path.resolve(__dirname, "src", "components", "molecules"),
			"@organisms": path.resolve(__dirname, "src", "components", "organisms"),
			"@templates": path.resolve(__dirname, "src", "components", "templates"),
			"@pages": path.resolve(__dirname, "src", "components", "pages"),
			"@models": path.resolve(__dirname, "src", "models")
		}
	},
	devServer: {
		static: path.resolve(__dirname, "dist")
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					"babel-loader"
				]
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: [
					"ts-loader"
				]
			},
			{
				test: /\.(css|scss)$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			},
			{
				test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
				use: [
					"file-loader"
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "public", "index.html")
		})
	]
};