import * as React from 'react';
import Navigtion from '../../components/Navigation';
import ResourcePage from '../ResourcePage';
import './style.css';

export default function Dashboard(props: any) {
  return (
    <div className="Dashboard">
      <div className="Dashboard__sidebar">
        <Navigtion/>
      </div>
      <div className="Dashboard__main">
        <ResourcePage pathname={props.location.pathname}/>
      </div>
    </div>
  );
}