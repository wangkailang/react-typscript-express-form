// 声明window
// https://github.com/piotrwitek/react-redux-typescript-guide#create-store
declare const window: Window & { devToolsExtension: any, __REDUX_DEVTOOLS_EXTENSION__: any };
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { age } from './reducers/index';
import { StoreState } from './types/index';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore<StoreState>(
  age,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
