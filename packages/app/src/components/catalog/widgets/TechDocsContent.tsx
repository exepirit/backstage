import { EntityTechdocsContent } from '@backstage/plugin-techdocs';
import { ReportIssue } from '@backstage/plugin-techdocs-module-addons-contrib';
import { TechDocsAddons } from '@backstage/plugin-techdocs-react';
import { Mermaid } from 'backstage-plugin-techdocs-addon-mermaid';
import React from 'react';

export const techDocsContent = (
  <EntityTechdocsContent>
    <TechDocsAddons>
      <ReportIssue />
      <Mermaid />
    </TechDocsAddons>
  </EntityTechdocsContent>
);
