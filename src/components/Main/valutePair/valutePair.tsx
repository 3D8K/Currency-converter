import React, {useState} from 'react';
import {Input, Select} from 'antd';
import {changePair} from '../../../redux/actions/currencyPairActions';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import './valutePair.scss';

export function ValutePair(props: any) {
  const dispatch = useDispatch();

  const currencyData = useSelector((state: any) => state.currency.currencyArr);
  const [fromCurrency, setFromCurrency] = useState(props.fromCurrProps);
  const [toCurrency, setToCurrency] = useState(props.toCurrProps);
  const [topValue, setTopValue] = useState<any>();
  const [bottomValue, setBottomValue] = useState<any>();

  function topConvert(value: number) {
    setTopValue(value);
    setBottomValue(Number((value*(fromCurrency/toCurrency)).toFixed(2)));
  };
  function bottomConvert(value: number) {
    setBottomValue(value);
    setTopValue(Number((value*(toCurrency/fromCurrency)).toFixed(2)));
  };

  function topCurrency(value: number) {
    setFromCurrency(value);
    dispatch(changePair(value, toCurrency, props.id));
    setBottomValue(Number((topValue*(value/toCurrency)).toFixed(2)));
  }

  function bottomCurrency(value: number) {
    setToCurrency(value);
    dispatch(changePair(fromCurrency, value, props.id));
    setBottomValue(Number((bottomValue*(toCurrency/value)).toFixed(2)));
  }

  return (
    <div>
      <div>
        <Select style={{width: 300, height: 40, margin: '0 8px'}}
          value={fromCurrency} defaultValue={props.fromCurrProps}
          onChange={(e) => topCurrency(e)}
          placeholder='Select a currency from'>
          {currencyData.map((currency: any) => (
            <Select.Option value={currency.value} key={currency.value}>
              {currency.flag + ' ' +
                            currency.charCode}
            </Select.Option>
          ))}
        </Select>
        <Input style={{width: 300}} type='number' value={topValue}
          placeholder='Enter the value from' name='topConverter'
          onChange={(e)=>(topConvert(Number(e.target.value)))}/>
      </div>
      <div style={{marginTop: 20}}>
        <Select style={{width: 300, height: 40, margin: '0 8px'}}
          value={toCurrency} defaultValue={props.toCurrProps}
          onChange={(e) => bottomCurrency(e)}
          placeholder='Select a currency to'>
          {currencyData.map((currency: any) => (
            <Select.Option value={currency.value} key={currency.value}>
              {currency.flag + ' ' +
                        currency.charCode}
            </Select.Option>
          ))}
        </Select>
        <Input style={{width: 300}} type='number' value={bottomValue}
          placeholder='Enter the value to' name='bottomConverter'
          onChange={(e)=>(bottomConvert(Number(e.target.value)))}/>
      </div>
    </div>
  );
}
