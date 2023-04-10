import React from 'react';
import StepItem from "./step-item";
import styles from './steps-panel.module.css';

const StepsList = () => {
    return (
        <div className={styles.stepsListWrapper}>
            <ul className={styles.stepsList}>
                <StepItem name={'Your info'}/>
                <StepItem name={'Select plan'}/>
                <StepItem name={'Add-ons'}/>
                <StepItem name={'Summary'}/>
            </ul>
        </div>
    );
};

export default StepsList;
