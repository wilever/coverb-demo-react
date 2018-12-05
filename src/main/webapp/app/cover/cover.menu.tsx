import React from 'react';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from 'app/shared/layout/header/header-components';

export const CoverMenu = props => (
  // tslint:disable-next-line:jsx-self-close
  <NavDropdown icon="th-list" name="Cover" id="entity-menu">
    <DropdownItem tag={Link} to="/cover/default">
      <FontAwesomeIcon icon="asterisk" />
      &nbsp;Default
    </DropdownItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
