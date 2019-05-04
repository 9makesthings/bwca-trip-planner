import React, {Component} from 'react';
import { connect } from 'react-redux';
import NextButton from '../NextButton';
import '../CreateTrip.css';

// Material
import Card from '@material-ui/core/Card';

class SaveTrip extends Component {

    componentDidMount(){

        this.props.dispatch( {type: 'GET_ROUTE_BY_ID', 
            payload: {route_id: this.props.reduxState.tripInputs.route_id} } );
    }

    render() {
        const tripData = this.props.reduxState.tripInputs;
        const mealPlan = this.props.reduxState.mealPlan;
        const equipment = this.props.reduxState.equipment;
        const route = this.props.reduxState.routeData[0];
        const stepAction = {type: 'SAVE_TRIP', payload: {tripData, mealPlan, equipment} };

        return(
            <div>

                <p className="step-intro" >Would you like to save this trip?</p>

                <div>
                    <Card className="save-card" >
                        <div className="route-card-div" >
                            <div className="route-img" >
                                <img src={route.image_url} alt={route.name} />
                            </div>

                            <div className="route-info" >
                                <h3>{tripData.name}</h3>
                                <p>{tripData.group_size} people, {tripData.number_days} days</p>
                                <p>{route.distance} miles</p>

                                <h5>{route.name}</h5>

                                <p>{route.description}</p>
                            </div>
                        </div>
                    </Card>
                </div>

                <NextButton action={stepAction} />
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect( mapReduxStateToProps )(SaveTrip);