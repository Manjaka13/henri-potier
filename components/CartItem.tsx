import React from "react";
import Button from "components/Button";
import {IBook} from "helpers/interfaces";

/*
	CartItem component
	----------------
	@book: the book object
*/

const CartItem: React.FC<IBook> = ({book}): JSX.Element => (
	<li className="cart-item">
        <div className="about">
            <figure className="cover">
                <img className="image" src="cover.jpg" alt="Cover Henri Potier" />
            </figure>
            <div className="group">
                <h3 className="name">{book.title}</h3>
                <p className="isbn">ISBN: <span className="id">{book.isbn}</span></p>
            </div>
        </div>
        <div className="reduction">
            <p className="reduction-value">
                - 5 $
            </p>
        </div>
        <div className="pricing">
            <Button className="remove" type="danger" title="Enlever cet article du panier">Enlever</Button>
            <p className="price">{book.price} $</p>
            <p className="real-price">30 $</p>
        </div>
    </li>
);

export default CartItem;
