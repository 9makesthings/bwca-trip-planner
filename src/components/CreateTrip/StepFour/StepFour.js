import React, {Component} from 'react';
import { connect } from 'react-redux';
import MealPlan from './MealPlan';
import '../CreateTrip.css'
// import NextButton from '../NextButton';

// Material
// import InputLabel from '@material-ui/core/InputLabel';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
// import Card from '@material-ui/core/Card';


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
        // let mealPlan;
        // // OR should this be in a ternary and/or conditionally rendered components?
        // if( this.state.mealStatus === 'Pack my own' ){
        //     mealPlan = <MealPlan />;
        // } else if( this.state.mealStatus === 'Get outfitted' ){
        //     mealPlan = <div>
        //             <p>Here are some outfitters you could connect with!</p>
        //             <NextButton />
        //         </div>;
        // }

        return(
            <div>
                <p className="step-intro" >
                    This table will help you choose meals you might want to take with you on your trip. Some of these items can be purchased at your local grocery store. Dehydrated meals can be purchased at your local outfitters. You can also find food outfitting from most outfitters!
                </p>

                {/* <Card className="step-card" >
                        <InputLabel>
                            Would you like to pack your own meals or find an outfitter to pack them?
                        </InputLabel>
                        <br/>
                        <Select value={this.state.mealStatus}
                                onChange={this.handleChange} >
                            <MenuItem value="Pack my own" >Pack my own</MenuItem>
                            <MenuItem value="Get outfitted" >Get outfitted</MenuItem>
                        </Select>
                </Card>
                
                {mealPlan} */}

                <MealPlan />

            </div>
        );
    } 
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect( mapReduxStateToProps )(StepFour);