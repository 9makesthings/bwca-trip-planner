const routeReducer = (state = [], action ) => {
    if( action.type === 'SET_ROUTE_DATA' ){
        return action.payload;
    }
    return state;
}

export default routeReducer;