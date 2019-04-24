import React, {Component} from 'react';
import { connect } from 'react-redux';

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
        }
    };

    render() {
        const activeStep = this.props.reduxState.progress;

        return(
            <Button variant="contained" color="primary" onClick={this.handleNext}>
                {activeStep === 4 ? 'Save' : 'Next'}
            </Button>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect( mapReduxStateToProps )(NextButton);