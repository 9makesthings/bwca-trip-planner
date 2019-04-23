const progressReducer = (state = 0, action) => {
    
    switch (action.type) {
        case 'NEXT_ACTIVE_STEP':
            if( state < 4 ){
                return state + 1;
            } else {
                return state;
            }
        case 'BACK_ACTIVE_STEP':
            return state - 1;
        case 'RESET_ACTIVE_STEP':
            return state = 0;
        default:
            return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default progressReducer;
  