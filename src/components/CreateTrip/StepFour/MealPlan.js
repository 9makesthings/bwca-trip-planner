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
        breakfast: '',
        lunch: '',
    }

    componentDidMount() {
        this.props.dispatch( {type: 'GET_MEAL_LIST'} );
    }

    handleChange = (event) => {
        this.setState({
            mealStatus: event.target.value,
        })

        console.log( `in handleChange...`, this.state );
    }

    render() {
        const stepAction = {type: 'SET_MEALPLAN', payload: this.state};
        // const breakfastList = this.props.reduxState.mealList;

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
                                        <Select onChange={this.handleChange}>
                                            {this.props.reduxState.mealList.map( meal =>
                                                <MenuItem key={meal.code} value={meal.name} >{meal.name}</MenuItem>
                                                )}
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