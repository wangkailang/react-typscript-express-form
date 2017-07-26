// 声明window
// https://github.com/piotrwitek/react-redux-typescript-guide#create-store
declare const window: Window & { devToolsExtension: any, __REDUX_DEVTOOLS_EXTENSION__: any }; // eslint-disable-line
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import App from './App';
import { logger } from './middleware';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import '../src/style/bootstrap/css/bootstrap.min.css';

const store: any = createStore(
  rootReducer,
  compose(
    applyMiddleware(logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
