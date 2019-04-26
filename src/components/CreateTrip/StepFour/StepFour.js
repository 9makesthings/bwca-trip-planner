import React, {Component} from 'react';
import { connect } from 'react-redux';
import MealPlan from './MealPlan';

// Material
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


class StepFour extends Component {

    state = {
        mealStatus: '',
    }

    componentDidMount() {
        this.props.dispatch( {type: 'GET_MEAL_LIST'} );
    }

    handleChange = (event) => {
        this.setState({
            mealStatus: event.target.value,
        })
    }

    render() {
        let mealPlan;
        // OR should this be in a ternary and/or conditionally rendered components?
        if( this.state.mealStatus === 'Pack my own' ){
            mealPlan = <MealPlan />;
        } else if( this.state.mealStatus === 'Get outfitted' ){
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

                <MealPlan />

            </div>
        );
    } 
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect( mapReduxStateToProps )(StepFour);