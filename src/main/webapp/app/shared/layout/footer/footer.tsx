import './footer.scss';

import React from 'react';
import { Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = props => (
  <footer className="container-fluid text-center bg-gray">
    <Row className="text-center">
      <Col sm="4">
        <FontAwesomeIcon icon={['fab', 'github']} className="icon" />
        <h5>@jhipster-latino</h5>
      </Col>
      <Col sm="4">
        <FontAwesomeIcon icon={['fab', 'twitter']} className="icon" />
        <h5>@jhipster-latino</h5>
      </Col>
      <Col sm="4">
        <FontAwesomeIcon icon={['fab', 'instagram']} className="icon" />
        <h5>@jhipster_latino</h5>
      </Col>
    </Row>
  </footer>
);

export default Footer;
