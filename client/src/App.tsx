import * as React from 'react';
import './App.css';
import Hello from './containers/Hello';
import * as lodash from 'lodash';

import 'whatwg-fetch';

const logo = require('./logo.svg');

// fetch example
// fetch('/api/hello').then(res => res.json()).then(json => {
//   console.log('parsed', json);
// }).catch(ex => {
//   throw new Error(ex);
// });
// async await
// async function fetchApi(url: string) {
//   const datas = await fetch(url).then(res => res.json());;
//   console.log('datas', datas);
// }
// fetchApi('/api/hello');
// interface AppProps {}
interface AppState {
  datas: object;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      datas: {},
    };
    this.fetchData = this.fetchData.bind(this);
  }
  componentDidMount() {
    this.fetchData('/api/hello');
  }
  render() {
    const { datas } = this.state;
    if (!lodash.keys(datas).length) {
      return null;
    }
      
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <Hello />
        </div>
        <p className="App-intro">
          hello
          {' '}
          {lodash.get(datas, 'data.name') || lodash.get(datas, 'error')}
        </p>
      </div>
    );
  }
  private async fetchData(url: string) {
    const datas = await fetch(url).then(res => res.json()).catch(() => ({
      error: 'something error',
    }));
    console.log('--', this);
    this.setState({ datas });
  }
}

export default App;
