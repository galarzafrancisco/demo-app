# Demo App Init

Starter web app built with React, TypeScript, and Vite.

## Stack

- React 19
- TypeScript 5
- Vite 7

## Quick Start

```bash
npm install
npm run dev
```

Open the app at `http://localhost:5173`.

## Scripts

- `npm run dev` - Start the Vite dev server
- `npm run build` - Type-check and build production assets
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint

## Deployment

- `Dockerfile` builds the app and serves it from NGINX on port `8080`
- Kubernetes manifests live in `install/manifests/`
- GitHub Actions builds and pushes `ghcr.io/galarzafrancisco/demo-app-init`
- On pushes to `main`, CI copies manifests into `spark-ops/k8s/demo-app-init` and opens a deployment PR

## Project Structure

- `src/` - Application source code
- `public/` - Static assets served as-is

## Notes

This repository is set up with `main` as the primary branch and is intended to be publicly accessible.
