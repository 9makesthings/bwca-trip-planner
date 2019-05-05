import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import Home from '../Home/Home';
import CreateTrip from '../CreateTrip/CreateTrip';
import MyTrips from '../MyTrips/MyTrips';
import ViewTripDetails from '../ViewTripDetails/ViewTripDetails';
import Resources from '../Resources/Resources';

import './App.css';
// import materialUI
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'});
    this.props.dispatch( {type: 'GET_OUTFITTERS'} );
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme} >
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />

            <Route
              exact
              path="/home"
              component={Home}
            />

            <Route
              exact
              path="/resources"
              component={Resources}
            /> 

            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              path="/create-trip"
              component={CreateTrip}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the My Trips page instead. */}
            <ProtectedRoute
              exact
              path="/my-trips"
              component={MyTrips}
            />
            <ProtectedRoute
              path="/view-details"
              component={ViewTripDetails}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </MuiThemeProvider>
      </Router>
  )}
}

const theme = createMuiTheme({
  palette: {
    primary: { 
      main: '#005662',
      contrastText: '#ffffff'  },
    secondary: { 
      main: '#e0f7fa',
      contrastText: '#000000' }, 
    background: {
      default: (235, 244, 243),
    },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Montserrat',
    ],
  },
});

export default connect()(App);
