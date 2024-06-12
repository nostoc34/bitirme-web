import React from "react";
import injectSheet from "react-jss";
import styles from "./stylesheet";
import { Icon } from '@iconify/react';

const NoPost = ({classes, mode}) => {
    return(
        <div className={classes.noPost}>
            {mode === "private" ?
                <div className={classes.content}>
                    <div>
                        <Icon icon="mingcute:lock-line" />
                    </div>
                    <div>
                        Bu kullanıcının profili gizli. Gönderileri görmek için onu takip et!
                    </div>
                </div> :
                mode === "unloggedPrivate" ?
                <div className={classes.content}>
                    <div>
                        <Icon icon="mingcute:lock-line" />
                    </div>
                    <div>
                        Bu kullanıcını profili gizli. Onu zaten takip ediyor musun? Hemen <span onClick={() => {
                            window.location.href = "/";
                        }}>giriş yap</span>.
                    </div>
                </div> :
                <div  className={classes.content}>
                    Henüz bir gönderi yok.
                </div>
            }
        </div>
    )
};

export default injectSheet(styles)(NoPost);