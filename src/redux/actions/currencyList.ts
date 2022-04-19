import axios from 'axios';
import {FETCH_CURRENCY_SUCCESS, FETCH_CURRENCY_ERROR,
  ADD_CURRENCY_PAIR, LOADING_COMPLETE}
  from '../reducers/constants';
import {Dispatch} from 'react';
import {currencyArrAction} from '../reducers/currencyReducer/currencyReducer';
import {separateCurrArray} from '../../utils/separateCurrArray';
import {v1 as uuid} from 'uuid';

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
    const defaultUsd = currencyData.find((currency: any) =>
      currency.charCode === 'USD')?.value;
    const defaultEur = currencyData.find((currency: any) =>
      currency.charCode === 'EUR')?.value;
    dispatch({type: ADD_CURRENCY_PAIR, payload:
          {topCurrency: defaultUsd, bottomCurrency: 1, id: uuid()}});
    dispatch({type: ADD_CURRENCY_PAIR, payload:
          {topCurrency: defaultEur, bottomCurrency: 1, id: uuid()}});
    dispatch({type: LOADING_COMPLETE, payload: ''});
  };
}
