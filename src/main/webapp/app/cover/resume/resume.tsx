import 'app/cover/resume/resume.css';

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Translate } from 'react-jhipster';
import { Row, Col } from 'reactstrap';

import { faInstagram } from '../../../static/icon/brand/faInstagram';
import { faSass } from '../../../static/icon/brand/faSass';
import { faTwitter } from '../../../static/icon/brand/faTwitter';
import { faGithub } from '../../../static/icon/brand/faGithub';
import { faLinkedin } from '../../../static/icon/brand/faLinkedin';

import { faBaseballBall } from '../../../static/icon/solid/faBaseballBall';
import { faBicycle } from '../../../static/icon/solid/faBicycle';
import { faBookReader } from '../../../static/icon/solid/faBookReader';
import { faCamera } from '../../../static/icon/solid/faCamera';
import { faCode } from '../../../static/icon/solid/faCode';
import { faDumbbell } from '../../../static/icon/solid/faDumbbell';
import { faEnvelope } from '../../../static/icon/solid/faEnvelope';
import { faGamepad } from '../../../static/icon/solid/faGamepad';
import { faGraduationCap } from '../../../static/icon/solid/faGraduationCap';
import { faGrinBeam } from '../../../static/icon/solid/faGrinBeam';
import { faHandshake } from '../../../static/icon/solid/faHandshake';
import { faHeadset } from '../../../static/icon/solid/faHeadset';
import { faHome } from '../../../static/icon/solid/faHome';
import { faImage } from '../../../static/icon/solid/faImage';
import { faKeyboard } from '../../../static/icon/solid/faKeyboard';
import { faLanguage } from '../../../static/icon/solid/faLanguage';
import { faMusic } from '../../../static/icon/solid/faMusic';
import { faPalette } from '../../../static/icon/solid/faPalette';
import { faPhone } from '../../../static/icon/solid/faPhone';
import { faSwimmer } from '../../../static/icon/solid/faSwimmer';
import { faTheaterMasks } from '../../../static/icon/solid/faTheaterMasks';
import { faTicketAlt } from '../../../static/icon/solid/faTicketAlt';

import { library } from '@fortawesome/fontawesome-svg-core';

library.add(
  faInstagram,
  faSass,
  faTwitter,
  faGithub,
  faLinkedin,
  faBaseballBall,
  faBicycle,
  faBookReader,
  faCamera,
  faCode,
  faDumbbell,
  faEnvelope,
  faGamepad,
  faGraduationCap,
  faGrinBeam,
  faHandshake,
  faHeadset,
  faHome,
  faImage,
  faKeyboard,
  faLanguage,
  faMusic,
  faPalette,
  faPhone,
  faSwimmer,
  faTheaterMasks,
  faTicketAlt
);

