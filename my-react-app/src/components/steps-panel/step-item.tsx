import React from 'react';
import styles from './steps-panel.module.css';

interface StepItemProps {
    name: string
}

const StepItem = ({name}: StepItemProps) => {
    return (
        <li className={styles.stepItem}>
            <span>{name}</span>
        </li>
    );
};

export default StepItem;
