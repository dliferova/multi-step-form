import React from 'react';
import styles from './button.module.css';
import cx from 'classnames';

type ButtonPropsTypes = {
    type: "button" | "submit" | "reset" | undefined,
    children: string,
    justifyContent: string
}

const Button = ({type, children}: ButtonPropsTypes) => {
    return (
        <div style={{display: "flex", justifyContent: "end"}}>
            <button type={type} className={cx(styles.button, styles.buttonOrdinary, styles.buttonMedium)}>{children}</button>
        </div>
    );
};

export default Button;
