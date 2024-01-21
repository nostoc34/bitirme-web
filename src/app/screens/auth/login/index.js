import React, { useState } from "react";
import injectSheet from "react-jss";
import styles from "./stylesheet";
import {
	useGlobalState
} from "../../../context";
import Footer from "../../../components/footer";
import md5 from "md5";

const Login = ({ classes }) => {
	const [globalState, setGlobalState] = useGlobalState();
	const [userLogin, setUserLogin] = useState("");
	const [password, setPassword] = useState("");
	const [resMessage, setResMessage] = useState("");
	const data = {
		userLogin: userLogin,
		password: md5(password),
	};

	const signin = () => {
		fetch("http://localhost:4000/login", {
			method: "POST",
			cache: "no-cache",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				if(res.code === 200) {
					setGlobalState({
						user: {
							fullName: res.data.fullName,
							token: res.data.token,
							userID: res.data.userID,
							userName: res.data.userName
						}
					});
					window.localStorage.setItem("user", JSON.stringify({
						fullName: res.data.fullName,
						token: res.data.token,
						userID: res.data.userID,
						userName: res.data.userName,
						profilePhoto: res.data.profilePhoto,
						isLogged: true
					}));
					window.location.href = '/my-profile';
				} else {
					setResMessage(res.message);
				}
			})
			.catch((err) => {
				console.error("err:", err);
			});
	};

	return (
		<div className={classes.container}>
			<div className={classes.loginContainer}>
				<div className={classes.header}>Nostopia</div>
				<div className={classes.inputContainer}>
					<input
						type="text"
						placeholder="Kullanıcı Adı ya da E-posta"
						onChange={(e) => {
							setUserLogin(e.target.value);
						}}
						onKeyDown={(e) => {
							if(e.key === "Enter") {
								signin();
							}
                    	}}
					/>
					<input
						type="password"
						placeholder="Şifre"
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						onKeyDown={(e) => {
							if(e.key === "Enter") {
								signin();
							}
                    	}}
					/>
					<div style={{textAlign: "center"}}> {resMessage} </div>
				</div>
				<div className={classes.buttonAndForgot}>
					<button onClick={signin}>Giriş Yap</button>
					<span>Şifreni mi unuttun?</span>
				</div>
				<div className={classes.redirectRegister}>
					Hesabın yok mu? Hemen{" "}
					<span
						onClick={() => {
							window.location.href = "/register";
						}}
					>
						kaydol!
					</span>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default injectSheet(styles)(Login);
