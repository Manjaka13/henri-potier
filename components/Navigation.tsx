import React, { useState } from "react";
import Link from "next/link";
import Search from "components/Search";
import Badge from "components/Badge";
import Menu from "components/Menu";
import data from "public/data.json";
import { INavigationProps, IStore } from "helpers/interface";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faBook,
	faShoppingCart,
	faBars,
} from "@fortawesome/free-solid-svg-icons";

// Load icons
library.add(faBook, faShoppingCart, faBars);

/*
	Navigation component
*/

const Navigation: React.FC<INavigationProps> = ({
	active = 0,
}): JSX.Element => {
	const cartItemsNumber = useSelector((store: IStore) => store.books.length);
	const [menuOpened, setMenuOpened] = useState<boolean>(false);

	// Toggles menu status
	const toggleMenu = () => setMenuOpened(!menuOpened);

	// Closes menu
	const closeMenu = () => setMenuOpened(!menuOpened);

	// Map section links
	const mappedSections: Array<JSX.Element> = data.sections.map(
		(item, key) =>
			(key != 1 || cartItemsNumber > 0) && (
				<li className={`item ${key === active && "item--active"}`} key={uuidv4()}>
					<Badge number={key === 1 ? cartItemsNumber : 0} />
					<Link href={item.link} passHref>
						<a className="link" title={item.title}>
							<Icon icon={key === 0 ? faBook : faShoppingCart} /> {item.name}
						</a>
					</Link>
					<div className="underline"></div>
				</li>
			)
	);

	return (
		<>
			<nav className="navigation">
				<div className="container navigation__container">
					{/*<!-- Title -->*/}
					<div className="navigation__head">
						<h1 className="title">
							<span className="real">Henri Potier</span>
							<span className="short">H. Potier</span>
						</h1>
						<div className="square"></div>
					</div>
					{/*<!-- Links -->*/}
					<ul className="navigation__links">
						<li>
							{/*<!-- Searchbar -->*/}
							<Search />
						</li>
						{/*<!-- Links -->*/}
						{mappedSections}
						<li
							className="navigation__trigger"
							title="Ouvrir le menu."
							onClick={() => toggleMenu()}
						>
							<Badge number={cartItemsNumber} />
							<Icon icon={faBars} />
						</li>
					</ul>
				</div>
			</nav>
			<Menu
				opened={menuOpened}
				requestClose={() => closeMenu()}
				mappedSections={mappedSections}
			/>
		</>
	);
};

export default Navigation;
