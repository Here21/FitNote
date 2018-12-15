class Notify {
  constructor() {
    this.option = {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
      }
    };
    this._enqueueSnackbar = null;
  }
  init(enqueueSnackbar) {
    if (!this._enqueueSnackbar) {
      this._enqueueSnackbar = enqueueSnackbar;
    }
  }
  _handler(message, variant = 'default') {
    this._enqueueSnackbar
      ? this._enqueueSnackbar(message, { ...this.option, variant })
      : console.log('wait for init');
  }
  message(message) {
    this._handler(message);
  }
  success(message) {
    this._handler(message, 'success');
  }
  warning(message) {
    this._handler(message, 'warning');
  }
  error(message) {
    this._handler(message, 'error');
  }
  info(message) {
    this._handler(message, 'info');
  }
}

export default new Notify();
