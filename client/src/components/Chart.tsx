/**
 * https://github.com/reactjs/react-chartjs/blob/master/lib/core.js
 * would be a good reference
 */
import * as React from 'react';
import * as ReactDOM from "react-dom";

// import * as Chartjs from 'chart.js';
const Chart = require('chart.js');
import * as lodash from 'lodash';

interface Props {
  data: object,
  options: object,
  width?: string,
  height?:string,
}
interface State {}

export default class BasicChart extends React.Component<Props, State> {
  private chart: any = null
  componentDidMount() {
    const { data, options } = this.props;
    const ctx =  ReactDOM.findDOMNode(this);
    this.chart = new Chart(ctx, {
      type: 'bar',
      data,
      options,
    });
  }
  componentWillUnmount() {
    const { chart } = this;
    if (chart) chart.destroy();
  }
  render() {
    const _props = {
      ref: 'canvas',
    };
    const excludedProps = ['data', 'options', 'redraw'];

    return React.createElement('canvas', lodash.merge(_props, lodash.omit(this.props, excludedProps)));
  }
}