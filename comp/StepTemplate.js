import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import './CSS/StepperStyle.css';

const StepTemplate = ({
	classes,
	canGoBack,
	canGoForward,
	onBack,
	onNext,
	header,
	content,
	field,
	filter,
	//we pass down these 2 values
	disabledNext,
	checkDisabledNext
}) => (
	<div>
		<Fragment>
			<Typography>{header}</Typography>
			<div class='header'>
				{content}
			</div>

			<div className={classes.actionsContainer}>
				<div>
					<div class="stepButton"
						disabled={!canGoBack}
						onClick={onBack}
						
					>
					Back
					</div>
					<div class='divider'/>
					<div class="stepButton"
						onClick={() => onNext(filter, field)}
						
					//determine whether we should check button disabled or not
					>
					{canGoBack ? "Next" : "Next"}
					</div>
				</div>
			</div>
		</Fragment>
	</div>
);

export default StepTemplate;
