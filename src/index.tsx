import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import CssBaseline from "@mui/material/CssBaseline";
import {  ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route , Routes } from "react-router-dom";
import theme from "./styles/theme";
import routes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.Fragment>     
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Routes>
					{routes.map(({path, Component}, i) => (
						<Route
							path={path}  key={i} element={<Component/>}
						/>
					))}</Routes>
			</ThemeProvider>
		</BrowserRouter> 
	</React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
