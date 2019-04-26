import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* saveNewTrip(action) {
    try {
        console.log( `in saveNewTrip...` );
        yield axios.post( '/api/trip', action.payload );
    }
    catch (error) {
        console.log( `Couldn't save new trip.`, error );
        alert( `Couldn't save trip. Try again later.` ); 
    }
}

function* getUsersTrips(action) {
    try{
        console.log( `in getUsersTrips...` );
        const response = yield axios.get( `/api/trip/${action.payload}`);
        yield put( {type: 'SET_USER_TRIPS', payload: response.data} );
    }
    catch (error) {
        console.log( `Couldn't get user's trips.`, error );
        alert( `Couldn't get trip data. Try again later.` ); 
    }
}


function* tripSaga() {
    yield takeLatest('SAVE_TRIP', saveNewTrip);
    // GET all trips saved by current user
    yield takeLatest('GET_USER_TRIPS', getUsersTrips);
    // UPDATE_TRIP
    // GET_TRIP_BY_ID
  }

export default tripSaga;