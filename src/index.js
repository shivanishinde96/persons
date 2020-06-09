import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './App';
import * as serviceWorker from './serviceWorker';
import PersonReducer from './store/reducer/person'


const store=createStore(PersonReducer)


ReactDOM.render(
  <Provider store={store}> 
  
    <App />
  
  </Provider>
 ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
