import { useState, useEffect } from "react";
import { IBook } from "helpers/interface";
import http from "service/http";

/*
	Gets list of books
*/

const useBooks = (): Array<IBook> => {
	const [books, setBooks] = useState<Array<IBook>>([]);

	useEffect(() => {
		http
			.get()
			.then((data: Array<IBook> | null) => {
				setBooks(data);
			})
			.catch((e) => console.error(e));
	}, []);

	return books;
};

export default useBooks;
