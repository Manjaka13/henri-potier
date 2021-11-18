import { createStore } from "redux";
import { reducer } from "./reducer";

/*
	Exports store to be used by the whole app
*/

export default createStore(reducer);
