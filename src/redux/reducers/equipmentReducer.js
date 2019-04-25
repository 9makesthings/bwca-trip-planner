const equipment = [
    {
        name: 'Tent',
        code: 1,
        status: false
    }
]


const equipmentReducer = (state = equipment, action ) => {
    if( action.type === 'SET_EQUIPMENT' ){
        return action.payload;
    }
    return state;
}

export default equipmentReducer;