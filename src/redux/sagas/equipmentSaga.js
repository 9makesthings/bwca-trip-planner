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

function* equipmentSaga() {
    yield takeLatest('GET_EQUIPMENT', getEquipment);
  }

export default equipmentSaga;