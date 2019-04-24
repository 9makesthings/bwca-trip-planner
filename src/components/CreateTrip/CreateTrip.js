import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

// Material UI
import Button from '@material-ui/core/Button';

import ProgressBar from './ProgressBar';
import StepOne from './StepOne/StepOne';
import StepTwo from './StepTwo/StepTwo';
import StepThree from './StepThree/StepThree';
import StepFour from './StepFour/StepFour';
import SaveTrip from './SaveTrip/SaveTrip';


class CreateTrip extends Component {
    
    handleNext = () => {
        if( this.props.reduxState.progress < 4 ){
            this.props.dispatch( {type: 'NEXT_ACTIVE_STEP'} );
        } else if( this.props.reduxState.progress === 4 ) {
            this.props.dispatch( {type: 'RESET_ACTIVE_STEP'} );
        }
    };
  
    handleBack = () => {
      this.props.dispatch( {type: 'BACK_ACTIVE_STEP'} );
    };

    render() {
        const activeStep = this.props.reduxState.progress;

        return(
            <Router>
                <div>
                    <ProgressBar />

                    {/* Step components go here */}
                    <Switch>
                        <Route path='/create-trip/step-one' component={StepOne} />
                        <Route path='/create-trip/step-two' component={StepTwo} />
                        <Route path='/create-trip/step-three' component={StepThree} />
                        <Route path='/create-trip/step-four' component={StepFour} />
                        <Route path='/create-trip/save-trip' component={SaveTrip} />
                    </Switch>

                    <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack} >
                            Back
                    </Button>
                    <Button variant="contained" color="primary" onClick={this.handleNext}>
                        {activeStep === 4 ? 'Save' : 'Next'}
                    </Button>

                </div>

            </Router>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect( mapReduxStateToProps )(CreateTrip);