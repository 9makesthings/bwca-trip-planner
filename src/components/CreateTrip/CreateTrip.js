import React, {Component} from 'react';
import { connect } from 'react-redux';

// Material UI
import Button from '@material-ui/core/Button';

import ProgressBar from './ProgressBar';
import StepOne from './StepOne/StepOne';
import StepTwo from './StepTwo/StepTwo';
import StepThree from './StepThree/StepThree';
import StepFour from './StepFour/StepFour';
import SaveTrip from './SaveTrip/SaveTrip';


class CreateTrip extends Component {
    
  
    handleBack = () => {
      this.props.dispatch( {type: 'BACK_ACTIVE_STEP'} );
    };

    render() {
        const activeStep = this.props.reduxState.progress;
        let stepPath;
        if( activeStep === 0 ){
                stepPath = <StepOne />;
            } else if( activeStep === 1 ){
                stepPath = <StepTwo />;
            } else if( activeStep === 2 ){
                stepPath = <StepThree />;
            } else if( activeStep === 3 ){
                stepPath = <StepFour />;
            } else {
                stepPath = <SaveTrip />;
            }

        return(
            <div>
                <ProgressBar />

                {/* Step components go here */}
                {stepPath}

                <Button
                    disabled={activeStep === 0}
                    onClick={this.handleBack} >
                        Back
                </Button>

            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect( mapReduxStateToProps )(CreateTrip);