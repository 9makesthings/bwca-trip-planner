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
import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';


class MealPlan extends Component {

    state = {
        user_id: this.props.reduxState.newTrip.user_id,
        mealPlan: this.props.reduxState.mealPlan.mealPlan || []
    }

    componentDidMount() {
        // console.log( `componentDidMount in MealPlan!` );
        this.createMealPlan();
    }

    createMealPlan = () => {
        const days = this.props.reduxState.newTrip.number_days;
        const currentPlan = this.props.reduxState.mealPlan.mealPlan;
        console.log( `currentPlan:`, currentPlan );

        if( currentPlan === undefined ){
            let mealPlanArray = [];
            for( let i=0; i<days; i++ ){
                
                let mealDay = {
                    day: (i+1),
                    breakfast: '',
                    lunch: '',
                    dinner: ''
                }
                mealPlanArray.push(mealDay);
            }
    
            this.setState({
                ...this.state,
                mealPlan: mealPlanArray,
            })
        }
    }

    handleChange = (i, name) => (event) => {
        let newMealPlan = [...this.state.mealPlan];
        // console.log( `newMealPlan:`, newMealPlan, i );
        // console.log( `name:`, name );
        let value = event.target.value;
        newMealPlan[i][name]= value;

        this.setState({
            ...this.state,
            mealPlan: newMealPlan
        })
    }

    render() {
        const stepAction = {type: 'SET_MEALPLAN', payload: this.state};

        return(
            <div>
                <Card className="meal-table" >
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
                            {this.state.mealPlan.map( (day, i) => 
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
                            )}

                        </TableBody>
                    </Table>
                </Card>

                <NextButton action={stepAction} />
            </div>
        );
    } 
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect( mapReduxStateToProps )(MealPlan);