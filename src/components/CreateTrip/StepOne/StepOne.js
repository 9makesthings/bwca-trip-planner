import React, {Component} from 'react';

// Material
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/lab/Slider';

class StepOne extends Component {

    state = {
            groupSize: 1,
            days: 2,
            difficulty: 3
    };

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
        const { groupSize, days, difficulty } = this.state;

        return(
            <div>

                <p>Step One!</p>

                <form>
                    <div>
                        <label>How many people will be in your trip's party?</label>
                        <br/>
                        <TextField type="number" min="1" max="9"
                                value={groupSize}
                                name="groupSize" 
                                onChange={this.handleChange} />
                    </div>

                    <div>
                        <label>How many days would you like to go?</label>
                        <br/>
                        <TextField type="number" min="2" max="20"
                                value={days}
                                name="days" 
                                onChange={this.handleChange} />
                    </div>

                    <div>
                        <label>How relaxing or strenuous of a trip would you like to take?</label>
                        <br/>
                        <br/>
                        <Slider
                            min={1} max={5} 
                            // step={1}
                            value={difficulty}
                            name="difficulty"
                            onChange={this.handleSliderChange} />
                    </div>

                </form>
            </div>
        );
    }
}

export default StepOne;