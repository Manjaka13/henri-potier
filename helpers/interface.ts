/*
	All typescript interfaces
*/

import { IconProp } from "@fortawesome/fontawesome-svg-core";

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
	icon?: IconProp;
	children?: string;
	onClick?: unknown;
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
	onRemove: React.MouseEventHandler;
}

// Book props
export interface IBookProps {
	book: IBook;
	onAdd: React.MouseEventHandler;
	existsInCart: boolean;
	onInfo: React.MouseEventHandler;
}

// Badge props
export interface IBadge {
	number?: number;
}

// Redux cart action
export interface ICartAction {
	type: string;
	payload?: IBook;
}

// Redux search action
export interface ISearchAction {
	type: string;
	payload?: string;
}

// Cart list props
export interface ICartListProps {
	books: Array<IBook>;
}

// Menu props
export interface IMenuProps {
	opened: boolean;
	requestClose: () => void;
	mappedSections: Array<JSX.Element>;
}

// For book offers
export interface IBookOffer {
	type: string;
	value: number;
	sliceValue?: number;
}

// Synopsis modal props
export interface ISynopsisProps {
	book?: IBook;
	opened: boolean;
	onClose: unknown;
}

// Store
export interface IStore {
	books: Array<IBook>;
	search: string;
}
