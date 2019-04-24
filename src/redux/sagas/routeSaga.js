import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getRoute(action) {
    try {
        const response = yield axios.get( '/api/tripRoute', action.payload );
        yield put( {type: 'SET_ROUTE_DATA', payload: response.data} );
    }
    catch (error) {
        console.log( `Couldn't get route data.`, error );
        alert( `Couldn't get route data. Try again later.` ); 
    }
}

function* routeSaga() {
    yield takeLatest('GET_ROUTE_DATA', getRoute);
  }

export default routeSaga;