import axios from "axios";
import config from "public/data.json";
import {IBooks} from "helpers/interface";

// Default headers
const headers: Object = {
    Accept: "application/json",
    "Content-Type": "application/json",
};

// Gets
function get(
    slug: string,
    data: Object | void
): Promise<any> {
    return new Promise<any>((resolve, reject) => {
        axios
            .get(`${config.baseUrl}/${slug || ''}`, {
                params: data,
                headers,
            })
            .then(({data}) => resolve(data))
            .catch((e) => reject(e));
    });
}

// The http service for API calls
const http: IHttp = {
    get,
};

export default http;
