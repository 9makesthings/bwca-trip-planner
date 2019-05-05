const trip = {
    tripDetails: {
        completed: null,
        description: '',
        difficulty: 3,
        distance: 0,
        group_size: 2,
        image_url: '',
        name: null,
        number_days: 2,
        route_name: '',
        trip_date: null
    },
    packlist: [],
}

const tripDetailsReducer = (state = trip, action) => {

    if( action.type === 'SET_DETAILS' ){
        return state = {
            tripDetails: action.payload[0],
        }
    }
    if( action.type === 'SET_MEAL_DETAILS') {
        return state = {
            ...state,
            mealPlan: action.payload,
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

export default tripDetailsReducer;