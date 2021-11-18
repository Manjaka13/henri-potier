import React from "react";
import { IBookProps } from "helpers/interface";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faShoppingCart,
	faCheckCircle,
	faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart, faCheckCircle, faInfoCircle);

/*
	Book component
	--------------
	@book: book data to disply
*/

const Book: React.FC<IBookProps> = ({
	book,
	onAdd,
	existsInCart,
}): JSX.Element => (
	<div className="book">
		<figure className="book__cover">
			<img className="image" src="cover.jpg" alt={`Cover ${book.title}`} />
		</figure>
		<div className="book__info">
			<div className="top">
				<div className="box">
					<h2 className="title">{book.title}</h2>
					<button className="info" title="Synopsis">
						<Icon icon={faInfoCircle} />
					</button>
				</div>
				<p className="price">{book.price} $</p>
				<div className="separator"></div>
			</div>
			<p className="prg synopsis" title={book.synopsis[0]}>
				{book.synopsis[0]}
			</p>
			<button
				className={`btn btn--${!existsInCart ? "ok" : "disabled"} add-cart`}
				title="Ajouter ce produit à votre panier"
				onClick={onAdd}
			>
				{!existsInCart ? (
					<Icon icon={faShoppingCart} />
				) : (
					<Icon icon={faCheckCircle} />
				)}
				{!existsInCart ? " Ajouter au panier" : " Ajouté"}
			</button>
		</div>
	</div>
);

export default Book;
