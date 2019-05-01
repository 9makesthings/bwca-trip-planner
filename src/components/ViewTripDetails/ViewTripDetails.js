import React, {Component} from 'react';
import { connect } from 'react-redux';
import Packlist from './Packlist';
import MealPlanDetails from './MealPlanDetails';
import './ViewTripDetails.css';

// Material
import Card from '@material-ui/core/Card';

class ViewDetails extends Component {

    state = {
        packlist: this.props.reduxState.tripDetails.packlist || [],
    }

    componentDidMount(){
        // console.log( `History props:`, this.props.location.search );
        let query = this.props.location.search;
        let id = query.substr(1);
        // console.log( `id is:`, id );
        this.props.dispatch( {type: 'GET_TRIP_DETAILS', payload: id} );
    }

    render() {
        const trip = this.props.reduxState.tripDetails.tripDetails;
        // const mealPlan = this.props.reduxState.tripDetails.mealPlan;
        const packlist = this.props.reduxState.tripDetails.packlist;
        console.log( `Packlist:`, packlist );
        console.log( `trip name:`, trip.name );
        

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

                    <Packlist/>

                    <MealPlanDetails />

                    <div>
                        <h4>Notes</h4>
                    </div>
                </div>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapReduxStateToProps)(ViewDetails);