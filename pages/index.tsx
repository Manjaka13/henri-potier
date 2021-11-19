import React, {useState} from "react";
import Page from "components/Page";
import Book from "components/Book";
import Spinner from "components/Spinner";
import Synopsis from "components/Synopsis";
// import books from "public/book-mocky.json";
import { v4 as uuidv4 } from "uuid";
import { IBook } from "helpers/interface";
import useBooks from "hooks/useBooks";
import { useSelector, useDispatch } from "react-redux";
import { addCartItem } from "redux/actions";

/*
	Home page
*/

const Home = (): JSX.Element => {
	const [currentSynopsis, setCurrentSynopsis] = useState<number|null>(0);
	const books = useBooks();
	const cartIsbn = useSelector((list: Array<IBook>) =>
		list.map((item) => item.isbn)
	);
	const dispatch = useDispatch();

	// Checks if the passed book is already inside cart
	const existsInCart = (currentBook: IBook): boolean =>
		cartIsbn
			? cartIsbn.filter((isbn: string) => isbn === currentBook.isbn).length > 0
			: false;

	// Map book list
	const mappedBooks: Array<JSX.Element> = books.map((item: IBook, key: number) => (
		<Book
			book={item}
			key={uuidv4()}
			onAdd={() => dispatch(addCartItem(item))}
			existsInCart={existsInCart(item)}
			onInfo={() => setCurrentSynopsis(key)}
		/>
	));

	// Closes synopsis modal
	const closeSynopsis = () => setCurrentSynopsis(null);

	return (
		<Page
			title="Les livres d'Henri Potier"
			description="Parcourez la liste des livres d'Henri Potier à prix abordables."
			active={0}
		>
			<div className="container book-list">
				<div className="book-container">
					{books.length > 0 ? mappedBooks : <Spinner />}
				</div>
				<Synopsis
					book={books[currentSynopsis]}
					opened={books && currentSynopsis != null ? true : false}
					onClose={closeSynopsis}
				/>
			</div>
		</Page>
	);
};

export default Home;
