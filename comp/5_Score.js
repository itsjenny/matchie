import React from "react";
import StepTemplate from "./StepTemplate";
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';


const Step = (props) => {
	const [value, setValue] = React.useState([9, 10]);
	//Slider size
	const mark = [
		{
			value: 7,
			label: "7"
		},
		{
			value: 10,
			label: "10"
		}
	]

	const getValue = (e, val) => {
		setValue(val)
	}
	return <StepTemplate
		header={`What myanimelist rating?`}
		content={
			<div>
				<div style={{ margin: 30 }}>
					<PrettoSlider
						min={7}
						max={10}
						step={0.1}
						onChange={getValue}
						valueLabelDisplay="auto"
						marks={mark}
						defaultValue={[9, 10]}


					/>
				</div>

			</div>
		}
		field={value}
		filter={`Score`}

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