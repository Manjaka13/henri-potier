import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "styles/index.scss";
import { IHenriPotierProps } from "helpers/interface";
import { Provider } from "react-redux";
import store from "redux/store";
import { config } from "@fortawesome/fontawesome-svg-core";

// Manually add fontawesome styles
config.autoAddCss = false;

const HenriPotier: React.FC<IHenriPotierProps> = ({
	Component,
	pageProps,
}): JSX.Element => (
	<Provider store={store}>
		<Component {...pageProps} />
	</Provider>
);

export default HenriPotier;
