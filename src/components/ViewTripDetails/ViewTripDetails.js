import React, {Component} from 'react';
import { connect } from 'react-redux';


class ViewDetails extends Component {

    componentDidMount(){
        // this will hold a big get to dispatch!
        // GET trip_plan by id
        // JOIN route by id
        // JOIN meal_plan, packlist
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