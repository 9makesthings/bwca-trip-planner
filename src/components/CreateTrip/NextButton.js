import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './CreateTrip.css';

// Material UI
import Button from '@material-ui/core/Button';

class NextButton extends Component {

    handleNext = () => {
        let stepAction = this.props.action;
        this.props.dispatch(stepAction);

        if( this.props.reduxState.progress < 4 ){
            this.props.dispatch( {type: 'NEXT_ACTIVE_STEP'} );
        } else if( this.props.reduxState.progress === 4 ) {
            this.props.dispatch( {type: 'RESET_ACTIVE_STEP'} );
            this.props.history.push('/my-trips');
        }
    };

    handleBack = () => {
        this.props.dispatch( {type: 'BACK_ACTIVE_STEP'} );
      };

    render() {
        const activeStep = this.props.reduxState.progress;

        return(
            <div> 
                <Button className="nav-button"
                    disabled={activeStep === 0}
                    onClick={this.handleBack} >
                        Back
                </Button>

                <Button className="nav-button"
                    variant="contained" color="primary" 
                    onClick={this.handleNext}>
                        {activeStep === 4 ? 'Save' : 'Next'}
                </Button>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect( mapReduxStateToProps )(withRouter(NextButton));