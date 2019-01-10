import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import TrainingService from '../../service/TrainingService';
import ExpansionPanel from '../../components/ExpansionPanel';

class HomePage extends Component {
  state = {
    history: null
  };
  componentDidMount() {
    TrainingService.getHistory().then(res => {
      this.setState({
        history: res.data
      });
    });
  }

  render() {
    const { history } = this.state;
    return (
      <div>
        {history && <ExpansionPanel data={history} />}
        <Button variant="contained">
          <Link to={'/actions'}>Link</Link>
        </Button>
        Hello Home {this.props.match.params.id}
      </div>
    );
  }
}

export default HomePage;
