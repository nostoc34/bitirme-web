import React from "react";
import injectSheet from "react-jss";
import styles from "./stylesheet";

import Footer from "../../../components/footer";

const Login = ({ classes }) => {
	return (
		<div className={classes.container}>
			<div className={classes.loginContainer}>
				<div className={classes.header}>
					Nostopia
				</div>
				<div className={classes.inputContainer}>
					<input type="text" placeholder="Kullanıcı Adı ya da E-posta"/>
					<input type="password" placeholder="Şifre"/>
				</div>
				<div className={classes.buttonAndForgot}>
					<button>Giriş Yap</button>
					<span>Şifreni mi unuttun?</span>
				</div>
				<div className={classes.redirectRegister}>
					Hesabın yok mu? Hemen <span>kaydol!</span>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default injectSheet(styles)(Login);
