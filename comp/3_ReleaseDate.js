import StepTemplate from "./StepTemplate";
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';



const Step = props => {
	const [value, setValue] = React.useState([1970, 2000]);
	//Slider size
	const mark = [
		{
			value: 1970,
			label: "1970"
		},
		{
			value: 2022,
			label: "2022"
		}
	]

	//Setting the value
	const getValue = (e, val) => {
		setValue(val)
	}
	return <StepTemplate
		header={`What release date?`}
		content={
			<div>
				<PrettoSlider
					min={1970}
					max={2022}
					onChange={getValue}
					valueLabelDisplay="auto"
					marks={mark}
					defaultValue={[1970, 2000]}


				/>


			</div>
		}
		field={value}
		filter={`ReleaseDate`}

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