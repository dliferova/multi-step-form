import React from 'react';
import styles from './multi-step-form.module.css';
import StepsPanel from "../steps-panel";

const MultiStepForm = () => {
    return (
        <div className={styles.formComponentContainer}>
            <div className={styles.formComponent}>
                <div className={styles.formLayout}>
                    <StepsPanel/>
                    <div>
                        <span style={{color: 'red'}}>Personal info</span>
                        <p>Please provide your name, email address, and phone number.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MultiStepForm;
