/*
	All typescript interfaces
*/

// App props
export interface IHenriPotierProps {
	Component: React.ComponentClass;
	pageProps: Record<string, unknown> | undefined;
}

// Button component props
export interface IButtonProps {
	className: string | undefined;
	type: string | undefined;
	title: string,
	children: JSX.Element | undefined;
	onClick: Function | undefined;
}

// Heading component props
export interface IHeadingProps {
	title: string | undefined;
	image: string | undefined;
	children: JSX.Element | undefined;
	active: number | undefined;
}

// Page component props
export interface IPageProps {
	title: string | undefined;
	image: string | undefined;
	description: string | undefined;
	children: JSX.Element | undefined;
}

// Navigation component props
export interface INavigationProps {
	active: number;
}

// Book interface
export interface IBook {
	isbn: string;
	title: string;
	price: number;
	cover: string;
	synopsis: Array<string>;
}
