const viewDetailsReducer = (state ={}, action) => {

    if( action.type === 'SET_DETAILS' ){
        return state = {
            tripDetails: action.payload,
        }
    }
    if( action.type === 'SET_MEAL_DETAILS') {
        return state = {
            ...state,
            mealDetails: action.payload,
        }
    }
    if( action.type === 'SET_PACKLIST') {
        return state = {
            ...state,
            packlist: action.payload,
        }
    }

    return state;
}

export default viewDetailsReducer;