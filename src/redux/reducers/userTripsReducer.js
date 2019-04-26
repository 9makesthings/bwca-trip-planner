const userTripsReducer = (state =[], action) => {
    if( action.type === 'SET_USER_TRIPS' ){
        return action.payload;
    }
    return state;
}

export default userTripsReducer;