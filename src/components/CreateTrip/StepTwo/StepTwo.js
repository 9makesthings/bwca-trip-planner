import React, {Component} from 'react';
import { connect } from 'react-redux';
import NextButton from '../NextButton';
import '../CreateTrip.css';


// Material
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';



class StepTwo extends Component {

    state = {
        route_id: '',
    }

    componentDidMount() {
        // get trip details, difficulty and number_days, 
        // and send as payload
        const difficultyLevel = this.props.reduxState.tripInputs.difficulty;
        const number_days = this.props.reduxState.tripInputs.number_days;

        this.props.dispatch( {type: 'GET_ROUTE_DATA', 
                    payload: {difficulty: difficultyLevel, days: number_days} } );
    }

    addRoute = (event) => {
        this.setState({
            route_id: event.currentTarget.value,
            route: event.currentTarget.name,
        });
        console.log( `Chosen route id:`, event.currentTarget.value, event.currentTarget.name );
        
    } 

    render() {
        const stepAction = {type: 'ADD_ROUTE_ID', payload: this.state};

        return(
            <div>
                {this.props.reduxState.routeData.map( route => 
                        // <RouteCard key={route.id} route={route} />
                        <Card key={route.id} className="route-card" >
                            <div className="route-card-div" >
                                <div className="route-img" >
                                    <img src={route.image_url} alt={route.name} />
                                </div>

                                <div className="route-info" >
                                    <h4>{route.name}</h4>

                                    <p>{route.distance} miles, {route.min_days} to {route.max_days} days</p>
                                    <p>{route.description}</p>
                                </div>
                                <div className="select-button">
                                    <Button variant="outlined" size="small"
                                        name={route}
                                        value={route.id}
                                        disabled={this.state.route_id === route.id}
                                        onClick={this.addRoute} >Select route</Button>
                                </div>
                            </div>
                        </Card>
                    )}

                <NextButton action={stepAction} />
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect( mapReduxStateToProps )(StepTwo);