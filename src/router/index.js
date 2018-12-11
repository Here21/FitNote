import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// import Home from "../containers/Home/Home.js";
// import Actions from "../pages/Actions/Actions.js";
import BaseLayout from '../layout/BaseLayout';
import UserLayout from '../layout/UserLayout';

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
export default class RouteConfig extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={UserLayout} />
          <Route path="/" component={BaseLayout} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}
