const styles = theme => {
  return {
    processLine: {
      transition: '1s width'
    },
    goalLine: {
      background: theme.palette.primary.progress
    },
    extraLine: {
      background: theme.palette.secondary.light
    },
    progressBar: {
      display: 'flex',
      justifyContent: 'space-between',
      position: 'absolute',
      bottom: 0,
      height: '4px',
      width: '100%',
      margin: '0 -16px'
    }
  };
};

export default styles;
