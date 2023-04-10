import React from 'react';
import styles from './multi-step-form.module.css';
import StepsPanel from "../steps-panel";
import Form from "../form";

const MultiStepForm = () => {
    return (
        <div className={styles.formComponentContainer}>
            <div className={styles.formComponent}>
                <div className={styles.formLayout}>
                    <StepsPanel/>
                    <Form/>
                </div>
            </div>
        </div>
    );
};

export default MultiStepForm;
