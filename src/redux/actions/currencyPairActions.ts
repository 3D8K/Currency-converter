import {Dispatch} from 'react';
import {v1 as uuid} from 'uuid';
import {currencyPairAction} from
  '../reducers/converterArrayReducer/converterArrayReducer';
import {
  ADD_CURRENCY_PAIR,
  REMOVE_CURRENCY_PAIR,
  CHANGE_CURRENCY_PAIR,
} from '../reducers/constants';

export function addPair() {
  return async (dispatch: Dispatch<currencyPairAction>) => {
    dispatch({type: ADD_CURRENCY_PAIR, payload:
          {
            id: uuid(),
            topCurrency: undefined,
            bottomCurrency: undefined,
          }});
  };
};

export function changePair(currencyFrom: number,
    currencyTo: number, id: string) {
  return async (dispatch: Dispatch<currencyPairAction>) => {
    dispatch({type: CHANGE_CURRENCY_PAIR, payload:
            {
              id: id,
              topCurrency: currencyFrom,
              bottomCurrency: currencyTo,
            }});
  };
}


export function removePair(id: string) {
  return async (dispatch: Dispatch<currencyPairAction>) => {
    dispatch({type: REMOVE_CURRENCY_PAIR, payload: id});
  };
}

