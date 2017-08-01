import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import reducer from './reducers';
import App from './components/App';
import Signin from './components/Signin';
import Signup from './components/Signup';

const store = createStore(reducer); 

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter >
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/app" component={App} />
                <Route path="/signin" component={Signin} />
                <Route path="/signup" component={Signup} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')); 