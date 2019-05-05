import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getOutfitters() {
    try {
        const response = yield axios.get( `/api/outfitter` );
        yield put( {type: 'SET_OUTFITTERS', payload: response.data} );
    }
    catch (error) {
        console.log( `Couldn't get outfitter data.`, error );
        alert( `Couldn't get resources. Try again later.` ); 
    }
}

function* outfitterSaga() {
    yield takeLatest( 'GET_OUTFITTERS', getOutfitters );
  }

export default outfitterSaga;