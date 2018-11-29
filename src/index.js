import React from 'react';
import Route from './router';
import { AppContainer } from 'react-hot-loader';

import ReactDOM from 'react-dom';
import './styles';
import App from './App';
import * as serviceWorker from './serviceWorker';


const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  )
};

render(Route);

// Webpack Hot Module Replacement API
if (module.hot) {
  console.log(module);
  module.hot.accept('./router/', () => {
    render(Route);
  })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();