import { EntityLayout } from '@backstage/plugin-catalog';
import React from 'react';
import { EntityWarningWidget, TechDocsContent } from '../widgets';

export const GenericEntityPage = () => (
  <EntityLayout>
    <EntityLayout.Route path="/" title="Overview">
      <EntityWarningWidget />
    </EntityLayout.Route>

    <EntityLayout.Route path="/docs" title="Docs">
      <TechDocsContent />
    </EntityLayout.Route>
  </EntityLayout>
);
