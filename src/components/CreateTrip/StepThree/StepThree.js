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


    state = {
        equipment: {}
    }

    componentDidMount() {
        this.props.dispatch( {type: 'GET_EQUIPMENT'} );
    }

    componentDidUpdate(prevProps) {
        if (this.props.reduxState.equipment !== prevProps.reduxState.equipment) {
            // create temporary new object
            let equipObject = {};

            for(let i = 0; i < this.props.reduxState.equipment.length; i++) {
                let item = this.props.reduxState.equipment[i];
                console.log( 'item:', item );
                // create a property with the item code as the "name"/"key"
                equipObject[item.code] = {
                    name: item.name, 
                    status: false,
                };
            }
            console.log( equipObject );
            
            this.setState({
                equipment: equipObject,
            });

            console.log( `componentDidUpdate... current state:`, this.state );
        }
    }

    handlechange = (event) => {
        console.log( `in handleChange...`, this.state );
        const item = event.currentTarget.id;
        
        this.setState({
            equipment: {
                ...this.state.equipment,
                [item]: {
                    ...this.state.equipment[item],
                    status: !this.state.equipment[item].status,
                }
            }
        })
    }
    

    render() {
        const stepAction = {type: 'SET_EQUIPMENT', payload: this.state};
        // const itemStatus = this.state.equipment[item].status;

        return(
            <div>
                {/* {JSON.stringify(this.state.equipment)} */}
                <FormGroup>

                        {/* This will map and create a checkbox for each item */}

                        {/* {this.props.reduxState.equipment.map( item => 
                                <FormControlLabel key={item.code}
                                    control={
                                        <Checkbox name={item.name} id={item.code} onChange={this.handlechange} />
                                    }
                                    label={item.name}
                                />
                            )} */}

                </FormGroup>

                <NextButton action={stepAction} />
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect( mapReduxStateToProps )(StepThree);