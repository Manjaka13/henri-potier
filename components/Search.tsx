import React from "react";
import Button from "components/Button";

/*
	Search component
*/

const Search: React.FC<void> = (): JSX.Element => (
    <form className="search">
        <input className="search__input" type="search" placeholder="Je recherche..." />
        <Button className="search__submit" type="ok">Rechercher</Button>
    </form>
);

export default Search;