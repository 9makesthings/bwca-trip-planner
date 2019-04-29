const equipment = [
    {
        name: 'Tent',
        code: 1,
        status: 'need'
    },
    {
        name: 'Tarp',
        code: 2,
        status: 'need'
    },
    {
        name: 'Sleeping Bag',
        code: 3,
        status: 'need'
    },
    {
        name: 'Sleeping Pad',
        code: 4,
        status: 'need'
    },
    {
        name: 'Portage Pack',
        code: 5,
        status: 'need'
    },
    {
        name: 'Camp Stove',
        code: 6,
        status: 'need'
    }
]


const equipmentReducer = (state = equipment, action ) => {
    if( action.type === 'SET_EQUIPMENT' ){
        return action.payload;
    } else if ( action.type === 'RESET_TRIP_DATA' ){
        return state = equipment;
    }
    return state;
}

export default equipmentReducer;