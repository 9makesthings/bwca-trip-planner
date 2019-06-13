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
        trip_id: 0
    }

    componentDidMount(){
        let query = this.props.location.search;
        let id = query.substr(1);
        
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

    handleSave = () => {
        this.props.dispatch( {type: 'UPDATE_TRIP_NOTES', payload: this.state} );

        this.setState({
            ...this.state,
            editStateOff: !this.state.editStateOff
        })
    }

    // autofillForm = () => {
    //     this.setState({
    //         ...this.state,
    //         notes: `Got our permit for June 21 on Duncan Lake. \nAlmost ready for the trip now, just a few items left to pack!`,
    //     })
    // }

    render() {
        const { classes } = this.props;
        const trip = this.props.reduxState.tripDetails.tripDetails;

        let button;
        if( this.state.editStateOff === true ){
            button = <Button variant="outlined" 
                    className={classes.button}
                    onClick={this.handleEdit}
                >Edit</Button>
        } else {
            button = <Button variant="contained" color="primary"
                    className={classes.button}
                    onClick={this.handleSave}
                >Save</Button>
        }

        return(
            <div className="right-div">

                <div className="detail-card" >
                    <div className="detail-img" >
                        <img src={trip.image_url} alt={trip.route_name} />
                    </div>

                    <div className="route-info" >
                        <h2>{trip.name}</h2>
                        <p>{trip.group_size} people, {trip.number_days} days</p>

                        <h4>{trip.route_name}</h4>
                        <p>{trip.distance} miles</p>
                        <p>{trip.description}</p>
                    </div>
                </div>

                <Packlist trip_id={this.state.trip_id} />

                <MealPlanDetails trip_id={this.state.trip_id} />

                <div className="info-form-card" >
                    <h3>Notes</h3>

                    <TextField
                        multiline fullWidth
                        rows="5" variant="outlined"
                        disabled={this.state.editStateOff}
                        className={classes.textField}
                        value={this.state.notes}
                        onChange={this.handleChange('notes')}
                        // onClick={this.autofillForm}
                        margin="normal"
                    />

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
    button: {
        margin: '10px 30px 0 0',
        float: 'right',
    },
  });

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapReduxStateToProps)(withStyles(styles)(ViewDetails));