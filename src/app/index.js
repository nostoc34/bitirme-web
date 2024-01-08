import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContext from "./context";
import injectSheet from "react-jss";
import styles from "./stylesheet";

import Login from "./screens/auth/login";
import Register from "./screens/auth/register";
import { useState } from "react";

function App({ classes }) {

	const [isLogged, setIsLogged] = useState(true);
	const data = {
		isLogged,
		setIsLogged
	};

	return (
		<MainContext.Provider value={data}>
			<BrowserRouter>
				<Routes>
					{/* <Route path="/*" element={<NotFound />} /> */}
					<Route path="/" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</BrowserRouter>
		</MainContext.Provider>
	);
}

export default injectSheet(styles)(App);
