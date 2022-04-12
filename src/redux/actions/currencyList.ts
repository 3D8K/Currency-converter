import axios from 'axios';
import {FETCH_CURRENCY_SUCCESS, FETCH_CURRENCY_ERROR,
  TOP_SELECTOR_ONE, BOTTOM_SELECTOR_ONE}
  from '../reducers/constants';
import {Dispatch} from 'react';
import {currencyArrAction} from '../reducers/currencyReducer/currencyReducer';
import {separateCurrArray} from '../../utils/separateCurrArray';

export function fetchCurrency() {
  return async (dispatch: Dispatch<currencyArrAction>) => {
    try {
      const response = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');
      const result = await separateCurrArray(response.data.Valute);
      dispatch({type: FETCH_CURRENCY_SUCCESS,
        payload: result});
      return result;
    } catch (e) {
      dispatch({type: FETCH_CURRENCY_ERROR, payload: 'Error'});
    }
  };
};


export function defCurrencyPair(currencyData: any) {
  return async (dispatch: any) => {
    const defaultTop = currencyData.find((currency: any) =>
      currency.charCode === 'USD')?.value;
    const defaultBottom = currencyData.find((currency: any) =>
      currency.charCode === 'EUR')?.value;
    dispatch({type: TOP_SELECTOR_ONE, payload: defaultTop});
    dispatch({type: BOTTOM_SELECTOR_ONE, payload: defaultBottom});
  };
}
