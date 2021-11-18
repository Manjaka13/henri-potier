import React from "react";
import "styles/index.scss";
import { IHenriPotierProps } from "helpers/interface";
import { Provider } from "react-redux";
import store from "redux/store";

const HenriPotier: React.FC<IHenriPotierProps> = ({
	Component,
	pageProps,
}): JSX.Element => (
	<Provider store={store}>
		<Component {...pageProps} />
	</Provider>
);

export default HenriPotier;
