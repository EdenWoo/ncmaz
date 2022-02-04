import { ActionType } from '../action-types';

interface GetListingAction {
  type: ActionType.GET_LISTING;
}

interface GetListingSuccessAction {
  type: ActionType.GET_LISTING_SUCCESS;
  payload: string[];
}

interface GetListingErrorAction {
  type: ActionType.GET_LISTING_ERROR;
  payload: string;
}

export type Action =
  | GetListingAction
  | GetListingSuccessAction
  | GetListingErrorAction;
