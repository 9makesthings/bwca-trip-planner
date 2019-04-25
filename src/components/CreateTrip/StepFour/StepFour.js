import React, {Component} from 'react';
import { MenuItem } from '@material-ui/core';

// Material
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


class StepFour extends Component {

    state = {
        mealStatus: '',
    }

    handleChange = (event) => {
        this.setState({
            mealStatus: event.currentTarget.value,
        })

        console.log( `in handleChange...`, this.state );
    }

    render() {
        const mealPlan;
        if( this.state.mealStatus === 'Pack my own' ){
            mealPlan = <p>This will be the meal-planning table!</p>;
        } else {
            mealPlan = <p>Here are some outfitters you could connect with!</p>;
        }

        return(
            <div>

                <form>
                    <InputLabel>Would you like to pack your own meals or find an outfitter to pack them?</InputLabel>
                    <Select value={this.state.mealStatus}
                            onChange={this.handleChange} >
                        <MenuItem value="Pack my own" >Pack my own</MenuItem>
                        <MenuItem value="Get outfitted" >Get outfitted</MenuItem>
                    </Select>
                </form>
                
                {mealPlan}
                
            </div>
        );
    }
}

export default StepFour;