

const mealReducer = (state = [], action ) => {
    if( action.type === 'SET_MEALPLAN' ) {
        return action.payload;
    }
    return state;
}

export default mealReducer;