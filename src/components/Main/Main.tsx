import React from 'react';
import Converter from './Converter/Converter';
import './Main.scss';
import CurrencyList from './CurrencyList/CurrencyList';
import {useSelector} from 'react-redux';
import {Spin} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';

function Main() {
  const flag = useSelector(
      (state: any) => state.firstLoading.status);
  const loadingIcon = <LoadingOutlined style={{fontSize: 100}} spin />;
  if (!flag) {
    return <Spin indicator={loadingIcon} style={{margin: 'auto'}}/>;
  } else {
    return (
      <div className='main-content'>
        <Converter/>
        <CurrencyList/>
      </div>
    );
  }
}

export default Main;
