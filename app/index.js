import React from 'react';
import {render} from 'react-dom';
import './assets/index.less';
import {Provider} from 'react-redux';
import {configureStore} from './store';
let store=configureStore({
    userInfo:{
       cityName:'北京'
    }
});
import App from "./containers/index";

render(
    <Provider store={store}>
        <App/>
    </Provider>

    ,document.getElementById('root'));
