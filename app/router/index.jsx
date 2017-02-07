import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Example from 'Example';

export default (
  <Router history={hashHistory}>
    <Route path="/">
      <IndexRoute component={Example}/>
    </Route>
  </Router>
);