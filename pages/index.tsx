import React, {useEffect} from "react";
import Page from "components/Page";
import Book from "components/Book";
import books from "public/book-mocky.json";
import { v4 as uuidv4 } from "uuid";
import { IBook } from "helpers/interface";
import useBooks from "hooks/useBooks";
import {useSelector, useDispatch} from "react-redux";
import {IBook} from "helpers/interface";
import {addCartItem} from "redux/actions";

/*
	Home page
*/		

const Home = (): JSX.Element => {
	// const books = useBooks();
	const cartIsbn = useSelector((list: Array<IBooks>) => list.map(item => item.isbn));
	const dispatch = useDispatch();
	
	// Checks if the passed book is already inside cart
	const existsInCart = (currentBook: IBook): boolean => cartIsbn ? cartIsbn.filter((isbn: string) => isbn === currentBook.isbn).length > 0 : false;

	// Map book list
	const mappedBooks: Array<JSX.Element> = books.map((item: IBook) => (
		<Book
			book={item}
			key={uuidv4()}
			onAdd={() => dispatch(addCartItem(item))}
			existsInCart={existsInCart(item)}
		/>
	));

	return (
		<Page
			title="Les livres d'Henri Potier"
			description="Parcourez la liste des livres d'Henri Potier à prix abordables."
			active={0}
		>
			<div className="container book-list">
				<div className="book-container">
					{mappedBooks}
				</div>
			</div>
		</Page>
	);
};

export default Home;
