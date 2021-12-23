# Developers

## Deploying Hekataios

Hekataios is designed to be deployed instanciated and heberged by the communities, not as a service and heberged globally.

To use Hekataios for your roleplaying community, you will need to setup an ecosystem (this requires some knowledge of software and infrastructure).

### Components

Hekataios is composed of multiple components that you may or may not need:
- **Hekataios Core**
    - This is the core API and data storage.
    - The Core requires technical bricks:
        - A database: Hekataios was designed to work natively with a Mongo Database (this can be changed with some code thanks to a layered architecture). We strongly recommended to backup the database.
        - A server to run on: Hekataios Core is developed in TypeScript, and requires a server with NodeJS to run and ready to expose the Core API on the internet (HTTPS with a SSL certificate, etc...).
- **Hekataios App**
    - If you intend to develop your own applications, you might not need the Hekataios base application.
    - It's a React single page application that should be deployed on a CDN.

### Deploy environments

The recommended deploy environment for Hekatatios component is cloud-based (and it's probably the easiest and most secure way to deploy an instance without too much software engineering knowledge). If you prefer, you can also deploy components on a kubernetes platform, on a private server with docker-compose, or with a manual setup of every part of the suite.

If you want to test Hekataios for your community at minimal cost (by minimal cost we mean for free), you definitively should go for the cloud-base deploy. If you need more database space or a more regular uptime, you would be able to pay a bit to get a normally sufficient environment.

## Accessing resources

### Accessing public data

Public information and resources are accessible without authentication.

### Accessing player data

Accessing player data and scope is done via OAuth authorization schemes.

This means that prior to reading user-specific data, your application need to perform a OAuth authorization grant request against the Hekataios instance.

