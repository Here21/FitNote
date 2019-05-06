const styles = theme => {
  return {
    container: {
      marginTop: theme.spacing.unit,
      marginBottom: theme.spacing.unit,
      maxWidth: '400px',
      width: '100%'
    },
    headerRoot: {
      paddingTop: theme.spacing.unit,
      paddingBottom: theme.spacing.unit
    },
    contentRoot: {
      padding: '0 16px',
      maxHeight: '28px'
    },
    actionsRoot: {
      justifyContent: 'flex-end'
    }
  };
};

export default styles;
