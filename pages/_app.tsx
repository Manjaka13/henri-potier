import React from "react";
import "styles/index.scss";
import { IHenriPotierProps } from "helpers/interface";

const HenriPotier: React.FC<IHenriPotierProps> = ({
	Component,
	pageProps,
}): JSX.Element => <Component {...pageProps} />;

export default HenriPotier;
