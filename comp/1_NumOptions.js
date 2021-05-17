import React from "react";
import StepTemplate from "./StepTemplate";
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

//Slider size
const mark = [
    {
        value: 0,
        label: "0"
    },
    {
        value: 30,
        label: "30"
    }
]

const Step = (props) => {
    const [value, setValue] = React.useState(1);
    const getValue = (e, val) => {
        setValue(val)
    }
    return <StepTemplate
        header={`How many animes would you like to pick from?`}
        content={
            <div>
                <div style={{margin: 30 }}>
                    <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        defaultValue={1}
                        max={30}
                        marks={mark}
                        onChange={getValue}

                    />

                </div>
            </div>
        }
        field={value}
        filter={`NumOptions`}

        {...props}
    >

    </StepTemplate>

};

export default Step;


const PrettoSlider = withStyles({
    root: {
        color: '#6285a0',
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);