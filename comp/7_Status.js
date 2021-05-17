import React from "react";
import StepTemplate from "./StepTemplate";
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

let v = []

const Step = props => {
    const [value, setValue] = React.useState([]);

    const chooseStatus = (s) => {
        if (v.includes(s)) {
            let i = v.indexOf(s)
            v.splice(i, 1)
        } else {
            v.push(s);
        }

        setValue(v)
    }
    return <StepTemplate
        header={`What status?`}
        content={
            <div>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={() => chooseStatus('Finished Airing')}
                            />}
                        label="Finished Airing"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={() => chooseStatus('Currently Airing')}
                            />}
                        label="Currently Airing"
                    />
                </FormGroup>
            </div>
        }
        field={value}
        filter={`Status`}
        {...props}
    >
    </StepTemplate>
};

export default Step;
