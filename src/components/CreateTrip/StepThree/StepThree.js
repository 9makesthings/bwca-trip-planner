import React, {Component} from 'react';
import {connect} from 'react-redux';
import NextButton from '../NextButton';
// import ChecklistItem from './ChecklistItem';

// Material
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';



class StepThree extends Component {

    equipmentArray = [];

    state = {
        equipment: this.equipmentArray
    }

    componentDidMount() {
        this.props.dispatch( {type: 'GET_EQUIPMENT'} );
    }


    componentDidUpdate(prevProps) {
        // console.log( this.props.reduxState.equipment, this.state );
        console.log( `equipment:`, this.equipmentArray );
         
        if (this.props.reduxState.equipment !== prevProps.reduxState.equipment) {

            this.props.reduxState.equipment.map( item => {
                let equipmentItem = {
                    [item.name]: {
                        equipment_code: item.code, 
                        status: false,
                    }
                };
                this.equipmentArray.push(equipmentItem);
                return this.equipmentArray;
            })
            console.log( `componentDidUpdate...`, this.state );
        }
    }

    handlechange = (event) => {
        console.log( `in handleChange...`, this.state );
        const item = event.currentTarget.name;
        
        this.setState({
            ...this.state,
            [item]: {
                ...this.state.item,
                equipment_code: event.currentTarget.id, 
                status: true,
            }
        })
    }
    

    render() {
        const stepAction = {type: 'SET_PACKLIST', payload: this.state};

        return(
            <div>
                <FormControl>
                    <FormGroup>

                        {/* This will map and create a checkbox for each item */}

                        {this.props.reduxState.equipment.map( item => 
                                <FormControlLabel key={item.code}
                                    control={
                                        <Checkbox name={item.name} id={item.code} value={this.state.name} onChange={this.handlechange} />
                                    }
                                    label={item.name}
                                />
                            )}

                    </FormGroup>
                </FormControl>

                <NextButton action={stepAction} />
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect( mapReduxStateToProps )(StepThree);