import * as React from 'react';
import UI from '../UI';
import Table from '../Table';
import Form from '../Form';
import Chart from '../Chart';
import './style.css';


const resourceMap: object = {
  ui: UI,
  table: Table,
  form: Form,
  chart: Chart,
  default: () => <div>default</div>
};

export default function ResourcePage(props: { pathname: string }) {
  const { pathname } = props;
  const Component = resourceMap[pathname.split('/')[2] || 'default'] ;
  return (
    <div className="ResourcePage">
      <Component/>
    </div>
  );
}