import React from "react";
import data from "public/data.json";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faHeart} from "@fortawesome/free-solid-svg-icons";

library.add(faHeart);

/*
	Footer component
*/

const Footer = (): JSX.Element => (
	<footer className="footer">
		<div className="container footer__container">
			<p className="footer__left">
				Made with <Icon className="heart" icon={faHeart} /> by{" "}
				<a className="link" href={data.author.linkedin} title="Software engineer">
					{data.author.name}
				</a>
				.
			</p>
			<p className="footer__left">All rights reserved, Copyright © 2021.</p>
		</div>
	</footer>
);

export default Footer;
