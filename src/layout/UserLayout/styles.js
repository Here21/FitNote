const styles = theme => {
  return {
    container: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    header: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    logo: {
      width: '90px',
      height: '90px',
      objectFit: 'contain'
    },
    title: {
      marginBottom: 0,
      marginLeft: theme.spacing.unit * 2
    },
    content: {
      padding: theme.spacing.unit * 2,
      margin: theme.spacing.unit * 2,
      display: 'flex',
      maxWidth: '400px',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    buttonGroup: {
      display: 'flex',
      justifyContent: 'center'
    },
    button: {
      marginLeft: theme.spacing.unit * 2,
      marginTop: theme.spacing.unit * 2
    },
    select: {
      minWidth: '100px',
      maxWidth: '180px'
    },
    recordRow: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginTop: theme.spacing.unit * 2
    }
  };
};

export default styles;
