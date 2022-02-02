import apiService from 'services/api/listing-api'
import {Dispatch} from 'redux';

// export const fetchListings = () => {
//     return async function (dispatch: any, getState: any) {
//         const response = await apiService.get('facts');
//         dispatch({
//             type: 'FETCH_LISTINGS',
//             payload: response
//         })
//     }
// }

export const fetchListings = () => {
    return async (dispatch: Dispatch) => {

        dispatch({
            type: 'FETCH_LISTINGS',
        });

        try {
            const {data} = await apiService.get('listing?embedded=pictures,reviews,category,contacts&token=1qazxsw2&size=100')

            dispatch({
                type: 'FETCH_LISTINGS_SUCCESS',
                payload: data.content,
            });
        } catch (err) {
            dispatch({
                type: 'FETCH_LISTINGS_FAIL',
                payload: err.message,
            });
        }
    }
}
