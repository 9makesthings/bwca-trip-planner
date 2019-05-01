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
import { Card } from '@material-ui/core';

class MealPlanDetails extends Component {


    render(){
        let mealplan;
        if(this.props.reduxState.tripDetails.mealPlan){
            mealplan = 
                this.props.reduxState.tripDetails.mealPlan.map( (day, i) => 
                    <TableRow key={i} >
                        <TableCell>{day.day}</TableCell>
        
                        <TableCell>
                            {day.breakfast}
                        </TableCell>
        
                        <TableCell>
                            {day.lunch}
                        </TableCell>
        
                        <TableCell>
                            {day.dinner}
                        </TableCell>
                    </TableRow>
                )
        } else {
            mealplan = null;
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

            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapReduxStateToProps)(MealPlanDetails);