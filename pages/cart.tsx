import React from "react";
import Page from "components/Page";
import CartList from "components/CartList";

/*
	Cart page
*/

const Cart = (): JSX.Element => (
	<Page
		title="Votre panier"
		description="Liste du contenu de votre panier avec les réductions."
		active={1}
	>
		<CartList />
	</Page>
);

export default Cart;
