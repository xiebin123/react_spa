import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';
import Home from  './home';
import App from './app';
import css from './style.css';
import TodoList from './todolist';
import Forms from  './form';

ReactDOM.render(
(<Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/todolist" component={TodoList}/>
      <Route path="/form" component={Forms} />
    </Route>
 </Router>
),document.getElementById('app'));
