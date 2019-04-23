import React, {Component} from 'react';
import { connect } from 'react-redux';

// Material
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';


function getSteps() {
    return ['First details', 'Routes', 'Packing list', 'Meal planning'];
}
  
function getStepContent(stepIndex) {
  switch (stepIndex) {
      case 0:
          return `Let's get started!`;
      case 1:
          return 'Choosing a path';
      case 2:
          return 'Creating a packing list';
      case 3:
          return 'Creating a meal plan';
      default:
          return 'Almost there!';
  }
}

class ProgressBar extends Component {
    

    render() {
        const steps = getSteps();
        const activeStep = this.props.reduxState.progress;

        return(
            <div>
                <h2>{getStepContent(activeStep)}</h2>

                {/* progress bar goes here */}
                <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel></StepLabel>
                    </Step>
                ))}
                </Stepper>

            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect( mapReduxStateToProps )(ProgressBar);