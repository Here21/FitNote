import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Button variant="contained">
          <Link to={'/actions'}>Link</Link>
        </Button>
        Hello Home {this.props.match.params.id}
      </div>
    );
  }
}

export default HomePage;
