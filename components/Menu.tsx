import React from "react";
import { IMenuProps } from "helpers/interface";
import Search from "components/Search";

const Menu: React.FC<IMenuProps> = ({
	opened,
	requestClose,
	mappedSections,
}): JSX.Element => {
	// Checks if we can close the menu
	const checkClose = (e: React.MouseEvent) => {
		if (e.currentTarget.className != "search__input") requestClose();
	};

	return (
		<>
			<div
				className={`menu-overlay ${!opened ? "menu-overlay--closed" : ""}`}
				onClick={() => requestClose()}
			></div>
			<ul className={`menu ${opened ? "menu--opened" : ""}`} onClick={checkClose}>
				<li className="search-box">
					{/*<!-- Searchbar -->*/}
					<Search />
				</li>
				{mappedSections}
			</ul>
		</>
	);
};

export default Menu;
