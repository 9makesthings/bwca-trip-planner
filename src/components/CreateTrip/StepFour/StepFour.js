import React, {Component} from 'react';
import { connect } from 'react-redux';
import NextButton from '../NextButton';

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
            mealStatus: event.currentTarget.value,
        })

        console.log( `in handleChange...`, this.state );
    }

    render() {
        const stepAction = {type: 'SET_MEALPLAN', payload: this.state};
        const mealPlan = '';
        // OR should this be in a ternary and/or conditionally rendered components?
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

                <NextButton action={stepAction} />
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect( mapReduxStateToProps )(StepFour);