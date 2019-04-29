import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../CreateTrip.css';
import NextButton from '../NextButton';

// Material
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/lab/Slider';
import Card from '@material-ui/core/Card';
// import Button from '@material-ui/core/Button';

class StepOne extends Component {

    state = {
            user_id: this.props.reduxState.user.id,
            name: this.props.reduxState.tripDetails.name,
            group_size: this.props.reduxState.tripDetails.group_size,
            number_days: this.props.reduxState.tripDetails.number_days,
            difficulty: this.props.reduxState.tripDetails.difficulty
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
        const { name, group_size, number_days, difficulty } = this.state;
        const stepAction = {type: 'ADD_FIRST_DETAILS', payload: this.state};

        return(
            <div>
                <Card className="step-card" >
                    <div>
                        <label>Name your trip:</label>
                        <TextField value={name}
                                name="name"
                                onChange={this.handleChange} />
                    </div>
                    
                    <div>
                        <label>How many people will be in your trip's party?</label>
                        <br/>
                        <TextField type="number" min="1" max="9"
                                value={group_size}
                                name="group_size" 
                                onChange={this.handleChange} />
                    </div>

                    <div>
                        <label>How many days would you like to go?</label>
                        <br/>
                        <TextField type="number" min="2" max="20"
                                value={number_days}
                                name="number_days" 
                                onChange={this.handleChange} />
                    </div>

                    <div>
                        <label>How relaxing or strenuous of a trip would you like to take?</label>
                        <br/>
                        <br/>
                        <Slider
                            min={1} max={5} 
                            step={1}
                            value={difficulty}
                            name="difficulty"
                            onChange={this.handleSliderChange} />
                    </div>
                </Card>

                <NextButton action={stepAction} />
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect( mapReduxStateToProps )(StepOne);