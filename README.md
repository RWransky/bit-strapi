# bit-strapi
Reusable Typescript React components from Strapi CMS data objects

## Local Development
### Prerequisites
- Docker and Docker Compose
- A local version of this repository

### Build Steps
- From a command window navigate to your local copy of this repo.
- Pull the `bit-docker` image: `docker pull rwransky/bit-docker:latest`
- Run your local Docker container: `docker compose run --rm --service-ports bit-strapi`
- Once initialization is complete install needed packages: `bit install`
- Start your local bit server! `bit start`

## Available Components, Features, and Specifications
All up-to-date information regarding the available public components from `bit-strapi` can be found on the public [bit scope](https://bit.cloud/rwransky/bit-strapi)
