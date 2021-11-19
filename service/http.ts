import axios from "axios";
import config from "public/data.json";

// Default headers
const headers = {
	Accept: "application/json",
	"Content-Type": "application/json",
};

// Gets
function get(slug?: string): Promise<unknown> {
	return new Promise<unknown>((resolve, reject) => {
		axios
			.get(`${config.baseUrl}/${slug ? slug + "/commercialOffers" : ""}`, {
				headers,
			})
			.then(({ data }) => resolve(data))
			.catch((e) => reject(e));
	});
}

// The http service for API calls
const http = {
	get,
};

export default http;
