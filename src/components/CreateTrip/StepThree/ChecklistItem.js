import React, {Component} from 'react';
import {connect} from 'react-redux';
// import NextButton from '../NextButton';

// Material
// import FormControl from '@material-ui/core/FormControl';
// import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';



class ChecklistItem extends Component {

    state = {
        item: {
            code: '',
            status: false,
            // trip_id: this.props.reduxState.something? OR 
                // will this get assigned when data is dispatched to DB?
        }
    }

    componentDidMount() {
        this.props.dispatch( {type: 'GET_EQUIPMENT'} );
    }

    handlechange = (event) => {
        this.setState({
            item: {
                code: event.currentTarget.name,
                status: !this.state.status,
            }
        })
        console.log( `Current ChecklistItem state:`, this.state.item );
        
    }

    render() {
        // const stepAction = {type: 'SET_PACKLIST', payload: this.state};

        return(
            <FormControlLabel
                control={
                    <Checkbox onChange={this.handlechange} name={this.props.item.code} value={this.props.item.name} />
                }
                label={this.props.item.name}
            />
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect( mapReduxStateToProps )(ChecklistItem);