const styles = theme => {
  return {
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    message: {
      textAlign: 'center',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      margin: 'auto',
      lineHeight: '100vh'
    },
    button: {
      position: 'absolute',
      bottom: theme.spacing.unit * 2,
      right: theme.spacing.unit * 2
    },
    rightIcon: {
      marginLeft: theme.spacing.unit
    }
  };
};

export default styles;
