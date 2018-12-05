const styles = theme => {
  return {
    container: {

    },
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit,
      marginBottom: theme.spacing.unit * 2,
      display: 'flex',
      maxWidth: '400px',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    fab: {
      margin: theme.spacing.unit,
      position: 'fixed',
      bottom: theme.spacing.unit * 2,
      right: theme.spacing.unit * 2
    },
  }};

export default styles;