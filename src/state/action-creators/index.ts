import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const getListing = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_LISTING,
    });

    try {
      const { data } = await axios.get(
        'https://app.apidae.co.nz/api/v1/listing?embedded=pictures,reviews,category,contacts&token=1qazxsw2&size=100',
        {
          params: {
            // text: term,
          },
        }
      );
      
      dispatch({
        type: ActionType.GET_LISTING_SUCCESS,
        payload: data.content,
      });
    } catch (err) {
      dispatch({
        type: ActionType.GET_LISTING_ERROR,
        payload: err.message,
      });
    }
  };
};
