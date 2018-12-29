const styles = theme => {
  return {
    container: {
      flexGrow: 1,
      padding: theme.spacing.unit,
      marginBottom: theme.spacing.unit,
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      display: 'flex',
      maxWidth: '400px',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    cleanMargin: {
      marginBottom: theme.spacing.unit * 2,
      marginLeft: 0,
      marginRight: 0
    }
  };
};

export default styles;
