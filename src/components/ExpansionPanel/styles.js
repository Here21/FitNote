const styles = theme => ({
  container: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  }
});

export default styles;
