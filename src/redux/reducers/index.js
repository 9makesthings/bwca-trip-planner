import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
// Plan a trip reducers
import progress from './progressReducer';
import tripDetails from './tripDetailsReducer';
import routeData from './routeReducer';
import equipment from './equipmentReducer';
import mealPlan from './mealReducer';
import userTrips from './userTripsReducer';
import tripId from './tripIdReducer';
import viewDetails from './viewDetailsReducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  progress, // holds the active step in creating a trip plan
  tripDetails, // holds newTrip details as user creates a trip plan
  routeData, // holds route data for trip planner
  equipment, // holds data from equipment table
  mealPlan, // holds meal list data from meal table
  userTrips, // holds all user's trip data
  tripId, // holds most recently saved trip ID
  viewDetails, // holds trip details for view-details page
});

export default rootReducer;
