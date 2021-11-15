/*
	All typescript interfaces
*/

// App props
export interface IHenriPotierProps {
	Component: React.ComponentClass;
	pageProps?: Record<string, unknown>;
}

// Button component props
export interface IButtonProps {
	className?: string;
	type?: string;
	title?: string;
	children?: string;
	onClick?: any;
}

// Heading component props
export interface IHeadingProps {
	title?: string;
	image?: string;
	children?: string;
	active?: number;
}

// Page component props
export interface IPageProps {
	title?: string;
	image?: string;
	description?: string;
	children?: JSX.Element;
	active?: number;
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

// Cart item props interface
export interface ICartItemProps {
	book: IBook;
	id: number | string;
}

// Book props
export interface IBookProps {
	book: IBook;
}
