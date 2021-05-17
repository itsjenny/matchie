import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";

//Components
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import NumOptions from "./1_NumOptions";
import Genres from "./2_Genres";
import ReleaseDate from "./3_ReleaseDate";
import Episodes from "./4_Episodes.js";
import Score from "./5_Score.js";
import Type from "./6_Type";
import Status from "./7_Status";
import SwipingP1 from './SwipingP1'
import SwipingP2 from './SwipingP2'
import Main from './Main';
import Results from './Results'
import './CSS/StepperStyle.css';

const styles = theme => ({
	root: {
		width: "90%"
	},
	button: {
		marginTop: theme.spacing.unit,
		marginRight: theme.spacing.unit
	},
	actionsContainer: {
		marginBottom: theme.spacing.unit * 2
	},
	resetContainer: {
		padding: theme.spacing.unit * 3
	}
});



class VerticalLinearStepper extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			activeStep: 0,
			//we set our state in this parent
			disabledNext: true,
			step: 1,
			genres: [],
			numOptions: 0,
			releaseMin: 0,
			releaseMax: 0,
			episodeMin: 0,
			episodeMax: 0,
			scoreMin: 0,
			scoreMax: 0,
			apiResponse: [],
			status: [],
			type: [],
			p1: [],
			p2: [],
			results: []
		}
		this.callAPI = this.callAPI.bind(this)
	}

	steps = {
		"Number of Animes to Swipe": NumOptions,
		"Genres": Genres,
		"Release Date": ReleaseDate,
		"Episodes": Episodes,
		"Score": Score,
		"Type": Type,
		"Status": Status
	};

	//setState for disabledNext
	handleChangeDisabledNext = value => {
		this.setState({ disabledNext: value });
	};

	stepsCount = () => Object.values(this.steps).length;

	canGoBack = () => this.state.activeStep > 0;
	canGoForward = () => this.state.activeStep < this.stepsCount();

	isFinished = () => this.state.activeStep === this.stepsCount();

	handleBack = () => {
		if (this.canGoBack()) {
			this.setState(prevState => ({ activeStep: prevState.activeStep - 1 }));
		}
	};

	handleNext = (filter, value) => {
		if (this.canGoForward()) {
			if (filter == 'NumOptions') {
				this.setState({ numOptions: value })
			} else if (filter == "Genres") {
				this.setState({ genres: value })
			} else if (filter == "ReleaseDate") {
				this.setState({ releaseMin: value[0] })
				this.setState({ releaseMax: value[1] })
			} else if (filter == "Episodes") {
				this.setState({ episodeMin: value[0] })
				this.setState({ episodeMax: value[1] })
			} else if (filter == "Score") {
				this.setState({ scoreMin: value[0] })
				this.setState({ scoreMax: value[1] })
			} else if (filter == "Status") {
				this.setState({ status: value })
			} else if (filter == "Type") {
				this.setState({ type: value })
			}
			this.setState(prevState => ({ activeStep: prevState.activeStep + 1 }));
		}
	};

	nextPage = () => {
		const { step } = this.state;
		this.setState({ step: step + 1 })
	}

	toResults = () => {
		this.compare()
		const { step } = this.state;
		this.setState({ step: step + 1 })
	}

	prevPage = () => {
		const { step } = this.state;
		this.setState({ step: step - 1 })
	}

	returnSwipe = (person, value) => {
		if (person === 1) {
			this.setState({ p1: value})
		} else if (person == 2) {
			this.setState({ p2: value})
		}
	}

	compare = () => {
		console.log('cmopare called')
		let arr = []
		for (var i = 0; i < this.state.p1.length; i++) {
			if (this.state.p2.includes(this.state.p1[i])) {
				if (arr == [] || !arr.includes(this.state.p1[i])) {
					arr.push(this.state.p1[i])
				}

			}
		}

		for (var j = 0; j < this.state.p2.length; j++) {
			if (this.state.p1.includes(this.state.p2[j])) {
				if (arr == [] || !arr.includes(this.state.p2[j])) {
					arr.push(this.state.p2[j])
				}

			}
		}

		this.setState({ results: arr }, () => {
			console.log(this.state.results)
		})
	}

	callAPI() {
		fetch("http://localhost:9000/postRequest",
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
					// 'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: JSON.stringify({
					"genres": this.state.genres,
					"numOptions": this.state.numOptions,
					"releaseMin": this.state.releaseMin,
					"releaseMax": this.state.releaseMax,
					"episodeMin": this.state.episodeMin,
					"episodeMax": this.state.episodeMax,
					"scoreMin": this.state.scoreMin,
					"scoreMax": this.state.scoreMax,
					"status": this.state.status,
					"type": this.state.type
				})
			})
			.then(res => res.json())
			.then(res => this.setState({ apiResponse: res }, () => this.nextPage()))

	}

	handleReset = () => this.setState({ activeStep: 0 });

	render() {
		const { classes } = this.props;
		const { activeStep } = this.state;
		const { step } = this.state;
		switch (step) {
			case 1: return (
				<Main
					nextStep={this.nextPage}

				/>
			)

			case 2: return (

				<div >
					<div class='bar'>
						<h2 class='title'>Title</h2>
						<div class='divider' />
						<div class='navButton'>Home</div>
						<div class='navButton'>About</div>
						<div class='navButton'>More</div>
					</div>
					<div class='main'>
						<br />
						<div class='stepper'>


							<Stepper activeStep={activeStep} orientation="vertical" class='stepMain'>
								{Object.entries(this.steps).map(([label, CustomStep]) => (
									<Step key={label}>
										<StepLabel>{label}</StepLabel>
										<StepContent>
											<CustomStep
												canGoBack={this.canGoBack()}
												canGoForward={this.canGoForward()}
												onBack={this.handleBack}
												onNext={this.handleNext}
												classes={classes}
												//we pass down the state and its' setState method
												handleChangeDisabledNext={this.handleChangeDisabledNext}
												disabledNext={this.state.disabledNext}
												handleChange={this.handleChange}
												username={this.state.username}
												password={this.state.password}
											/>
										</StepContent>
									</Step>
								))}
							</Stepper>
						</div>
					</div>
					{this.isFinished() && (
						<Paper square elevation={0} className={classes.resetContainer}>
							<Typography>All done! Click the button below to generate results</Typography>
							<Button onClick={this.handleReset} className={classes.button}>
								Reset
							</Button>
							<Button onClick={this.callAPI} className={classes.button}>
								Execute
							</Button>
						</Paper>
					)}
				</div>
			)
			case 3: return (
				<SwipingP1
					nextStep={this.nextPage}
					prevStep={this.prevPage}
					master={this.state.apiResponse}
					returnSwipe={this.returnSwipe}
					compare={this.compare}

				/>
			)

			case 4: return (
				<SwipingP2
					nextStep={this.toResults}
					prevStep={this.prevPage}
					master={this.state.apiResponse}
					returnSwipe={this.returnSwipe}
					compare={this.compare}

				/>
			)
			case 5: return (
				<Results
					nextStep={this.nextPage}
					prevStep={this.prevPage}
					results={this.state.results}
					compare={this.compare}
				/>
			)
		}
	}
}

VerticalLinearStepper.propTypes = {
	classes: PropTypes.object
};

export default withStyles(styles)(VerticalLinearStepper);
