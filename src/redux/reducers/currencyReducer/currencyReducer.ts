import {FETCH_CURRENCY_SUCCESS, FETCH_CURRENCY_ERROR} from '../constants';

export interface CureencyInterface {
  code: string,
  flag: any,
  name: string,
  value: number
}

export interface CurrencyState {
  currencyArr: CureencyInterface[]
  error: string | null;
}

export interface currencyArrAction {
  type: string,
  payload: any
}
const initialState: CurrencyState = {
  currencyArr: [],
  error: null,
};

export const currencyReducer = (state
=initialState, action: currencyArrAction): CurrencyState => {
  switch (action.type) {
    case FETCH_CURRENCY_SUCCESS:
      return {error: null, currencyArr: action.payload};
    case FETCH_CURRENCY_ERROR:
      return {error: action.payload, currencyArr: []};
    default:
      return state;
  }
};
