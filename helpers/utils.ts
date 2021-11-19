/*
	All unclassified functions
*/

import {IBook, IBookOffer} from "helpers/interface";

// Caculates the reduction
export const resolveOffer = (total: number, off: IBookOffer): number => {
	let result: number = 0;
	switch(off.type) {
		case "percentage":
			result = (total - (total * off.value) / 100);
			break;
		case "minus":
			result = (total - off.value);
			break;
		case "slice":
			result = (total - (Math.floor(total/off.sliceValue) * off.value));
			break;
		default:
			break;
	}
	return result;
};

// Calculates cart total
export const getCartTotal = (books: Array<IBook>): number => {
	let total: number = 0;
	for(let i = 0; i < books.length; i++)
		total += books[i].price;
	return total;
}