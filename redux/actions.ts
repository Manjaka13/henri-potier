import {IBook, IReduxAction} from "helpers/interface";
import {
	ADD_CART_ITEM,
	REMOVE_CART_ITEM,
	FLUSH_CART
} from "./actionTypes";

/*
	Define actions to be dispatched here
*/

export const addCartItem = (payload: IBook): IReduxAction => ({
	type: ADD_CART_ITEM,
	payload
});

export const removeCartItem = (isbn: string): IReduxAction => ({
	type: REMOVE_CART_ITEM,
	payload: isbn
});

export const flushCart = (): IReduxAction => ({
	type: FLUSH_CART
});