// docusaurus.config.js
module.exports = {
    title: 'Company Documentation',
    tagline: 'Internal Docs for [Your Company Name]',
    url: 'https://your-github-username.github.io',
    baseUrl: '/company-docs/', // Adjust if using a subdirectory on GitHub Pages
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico', // Add your favicon under /static/img/ or adjust path
    organizationName: 'your-github-username', // GitHub org/user name
    projectName: 'company-docs', // Repository name
    presets: [
      [
        '@docusaurus/preset-classic',
        {
          docs: {
            routeBasePath: '/', 
            sidebarPath: require.resolve('./sidebars.js'),
            // Uncomment and adjust if you want an "Edit this page" link:
            // editUrl: 'https://github.com/your-github-username/company-docs/edit/main/',
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        },
      ],
    ],
  };
  