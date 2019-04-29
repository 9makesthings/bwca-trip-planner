import React, {Component} from 'react';
import { connect } from 'react-redux';
import './MyTrips.css';

// Material UI
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';


class MyTrips extends Component {

    componentDidMount(){
        this.props.dispatch( {type: 'GET_USER_TRIPS', payload: this.props.reduxState.user.id} );
    }

    handleDelete = (event) => {
        console.log( event.currentTarget.value );
        console.log( `user id in MyTrips`, this.props.reduxState.user.id );
        const deleteData = {
            trip_id: event.currentTarget.value,
            user_id: this.props.reduxState.user.id
        }
        
        this.props.dispatch( {type: 'DELETE_TRIP', payload: deleteData} );
    }

    viewDetails = (id, name) => (event) => {
        this.props.history.push(`/view-details?${name}`);
        this.props.dispatch( {type: 'GET_TRIP_DETAILS', payload: id} );
    }

    render() {
        return(
            <div>
                <h2>This will display all of my trips!</h2>

                {this.props.reduxState.userTrips.map( trip =>
                    <Card key={trip.id} className="trip-card"
                            onClick={this.viewDetails(trip.id, trip.name)} >
                        <h4>{trip.name}</h4>
                        <p>{trip.group_size} people
                            <br/>{trip.number_days} days
                        </p>

                        {/* <Button value={trip.id} name={trip.name}
                            onClick={this.viewDetails} >Details</Button> */}
                        <Button value={trip.id}
                            onClick={this.handleDelete} >Delete</Button>
                    </Card>
                )}
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect( mapReduxStateToProps )(MyTrips);