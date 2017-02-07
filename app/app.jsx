import React from 'react';
import ReactDOM from 'react-dom';

import router from 'app/router/';

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(router, document.getElementById('app'));