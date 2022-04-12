import React, {useEffect} from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import {useDispatch} from 'react-redux';
import {fetchCurrency, defCurrencyPair} from '../../redux/actions/currencyList';
import {store} from '../../redux/store';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    Promise.resolve(dispatch(fetchCurrency())).then((result: any) => {
      const storeCheck = store.getState();
      if (!storeCheck.bottomSelectorOne.value) {
        dispatch(defCurrencyPair(result));
      }
    });
  }, []);
  return (
    <div className='App-main'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
