import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import {rootReducer} from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension';

const persistedConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistedConfig, rootReducer);

export const store = createStore(persistedReducer,
    composeWithDevTools(applyMiddleware(thunk)));

export const persistedStore = persistStore(store);
