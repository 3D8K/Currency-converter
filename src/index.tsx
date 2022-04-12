import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './components/App/App';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistedStore} from './redux/store';

ReactDOM.render(

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </PersistGate>
    </Provider>,
    document.getElementById('root'),
);