export class Resume extends Component {
  render() {
    return (
      <div>
        <div className="principal container-fluid">
          <Row>
            {/* My personal data*/}
            <Col md="4" className="text-center bg-blue">
              <span id="logo" />
              <h2>Jhipster Generator</h2>
              <h3>
                <strong>
                  <Translate contentKey="resume.professional.title">Web developer</Translate>
                </strong>
              </h3>
              <hr />
              {/* About me*/}
              <h3>
                <Translate contentKey="resume.about-me.title">About me</Translate>
              </h3>
              <hr />
              <p className="text-justify">
                <Translate contentKey="resume.about-me.content">about me content</Translate>
              </p>
              <hr />
              {/* My profile on web*/}
              <h4>
                <Translate contentKey="resume.rrss.title">RRSS</Translate>
              </h4>
              <hr />
              <FontAwesomeIcon icon={['fab', 'github']} className="icon" />
              <h5>@jhipster</h5>
              <FontAwesomeIcon icon={['fab', 'twitter']} className="icon" />
              <h5>@java_hipster</h5>
              <FontAwesomeIcon icon={['fab', 'linkedin']} className="icon" />
              <h5>jhipster-generator</h5>
              <hr />
              {/* My contact info*/}
              <h4>
                <Translate contentKey="resume.contact.title">Contact</Translate>
              </h4>
              <hr />
              <FontAwesomeIcon icon="home" className="icon" />
              <h5>Paris, France</h5>
              <FontAwesomeIcon icon="phone" className="icon" />
              <h5>+xx-xxx-xxxxxx</h5>
              <FontAwesomeIcon icon="envelope" className="icon" />
              <h5>contact@jhipster.tech</h5>
            </Col>
            {/* Professional data*/}
            <Col md="8" className="text-center content">
              <hr />
              {/* My formation*/}
              <h1>
                <FontAwesomeIcon icon="graduation-cap" className="icon" />
                <Translate contentKey="resume.formation.title">Formation</Translate>
              </h1>
              <hr />
              <h3>Full stack developer</h3>
              <p>
                <em>University, Paris, France</em>
              </p>
              <h3>Master Web design</h3>
              <p>
                <em>University, Paris, France</em>
              </p>
              <hr />
              {/* My experience*/}
              <h1>
                <FontAwesomeIcon icon="handshake" className="icon" />
                <Translate contentKey="resume.experience.title">Experience</Translate>
              </h1>
              <hr />
              <h3>Senior Full stack developer</h3>
              <p>
                <em>Company (2016 - present)</em>
              </p>
              <p>Design, develop and deploy web aplications with Angular and Spring boot.</p>
              <h3>Semi-senior Frontend developer</h3>
              <p>
                <em>Company (2013 - 2016)</em>
              </p>
              <p>Design, develop and deploy client with Angular</p>
              <h3>Junior Backend developer</h3>
              <p>
                <em>Company (2011 - 2013)</em>
              </p>
              <p>Design, develop and deploy restfull api with Spring boot</p>
              <hr />
              {/* My habilities */}
              <h1>
                <FontAwesomeIcon icon="code" className="icon" />
                <Translate contentKey="resume.habilities.title">Habilities</Translate>
              </h1>
              <hr />
              <Row>
                <Col md="12" className="text-center logo-img">
                  <h3>Client Side</h3>
                  <span id="html5" />
                  <span id="css3" />
                  <span id="bootstrap" />
                  <span id="typescript" />
                  <span id="angular" />
                  <span id="react" />
                  <span id="webpack" />
                  <span id="sass" />
                </Col>
              </Row>
              <Row>
                <Col md="12" className="text-center logo-img">
                  <h3>Server Side</h3>
                  <span id="spring" />
                  <span id="netflix" />
                  <span id="gradle" />
                  <span id="maven" />
                  <span id="hibernate" />
                  <span id="swagger" />
                  <span id="gatling" />
                  <span id="cucumber" />
                </Col>
              </Row>
              <Row>
                <Col md="12" className="text-center logo-img">
                  <h3>CI/CD</h3>
                  <span id="jenkins" />
                  <span id="travis" />
                  <span id="gitlab" />
                  <span id="circleci" />
                </Col>
              </Row>
              <Row>
                <Col md="6" className="text-center">
                  <hr />
                  {/* My languages */}
                  <h1>
                    <FontAwesomeIcon icon="language" className="icon" />
                    <Translate contentKey="resume.languages.title">Languages</Translate>
                  </h1>
                  <hr />
                  <Row>
                    <Col md="6" className="text-center">
                      <h3>English</h3>
                    </Col>
                    <Col md="6" className="text-center">
                      <FontAwesomeIcon icon="keyboard" className="icon" />
                      <FontAwesomeIcon icon="headset" className="icon" />
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6" className="text-center">
                      <h3>Spanish</h3>
                    </Col>
                    <Col md="6" className="text-center">
                      <FontAwesomeIcon icon="keyboard" className="icon" />
                    </Col>
                  </Row>
                </Col>
                <Col md="6" className="text-center">
                  <hr />
                  {/* Hobbies */}
                  <h1>
                    <FontAwesomeIcon icon="grin-beam" className="icon" />
                    <Translate contentKey="resume.hobbie.title">Hobbies</Translate>
                  </h1>
                  <hr />
                  <FontAwesomeIcon icon="baseball-ball" className="icon" />
                  <FontAwesomeIcon icon="bicycle" className="icon" />
                  <FontAwesomeIcon icon="book-reader" className="icon" />
                  <FontAwesomeIcon icon="camera" className="icon" />
                  <FontAwesomeIcon icon="dumbbell" className="icon" />
                  <FontAwesomeIcon icon="image" className="icon" />
                  <FontAwesomeIcon icon="ticket-alt" className="icon" />
                  <FontAwesomeIcon icon="theater-masks" className="icon" />
                  <FontAwesomeIcon icon="swimmer" className="icon" />
                  <FontAwesomeIcon icon="palette" className="icon" />
                  <FontAwesomeIcon icon="music" className="icon" />
                  <FontAwesomeIcon icon="gamepad" className="icon" />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <footer className="container-fluid text-center bg-gray">
          <Row className="text-center rrss">
            <Col sm="4">
              <h5>
                <FontAwesomeIcon icon={['fab', 'github']} className="icon" />
                @jhipster-latino
              </h5>
            </Col>
            <Col sm="4">
              <h5>
                <FontAwesomeIcon icon={['fab', 'twitter']} className="icon" />
                @jhipster-latino
              </h5>
            </Col>
            <Col sm="4">
              <h5>
                <FontAwesomeIcon icon={['fab', 'instagram']} className="icon" />
                @jhipster_latino
              </h5>
            </Col>
          </Row>
        </footer>
      </div>
    );
  }
}

export default Resume;
