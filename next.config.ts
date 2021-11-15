const config = {
	async rewrites() {
		return [
			{
				source: "/api/:slug*",
				destination: "https://henri-potier.techx.fr/books/:slug*",
			},
		];
	},
};

export default config;
