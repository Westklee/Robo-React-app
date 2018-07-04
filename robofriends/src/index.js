import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';
import registerServiceWorker from './components/registerServiceWorker';
import 'tachyons'; 


ReactDOM.render( 
	<App />, document.getElementById('root'));
registerServiceWorker();
