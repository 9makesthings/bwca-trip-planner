// test data, reset to null later
const tripDetails = {
    user_id: '',
    name: '',
    trip_date: null,
    number_days: 2,
    group_size: 1,
    difficulty: 3,
    route_id: null
}

const tripDetailsReducer = (state = tripDetails, action) => {

    let payload = action.payload;

    if( action.type === 'ADD_FIRST_DETAILS' ){
        return state = {
            ...state,
            user_id: payload.user_id,
            name: payload.name,
            number_days: payload.number_days,
            group_size: payload.group_size,
            difficulty: payload.difficulty
        }
    } else if( action.type === 'ADD_ROUTE_ID' ){
        return state = {
            ...state,
            route_id: payload.route_id,
        }
    } else if( action.type === 'RESET_TRIP_DATA'){
        return tripDetails;
    } 


    return state;
}

export default tripDetailsReducer;