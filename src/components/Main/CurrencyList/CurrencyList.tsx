import React from 'react';
import {Table} from 'antd';
import './CurrencyList.scss';
import {useSelector} from 'react-redux';

const columns = [
  {
    title: 'Code',
    dataIndex: 'code',
  },
  {
    title: 'Country',
    dataIndex: 'flag',
  },
  {
    title: 'Char code',
    dataIndex: 'charCode',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Nominal',
    dataIndex: 'nominal',
  },
  {
    title: 'Value',
    dataIndex: 'tableValue',
  },
  {
    title: 'Difference',
    dataIndex: 'difference',
  },
];

function CurrencyList() {
  const data = useSelector((state: any) => state.currency.currencyArr);
  return <Table className='CurrencyList-div'
    columns={columns}
    size={'small'}
    pagination={false}
    dataSource={data}
    rowKey='charCode'
  />;
}

export default CurrencyList;
