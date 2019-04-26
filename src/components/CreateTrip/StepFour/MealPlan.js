import React, {Component} from 'react';
import { connect } from 'react-redux';
import NextButton from '../NextButton';

// Material
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';


class MealPlan extends Component {

    state = {
        dayOne: {
            breakfast: '',
            lunch: '',
            dinner: ''
        }
    }

    componentDidMount() {
        this.props.dispatch( {type: 'GET_MEAL_LIST'} );
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            dayOne: {
                ...this.state.dayOne,
                [event.target.name]: event.target.value,
            }
        })

        console.log( `in handleChange...`, this.state );
    }

    render() {
        const stepAction = {type: 'SET_MEALPLAN', payload: this.state};

        return(
            <div>
                <Paper>
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

                            <TableRow>
                                <TableCell>1</TableCell>

                                <TableCell>
                                    <FormControl>
                                        <Select name="breakfast" value={this.state.dayOne.breakfast} 
                                                onChange={this.handleChange}>
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
                                        <Select name="lunch" value={this.state.dayOne.lunch} 
                                                onChange={this.handleChange}>
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
                                        <Select name="dinner" value={this.state.dayOne.dinner} 
                                                onChange={this.handleChange}>
                                            <MenuItem value="Chili Mac" >Chili Mac</MenuItem>
                                            <MenuItem value="Pad Thai" >Pad Thai</MenuItem>
                                            <MenuItem value="Beef Stroganoff" >Beef Stroganoff</MenuItem>
                                            <MenuItem value="Chicken Fajita Bowl" >Chicken Fajita Bowl</MenuItem>
                                            <MenuItem value="Lasagna" >Lasagna</MenuItem>
                                        </Select>
                                    </FormControl>
                                </TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </Paper>

                <NextButton action={stepAction} />
            </div>
        );
    } 
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect( mapReduxStateToProps )(MealPlan);