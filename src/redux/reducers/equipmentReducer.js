const filledForm = [{"name":"Tent","code":1,"status":"have"},{"name":"Tarp","code":2,"status":"need"},{"name":"Sleeping Bag","code":3,"status":"have"},{"name":"Sleeping Pad","code":4,"status":"need"},{"name":"Portage Packs","code":5,"status":"have"},{"name":"Camp Stove","code":6,"status":"need"},{"name":"Fuel","code":7,"status":"need"},{"name":"Coffee Pot","code":8,"status":"need"},{"name":"Fry Pan","code":9,"status":"have"},{"name":"Pot with Lid","code":10,"status":"have"},{"name":"Hot Pad","code":11,"status":"have"},{"name":"Plates","code":12,"status":"have"},{"name":"Bowls","code":13,"status":"have"},{"name":"Serving Spoon","code":14,"status":"have"},{"name":"Spatula","code":15,"status":"have"},{"name":"Measuring Cup","code":16,"status":"have"},{"name":"Utensils","code":17,"status":"have"},{"name":"Hot Drinks Mug","code":18,"status":"need"},{"name":"Folding water bucket","code":19,"status":"need"},{"name":"Dish Soap","code":20,"status":"have"},{"name":"Dish Cloth","code":21,"status":"have"},{"name":"Food Pack or Bear Barrel","code":22,"status":"need"},{"name":"System for Hanging Food","code":23,"status":"need"},{"name":"Saw","code":24,"status":"need"},{"name":"Towel","code":25,"status":"have"},{"name":"Garbage Bags","code":26,"status":"have"},{"name":"Ziplocs","code":27,"status":"need"},{"name":"Duct Tape","code":28,"status":"need"},{"name":"Matches & Lighters","code":29,"status":"need"},{"name":"Firestarters","code":30,"status":"need"},{"name":"Toilet Paper","code":31,"status":"need"},{"name":"Hand Sanitizer","code":32,"status":"need"},{"name":"Multi-Tool","code":48,"status":"need"},{"name":"Knife","code":49,"status":"need"},{"name":"Map","code":50,"status":"need"},{"name":"Compass","code":51,"status":"need"},{"name":"First Aid Kit","code":52,"status":"need"},{"name":"Water Filter","code":53,"status":"have"}];


const equipmentReducer = (state = [], action ) => {
    if( action.type === 'SET_EQUIPMENT' ){


        let equipment = [];
        for( let item of action.payload ){
            let addItem = {
                name: item.name,
                code: item.code,
                // type: item.type,
                status: 'need'
            }
            equipment.push(addItem)
        }
        return equipment;


        
    } else if ( action.type === 'SAVE_EQUIPMENT' ){
        return action.payload;
    } else if ( action.type === 'RESET_TRIP_DATA' ){
        return state;
    } else if ( action.type === 'AUTOFILL_PACKLIST'){
        return filledForm;
    }
    return state;
}

export default equipmentReducer;