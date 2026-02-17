# DHd-AG gwFDM

*This is work in progress.*

## Overview

- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Built With](#built-with)

## Requirements

- Node
- Nuxt

## Getting Started

### Clone the Repository and Initialize Submodules

To begin, clone this repository and initialize the submodules using the following commands:

```bash
git clone <repository_url>
cd <repository_directory>
git submodule update --init --recursive
```

### Installation

Proceed to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

### Production

This application pre-renders routes at build time, which is called static site generation (SSG).

Use the [`nuxi generate` command](https://nuxt.com/docs/api/commands/generate) to build and pre-render the application using the [Nitro](https://nuxt.com/docs/guide/concepts/server-engine) crawler. This command is similar to `nuxt build` with the `nitro.static` option set to `true`, or running `nuxt build --prerender`.

```bash
npx nuxi generate
```

The final build files will be written to `.output` directory. You can preview this build using `npx serve .output/public` or deploy `.output/public` to any static hosting.

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Built With

This project is built with:

- [**Nuxt 4**](https://nuxt.com/): A modern web framework for building powerful and performant web applications.
