import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/company-docs/__docusaurus/debug',
    component: ComponentCreator('/company-docs/__docusaurus/debug', '9ba'),
    exact: true
  },
  {
    path: '/company-docs/__docusaurus/debug/config',
    component: ComponentCreator('/company-docs/__docusaurus/debug/config', '31c'),
    exact: true
  },
  {
    path: '/company-docs/__docusaurus/debug/content',
    component: ComponentCreator('/company-docs/__docusaurus/debug/content', '0b8'),
    exact: true
  },
  {
    path: '/company-docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/company-docs/__docusaurus/debug/globalData', '055'),
    exact: true
  },
  {
    path: '/company-docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/company-docs/__docusaurus/debug/metadata', 'c33'),
    exact: true
  },
  {
    path: '/company-docs/__docusaurus/debug/registry',
    component: ComponentCreator('/company-docs/__docusaurus/debug/registry', '08b'),
    exact: true
  },
  {
    path: '/company-docs/__docusaurus/debug/routes',
    component: ComponentCreator('/company-docs/__docusaurus/debug/routes', 'f05'),
    exact: true
  },
  {
    path: '/company-docs/',
    component: ComponentCreator('/company-docs/', '1c5'),
    routes: [
      {
        path: '/company-docs/',
        component: ComponentCreator('/company-docs/', '906'),
        routes: [
          {
            path: '/company-docs/',
            component: ComponentCreator('/company-docs/', 'd97'),
            routes: [
              {
                path: '/company-docs/appendix',
                component: ComponentCreator('/company-docs/appendix', '5ac'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/company-docs/campaign-monitor',
                component: ComponentCreator('/company-docs/campaign-monitor', 'fb8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/company-docs/how-to-add-a-new-field-to-google-sheet-and-update-make-campaign-monitor',
                component: ComponentCreator('/company-docs/how-to-add-a-new-field-to-google-sheet-and-update-make-campaign-monitor', 'f3a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/company-docs/how-to-adjust-email-automation-delay',
                component: ComponentCreator('/company-docs/how-to-adjust-email-automation-delay', '390'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/company-docs/how-to-modify-collection-date',
                component: ComponentCreator('/company-docs/how-to-modify-collection-date', '18d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/company-docs/how-to-modify-email-automation',
                component: ComponentCreator('/company-docs/how-to-modify-email-automation', '0c4'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/company-docs/how-to-modify-or-add-automations',
                component: ComponentCreator('/company-docs/how-to-modify-or-add-automations', '270'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/company-docs/introduction',
                component: ComponentCreator('/company-docs/introduction', '487'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/company-docs/maintenance',
                component: ComponentCreator('/company-docs/maintenance', 'fa4'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/company-docs/make',
                component: ComponentCreator('/company-docs/make', 'd8a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/company-docs/squarespace',
                component: ComponentCreator('/company-docs/squarespace', 'cf7'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/company-docs/system-overview',
                component: ComponentCreator('/company-docs/system-overview', 'bf9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/company-docs/troubleshooting',
                component: ComponentCreator('/company-docs/troubleshooting', '8d6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/company-docs/workflow-and-automations',
                component: ComponentCreator('/company-docs/workflow-and-automations', '8a3'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
