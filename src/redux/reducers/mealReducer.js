const autofillMeals = [{"day":1,"breakfast":"","lunch":"Beef Sticks & Cheese","dinner":"Pad Thai"},{"day":2,"breakfast":"Pancake Mix","lunch":"Tortillas, PB & J","dinner":"Chili Mac"},{"day":3,"breakfast":"Breakfast Skillet","lunch":"Trail Mix","dinner":"Chicken Fajita Bowl"},{"day":4,"breakfast":"Instant Oatmeal","lunch":"Tortillas, PB & J","dinner":""}]

const mealReducer = (state = [], action ) => {
    if( action.type === 'SET_MEALPLAN' ) {
        return action.payload;
    } else if( action.type === 'RESET_TRIP_DATA' ){
        return state = [];
    } else if( action.type === 'AUTOFILL_MEALPLAN' ){
        return autofillMeals;
    }
    return state;
}

export default mealReducer;