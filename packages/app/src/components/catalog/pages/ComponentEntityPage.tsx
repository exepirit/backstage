import { EntitySwitch, isComponentType } from '@backstage/plugin-catalog';
import React from 'react';
import { ServiceEntityPage } from './ServiceEntityPage';
import { GenericEntityPage } from './GenericEntityPage';
import { WebsiteEntityPage } from './WebsiteEntityPage';

export const ComponentEntityPage = () => (
  <EntitySwitch>
    <EntitySwitch.Case if={isComponentType('service')}>
      <ServiceEntityPage />
    </EntitySwitch.Case>

    <EntitySwitch.Case if={isComponentType('website')}>
      <WebsiteEntityPage />
    </EntitySwitch.Case>

    <EntitySwitch.Case>
      <GenericEntityPage />
    </EntitySwitch.Case>
  </EntitySwitch>
);
