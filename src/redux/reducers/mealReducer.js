

const mealReducer = (state = [], action ) => {
    if( action.type === 'SET_MEAL_LIST' ) {
        return action.payload;
    }
    return state;
}

export default mealReducer;