import { IBook, ICartAction, ISearchAction } from "helpers/interface";
import {
	ADD_CART_ITEM,
	REMOVE_CART_ITEM,
	FLUSH_CART,
	REQUEST_SEARCH,
	FLUSH_SEARCH,
} from "./actionTypes";

/*
	Define actions to be dispatched here
*/

export const addCartItem = (payload: IBook): ICartAction => ({
	type: ADD_CART_ITEM,
	payload,
});

export const removeCartItem = (payload: IBook): ICartAction => ({
	type: REMOVE_CART_ITEM,
	payload,
});

export const flushCart = (): ICartAction => ({
	type: FLUSH_CART,
});

export const requestSearch = (payload: string): ISearchAction => ({
	type: REQUEST_SEARCH,
	payload,
});

export const flushSearch = (): ISearchAction => ({
	type: FLUSH_SEARCH,
});
