import React from 'react';
import injectSheet from 'react-jss';
import styles from './stylesheet';
import Notification from '../../../assets/notificationActive';

const Navbar = ({classes}) => {
    const isLogged =JSON.parse(window.localStorage.getItem("user")).isLogged;
    return(
        <div className={classes.container}>
            <div className={classes.logo}>
                nostopia
            </div>
            {
                    isLogged
                    ?
                    <div className={classes.menu}>
                        <div className={classes.links}>
                            <div className={classes.menuItem}>Anasayfa</div>
                            <div className={classes.menuItem}>Mesajlar</div>
                        </div>
                        <div className={classes.personalSection}>
                            <div className={classes.menuItem}>
                                <Notification />
                            </div>
                            <div className={classes.menuItem}>
                                <img src={window.localStorage.getItem("user") ? JSON.parse(window.localStorage.getItem("user")).profilePhoto : null} alt="profile_picture" />
                            </div>
                        </div>
                    </div>
                    :
                    <div className={classes.menu}>
                        <div className={classes.menuItem}>Giriş Yap</div>
                        <div className={classes.menuItem}>Kayıt Ol</div>
                    </div>
            }
        </div>
    )
};

export default injectSheet(styles)(Navbar);