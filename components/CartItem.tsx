import React from "react";
import Button from "components/Button";
import { ICartItemProps } from "helpers/interface";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faMinusCircle);

/*
	CartItem component
	----------------
	@book: the book object
*/

const CartItem: React.FC<ICartItemProps> = ({
	book,
	onRemove,
}): JSX.Element => (
	<li className="cart-item">
		<div className="about">
			<figure className="cover">
				<img className="image" src={book.cover} alt="Cover Henri Potier" />
			</figure>
			<div className="group">
				<h3 className="name">{book.title}</h3>
				<p className="isbn">
					<span className="label">ISBN: </span><span className="id">{book.isbn}</span>
				</p>
			</div>
		</div>
		<div className="pricing">
			{/*<div className="reduction">
				<p className="reduction-value">- 5 €</p>
			</div>*/}
			<Button
				className="remove"
				type="danger"
				title="Enlever cet article du panier"
				onClick={onRemove}
				icon={faMinusCircle}
			>
				Enlever
			</Button>
			{/*<p className="price">{book.price} $</p>*/}
			<p className="real-price">{book.price} €</p>
		</div>
	</li>
);

export default CartItem;
