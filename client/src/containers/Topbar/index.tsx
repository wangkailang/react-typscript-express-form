import * as React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import * as  toggleActions from '../../actions/toggle';
import { connect, Dispatch } from 'react-redux';
import { StoreState } from '../../types/index';

const connector: any = connect(
  (props: StoreState) => {  // mapStateToProps
    return {
      toggleState: props.toggleState,
    };
  },
  (dispatch: Dispatch<toggleActions.Toggle>) => {  // mapDispatchToProps
    return {
      toggle: () => dispatch(toggleActions.toggle()),
    }
  }
)

interface Props {
  toggleState: boolean,
  toggle: () => boolean,
}

const Topbar: React.SFC<Props> = (props) => {
  const handleSelect = (eventKey: any): void => {
    switch (eventKey) {
      case 'toggle':
        props.toggle();
        break;
      default:
    }
  }
  return (
    <Navbar>
      <Nav onSelect={handleSelect}>
        <NavItem eventKey="toggle">{props.toggleState ? '开' : '关'}</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.4}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
  )
}

export default connector(Topbar);