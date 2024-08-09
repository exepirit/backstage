import { EntitySwitch, isComponentType } from '@backstage/plugin-catalog';
import React from 'react';
import { serviceEntityPage } from './ServiceEntityPage';
import { genericEntityPage } from './GenericEntityPage';
import { websiteEntityPage } from './WebsiteEntityPage';

export const componentEntityPage = (
  <EntitySwitch>
    <EntitySwitch.Case if={isComponentType('service')}>
      {serviceEntityPage}
    </EntitySwitch.Case>

    <EntitySwitch.Case if={isComponentType('website')}>
      {websiteEntityPage}
    </EntitySwitch.Case>

    <EntitySwitch.Case>{genericEntityPage}</EntitySwitch.Case>
  </EntitySwitch>
);
