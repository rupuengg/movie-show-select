import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { Provider } from 'react-redux';
import store from './store';
import * as serviceWorker from './Helpers/serviceWorker';
import {
  BrowserRouter as Router
} from 'react-router-dom';

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));

serviceWorker.unregister();
