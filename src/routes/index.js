import React from 'react'
import { Router, Route, IndexRoute, hashHistory/* , Redirect */ } from 'react-router'

import base from '@pages/base' // 基础
import designer from '@pages/designer' // 设计器
import preview from '@pages/preview' // 预览页

export default ()=>  {
  <Router history={hashHistory}>
    <Route path="/" component={base.app} onEnter={isLogin}>
      <IndexRoute component={designer} />
    </Route>
    <Route path="*" component={base.notfound} />
  </Router>
}