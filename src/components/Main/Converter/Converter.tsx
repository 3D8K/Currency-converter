import React from 'react';
import './Converter.scss';
import {Form, Divider} from 'antd';
import {changeTopOneAction, changeTopTwoAction,
  changeBottomOneAction, changeBottomTwoAction}
  from '../../../redux/actions/selectorActions';
import {ValutePair} from '../valutePair/valutePair';
import {useDispatch, useSelector} from 'react-redux';

function Converter(props: any) {
  const dispatch = useDispatch();
  const topDefault = useSelector(
      (state: any) => state.topSelectorOne);
  const topTwoDefault = useSelector(
      (state: any) => state.topSelectorTwo);
  const bottomDefault = useSelector(
      (state: any) => state.bottomSelectorOne);
  const bottomTwoDefault = useSelector(
      (state: any) => state.bottomSelectorTwo);

  function changeTopOne(value: number) {
    dispatch(changeTopOneAction(value));
  }
  function changeTopTwo(value: number) {
    dispatch(changeTopTwoAction(value));
  }
  function changeBottomOne(value: number) {
    dispatch(changeBottomOneAction(value));
  }
  function changeBottomTwo(value: number) {
    dispatch(changeBottomTwoAction(value));
  }
  return (
    <Form className='ConverterBox' size={'large'}>
      <div className='Selector-div'>
        <Form.Item>
          <ValutePair fromCurrProps={topDefault.value}
            toCurrProps={topTwoDefault.value}
            changeCurrTop={changeTopOne}
            changeCurrBot={changeTopTwo}/>
        </Form.Item>
        <Divider/>
        <Form.Item>
          <ValutePair fromCurrProps={bottomDefault.value}
            toCurrProps={bottomTwoDefault.value}
            changeCurrTop={changeBottomOne}
            changeCurrBot={changeBottomTwo}/>
        </Form.Item>
      </div>
    </Form>
  );
}

export default Converter;
