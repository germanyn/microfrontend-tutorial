# Microfrontend Tutorial

This repo contains a MF (MicroFrontend) tutorial using webpack module federation

## Install

```sh
npm i

npx lerna bootstrap
```

## Run

```sh
npx lerna run start --stream
```

## Structure

This project contains a package folder, whose which folder inside is a different MF application.

```
packages/
  auth/
  container/
  dashboard/
  marketing/
```

### MFEs

- Container: `Host` application using `React.js`
- Auth: `Remote` application using `React.js` responsible for `/auth/login` and `/auth/signup` routes
- Marketing: `Remote` application using `React.js` responsible for `/pricing`
- Dashboard: `Remote` application using `Vue.js` responsible for `/dashboard`