import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../CreateTrip.css';
import NextButton from '../NextButton';

// Material
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/lab/Slider';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';

class StepOne extends Component {

    state = {
            user_id: this.props.reduxState.user.id,
            name: this.props.reduxState.tripInputs.name,
            group_size: this.props.reduxState.tripInputs.group_size,
            number_days: this.props.reduxState.tripInputs.number_days,
            difficulty: this.props.reduxState.tripInputs.difficulty
    };

    componentDidMount(){
        console.log( `user id:`, this.props.reduxState.user.id );
        
    }

    handleChange = (event) => {
        let property = event.target.name;
        let value = event.target.value;

        this.setState({
                ...this.state,
                [property]: value,
        })
        // console.log( `Current state:`, this.state );
    }
    
    handleSliderChange = (event, difficulty) => {
        this.setState({ 
            ...this.state,
            difficulty });
    };
    

    render() {
        const { classes } = this.props;
        const { name, group_size, number_days, difficulty } = this.state;
        const stepAction = {type: 'ADD_FIRST_DETAILS', payload: this.state};

        return(
            <div>
                <p className="step-intro" >To start, give your trip a name and tell us how many days you'd like to go, how many people are in your group, and how active you'd like to be on this trip.</p>

                <Card className="step-card" >
                    <div className="step-one-q" >
                        <label>Name your trip:</label>
                        <TextField value={name}
                                name="name"
                                className={classes.textField}
                                onChange={this.handleChange} />
                    </div>
                    
                    <div className="step-one-q" >
                        <label>How many people in your group?</label>
                        <TextField type="number" min="1" max="9"
                                value={group_size}
                                name="group_size" 
                                className={classes.textField}
                                onChange={this.handleChange} />
                    </div>

                    <div className="step-one-q" >
                        <label>How many days would you like to go?</label>
                        <TextField type="number" min="2" max="20"
                                value={number_days}
                                name="number_days" 
                                className={classes.textField}
                                onChange={this.handleChange} />
                    </div>

                    <div className="step-one-q" >
                        <label>How relaxing or strenuous of a trip would you like to take?</label>
                        <div className="difficulty">
                            <i class="material-icons">weekend</i>
                            <div className="slider" >
                                <Slider
                                    // classes={{ container: classes.slider }}
                                    min={1} max={5} 
                                    step={1}
                                    value={difficulty}
                                    name="difficulty"
                                    onChange={this.handleSliderChange} />
                            </div>
                            <i class="material-icons">rowing</i>
                        </div>
                    </div>
                </Card>

                <NextButton action={stepAction} />
            </div>
        );
    }
}

const styles = theme => ({
    root: {
      width: 200,
    },
    slider: {
      padding: '22px 0px',
      width: 800,
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
  });  

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect( mapReduxStateToProps )(withStyles(styles)(StepOne));