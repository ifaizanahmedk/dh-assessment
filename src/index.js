import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ThemeProvider } from "styled-components";
import { ThemeConfig } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={ThemeConfig}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
