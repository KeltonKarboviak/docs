// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const SLACK_URL =
  "https://join.slack.com/t/commonfatecommunity/shared_invite/zt-q4m96ypu-_gYlRWD3k5rIsaSsqP7QMg";

const previousRoutes = [
  '/granted-approvals/configuration/access-rules',
  '/granted-approvals/configuration/backup',
  '/granted-approvals/configuration/custom-domain',
  '/granted-approvals/configuration/deployment-yaml',
  '/granted-approvals/configuration/events',
  '/granted-approvals/configuration/logs',
  '/granted-approvals/configuration/slack',
  '/granted-approvals/configuration/updating',
  '/granted-approvals/configuration/users-and-groups',
  '/granted-approvals/configuration/waf',
  '/granted-approvals/deploying-granted/deploying-granted',
  '/granted-approvals/deploying-granted/prerequisites',
  '/granted-approvals/deploying-granted/setup',
  '/granted-approvals/deploying-granted/deploying',
  '/granted-approvals/deploying-granted/next-steps',
  '/granted-approvals/end-users/end-users',
  '/granted-approvals/providers/access-providers',
  '/granted-approvals/providers/add-first-provider/requesting-access',
  '/granted-approvals/providers/add-first-provider/clean-up',
  '/granted-approvals/providers/interactive-setup',
  '/granted-approvals/providers/registry/provider-registry',
  '/granted-approvals/providers/registry/commonfate/aws-sso/v2',
  '/granted-approvals/providers/registry/commonfate/azure-ad/v1',
  '/granted-approvals/providers/registry/commonfate/ecs-exec-sso/v1-alpha1',
  '/granted-approvals/providers/registry/commonfate/okta/v1',
  '/granted-approvals/security-architecture',
  '/granted-approvals/sso/sso-setup',
  '/granted-approvals/sso/aws-sso',
  '/granted-approvals/sso/azure',
  '/granted-approvals/sso/google',
  '/granted-approvals/sso/okta',
  '/granted-approvals/sso/onelogin',
  '/granted-approvals/sso/updating-configuration',
  '/granted-approvals/troubleshooting/aws-credentials',
]

const newRoutes = previousRoutes.map(a => a.replace('/granted-approvals/', '/common-fate/'));

const rebrandRedirects = previousRoutes.map((r, i) => ({
  from: r,
  to: newRoutes[i],
}))


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Common Fate Documentation",
  staticDirectories: ["static"],
  tagline: "Identity-first cloud security for innovative teams",
  url: "https://docs.commonfate.io",
  baseUrl: "/",
  onBrokenLinks: "warn", // TODO: change to throw when launching
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "common-fate", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Bitter:wght@500&family=Rubik:wght@300;400;500",
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        path: "docs/granted",
        routeBasePath: "granted",
        sidebarPath: "./sidebars.granted.js",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "granted-approvals",
        path: "docs/common-fate",
        routeBasePath: "common-fate",
        sidebarPath: "./sidebars.approvals.js",
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        fromExtensions: ["html", "htm"], // /myPage.html -> /myPage
        redirects: [
          {
            from: "/granted",
            to: "/granted/introduction",
          },
          {
            from: "/granted-approvals",
            to: "/common-fate/introduction",
          },
          {
            from: "/common-fate",
            to: "/common-fate/introduction",
          },
          ...rebrandRedirects,
        ],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Docs",
        logo: {
          alt: "Common Fate",
          src: "img/logo.svg",
          href: "/granted/introduction",
        },
        style: "dark",
        items: [
          {
            type: "doc",
            docId: "introduction",
            position: "left",
            label: "Granted",
          },
          {
            docsPluginId: "granted-approvals",
            type: "doc",
            docId: "introduction",
            position: "left",
            label: "Common Fate",
          },
          {
            href: "https://granted.dev/cfcloud?ref=docs",
            label: "Common Fate Cloud",
            position: "left",
          },
          {
            href: "https://commonfate.io/blog",
            label: "Blog",
            position: "right",
          },
          {
            href: "https://github.com/common-fate",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Granted",
                to: "/granted/introduction",
              },
              {
                label: "Common Fate",
                to: "/granted-approvals/introduction",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Slack",
                href: SLACK_URL,
              },
              {
                label: "Twitter",
                href: "https://twitter.com/CommonFateTech",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                href: "https://commonfate.io/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/common-fate",
              },
              {
                label: "Telemetry",
                to: "/telemetry",
              },
              {
                label: "Privacy Policy",
                to: "/privacy-policy",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Common Fate.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
