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


function* tripSaga() {
    yield takeLatest('SAVE_TRIP', saveNewTrip);
    // UPDATE_TRIP
    // GET_TRIP_BY_ID
    // GET_ALL_TRIPS
  }

export default tripSaga;