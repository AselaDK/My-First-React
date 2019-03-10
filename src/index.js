import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';	//Link to App.js file
import Hello from './Hello';	//Link to Hello.js file
// Hello is a component we created
import * as serviceWorker from './serviceWorker';
import 'tachyons'; // npm install tachyons
// tachyons were added

//-ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Hello greeting={'Hello ' + 'React Ninjas'}/>, document.getElementById('root'));
/* my commeny = Rendering Hello.js file replacing App.js
				added greeting in Hello.js file
				unnessasary concatenation is used
				and App.js is never used


*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
