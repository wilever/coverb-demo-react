import './footer.scss';

import React from 'react';
import { Translate } from 'react-jhipster';
import { Col, Row } from 'reactstrap';

const Footer = props => (
  <div className="footer text-center strong">
    <Row>
      <Col md="12">
        <em>
          <p>
            <Translate contentKey="footer">Your footer</Translate>
          </p>
        </em>
      </Col>
    </Row>
  </div>
);

export default Footer;
