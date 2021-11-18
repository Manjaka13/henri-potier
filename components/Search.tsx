import React from "react";
import Button from "components/Button";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);

/*
	Search component
*/

const Search = (): JSX.Element => (
	<form className="search">
		<input
			className="search__input"
			type="search"
			placeholder="Je recherche..."
		/>
		<Button className="search__submit" type="ok" icon={faSearch}>
			Rechercher
		</Button>
	</form>
);

export default Search;
