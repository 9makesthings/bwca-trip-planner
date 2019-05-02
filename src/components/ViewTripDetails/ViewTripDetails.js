import React, {Component} from 'react';
import { connect } from 'react-redux';
import Packlist from './Packlist';
import MealPlanDetails from './MealPlanDetails';
import './ViewTripDetails.css';

// Material
import {TextField, Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

class ViewDetails extends Component {

    state = {
        notes: this.props.reduxState.tripDetails.tripDetails.notes,
        editStateOff: true,
        trip_id: 0,
        tripMealPlan: [],
    }

    componentDidMount(){
        // console.log( `History props:`, this.props.location.search );
        let query = this.props.location.search;
        let id = query.substr(1);
        // console.log( `id is:`, id );
        this.props.dispatch( {type: 'GET_TRIP_DETAILS', payload: id} );

        this.setState({
            ...this.state,
            trip_id: Number(id)
            
        })
    }

    handleChange = (name) => (event) => {
        this.setState({ [name]: event.target.value });
      };

    handleEdit = (event) => {
        this.setState({
            ...this.state,
            editStateOff: !this.state.editStateOff
        })
    }

    handleSave = (newAction) => {
        this.props.dispatch( {type: 'UPDATE_TRIP', payload: this.state} );

        this.setState({
            ...this.state,
            editStateOff: !this.state.editStateOff
        })
    }

    render() {
        // const { classes } = this.props;
        const trip = this.props.reduxState.tripDetails.tripDetails;

        let button;
        if( this.state.editStateOff === true ){
            button = <Button variant="outlined" 
                    onClick={this.handleEdit}
                >Edit</Button>
        } else {
            button = <Button variant="contained" color="primary" 
                    onClick={this.handleSave}
                >Save</Button>
        }

        return(
            <div className="view-details">
                <div className="header">
                    <h1>Trip Details</h1>
                    <hr/>
                </div>

                <div className="right-div">
                    <h3>Trip: {trip.name}</h3>
                    <p>{trip.group_size} people
                    <br/> {trip.number_days} days
                    </p>

                    <div className="route" >
                        <div className="route-img" >
                            <img src={trip.image_url} alt={trip.route_name} />
                        </div>

                        <div className="route-info" >
                            <h4>{trip.route_name}</h4>

                            <p>{trip.distance} miles</p>
                            <p>{trip.description}</p>
                        </div>
                    </div>

                    <Packlist editState={this.state.editStateOff} />

                    <MealPlanDetails editState={this.state.editStateOff}
                        tripMealPlan={this.state.tripMealPlan} />

                    <div>
                        <h4>Notes</h4>
                        <TextField
                            label="Notes" multiline fullWidth
                            rows="5" variant="outlined"
                            disabled={this.state.editStateOff}
                            value={this.state.notes}
                            onChange={this.handleChange('notes')}
                            margin="normal"
                        />
                    </div>

                    {button}
                </div>
            </div>
        );
    }
}

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
  });

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapReduxStateToProps)(withStyles(styles)(ViewDetails));