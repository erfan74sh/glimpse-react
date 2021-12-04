import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
// pages
import App from "../App";

const Router = () => {
	return (
		<BrowserRouter>
			<Scrollbars style={{ width: "100vw", height: "100vh" }}>
				<App />
			</Scrollbars>
		</BrowserRouter>
	);
};

export default Router;
