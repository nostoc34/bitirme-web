import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import injectSheet from "react-jss";
import styles from "./stylesheet";
import GlobalStateProvider from './context';
import Login from "./screens/auth/login";
import Register from "./screens/auth/register";
import MyProfile from "./screens/main/myProfile";
import Profile from "./screens/main/profile";
import Home from "./screens/main/home";
import Chat from "./screens/main/chat";

function App({ classes }) {

	return (
			<BrowserRouter>
				<Routes>
					{/* <Route path="/*" element={<NotFound />} /> */}
					<Route path="/" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/home" element={<Home />} />
					<Route path="/my-profile" element={<MyProfile />} />
					<Route path="/profile/:userName" element={<Profile />} />
					<Route path="/chat" element={<Chat />} />
				</Routes>
			</BrowserRouter>
	);
}

const contextAPI = () => {
    return <GlobalStateProvider>
        <App />
    </GlobalStateProvider>;
};

export default injectSheet(styles)(contextAPI);
