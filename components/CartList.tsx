import React from "react";
import Button from "components/Button";
import CartItem from "components/CartItem";
import { v4 as uuidv4 } from "uuid";
import { ICartListProps, IBook } from "helpers/interface";
import { useDispatch } from "react-redux";
import { flushCart, removeCartItem } from "redux/actions";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

/*
	Lists cart content
*/

const CartList: React.FC<ICartListProps> = ({ books }): JSX.Element => {
	const dispatch = useDispatch();

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
					<h2 className="title">Contenu de votre panier</h2>
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
				<p className="cart__total">
					<span className="text">Net à payer:</span>{" "}
					<span className="price">45 $</span>
				</p>
			</div>
		</div>
	);
};

export default CartList;
