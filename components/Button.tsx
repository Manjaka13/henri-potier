import React from "react";
import {IButtonProps} from "helpers/interface";

/*
	Button component
	----------------
	@className: give custom className to the component
	@type: button color (ok|danger)
	@children: button content
	@onClick: click callback
*/

const Button: React.FC<IButtonProps> = ({
	className = "",
	type = "",
	title = "",
	children,
	onClick,
}): JSX.Element => (
	<button
		className={`btn ${type && "btn--" + type} ${className}`}
		title={title}
		onClick={onClick}
	>
		{children}
	</button>
);

export default Button;
