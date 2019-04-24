// test data, reset to null later
const newTripData = {
    user_id: null,
    trip_date: null,
    number_days: 2,
    group_size: 1,
    difficulty: 3,
    route_id: null
}

const newTripReducer = (state = newTripData, action) => {

    let payload = action.payload;

    if( action.type === 'ADD_FIRST_DETAILS' ){
        return state = {
            ...state,
            number_days: payload.number_days,
            group_size: payload.group_size,
            difficulty: payload.difficulty
        }
    } else if( action.type === 'ADD_ROUTE_ID' ){
        return state = {
            ...state,
            route_id: payload.route_id,
        }
    }

    return state;
}

export default newTripReducer;