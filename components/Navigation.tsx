import React from "react";
import Link from "next/link";
import Search from "components/Search";
import Badge from "components/Badge";
import data from "public/data.json";
import { INavigationProps } from "helpers/interface";
import { v4 as uuidv4 } from "uuid";

/*
	Navigation component
*/

const Navigation: React.FC<INavigationProps> = ({
	active = 0,
}): JSX.Element => {
	// Map section links
	const mappedSections = data.sections.map((item, key) => (
		<li className={`item ${key === active && "item--active"}`} key={uuidv4()}>
			<Badge number={key} />
			<Link href={item.link} passHref>
				<a className="link" title={item.title}>
					{item.name}
				</a>
			</Link>
			<div className="underline"></div>
		</li>
	));

	return (
		<nav className="navigation">
			<div className="container navigation__container">
				{/*<!-- Title -->*/}
				<div className="navigation__head">
					<h1 className="title">Henri Potier</h1>
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
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;
