

const mealReducer = (state = [], action ) => {
    if( action.type === 'SET_MEALPLAN' ) {
        return action.payload;
    } else if( action.type === 'RESET_TRIP_DATA' ){
        return state = [];
    }
    return state;
}

export default mealReducer;