import React, {Component} from 'react';
import { connect } from 'react-redux';
import NextButton from '../NextButton';
import '../CreateTrip.css';

// Material
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


class SaveTrip extends Component {

    componentDidMount(){

        this.props.dispatch( {type: 'GET_ROUTE_BY_ID', 
                    payload: {route_id: this.props.reduxState.newTrip.route_id} } );
    }

    render() {
        const tripData = this.props.reduxState.newTrip;
        const mealPlan = this.props.reduxState.mealPlan;
        const route = this.props.reduxState.routeData[0];
        const stepAction = {type: 'SAVE_TRIP', payload: {tripData, mealPlan} };

        return(
            <div>
                <div>
                    <h4>{tripData.name}</h4>
                    <p>{tripData.group_size} people
                    <br/> {tripData.number_days} days
                    </p>
                </div>

                <div>
                    <Card className="route-card" >
                        <CardContent>
                            <div>
                                <img src={route.image_url} alt={route.name} />
                            </div>

                            <div>
                                <h4>{route.name}</h4>

                                <p>{route.distance} miles, {route.min_days} to {route.max_days} days</p>
                                <p>{route.description}</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <p>Would you like to save this trip?</p>

                <NextButton action={stepAction} />
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect( mapReduxStateToProps )(SaveTrip);