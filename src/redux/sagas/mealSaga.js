import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getMealList() {
    try {
        const response = yield axios.get( '/api/meal/breakfast');
        yield put( {type: 'SET_BREAKFAST_LIST', payload: response.data});
        const response2 = yield axios.get( '/api/meal/lunch');
        yield put( {type: 'SET_LUNCH_LIST', payload: response2.data});
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