import {Dispatch} from 'react';
import {actionSelector} from '../reducers/selectReducers/topSelectorReducer';
import {BOTTOM_SELECTOR_ONE, BOTTOM_SELECTOR_TWO,
  TOP_SELECTOR_ONE, TOP_SELECTOR_TWO} from '../reducers/constants';

export function changeTopOneAction(currency: any) {
  console.log(currency);
  return async (dispatch: Dispatch<any>) => {
    dispatch({type: TOP_SELECTOR_ONE, payload: currency});
  };
};

export function changeTopTwoAction(currency: number) {
  return async (dispatch: Dispatch<actionSelector>) => {
    dispatch({type: TOP_SELECTOR_TWO, payload: currency});
  };
};

export function changeBottomOneAction(currency: number) {
  return async (dispatch: Dispatch<actionSelector>) => {
    dispatch({type: BOTTOM_SELECTOR_ONE, payload: currency});
  };
};

export function changeBottomTwoAction(currency: number) {
  return async (dispatch: Dispatch<actionSelector>) => {
    dispatch({type: BOTTOM_SELECTOR_TWO, payload: currency});
  };
};
