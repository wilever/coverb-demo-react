import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Resume from 'app/cover/resume/resume';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute path={`${match.url}`} component={Resume} />
    </Switch>
  </>
);

export default Routes;
