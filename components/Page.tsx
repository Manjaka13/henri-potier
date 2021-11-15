import React from "react";
import Heading from "components/Heading";
import Navigation from "components/Navigation";
import Footer from "components/Footer";
import {IPageProps} from "helpers/interface";

/*
	Page component
	----------------
	@title: page title
	@image: page representation
	@description: page description
	@children: page content
*/

const Page: React.FC<IPageProps> = ({
	title,
	image,
	description,
	children,
	active
}): JSX.Element => (
	<>
		<Heading title={title} image={image}>
			{description}
		</Heading>
		<main>
			<Navigation active={active} />
			{children}
		</main>
		<Footer />
	</>
);

export default Page;
