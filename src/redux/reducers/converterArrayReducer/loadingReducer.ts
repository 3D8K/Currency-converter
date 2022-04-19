import {LOADING_COMPLETE, LOADING_ERROR} from '../constants';

const initialState:LoadingStatus = {
  status: false,
  error: null,
};

export interface LoadingStatus {
  status: boolean,
  error: any
}

export interface currencyPairAction {
  type: string,
  payload: string
}

export const loadingReducer = (state = initialState,
    action: currencyPairAction): LoadingStatus => {
  switch (action.type) {
    case LOADING_COMPLETE:
      return {
        error: null,
        status: true};
    case LOADING_ERROR:
      return {
        error: action.payload,
        status: false,
      };
    default:
      return state;
  }
};
