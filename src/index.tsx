import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, Store, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import petReducer from './reducers/reducer';

const rootReducer = combineReducers({
  petReducer
})

const store: Store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
