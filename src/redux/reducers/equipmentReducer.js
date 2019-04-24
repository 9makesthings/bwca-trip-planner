const equipmentReducer = (state = [], action ) => {
    if( action.type === 'SET_EQUIPMENT' ){
        return action.payload;
    }
    return state;
}

export default equipmentReducer;