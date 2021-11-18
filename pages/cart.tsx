import React from "react";
import Page from "components/Page";
import CartList from "components/CartList";
import {useSelector} from "react-redux";

/*
	Cart page
*/

const Cart = (): JSX.Element => {
	const cart = useSelector((list: Array<IBooks>) => list);

	return (
	<Page
		title="Votre panier"
		description="Liste du contenu de votre panier avec les réductions."
		active={1}
	>
		<CartList books={cart} />
	</Page>
);
}

export default Cart;
