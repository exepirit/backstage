import { EntityLayout } from '@backstage/plugin-catalog';
import React from 'react';
import { EntityWarningWidget, techDocsContent } from '../widgets';

export const genericEntityPage = (
  <EntityLayout>
    <EntityLayout.Route path="/" title="Overview">
      <EntityWarningWidget />
    </EntityLayout.Route>

    <EntityLayout.Route path="/docs" title="Docs">
      {techDocsContent}
    </EntityLayout.Route>
  </EntityLayout>
);
