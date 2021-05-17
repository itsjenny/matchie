import React from "react";
import StepTemplate from "./StepTemplate";
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';


const Step = (props) => {
	const [value, setValue] = React.useState([0, 20]);
	//Slider size
	const mark = [
		{
			value: 0,
			label: "0"
		},
		{
			value: 500,
			label: "500"
		}
	]

	const getValue = (e, val) => {
		setValue(val)
	}
	return <StepTemplate
		header={`How many episodes?`}
		content={
			<div>
				<div style={{ margin: 30 }}>
					<PrettoSlider
						min={0}
						max={500}
						step={10}
						onChange={getValue}
						valueLabelDisplay="auto"
						marks={mark}
						defaultValue={[0, 20]}


					/>
				</div>

			</div>
		}
		field={value}
		filter={`Episodes`}

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