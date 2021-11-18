import React from "react";
import Page from "components/Page";
import CartList from "components/CartList";
import { useSelector } from "react-redux";
import { IBook } from "helpers/interface";

/*
	Cart page
*/

const Cart = (): JSX.Element => {
	const cart = useSelector((list: Array<IBook>) => list);

	return (
		<Page
			title="Votre panier"
			description="Liste du contenu de votre panier avec les réductions."
			active={1}
		>
			<CartList books={cart} />
		</Page>
	);
};

export default Cart;
