import React from "react";
import { IButtonProps } from "helpers/interface";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";

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
	icon,
	children,
	onClick,
}): JSX.Element => (
	<button
		className={`btn ${type && "btn--" + type} ${className}`}
		title={title}
		onClick={() => {
			typeof onClick === "function" ? onClick() : null;
		}}
	>
		{icon && (<Icon icon={icon} />)} {children}
	</button>
);

export default Button;
