import React, {Component} from 'react';
import { connect } from 'react-redux';

// Material UI
import Card from '@material-ui/core/Card';


class MyTrips extends Component {

    componentDidMount(){
        this.props.dispatch( {type: 'GET_USER_TRIPS', payload: this.props.reduxState.user.id} );
    }

    render() {
        return(
            <div>
                <h2>This will display all of my trips!</h2>

                {this.props.reduxState.userTrips.map( trip =>
                    <Card>
                        <h4>My first trip!</h4>
                        <p>{trip.group_size} people
                            <br/>{trip.number_days} days
                        </p>
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