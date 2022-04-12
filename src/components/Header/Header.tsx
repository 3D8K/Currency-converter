import React from 'react';
import {PageHeader, Divider} from 'antd';
import {DollarCircleOutlined} from '@ant-design/icons';
import './Header.scss';

function Header() {
  return (
    <>
      <PageHeader title={'Currency converter'}
        avatar={{style: {backgroundColor: 'white'}, icon: <DollarCircleOutlined
          style={{fontSize: '30px', color: 'black'}}/>, size: 32}}>
      </PageHeader>
      <Divider/>
    </>
  );
}

export default Header;
