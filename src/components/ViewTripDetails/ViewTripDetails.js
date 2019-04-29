import React, {Component} from 'react';
import { connect } from 'react-redux';


class ViewDetails extends Component {

    componentDidMount(){
        // this.props.dispatch( {type: 'GET_TRIP_DETAILS', payload: id} );
        // getting all data on click of trip card in MyTrips,
        // EXCEPT for route info. 
        // TODO! Get route info as well.
    }

    render() {
        return(
            <p>This page will display a trip's details!</p>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapReduxStateToProps)(ViewDetails);