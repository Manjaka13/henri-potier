import React from "react";
import Button from "components/Button";
import CartItem from "components/CartItem";
import Spinner from "components/Spinner";
import { v4 as uuidv4 } from "uuid";
import { ICartListProps, IBook, IBookOffer } from "helpers/interface";
import { useDispatch } from "react-redux";
import { flushCart, removeCartItem } from "redux/actions";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import useBookDetails from "hooks/useBookDetails";
import { resolveOffer, getCartTotal } from "helpers/utils";

library.add(faTrash);

/*
	Lists cart content
*/

const CartList: React.FC<ICartListProps> = ({ books }): JSX.Element => {
	const dispatch = useDispatch();
	const cartTotal: number = getCartTotal(books);
	const bestOffer: IBookOffer = useBookDetails(books);
	console.log("Total cart: ", cartTotal);
	console.log("Registered best offer", bestOffer);
	const cartPrice: number = bestOffer ? resolveOffer(cartTotal, bestOffer) : 0;

	// Map cart content list
	const mappedCart: Array<JSX.Element> = books.map((item: IBook) => {
		const key: string = uuidv4();
		return (
			<CartItem
				book={item}
				key={key}
				onRemove={() => dispatch(removeCartItem(item))}
			/>
		);
	});

	return (
		<div className="cart">
			<div className="container cart__container">
				{/*<!-- Shopping cart head -->*/}
				<div className="cart__top">
					<div className="head-group">
						<h2 className="title">Votre panier ({mappedCart.length})</h2>
						{bestOffer && (
							<div className="reduction">
								{cartPrice > 0 && (
									<p className="reduction-value">
										- {(cartTotal - cartPrice).toFixed(2)} €
									</p>
								)}
							</div>
						)}
					</div>
					<Button
						className="flush"
						type="danger"
						title="Vider le panier"
						onClick={() => dispatch(flushCart())}
						icon={faTrash}
					>
						Vider
					</Button>
				</div>

				{/*<!-- Shopping cart content -->*/}
				<ul className="cart__list">{mappedCart}</ul>

				{/*<!-- Total due -->*/}
				<div className="cart__separator"></div>
				{bestOffer && (
					<p className="cart__total">
						<span className="text">Net à payer:</span>{" "}
						<span className="normal-price">{cartTotal} €</span>{" "}
						<span className="price">{cartPrice.toFixed(2)} €</span>
					</p>
				)}
				{!bestOffer && (
					<div className="loading">
						<Spinner />
					</div>
				)}
			</div>
		</div>
	);
};

export default CartList;
