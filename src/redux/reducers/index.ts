import {combineReducers} from 'redux';
import {currencyReducer} from './currencyReducer/currencyReducer';
import {converterReducer} from './converterArrayReducer/converterArrayReducer';
import {loadingReducer} from './converterArrayReducer/loadingReducer';

export const rootReducer = combineReducers({
  currency: currencyReducer,
  converterPairs: converterReducer,
  firstLoading: loadingReducer,
});
