import React, {Component} from 'react';
import { connect } from 'react-redux';

// Material
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';

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
        // const packlist = this.props.reduxState.tripDetails.packlist;
        console.log( `tripDetails:`, trip );
        console.log( `trip name:`, trip.name );
        

        return(
            <div>
                <h2>Trip Details</h2>

                <div>
                    <div>
                        <h3>{trip.name}</h3>
                        <p>{trip.group_size} people
                        <br/> {trip.number_days} days
                        </p>
                    </div>
                </div>

                <div>
                    <div>
                        <Card className="route-card" >
                            <CardContent>
                                <div>
                                    <img src={trip.image_url} alt={trip.route_name} />
                                </div>

                                <div>
                                    <h4>{trip.route_name}</h4>

                                    <p>{trip.distance} miles</p>
                                    <p>{trip.description}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div>
                        <h4>Pack List</h4>
                        <ul>
                            {this.state.packlist.map( (item, i) => 
                                    <li key={i}>{item.name}</li>
                                )}

                        </ul>
                    </div>

                    <div>
                        <h4>Meal Plan</h4>
                        
                    </div>

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