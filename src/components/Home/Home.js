import React, {Component} from 'react';
import './Home.css';

// Material
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
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
            <div>
                <div className="div-left" >
                    <h2>This is the home page!</h2>

                    <p>This is some intro text...
                    Lorem ipsum dolor sit amet, pro feugiat aliquando in. Nam summo mollis necessitatibus ad, vim ex nihil clita. Id mei mollis veritus mentitum, sed ullum eloquentiam definitiones in. An eum ubique prodesset voluptaria, sit ei tollit theophrastus.
                    </p>

                    <Button variant="contained" color="primary"
                        className={classes.button}
                        onClick={this.routeCreateTrip} value="createTrip" >Plan a Trip</Button>
                    <Button variant="outlined"
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