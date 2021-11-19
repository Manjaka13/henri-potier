import React, {useRef} from "react";
import Button from "components/Button";
import {requestSearch} from "redux/actions";
import {useDispatch} from "react-redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);

/*
	Search component
*/

const Search = (): JSX.Element => {
	const refInput = useRef(null);
	const dispatch = useDispatch();

	// Manages search click
	const handleClick = (e) => {
		e.preventDefault();
		dispatch(requestSearch(refInput.current.value));
		refInput.current.value = "";
	};

	return (
		<form className="search" onSubmit={handleClick}>
			<input
				className="search__input"
				type="search"
				placeholder="Je recherche..."
				ref={refInput}
			/>
			<Button className="search__submit" type="ok" icon={faSearch}>
				Rechercher
			</Button>
			<Button
				className="search__submit search__submit--short"
				type="ok"
				icon={faSearch}
			/>
		</form>
		);
}

export default Search;
