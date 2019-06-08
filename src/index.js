import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Products from './components/product'
import HomePage from './components/portfolio/HomePage/homepage'


ReactDOM.render(
  <Router>
    <Switch>
        {/* <Route to='/items' exact component={Products} />  */}
        <Route to='/home' strict exact component={HomePage} />     
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
