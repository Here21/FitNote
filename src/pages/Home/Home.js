import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        Hello Home {this.props.match.params.id}
      </div>
    );
  }
}

export default Home;
