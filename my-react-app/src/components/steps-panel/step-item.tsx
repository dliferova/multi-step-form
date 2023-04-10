import React from 'react';
import styles from './steps-panel.module.css';
import cx from 'classnames';

interface StepItemProps {
    name: string
    isActive: boolean
}

const StepItem = ({name, isActive}: StepItemProps) => {
    return (
        <li className={cx(styles.stepItemWrapper, `${isActive ? styles.stepItemWrapperActive : ""}`)}>
            <div className={styles.stepItem}>
                <span className={styles.stepItemSubtext}>Step </span>
                <span className={styles.stepItemText}>{name}</span>
            </div>
        </li>
    );
};

export default StepItem;
