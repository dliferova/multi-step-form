import React from 'react';
import StepItem from "./step-item";
import styles from './steps-panel.module.css';

const StepsList = () => {
    return (
        <div className={styles.stepsListWrapper}>
            <ul className={styles.stepsList}>
                <StepItem name={'Your info'} isActive={true}/>
                <StepItem name={'Select plan'} isActive={false}/>
                <StepItem name={'Add-ons'} isActive={false}/>
                <StepItem name={'Summary'} isActive={false}/>
            </ul>
        </div>
    );
};

export default StepsList;
