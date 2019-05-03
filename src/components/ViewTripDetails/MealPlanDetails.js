import React, {Component} from 'react';
import {connect} from 'react-redux';

// Material
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { FormControl, Button } from '@material-ui/core';

class MealPlanDetails extends Component {

    state = {
        mealPlan: [],
        editStateOff: true,
    }

    handleChange = (i, name) => (event) => {
        console.log( `MEALPLAN STATE`, this.state );
        
        let newMealPlan = [...this.props.reduxState.tripDetails.mealPlan];
        
        let value = event.target.value;
        newMealPlan[i][name]= value;

        this.setState({
            ...this.state,
            mealPlan: newMealPlan
        })
    }

    handleEdit = (event) => {
        this.setState({
            ...this.state,
            editStateOff: !this.state.editStateOff
        })
    }

    handleSave = () => {
        const saveData = {
            mealPlan: this.state.mealPlan,
            trip_id: this.props.trip_id
        }
        this.props.dispatch( {type: 'UPDATE_MEALPLAN', payload: saveData} );

        this.setState({
            ...this.state,
            editStateOff: !this.state.editStateOff
        })
    }

    render(){
        const tripMealPlan = this.props.reduxState.tripDetails.mealPlan;
        let mealplan;
        let button;
        if(this.state.editStateOff === true){
            if(tripMealPlan){
                button = <Button variant="outlined" 
                    onClick={this.handleEdit} >Edit</Button>
                mealplan = 
                    tripMealPlan.map( (day, i) => 
                        <TableRow key={i} >
                            <TableCell>{day.day}</TableCell>
                            <TableCell>{day.breakfast}</TableCell>
                            <TableCell>{day.lunch}</TableCell>
                            <TableCell>{day.dinner}</TableCell>
                        </TableRow>
                    )
            } else {
                mealplan = null;
            } // end conditional render of mealplan view only
        } else {
            if(tripMealPlan){
                button = <Button variant="contained" color="primary" 
                    onClick={this.handleSave} >Save</Button>
                mealplan = 
                    tripMealPlan.map( (day, i) => 
                        <TableRow key={i} >
                            <TableCell>{day.day}</TableCell>

                            <TableCell>
                                <FormControl>
                                    <Select name="breakfast" value={day.breakfast}
                                            onChange={this.handleChange(i, 'breakfast')}>
                                        <MenuItem value="Instant Oatmeal" >Instant Oatmeal</MenuItem>
                                        <MenuItem value="Pancake Mix" >Pancake Mix</MenuItem>
                                        <MenuItem value="Breakfast Bars" >Breakfast Bars</MenuItem>
                                        <MenuItem value="Granola" >Granola</MenuItem>
                                        <MenuItem value="Breakfast Skillet" >Breakfast Skillet</MenuItem>
                                    </Select>
                                </FormControl>
                            </TableCell>
            
                            <TableCell>
                                <FormControl>
                                    <Select name="lunch" value={day.lunch} 
                                            onChange={this.handleChange(i, 'lunch')}>
                                        <MenuItem value="Jerky & Cheese" >Jerky & Cheese</MenuItem>
                                        <MenuItem value="Beef Sticks & Cheese" >Beef Sticks & Cheese</MenuItem>
                                        <MenuItem value="Energy Bar" >Energy Bar</MenuItem>
                                        <MenuItem value="Trail Mix" >Trail Mix</MenuItem>
                                        <MenuItem value="Tortillas, PB & J" >Tortillas, PB & J</MenuItem>
                                    </Select>
                                </FormControl>
                            </TableCell>
            
                            <TableCell>
                                <FormControl>
                                    <Select name="dinner" value={day.dinner} 
                                            onChange={this.handleChange(i, 'dinner')}>
                                        <MenuItem value="Chili Mac" >Chili Mac</MenuItem>
                                        <MenuItem value="Pad Thai" >Pad Thai</MenuItem>
                                        <MenuItem value="Beef Stroganoff" >Beef Stroganoff</MenuItem>
                                        <MenuItem value="Chicken Fajita Bowl" >Chicken Fajita Bowl</MenuItem>
                                        <MenuItem value="Lasagna" >Lasagna</MenuItem>
                                    </Select>
                                </FormControl>
                            </TableCell>
                        </TableRow>
                    )
            } else {
                mealplan = null;
            } // end conditional render of mealplan editable table
        }


        return(
            <div className="mealplan-card">
                <h4>Meal Plan</h4>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Day</TableCell>
                            <TableCell>Breakfast</TableCell>
                            <TableCell>Lunch</TableCell>
                            <TableCell>Dinner</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mealplan}
                    </TableBody>
                </Table>
                {button}
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapReduxStateToProps)(MealPlanDetails);