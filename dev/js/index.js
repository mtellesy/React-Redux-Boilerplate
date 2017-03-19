import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
// Import provider
import  {Provider} from 'react-redux';
//first import createStore to create store
import {createStore} from 'redux';
// now import the combined reduces object and pass it to create store function
import reducers from './reducers';
// import app which holds our main components
import App from './components/App';

const store = createStore(reducers);


ReactDOM.render(
<Provider store={store}>
 <App />
</Provider>
  ,document.getElementById('root'));
