import './home.scss';

import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

import { getSession } from 'app/shared/reducers/authentication';

export interface IHomeProp extends StateProps, DispatchProps {}

export class Home extends React.Component<IHomeProp> {
  render() {
    return (
      <Row>
        <Col md="8">
          <a href="https://github.com/jhipster-latino/generator-jhipster-coverb">
            <span className="coverb" />
          </a>
        </Col>
        <Col md="4">
          <a href="https://coverb-demo-angular.herokuapp.com/">
            <span className="angular" />
          </a>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated
});

const mapDispatchToProps = { getSession };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
