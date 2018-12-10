import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router';
import 'typeface-roboto';
import './styles/base.css';
import * as serviceWorker from './serviceWorker';

const render = Component => {
  ReactDOM.render(<Component />, document.getElementById('root'));
};

render(Route);

// Webpack Hot Module Replacement API
// if (module.hot) {
//   console.log('---', module);
//   module.hot.accept('./router/', () => {
//     render(Route);
//   })
// }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
