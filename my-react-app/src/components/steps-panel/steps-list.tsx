import React from 'react';
import StepItem from "./step-item";

const StepsList = () => {
    return (
        <div>
            <StepItem name={'Your info'}/>
            <StepItem name={'Select plan'}/>
            <StepItem name={'Add-ons'}/>
            <StepItem name={'Summary'}/>
        </div>
    );
};

export default StepsList;
