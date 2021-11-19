import React, { useState, useEffect } from "react";
import Router from "next/router";
import Page from "components/Page";
import CartList from "components/CartList";
import { useSelector } from "react-redux";
import { IStore } from "helpers/interface";

/*
	Cart page
*/

const Cart = (): JSX.Element => {
	const [canDisplay, setCanDisplay] = useState<boolean>(false);
	const cart = useSelector((store: IStore) => store.books);

	// Back to home when cart empty
	useEffect(() => {
		if (cart.length <= 0) Router.push("/");
		else setCanDisplay(true);
	}, [cart]);

	if (canDisplay)
		return (
			<Page
				title="Votre panier"
				description="Liste du contenu de votre panier avec les réductions."
				active={1}
			>
				<CartList books={cart} />
			</Page>
		);
	else return null;
};

export default Cart;
