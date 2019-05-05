const styles = theme => {
  return {
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    fab: {
      margin: theme.spacing.unit,
      position: 'fixed',
      bottom: theme.spacing.unit * 2,
      right: theme.spacing.unit * 2
    }
  };
};

export default styles;
