---
slug: sso-setup
---

# Single Sign On

In this guide, you'll use the `gdeploy` CLI to enable Single Sign On (SSO) for your Common Fate deployment. SSO with Common Fate consists of two components:

1. Team members use their corporate credentials to authenticate to Common Fate. This is achieved using the [SAML2.0](https://en.wikipedia.org/wiki/SAML_2.0) protocol.

2. Users and groups from your corporate identity provider are synchronised with Common Fate. This allows you to define access rules which reference your corporate groups, and use your corporate identity provider as the single source of truth for user and group membership.

## Before you start

Wait for the `gdeploy update` command to be completed and your stack has been provisioned. You can verify this by running `gdeploy status`.

```
➜ gdeploy status
...
[✔] Your Granted deployment is online
```

By default Common Fate will set the identity provider to an AWS Cognito user pool, so that you can test it out without connecting it to your corporate identity provider. Common Fate supports the following corporate identity providers:

- Google Workspaces
- Okta
- Azure AD
- AWS Single Sign On

## Setting up SSO

To start set up for our SSO provider we will use `gdeploy` to configure all the parameters for us. Using `gdeploy` run the `gdeploy identity sso enable` command to get started and follow the steps below for your identity provider

```json
❯ gdeploy identity sso enable
? The SSO provider to deploy with  [Use arrows to move, type to filter]
> Google
  Okta
  Azure
  AWS Single Sign On
```

As part of setting up SSO and user directory sync, you'll be prompted for parameters to connect to your identity provider. Follow the guides below based on the corporate identity provider that you use:

- [Google Workspace](/granted-approvals/sso/google)
- [Okta](/granted-approvals/sso/okta)
- [Azure](/granted-approvals/sso/azure)
