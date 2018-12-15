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
  message(message) {
    this._enqueueSnackbar
      ? this._enqueueSnackbar(message, { ...this.option, variant: 'default' })
      : console.log('wait for init');
  }
  success(message) {
    this._enqueueSnackbar(message, { ...this.option, variant: 'success' });
  }
  warning(message) {
    this._enqueueSnackbar(message, { ...this.option, variant: 'warning' });
  }
  error(message) {
    this._enqueueSnackbar(message, { ...this.option, variant: 'error' });
  }
  info(message) {
    this._enqueueSnackbar(message, { ...this.option, variant: 'info' });
  }
}

export default new Notify();
