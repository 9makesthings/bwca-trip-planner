
const newTripData = {
    user_id: 1,
    trip_date: 1,
    number_days: 2,
    group_size: 3,
    difficulty: 2,
    route_id: 0
}

const newTripReducer = (state = newTripData, action) => {

    let payload = action.payload;

    if( action.type === 'ADD_FIRST_DETAILS' ){
        return state = {
            ...state,
            // user_id: payload.user_id,
            // trip_date: payload.date,
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