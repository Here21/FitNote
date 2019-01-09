import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import TrainingService from '../../service/TrainingService';
import ExpansionPanel from '../../components/ExpansionPanel';

class HomePage extends Component {
  componentDidMount() {
    TrainingService.getHistory().then(res => {
      console.log(res);
    });
  }

  render() {
    return (
      <div>
        <ExpansionPanel />
        <Button variant="contained">
          <Link to={'/actions'}>Link</Link>
        </Button>
        Hello Home {this.props.match.params.id}
      </div>
    );
  }
}

export default HomePage;
