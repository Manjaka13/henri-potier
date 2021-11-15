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
