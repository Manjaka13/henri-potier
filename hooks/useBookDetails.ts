import { useState, useEffect } from "react";
import { IBook, IBookOffer } from "helpers/interface";
import http from "service/http";
import {resolveOffer, getCartTotal} from "helpers/utils";

/*
	Gets books details
*/

const useBookDetails = (books: Array<IBook>): IBookOffer => {
	const [bestOffer, setBestOffer] = useState<IBookOffer>(null);
	const cartTotal: number = getCartTotal(books);

	// Pick best offer
	const getBestOffer = (off: Array<IBookOffer>): IBookOffer => {
		let best: IBookOffer = off[0];
		for(let i = 0; i < off.length; i++) {
			if(resolveOffer(cartTotal, off[i]) < resolveOffer(cartTotal, best))
				best = off[i];
		}
		console.log("Best reduction: ", resolveOffer(cartTotal, best));
		return best;
	};

	// Request at runtime
	useEffect(() => {
		if(books && books.length > 0) {
			setBestOffer(null);
			http
				.get(books.map((b: IBook) => b.isbn).join(","))
				.then(({offers}) => {
					console.log("Offers ", offers);
					console.log("Best ", getBestOffer(offers));
					setBestOffer(getBestOffer(offers));
				})
				.catch((e) => console.error(e));
		}
	}, [books]);

	return bestOffer;
};

export default useBookDetails;
