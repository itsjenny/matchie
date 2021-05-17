import React from "react";
import StepTemplate from "./StepTemplate";
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './CSS/StepperStyle.css';

let v = []
const Step = props => {
    const [value, setValue] = React.useState([]);

    const addGenre = (g) => {
        if (v.includes(g)) {
            let i = v.indexOf(g)
            v.splice(i, 1)
        } else {
            v.push(g);
        }
        setValue(v)
    }
    return <StepTemplate
        header={`What genres would you like?`}
        content={
            <div>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox class='box'
                                onChange={() => addGenre('Action')}
                            />}
                        label="Action"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={() => addGenre('Romance')}
                            />}
                        label="Romance"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={() => addGenre('Comedy')}
                            />}
                        label="Comedy"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={() => addGenre('Drama')}
                            />}
                        label="Drama"
                    />
                </FormGroup>

            </div>
        }
        field={value}
        filter={`Genres`}
        {...props}
    >
        <form>form for the second step here</form>
    </StepTemplate>
};

export default Step;
