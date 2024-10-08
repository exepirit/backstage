import {
  EntityDependsOnComponentsCard,
  EntityDependsOnResourcesCard,
  EntityLayout,
} from '@backstage/plugin-catalog';
import React from 'react';
import { OverviewWidget, techDocsContent } from '../widgets';
import { Grid } from '@material-ui/core';

export const websiteEntityPage = (
  <EntityLayout>
    <EntityLayout.Route path="/" title="Overview">
      <OverviewWidget />
    </EntityLayout.Route>

    <EntityLayout.Route path="/dependencies" title="Dependencies">
      <Grid container spacing={3} alignItems="stretch">
        <Grid item md={6}>
          <EntityDependsOnComponentsCard variant="gridItem" />
        </Grid>
        <Grid item md={6}>
          <EntityDependsOnResourcesCard variant="gridItem" />
        </Grid>
      </Grid>
    </EntityLayout.Route>

    <EntityLayout.Route path="/docs" title="Docs">
      {techDocsContent}
    </EntityLayout.Route>
  </EntityLayout>
);
