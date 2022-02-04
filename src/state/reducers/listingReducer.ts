import { ActionType } from '../action-types';
import { Action } from '../actions';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.GET_LISTING:
      return { loading: true, error: null, data: [] };
    case ActionType.GET_LISTING_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.GET_LISTING_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
