import React from "react";
import data from "public/data.json";

/*
	Footer component
*/

const Footer = (): JSX.Element => (
	<footer className="footer">
		<div className="container footer__container">
			<p className="footer__left">
				Made with love by{" "}
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
