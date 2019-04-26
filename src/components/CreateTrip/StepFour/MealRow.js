import React, {Component} from 'react';

// Material
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import FormControl from '@material-ui/core/FormControl';


class MealRow extends Component {

    render() {
        return(
                <TableRow>
                    <TableCell>{this.props.days}</TableCell>

                    <TableCell>
                        <FormControl>
                            <Select name="breakfast" value={this.props.state.dayOne.breakfast} 
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
                            <Select name="lunch" value={this.props.state.dayOne.lunch} 
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
                            <Select name="dinner" value={this.props.state.dayOne.dinner} 
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
        )
    }
}

export default MealRow;