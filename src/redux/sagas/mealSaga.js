import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getMealPlan(action) {
    try {
        // need to find a way to pass in tripId
        const response = yield axios.get( `/api/meal/${action.payload}`);
        yield put( {type: 'SET_MEALPLAN', payload: response.data});
    }
    catch (error) {
        console.log( `Couldn't get meal plan.`, error );
        alert( `Couldn't get data. Please try again later.`);
    }
}

function* saveMealPlan(action) {
    try {
        console.log( `saving mealplan, tripId?`, action.payload );
        
        yield axios.post( `/api/meal/${action.payload.tripId}`, action.payload.mealPlan );
    }
    catch (error) {
        console.log( `Couldn't save meal plan.`, error );
        alert( `Couldn't save meal plan. Try again later.` );
    }
}


function* mealSaga() {
    yield takeLatest( 'GET_MEALPLAN', getMealPlan );
    yield takeLatest( 'SAVE_MEALPLAN', saveMealPlan );
}

export default mealSaga;