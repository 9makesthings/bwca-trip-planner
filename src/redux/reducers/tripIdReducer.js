const tripIdReducer = (state={}, action) => {

    if( action.type === 'SET_TRIP_ID' ) {
        return state = { id: action.payload[0].id };
    }
    return state;
}

export default tripIdReducer;