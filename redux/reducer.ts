import { ICartAction, ISearchAction, IBook, IStore } from "helpers/interface";
import {
	ADD_CART_ITEM,
	REMOVE_CART_ITEM,
	FLUSH_CART,
	REQUEST_SEARCH,
	FLUSH_SEARCH,
} from "./actionTypes";

/*
	Describe reducers here
*/

const defaultState: IStore = {
	books: [],
	search: "",
};

export const reducer = (
	state: IStore = defaultState,
	action: ICartAction | ISearchAction
): IStore => {
	const newState = { ...state };
	switch (action.type) {
		case ADD_CART_ITEM:
			if (typeof action.payload != "string") newState.books.push(action.payload);
			break;
		case REMOVE_CART_ITEM:
			if (typeof action.payload != "string")
				newState.books = state.books.filter(
					(item: IBook) =>
						typeof action.payload != "string" && item.isbn != action.payload.isbn
				);
			break;
		case FLUSH_CART:
			newState.books = [];
			break;
		case REQUEST_SEARCH:
			if (typeof action.payload === "string") newState.search = action.payload;
			break;
		case FLUSH_SEARCH:
			newState.search = "";
			break;
	}
	return newState;
};
