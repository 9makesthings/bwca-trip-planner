import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* saveNewTrip(action) {
    try {
        console.log( `in saveNewTrip...` );
        const response = yield axios.post( '/api/trip', action.payload.tripData );
        console.log( `Trip Id response?:`, response.data[0].id );
        yield axios.post( `/api/meal/${response.data[0].id}`, action.payload.mealPlan );
        yield axios.post(`/api/equipment/${response.data[0].id}`, action.payload.equipment);
    }
    catch (error) {
        console.log( `Couldn't save new trip.`, error );
        alert( `Couldn't save trip. Try again later.` ); 
    }
}

function* getUsersTrips(action) {
    try{
        // console.log( `in getUsersTrips...` );
        const response = yield axios.get( `/api/trip/${action.payload}`);
        yield put( {type: 'SET_USER_TRIPS', payload: response.data} );
    }
    catch (error) {
        console.log( `Couldn't get user's trips.`, error );
        alert( `Couldn't get trip data. Try again later.` ); 
    }
}

function* deleteTrip(action) {
    try {
        yield axios.delete( `/api/trip/${action.payload.trip_id}` );
        console.log( `user id:`, action.payload.user_id );
        yield put( {type: 'GET_USER_TRIPS', payload: action.payload.user_id} );
    }
    catch (error) {
        console.log( `Couldn't delete trip.`, error );
        alert( `Couldn't delete trip at this time. Try again later.`);
    }
}

function* getTripDetails(action) {
    // put things here!
    try {
        const tripResponse = yield axios.get( `/api/trip/trip_details/${action.payload}`);
        yield put( {type: 'SET_DETAILS', payload: tripResponse.data} );
        const mealResponse = yield axios.get(`/api/meal/meal_details/${action.payload}`);
        yield put( {type: 'SET_MEAL_DETAILS', payload: mealResponse.data});
        const equipResponse = yield axios.get(`/api/equipment/packlist/${action.payload}`);
        yield put( {type: 'SET_PACKLIST', payload: equipResponse.data});
    }
    catch (error) {
        console.log( `Couldn't get trip details.`, error );
        alert( `Couldn't get trip details. Try again later.` );
    }
}

function* tripSaga() {
    // POST all trip data, 
    yield takeLatest('SAVE_TRIP', saveNewTrip);
    // GET all trips saved by current user
    yield takeEvery('GET_USER_TRIPS', getUsersTrips);
    // DELETE trip from My Trips
    yield takeLatest('DELETE_TRIP', deleteTrip);
    // UPDATE_TRIP
    // GET_TRIP_BY_ID
    yield takeLatest('GET_TRIP_DETAILS', getTripDetails);
  }

export default tripSaga;