import React from 'react';
import injectSheet from 'react-jss';
import styles from './stylesheet';

const Footer = ({classes}) => {

    const year = new Date().getFullYear();
    return (
        <footer className={classes.footer}>
            Nostopia © {year} Tüm Hakları Saklıdır.
        </footer>
    )
};

export default injectSheet(styles)(Footer);