import React from 'react';
import StepsList from "./steps-list";
import styles from './steps-panel.module.css';

const StepsPanel = () => {
    return (
        <div className={styles.stepsPanel}>
            <div className={styles.stepsPanelWrapper}>
                <StepsList/>
            </div>
        </div>
    );
};

export default StepsPanel;
