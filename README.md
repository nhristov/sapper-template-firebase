# sapper-template-firebase

A modified default [Sapper](https://github.com/sveltejs/sapper) template, available for Rollup with Firebase functions.

https://sapper-template-firebase.web.app/

## Getting started

### Using `degit`

[`degit`](https://github.com/Rich-Harris/degit) is a scaffolding tool that lets you create a directory from a branch in a repository.

```bash
# for Rollup with postcss, purgecss, cssnano, tailwindcss and svelte-preprocess
npx degit "nhristov/sapper-template-firebase" my-app
```

### Running the project

However you get the code, you can install dependencies and run the project in development mode with:

```bash
cd my-app
npm install # or yarn
npm run dev
```

Open up [localhost:3000](http://localhost:3000) and start clicking around.

Consult [sapper.svelte.dev](https://sapper.svelte.dev) for help getting started.

### Deploying on Firebase

Replace `sapper-template-firebase` with your project's name in .firebaserc

```bash
cd my-app
npm run build # or yarn
firebase deploy
```
