import * as React from 'react';
import Navigtion from '../../components/Navigation';
import ResourcePage from '../ResourcePage';
import Topbar from '../Topbar';
import './style.css';
import { connect } from 'react-redux';
import { StoreState } from '../../types/index';
const connector: any = connect(
  (props: StoreState) => {  // mapStateToProps
    return {
      toggleState: props.toggleState,
    };
  },
)

function Dashboard(props: any) {
  const { toggleState } = props;
  return (
    <div className="Dashboard">
      <div className={`Dashboard__sidebar Dashboard__sidebar--${toggleState ? 'close' : 'open'}`}>
        <Navigtion/>
      </div>
      <div className="Dashboard__main">
        <Topbar/>
        <ResourcePage pathname={props.location.pathname}/>
      </div>
    </div>
  );
}

export default connector(Dashboard)