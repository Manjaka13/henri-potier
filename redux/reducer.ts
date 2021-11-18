import { IReduxAction, IBook } from "helpers/interface";
import { ADD_CART_ITEM, REMOVE_CART_ITEM, FLUSH_CART } from "./actionTypes";

/*
	Describe reducers here
*/

export const reducer = (
	state: Array<IBook> = [],
	action: IReduxAction
): Array<IBook> => {
	let newState = [...state];
	switch (action.type) {
		case ADD_CART_ITEM:
			if (action.payload) newState.push(action.payload);
			break;
		case REMOVE_CART_ITEM:
			if (action.payload)
				newState = state.filter((item) => item.isbn != action.payload.isbn);
			break;
		case FLUSH_CART:
			newState = [];
			break;
	}
	return newState;
};
