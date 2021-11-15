module.exports = {
	async rewrites() {
		return [
			{
				source: "/api/:slug*",
				destination: "https://henri-potier.techx.fr/books/:slug*"
			}
		];
	},
}