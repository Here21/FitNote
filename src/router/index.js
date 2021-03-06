import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import BaseLayout from '../layout/BaseLayout';
import UserLayout from '../layout/UserLayout';
import NotFound from '../layout/NotFound';

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
export default class RouteConfig extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={UserLayout} />
          <Route path="/404" component={NotFound} />
          <Route path="/" component={BaseLayout} />
        </Switch>
      </BrowserRouter>
    );
  }
}
