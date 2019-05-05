import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './CreateTrip.css';

// Material UI
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

class NextButton extends Component {

    handleNext = () => {
        let stepAction = this.props.action;
        this.props.dispatch(stepAction);

        if( this.props.reduxState.progress < 4 ){
            this.props.dispatch( {type: 'NEXT_ACTIVE_STEP'} );

        } else if( this.props.reduxState.progress === 4 ) {
            // Reset active step after saving a trip
            this.props.dispatch( {type: 'RESET_ACTIVE_STEP'} );
            // Clear trip input reducers : newTrip, mealPlan, and equipment
            this.props.dispatch( {type: 'RESET_TRIP_DATA'} );
            // Route to My Trips after save
            this.props.history.push('/my-trips');
        }
    };

    handleBack = () => {
        this.props.dispatch( {type: 'BACK_ACTIVE_STEP'} );
      };

    render() {
        const activeStep = this.props.reduxState.progress;
        const tripName = this.props.tripName;
        const routeId = this.props.routeId;
        const {classes} = this.props;

        return(
            <div className="nav-buttons" > 
                <Button 
                    disabled={activeStep === 0}
                    className={classes.button}
                    onClick={this.handleBack} >
                        Back
                </Button>

                <Button 
                    variant="contained" color="primary"
                    className={classes.button} 
                    disabled={activeStep === 0 ? tripName === '' : routeId === null}
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

export default connect( mapReduxStateToProps )(withRouter(withStyles(styles)(NextButton)));