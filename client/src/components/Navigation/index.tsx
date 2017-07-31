import * as React from 'react';
// import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import navItemArray from '../../constants/routes';
import './style.css';

function NavItemText(props: NavItemProps, key: number) {
  const { title, path } = props;
  return (
    <div className="Navigation__item" key={key}>
      <NavLink 
        to={path}
        className="Navigation__link"
        activeClassName="Navigation__link--active"
      >
        <span className="Navigation__item__title">{title}</span>
      </NavLink>
    </div>
  );
}

export default function Navigation() {
  return (
    <div className="Navigation">
      <nav>
        {navItemArray.map((navItem: NavItemProps, key: number) => NavItemText(navItem, key))}
      </nav>
    </div>
  );
}