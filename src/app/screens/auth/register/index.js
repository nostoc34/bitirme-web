import React from 'react';
import injectSheet from "react-jss";
import styles from './stylesheet';

import Footer from '../../../components/footer';
import Navbar from '../../../components/navbar';

const Register = ({classes}) => {
    return (
        <div className={classes.container}>
			<div className={classes.registerContainer}>
				<div className={classes.header}>
					Nostopia
				</div>
				<div className={classes.inputContainer}>
					<input type="text" placeholder="Kullanıcı Adı"/>
                    <input type="text" placeholder="Adı Soyadı"/>
                    <input type="text" placeholder="E-posta"/>
					<input type="password" placeholder="Şifre"/>
				</div>
				<div className={classes.buttonAndForgot}>
					<button>Kayıt Ol</button>
				</div>
				<div className={classes.redirectLogin}>
					Zaten hesabın var mı? Hemen <span>giriş yap!</span>
				</div>
			</div>
			<Footer />
		</div>
    )
};

export default injectSheet(styles)(Register);