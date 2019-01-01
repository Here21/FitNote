const styles = theme => {
  return {
    container: {
      width: '100%',
      padding: theme.spacing.unit * 2,
      position: 'relative',
      marginBottom: theme.spacing.unit * 2
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
