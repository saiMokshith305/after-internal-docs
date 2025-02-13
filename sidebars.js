// sidebars.js
module.exports = {
    docs: [
      {
        type: 'doc',
        id: 'introduction', // docs/introduction.md
        label: 'Introduction',
      },
      {
        type: 'doc',
        id: 'system-overview',
        label: 'System Overview',
      },
      {
        type: 'category',
        label: 'Components',
        items: [
          'workflow-and-automations',
          'squarespace',
          'make',
          'campaign-monitor',
        ],
      },
      {
        type: 'category',
        label: 'Workflow and Automations',
        items: [
          'how-to-modify-or-add-automations',
          'how-to-add-a-new-field-to-google-sheet-and-update-make-campaign-monitor',
          'how-to-modify-email-automation',
          'how-to-modify-collection-date',
          'how-to-adjust-email-automation-delay',
        ],
      },
      {
        type: 'doc',
        id: 'maintenance',
        label: 'Maintenance',
      },
      {
        type: 'doc',
        id: 'troubleshooting',
        label: 'Troubleshooting',
      },
      {
        type: 'doc',
        id: 'appendix',
        label: 'Appendix',
      },
    ],
  };
  