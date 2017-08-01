import React from 'react'; 
import ReactDOM from 'react-dom';  
import {
    BrowserRouter, 
    Switch, 
  Route
} from 'react-router-dom';

import App from './components/App'; 
import Signin from './components/Signin'; 
import Signup from './components/Signup'; 


ReactDOM.render(
<BrowserRouter >
    <Switch> 
    <Route exact path="/"  component={App} />
     <Route  path="/app"  component={App} />
    <Route path="/signin"  component={Signin}/>
    <Route path="/signup"  component={Signup}/>
   </Switch> 
</BrowserRouter> , 
    document.getElementById('root')); 