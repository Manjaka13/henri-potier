import React, { useState } from "react";
import Page from "components/Page";
import Book from "components/Book";
import Button from "components/Button";
import Spinner from "components/Spinner";
import Synopsis from "components/Synopsis";
// import books from "public/book-mocky.json";
import { v4 as uuidv4 } from "uuid";
import { IStore, IBook } from "helpers/interface";
import useBooks from "hooks/useBooks";
import { useSelector, useDispatch } from "react-redux";
import { addCartItem, flushSearch } from "redux/actions";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faExclamationCircle, faList } from "@fortawesome/free-solid-svg-icons";

library.add(faExclamationCircle, faList);

/*
	Home page
*/

const Home = (): JSX.Element => {
	const [currentSynopsis, setCurrentSynopsis] = useState<number | null>(null);
	const books = useBooks();
	const cartIsbn = useSelector((store: IStore) =>
		store.books.map((item) => item.isbn)
	);
	const search = useSelector((store: IStore) => store.search);
	const searchRegex = new RegExp(search, "gi");
	const dispatch = useDispatch();

	console.log(search);

	// Checks if the passed book is already inside cart
	const existsInCart = (currentBook: IBook): boolean =>
		cartIsbn
			? cartIsbn.filter((isbn: string) => isbn === currentBook.isbn).length > 0
			: false;

	// Map book list
	const mappedBooks: Array<JSX.Element> = books.filter((item: IBook) => search.length > 0 ? item.title.match(searchRegex) : true).map(
		(item: IBook, key: number) => (
			<Book
				book={item}
				key={uuidv4()}
				onAdd={() => dispatch(addCartItem(item))}
				existsInCart={existsInCart(item)}
				onInfo={() => setCurrentSynopsis(key)}
			/>
		)
	);

	// Closes synopsis modal
	const closeSynopsis = () => setCurrentSynopsis(null);

	// Resets search
	const resetSearch = () => dispatch(flushSearch());

	return (
		<Page
			title="Les livres d'Henri Potier"
			description="Parcourez la liste des livres d'Henri Potier à prix abordables."
			active={0}
		>
			<div className="container book-list">
				{search.length > 0 && mappedBooks.length > 0 && (
					<>
						<div className="book-list__result">
							<p className="caption">Résultat de la recherche ({mappedBooks.length})</p>
							<Button type="ok" onClick={resetSearch} icon={faList}>Liste complète</Button>
						</div>
						<div className="book-list__separator"></div>
					</>
				)}
				<div className={`book-container ${search.length > 0 && mappedBooks.length > 0 ? 'book-container--search' : ''}`}>
					{books.length > 0 ? mappedBooks.length > 0 ? mappedBooks
						: (<div className="book-empty">
								<Icon className="icon" icon={faExclamationCircle} />
								<p className="empty">Aucun livre ne correspond à votre recherche</p>
								<Button type="ok" onClick={resetSearch}>D&apos;accord</Button>
							</div>)
					: (<div className="loading-box"><Spinner /></div>)}
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
