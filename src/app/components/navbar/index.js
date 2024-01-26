import React from 'react';
import injectSheet from 'react-jss';
import styles from './stylesheet';
import Notification from '../../../assets/notificationActive';
import { Icon } from '@iconify/react';

const Navbar = ({classes}) => {
    const isLogged =JSON.parse(window.localStorage.getItem("user")).isLogged;
    return(
        <div className={classes.container}>
            <div className={classes.logo} onClick={() => {
                window.location.href = "/home";
            }}>
                nostopia
            </div>
            {
                    isLogged
                    ?
                    <div className={classes.menu}>
                        <div className={classes.links}>
                            <div
                                className={classes.menuItem}
                                onClick={() => {
                                    window.location.href = "/home"
                                }}
                            >
                                Anasayfa
                            </div>
                            <div className={classes.menuItem}>Mesajlar</div>
                        </div>
                        <div className={classes.personalSection}>
                            <div className={classes.menuItem}>
                                <Icon icon="ic:outline-notifications-none" />
                            </div>
                            <div className={classes.menuItem}
                                onClick={() => {
                                    window.localStorage.removeItem("user");
                                    window.location.href = "/";
                                }}
                            >
                                <Icon icon="material-symbols:logout" />
                            </div>
                            <div className={classes.menuItem}>
                                <div
                                    className={classes.profilePic}
                                    onClick={() => {
                                        window.location.href = "/my-profile"
                                    }}
                                >
                                    <img src={window.localStorage.getItem("user") ? JSON.parse(window.localStorage.getItem("user")).profilePhoto : null} alt="profile_picture" />
                                </div>
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