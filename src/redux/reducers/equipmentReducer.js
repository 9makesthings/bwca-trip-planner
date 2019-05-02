
const equipmentReducer = (state = [], action ) => {
    if( action.type === 'SET_EQUIPMENT' ){
        let equipment = [];
        for( let item of action.payload ){
            let addItem = {
                name: item.name,
                code: item.code,
                status: 'need'
            }
            equipment.push(addItem)
        }
        return equipment;
    } else if ( action.type === 'SAVE_EQUIPMENT' ){
        return action.payload;
    } else if ( action.type === 'RESET_TRIP_DATA' ){
        return state;
    }
    return state;
}

export default equipmentReducer;