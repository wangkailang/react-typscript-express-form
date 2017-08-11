/**
 * use stateless component-SFC
 * stateless component boilerplate
 * convenient alias: ` React.SFC<Props> === React.StalelessComponent<Props> `
 */
import * as React from 'react';
// import * as Chart from 'chart.js';
import { Panel } from 'react-bootstrap';
import BaiscChart from '../../components/Chart';

type Props = {
  className?: string,
  style?: React.CSSProperties,
}

const data: object = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [{
    label: '# of Votes',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
  }]
};
const options: object = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  }
}

const ChartComponent: React.SFC<Props> = (props) => {
  const { children, ...restProps } = props;
  return (
    <div {...restProps}>
      <Panel header="charts">
        <BaiscChart data={data} options={options}/>
      </Panel>
      {children}
    </div>
  )
}

export default ChartComponent;