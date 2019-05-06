const styles = theme => {
  return {
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    paperRoot: {
      width: '100%',
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2
    }
  };
};

export default styles;
