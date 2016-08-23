import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './css/style.css';

import App from './components/App'
// import MainPage from './components/MainPage'


render(
  <App/>,
  document.getElementById('root')
);


// render(
//   <Router history={browserHistory}>
//     <Route path="/" component={MainPage}></Route>
      // <IndexRoute component={MainPage}/>
//       <Route path="app" component={App} />
//   </Router>,
//  document.getElementById('root')
// );
