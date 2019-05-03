import React, {Component} from 'react';
import './Home.css';

// Material
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
      width: 180,
    },
    input: {
      display: 'none',
    },
  });

class Home extends Component {

    // FIX THIS! 
    routeCreateTrip = (event) => {
        event.preventDefault();
        this.props.history.push('/create-trip');
    }

    routeMyTrips = () => {
        this.props.history.push('/my-trips');
    }

    render() {
        const {classes} = this.props;
        
        return(
            <div className="home" >
                <div className="div-left" >
                    <h2 className="home-header">Start planning your trip to the Boundary Waters!</h2>

                    <p>This trip planner is intended to provide a user-friendly and informational guide to planning a trip to the Boundary Waters. The goal is to make it easier for anyone to plan their next trip north. 
                    </p>

                    <Button variant="contained" color="primary"
                        className={classes.button}
                        onClick={this.routeCreateTrip} value="createTrip" >Plan a Trip</Button>
                    <Button variant="contained" color="secondary"
                        className={classes.button}
                        onClick={this.routeMyTrips} value="myTrips" >My Trips</Button>
                </div>
                <div className="div-right" >
                    <img src="https://images.unsplash.com/photo-1510857817970-2a7060a55c8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80" alt="BWCA" />
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Home);