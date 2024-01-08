import React, { useContext } from 'react';
import injectSheet from 'react-jss';
import styles from './stylesheet';
import MainContext from '../../context';
import Notification from '../../../assets/notificationActive';
import { Icon } from '@iconify/react';

const Navbar = ({classes}) => {
    const {isLogged} = useContext(MainContext);

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
                            <div className={classes.menuItem}>Profil</div>
                        </div>
                        <div className={classes.personalSection}>
                            <div className={classes.menuItem}>
                                <Notification />
                            </div>
                            <div className={classes.menuItem}>
                                <img src="http://localhost:4000/upload/defaultpp.jpg" alt="profile_picture" />
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