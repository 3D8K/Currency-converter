import React from 'react';
import './Converter.scss';
import {Form, Button, Divider} from 'antd';
import {CloseOutlined, PlusOutlined} from '@ant-design/icons';
import {ValutePair} from '../valutePair/valutePair';
import {useDispatch, useSelector} from 'react-redux';
import {addPair, removePair} from '../../../redux/actions/currencyPairActions';

function Converter(props: any) {
  const dispatch = useDispatch();
  const currencyPairs = useSelector(
      (state: any) => state.converterPairs.pairsArray);

  return (
    <Form className='ConverterBox' size={'large'}>
      <div className='Selector-div'>
        <Form.List
          name="converters"
          initialValue={currencyPairs}
        >
          {(fields, {add, remove}, {errors}) => (
            <>
              {fields.map((field, index) => (
                <Form.Item
                  {...field.name}
                  required={false}
                  key={field.key}
                  validateTrigger={['onChange', 'onBlur']}>
                  {index == 0 ? null : <Divider/>}
                  <ValutePair fromCurrProps={currencyPairs[index].topCurrency}
                    toCurrProps={currencyPairs[index].bottomCurrency}
                    id={currencyPairs[index].id}/>
                  <CloseOutlined
                    className="dynamic-delete-button"
                    onClick={()=> {
                      remove(field.name);
                      dispatch(removePair(currencyPairs[index].id));
                    }}
                  />
                </Form.Item>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => {
                    dispatch(addPair());
                    add();
                  }}
                  style={{width: '60%'}}
                  icon={<PlusOutlined />}
                >
                    Add converter
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>
      </div>
    </Form>
  );
};

export default Converter;
