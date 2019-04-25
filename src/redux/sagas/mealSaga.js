import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getMealList() {
    try {
        const response = yield axios.get( '/api/meal');
        yield put( {type: 'SET_MEAL_LIST', payload: response.data});
    }
    catch (error) {
        console.log( `Couldn't get meal list.`, error );
        alert( `Couldn't get data. Please try again later.`);
    }
}


function* mealSaga() {
    yield takeLatest( 'GET_MEAL_LIST', getMealList );
}

export default mealSaga;