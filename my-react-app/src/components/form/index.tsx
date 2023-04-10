import React from 'react';
import styles from './form.module.css';
import Button from "../ui/button/button";

const Form = () => {
    return (
        <div className={styles.formContainer}>
            <form className={styles.form}>
                <div className={styles.formInnerWrapper}>
                    <fieldset>
                        <div style={{margin: '0 0 30px'}}>
                            <legend className={styles.formLegend}>Personal info</legend>
                            <span
                                className={styles.formSubtext}>Please provide your name, email address, and phone number.</span>
                        </div>
                        <div className={styles.inputsGroup}>
                            <label>
                                Name
                                <input type={'text'} placeholder={'e.g. Stephen King'}/>
                            </label>
                            <label>
                                Email Address
                                <input type={'email'} placeholder={'e.g. stephenking@lorem.com'}/>
                            </label>
                            <label>
                                Phone Number
                                <input type={'phone'} placeholder={'e.g. +1 234 567 890'}/>
                            </label>
                        </div>
                    </fieldset>
                    <Button
                        type={'submit'}
                        children={'Next step'}
                        justifyContent={'end'}
                    />
                </div>
            </form>
        </div>
    );
};

export default Form;
