import React from 'react';
import ReactDOM from 'react-dom';
require('./fetch-setup');

import App from './components/App'; //Receiving App component code

ReactDOM.render(
  <App />,
  document.getElementById('main')
);

require('./test/index-test.js');
