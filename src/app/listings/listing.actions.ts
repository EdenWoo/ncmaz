import apiService from 'services/api/listing-api'

export const fetchListings = () => {
    return async function (dispatch: any, getState: any) {
        const response = await apiService.get('/listing?embedded=pictures,reviews,category,contacts&token=1qazxsw2&size=100');
        dispatch({
            type: 'FETCH_LISTINGS',
            payload: response
        })
    }
}
