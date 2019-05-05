
const outfitterReducer = (state = [], action ) => {
    if( action.type === 'SET_OUTFITTERS' ){
        let outfitterArray = [];
        for( let outfitter of action.payload ){
            let addOutfitter = {
                name: outfitter.name,
                city: outfitter.city,
                phone: outfitter.phone,
                email: outfitter.email,
                image: outfitter.image_url,
                website: outfitter.website,
            }
            outfitterArray.push(addOutfitter);
        }
        return outfitterArray;
    }
    return state;
}

export default outfitterReducer;