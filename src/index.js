import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router';
import 'typeface-roboto';
import './styles/base.css';
import * as serviceWorker from './serviceWorker';
import { SnackbarProvider, withSnackbar } from 'notistack';
import withRoot from './withRoot';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Notify from './utils/Notify';

const render = Component => {
  // hack: 全局使用 notification
  const NotistackHack = withSnackbar(props => {
    Notify.init(props.enqueueSnackbar);
    return <Component />;
  });
  const NotifyWrap = () => (
    <SnackbarProvider
      style={{ maxWidth: '400px', margin: '0 16px' }}
      maxSnack={3}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      action={[
        <IconButton key="close" aria-label="Close" color="inherit">
          <CloseIcon />
        </IconButton>
      ]}
      autoHideDuration={3000}
    >
      <NotistackHack />
    </SnackbarProvider>
  );
  const AppWrap = withRoot(NotifyWrap);
  ReactDOM.render(<AppWrap />, document.getElementById('root'));
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
// serviceWorker.register();
