import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
class BaseLayout extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/home/1">Home1</Link>
          </li>
          <li>
            <Link to="/home/2">Home2</Link>
          </li>
          <li>
            <Link to="/actions">Actions</Link>
          </li>
        </ul>
        Hello 222
        <Switch>
          <Route path={'/home/:id'} component={Home} />
          <Route path={'/home/:id'} component={Home} />
        </Switch>
      </div>
    );
  }
}

export default BaseLayout;
