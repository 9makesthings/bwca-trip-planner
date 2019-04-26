import React, {Component} from 'react';
import { connect } from 'react-redux';
import MealPlan from './MealPlan';
import '../CreateTrip.css'

// Material
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';


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
                <Card className="step-card" >
                    {/* <form> */}
                        <InputLabel>Would you like to pack your own meals or find an outfitter to pack them?</InputLabel>
                        <br/>
                        <Select value={this.state.mealStatus}
                                onChange={this.handleChange} >
                            <MenuItem value="Pack my own" >Pack my own</MenuItem>
                            <MenuItem value="Get outfitted" >Get outfitted</MenuItem>
                        </Select>
                    {/* </form>  */}

                </Card>
                
                {mealPlan}

            </div>
        );
    } 
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect( mapReduxStateToProps )(StepFour);