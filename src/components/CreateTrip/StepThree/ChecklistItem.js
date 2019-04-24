import React, {Component} from 'react';
import {connect} from 'react-redux';
import NextButton from '../NextButton';

// Material
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';



class ChecklistItem extends Component {

    state = {
        item: {
            code: '',
            status: false
            // trip_id: this.props.reduxState.something!
        }
    }

    componentDidMount() {
        this.props.dispatch( {type: 'GET_EQUIPMENT'} );
    }

    handlechange = (event) => {

    }

    render() {
        const stepAction = {type: 'SET_PACKLIST', payload: this.state};

        return(
            <FormControlLabel key={item.id}
                control={
                    <Checkbox onChange={this.handlechange} value={item.name} />
                }
                label={item.name}
            />
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect( mapReduxStateToProps )(ChecklistItem);