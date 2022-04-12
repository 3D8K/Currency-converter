import {BOTTOM_SELECTOR_ONE, BOTTOM_SELECTOR_TWO,
  TOP_SELECTOR_ONE, TOP_SELECTOR_TWO} from '../constants';


export interface actionSelector {
  type: string,
  payload: any
}
interface selectorTopState {
    value: number
}

interface selectorTopStateTwo {
    value: number
}

interface selectorBottomState {
  value: number
}

interface selectorTopBottomTwo {
  value: number
}

const initialStateOne: any = {
  value: null,
};

const initialStateTwo: any = {
  value: '1',
};

const initialStateBottomOne: any = {
  value: null,
};

const initialStateBottomTwo: any = {
  value: '1',
};

export const topOneSelectorReducer = (state=initialStateOne,
    action: actionSelector) : selectorTopState => {
  switch (action.type) {
    case TOP_SELECTOR_ONE:
      return {value: action.payload};
    default:
      return state;
  }
};

export const topTwoSelectorReducer = (state=initialStateTwo,
    action: actionSelector) : selectorTopStateTwo => {
  switch (action.type) {
    case TOP_SELECTOR_TWO:
      return {value: action.payload};
    default:
      return state;
  }
};

export const bottomOneSelectorReducer = (state=initialStateBottomOne,
    action: actionSelector) : selectorBottomState => {
  switch (action.type) {
    case BOTTOM_SELECTOR_ONE:
      return {value: action.payload};
    default:
      return state;
  }
};

export const bottomTwoSelectorReducer = (state=initialStateBottomTwo,
    action: actionSelector) : selectorTopBottomTwo => {
  switch (action.type) {
    case BOTTOM_SELECTOR_TWO:
      return {value: action.payload};
    default:
      return state;
  }
};
