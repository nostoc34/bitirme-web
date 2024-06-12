import React from "react";
import injectSheet from "react-jss";
import styles from "./stylesheet";
import { Icon } from '@iconify/react';

const Modal = ({
    classes,
    onClose,
    children,
    index
}) => {
    return (
        <div
            className={classes.container}
            style={{
                zIndex: 500+index,
            }}
            onClick={onClose}
        >
            <div
                onClick={onClose} className={classes.closeIcon}><Icon icon="mdi:close-box"
            /></div>
            {children}
        </div>
    );
};
export default injectSheet(styles)(Modal);
