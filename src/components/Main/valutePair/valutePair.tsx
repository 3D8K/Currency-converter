import React, {useState} from 'react';
import {Input, Select} from 'antd';
import {useSelector} from 'react-redux';

export function ValutePair(props: any) {
  const currencyData = useSelector((state: any) => state.currency.currencyArr);
  const [fromCurrency, setFromCurrency] = useState(props.fromCurrProps);
  const [toCurrency, setToCurrency] = useState(props.toCurrProps);
  const [topValue, setTopValue] = useState(1);
  const [bottomValue, setBottomValue] = useState(props.fromCurrProps);

  function topConvert(value: number) {
    setTopValue(value);
    setBottomValue((value*(fromCurrency/toCurrency)).toFixed(2));
  };
  function bottomConvert(value: number) {
    setBottomValue(value);
    setTopValue(Number((value*(toCurrency/fromCurrency)).toFixed(2)));
  };

  function topCurrency(value: number) {
    setFromCurrency(value);
    props.changeCurrTop(value);
    setBottomValue((topValue*(value/toCurrency)).toFixed(2));
  }

  function bottomCurrency(value: number) {
    setToCurrency(value);
    props.changeCurrBot(value);
    setBottomValue(Number((bottomValue*(toCurrency/value)).toFixed(2)));
  }

  return (
    <div>
      <div>
        <Select style={{width: 300, height: 40, margin: '0 8px'}}
          value={String(fromCurrency)} defaultValue={props.fromCurrProps}
          onChange={(e) => topCurrency(e)}>
          {currencyData.map((currency: any) => (
          // eslint-disable-next-line react/jsx-key
            <Select.Option value={currency.value}>
              {currency.flag + ' ' +
                            currency.charCode}
            </Select.Option>
          ))}
        </Select>
        <Input style={{width: 300}} type='number' value={topValue}
          onChange={(e)=>(topConvert(Number(e.target.value)))}/>
      </div>
      <div style={{marginTop: 20}}>
        <Select style={{width: 300, height: 40, margin: '0 8px'}}
          value={toCurrency} defaultValue={props.toCurrProps}
          onChange={(e) => bottomCurrency(e)}>
          {currencyData.map((currency: any) => (
            // eslint-disable-next-line react/jsx-key
            <Select.Option value={currency.value}>
              {currency.flag + ' ' +
                        currency.charCode}
            </Select.Option>
          ))}
        </Select>
        <Input style={{width: 300}} type='number' value={bottomValue}
          onChange={(e)=>(bottomConvert(Number(e.target.value)))}/>
      </div>
    </div>
  );
}
