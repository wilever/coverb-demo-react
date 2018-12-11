import React from 'react';
import { Switch } from 'react-router-dom';

// tslint:disable-next-line:no-unused-variable
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import { Default } from 'app/cover/default/default';
import { Resume } from 'app/cover/resume/resume';
import { Company } from 'app/cover/company/company';
/* jhipster-needle-add-route-import - JHipster will add routes here */

const Routes = ({ match }) => (
  <div>
    <Switch>
      {/* prettier-ignore */}
      <ErrorBoundaryRoute path={`${match.url}/default`} component={Default} />
      <ErrorBoundaryRoute path={`${match.url}/resume`} component={Resume} />
      <ErrorBoundaryRoute path={`${match.url}/company`} component={Company} />
      {/* jhipster-needle-add-route-path - JHipster will routes here */}
    </Switch>
  </div>
);

export default Routes;
