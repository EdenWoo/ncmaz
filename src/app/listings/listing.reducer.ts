interface ListingState {
    listings: any[];
}

const initialState: ListingState = {
    listings: [],
};

const listingReducer = (state = initialState, action: any) => {
    if (action.type === 'FETCH_LISTINGS_SUCCESS') {
        return action.payload
    }

    return state
}

export default listingReducer;
