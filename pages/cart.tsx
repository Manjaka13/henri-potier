import React from "react";
import Page from "components/Page";
import Button from "components/Button";
import CartItem from "components/CartItem";
import books from "helpers/book-mocky.json";
import { v4 as uuidv4 } from "uuid";
import { IBook } from "helpers/interface";

/*
	Cart page
*/

const Cart = (): JSX.Element => {
	// Map cart content list
	const mappedCart: Array<JSX.Element> = books.map((item: IBook) => {
		const key: string = uuidv4();
		return <CartItem book={item} key={key} id={key} />;
	});

	return (
		<Page
			title="Votre panier"
			description="Liste du contenu de votre panier avec les réductions."
			active={1}
		>
			<div className="cart">
				<div className="container cart__container">
					{/*<!-- Shopping cart head -->*/}
					<div className="cart__top">
						<h2 className="title">Contenu de votre panier</h2>
						<Button className="flush" type="danger" title="Vider le panier">
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
		</Page>
	);
};

export default Cart;
