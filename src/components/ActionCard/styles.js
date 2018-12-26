const styles = theme => {
  return {
    container: {
      padding: theme.spacing.unit * 2,
      position: 'relative'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    iconButton: {
      margin: '-12px -12px 0 0px'
    },
    table: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    tableHeader: {
      minWidth: '50px',
      alignItems: 'flex-start'
    },
    col: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.palette.primary.light
    },
    processLine: {
      position: 'absolute',
      bottom: 0,
      background: '#5677FC',
      height: '4px',
      margin: '0 -16px'
    }
  };
};

export default styles;
