import React, {Component} from 'react';
import {connect} from 'react-redux';
import NextButton from '../NextButton';

// Material
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';



class StepThree extends Component {

    state = {
        packlist: this.props.reduxState.equipment
    }

    componentDidMount() {
        this.props.dispatch( {type: 'GET_EQUIPMENT'} );
    }

    handlechange = (event) => {

        // if( event.target.key = )
        // this.setState({
        //     packlist: [
        //         ...this.state.packlist,
        //         event.currentTarget.key: 
        //     ]
        // })
    }

    render() {
        const stepAction = {type: 'SET_PACKLIST', payload: this.state};

        return(
            <div>
                <FormControl>
                    <FormGroup>

                        {/* This will map and create a checkbox for each item */}
                        {this.props.reduxState.equipment.map( item => 
                                <FormControlLabel key={item.id}
                                    control={
                                        <Checkbox onChange={this.handlechange} value={item.name} />
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