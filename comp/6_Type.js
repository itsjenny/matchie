import React from "react";
import StepTemplate from "./StepTemplate";
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

let v = []
const Step = props => {
    const [value, setValue] = React.useState([]);


    const addType = (t) => {
        if (v.includes(t)) {
            let i = v.indexOf(t)
            v.splice(i, 1)
        } else {
            v.push(t);
        }
        setValue(v)
    }

    return <StepTemplate
        content={
            <div>
                <FormGroup>
                    <FormControlLabel
                        header={`What type?`}
                        control={
                            <Checkbox
                                onChange={() => addType('TV')}
                            />}
                        label="TV"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={() => addType('Movie')}
                            />}
                        label="Movie"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={() => addType('ONA')}
                            />}
                        label="ONA"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={() => addType('OVA')}
                            />}
                        label="OVA"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={() => addType('Music')}
                            />}
                        label="Music"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={() => addType('Special')}
                            />}
                        label="Special"
                    />
                </FormGroup>
            </div>
        }
        field={value}
        filter={`Type`}
        {...props}
    >
    </StepTemplate>
};

export default Step;
