import React from "react";
import Page from "components/Page";
import Book from "components/Book";
import books from "helpers/book-mocky.json";
import { v4 as uuidv4 } from "uuid";
import { IBook } from "helpers/interface";
// import useBooks from "hooks/useBooks";

/*
	Home page
*/

const Home = (): JSX.Element => {
	// const books = useBooks();

	// Map book list
	const mappedBooks: Array<JSX.Element> = books.map((item: IBook) => (
		<Book book={item} key={uuidv4()} />
	));

	return (
		<Page
			title="Les livres d'Henri Potier"
			description="Parcourez la liste des livres d'Henri Potier à prix abordables."
			active={0}
		>
			<div className="container book-list">{mappedBooks}</div>
		</Page>
	);
};

export default Home;
