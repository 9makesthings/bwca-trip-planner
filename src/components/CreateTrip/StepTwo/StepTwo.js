import React, {Component} from 'react';
import { connect } from 'react-redux';
import NextButton from '../NextButton';


// Material
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';



class StepTwo extends Component {

    state = {
        route_id: '',
    }

    componentDidMount() {
        // get trip details, difficulty and number_days, 
        // and send as payload
        const difficultyLevel = this.props.reduxState.newTrip.difficulty;
        const number_days = this.props.reduxState.newTrip.number_days;
        // console.log( `newTripData...`, newTripData );
        
        // const number_days = this.props.reduxState.newTrip.number_days;

        this.props.dispatch( {type: 'GET_ROUTE_DATA', 
                    payload: {difficulty: difficultyLevel, days: number_days} } );
    }

    addRoute = (event) => {
        this.setState({
            route_id: event.currentTarget.value,
        });
        console.log( `Chosen route id:`, event.currentTarget.value );
        
    }

    render() {
        const stepAction = {type: 'ADD_ROUTE_ID', payload: this.state};

        return(
            <div>
                {this.props.reduxState.routeData.map( route => 
                        // <RouteCard key={route.id} route={route} />
                        <Card key={route.id} >
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

                            <CardActions>
                                <Button variant="outlined" size="small"
                                        value={route.id}
                                        onClick={this.addRoute} >Select route</Button>
                            </CardActions>

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