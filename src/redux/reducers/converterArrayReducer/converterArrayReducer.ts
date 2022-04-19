import {
  ADD_CURRENCY_PAIR,
  REMOVE_CURRENCY_PAIR,
  CHANGE_CURRENCY_PAIR,
} from '../constants';


export interface CurrencyPair {
    id: string,
    topCurrency: number,
    bottomCurrency: number
}

export interface ConverterPairs {
    pairsArray: CurrencyPair[],
    error: string | null
}

export interface currencyPairAction {
    type: string,
    payload: any
}
const initialState: ConverterPairs = {
  pairsArray: [],
  error: null,
};

export const converterReducer = (state
=initialState, action: currencyPairAction): ConverterPairs => {
  switch (action.type) {
    case ADD_CURRENCY_PAIR:
      return {
        ...state,
        error: null,
        pairsArray: state.pairsArray.concat(action.payload)};
    case REMOVE_CURRENCY_PAIR:
      return {
        ...state,
        error: null,
        pairsArray: state.pairsArray.filter((element) =>
          element.id !== action.payload),
      };
    case CHANGE_CURRENCY_PAIR:
      return {
        ...state,
        error: null,
        pairsArray: state.pairsArray.map((element) =>
            element.id === action.payload.id ? action.payload : element),
      };
    default:
      return state;
  }
};
