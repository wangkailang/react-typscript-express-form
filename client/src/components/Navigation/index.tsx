import * as React from 'react';
import { NavLink } from 'react-router-dom';
import navItemArray from '../../constants/routes';
import './style.css';
import { connect } from 'react-redux';
import { StoreState } from '../../types/index';
import { Glyphicon } from 'react-bootstrap';

const connector: any = connect(
  (props: StoreState) => {  // mapStateToProps
    return {
      toggleState: props.toggleState,
    };
  },
)

function NavItemText(props: NavItemProps, key: number) {
  const { title, path, toggleState } = props;
  return (
    <div className="Navigation__item" key={key}>
      <NavLink 
        to={path}
        className="Navigation__link"
        activeClassName="Navigation__link--active"
      >
        <Glyphicon glyph="star"/>
        {toggleState ? '' : <span className="Navigation__item__title">{title}</span>}
      </NavLink>
    </div>
  );
}

function Navigation(props: StoreState) {
  return (
    <div className="Navigation">
      <nav>
        {navItemArray.map((navItem: NavItemProps, key: number) => <NavItemText key={key} {...navItem} {...props}/>)}
      </nav>
    </div>
  );
}

export default connector(Navigation);