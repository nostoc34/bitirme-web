import React, { useState } from "react";
import injectSheet from "react-jss";
import styles from "./stylesheet";
import md5 from "md5";

import Footer from "../../../components/footer";

const Register = ({ classes }) => {
	const [userName, setUserName] = useState("");
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const data = {
		userName: userName,
		fullName: fullName,
		email: email,
		password: md5(password),
	};
	const signup = () => {
		fetch("http://localhost:4000/register", {
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
				console.log(res);
			})
			.catch((err) => {
				console.error("err:", err);
			});
	};
	return (
		<div className={classes.container}>
			<div className={classes.registerContainer}>
				<div className={classes.header}>Nostopia</div>
				<div className={classes.inputContainer}>
					<input
						type="text"
						placeholder="Kullanıcı Adı"
						onChange={(e) => {
							setUserName(e.target.value);
						}}
					/>
					<input
						type="text"
						placeholder="Adı Soyadı"
						onChange={(e) => {
							setFullName(e.target.value);
						}}
					/>
					<input
						type="text"
						placeholder="E-posta"
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
					<input
						type="password"
						placeholder="Şifre"
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
				</div>
				<div className={classes.buttonAndForgot}>
					<button onClick={signup}>Kayıt Ol</button>
				</div>
				<div className={classes.redirectLogin}>
					Zaten hesabın var mı? Hemen{" "}
					<span
						onClick={() => {
							window.location.href = "/";
						}}
					>
						giriş yap!
					</span>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default injectSheet(styles)(Register);
