import 'app/cover/default/default.css';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Translate } from 'react-jhipster';
import { Row, Col } from 'reactstrap';
import { faFacebook } from '../../../static/icon/faFacebook';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faFacebook);

export class Default extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <h1>
            <Translate contentKey="default.title">What is coverb?</Translate>
          </h1>
          <p>
            <Translate contentKey="default.description">It is a page generator for jhipster application</Translate>
          </p>
        </div>
        <div className="container-fluid text-center">
          <h2>
            <Translate contentKey="default.feature.title">Features</Translate>
          </h2>
          <p>
            <Translate contentKey="default.feature.description">What we offer?</Translate>
          </p>
          <br />
          <Row>
            <Col sm="4">
              <FontAwesomeIcon icon="magic" />
              <h4>Easy generator</h4>
              <p>Add pages to your app</p>
            </Col>
            <Col sm="4">
              <FontAwesomeIcon icon="home" />
              <h4>css/sass support</h4>
              <p>Switch between them based on your app configuration</p>
            </Col>
            <Col sm="4">
              <FontAwesomeIcon icon="language" />
              <h4>i18n support</h4>
              <p>Autogenerate i18n files</p>
            </Col>
          </Row>
          <Row>
            <Col sm="4">
              <FontAwesomeIcon icon="lock-open" />
              <h4>Full API access</h4>
              <p>Feel the coverb power</p>
            </Col>
            <Col sm="4">
              <FontAwesomeIcon icon="palette" />
              <h4>Full Customization</h4>
              <p>Add your own cover to this project</p>
            </Col>
            <Col sm="4">
              <FontAwesomeIcon icon="key" />
              <h4>Tool independent</h4>
              <p>You can add whatever library that you need</p>
            </Col>
          </Row>
        </div>
        <div className="container-fluid text-center bg-gray">
          <h2>
            <Translate contentKey="default.portafolio.title">Portafolio</Translate>
          </h2>
          <p>
            <Translate contentKey="default.portafolio.description">What did we already created?</Translate>
          </p>
          <br />
          <Row>
            <Col sm="6">
              <div className="thumbnail">
                <span id="resume" />
                <p>
                  <strong>Resume</strong>
                </p>
                <p>Show your self to recruiters</p>
              </div>
            </Col>
            <Col sm="6">
              <div className="thumbnail">
                <span id="company1" />
                <br />
                <p>
                  <strong>Company</strong>
                </p>
                <p>Show your company to clients</p>
              </div>
            </Col>
          </Row>
        </div>
        <footer className="container-fluid text-center bg-gray">
          <Row className="text-center rrss">
            <Col sm="4">
              <h5>
                <FontAwesomeIcon icon="home" />
                @jhipster-latino
              </h5>
            </Col>
            <Col sm="4">
              <h5>
                <FontAwesomeIcon icon={['fab', 'facebook']} />
                @jhipster-latino
              </h5>
            </Col>
            <Col sm="4">
              <h5>
                <FontAwesomeIcon icon="home" />
                @jhipster_latino
              </h5>
            </Col>
          </Row>
        </footer>
      </div>
    );
  }
}

export default Default;
