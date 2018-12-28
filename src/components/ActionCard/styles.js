const styles = theme => {
  return {
    container: {
      flexGrow: 1,
      padding: theme.spacing.unit,
      marginBottom: theme.spacing.unit * 2,
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      display: 'flex',
      maxWidth: '400px',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  };
};

export default styles;
