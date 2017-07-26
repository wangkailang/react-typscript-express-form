import * as React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import './style.css';

export default function Navigation() {
  return (
    <div className="Navigation">
      <Nav>
        <NavItem eventKey={1}>navItem 1</NavItem>
        <NavItem eventKey={2}>navItem 2</NavItem>
        <NavItem eventKey={3}>navItem 3</NavItem>
      </Nav>
    </div>
  )
}