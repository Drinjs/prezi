import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader/root'
import Routes from './routes'
import configure from '@middleware/configureStore'

const HotRoutes = hot(Routes)
const store = configure({ })
ReactDOM.render(
  <Provider store={store}>
    <HotRoutes />
  </Provider>,
  document.getElementById('root'),
)
