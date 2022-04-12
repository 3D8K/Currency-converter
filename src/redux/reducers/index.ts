import {combineReducers} from 'redux';
import {currencyReducer} from './currencyReducer/currencyReducer';
import {
  bottomOneSelectorReducer,
  bottomTwoSelectorReducer,
  topOneSelectorReducer,
  topTwoSelectorReducer} from './selectReducers/topSelectorReducer';

export const rootReducer = combineReducers({
  currency: currencyReducer,
  topSelectorOne: topOneSelectorReducer,
  topSelectorTwo: topTwoSelectorReducer,
  bottomSelectorOne: bottomOneSelectorReducer,
  bottomSelectorTwo: bottomTwoSelectorReducer,
});
