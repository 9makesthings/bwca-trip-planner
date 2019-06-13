import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getEquipment() {
    try {
        const response = yield axios.get( `/api/equipment` );
        yield put( {type: 'SET_EQUIPMENT', payload: response.data} );
    }
    catch (error) {
        console.log( `Couldn't get equipment data.`, error );
        alert( `Couldn't get equipment data. Try again later.` ); 
    }
}

function* updatePacklist(action) {
    try {
        yield axios.put( `/api/equipment`, action.payload );
        yield put( {type: 'GET_TRIP_DETAILS', payload: action.payload.trip_id} );
    }
    catch (error) {
        console.log( `Couldn't update packlist details.`, error );
        alert( `Couldn't update trip at this time. Try again later.` );
    }
}

function* equipmentSaga() {
    yield takeLatest( 'GET_EQUIPMENT', getEquipment );
    yield takeLatest( 'UPDATE_PACKLIST', updatePacklist );
  }

export default equipmentSaga;