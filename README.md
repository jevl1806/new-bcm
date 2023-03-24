# alternova **vuejs** template

This template should help get you started developing with Vue 3 in your porjects.

## Pre-requisites

You will need install this software installed on your system:

- NodeJs (Works with version 17.9.1)
- pnpm (works with version 6)
- Vite (See [Vite Configuration Reference](https://vitejs.dev/config/).)

## Technologies

- TailwindCss
- Vue3
- Typescript
- Vitest

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

# Project Setup 🛠️

### 1. Enviroments variables

These variables are configured through `.env` files to protect keys, passwords or identifiers.

```sh
VUE_APP_ROOT_API=http://example-domain.com
```

Note: these values are only an example

### 2. Install packages

```sh
pnpm install
```

### 3. Compile and Hot-Reload for Development

```sh
pnpm dev
```

### 4. Type-Check, Compile and Minify for Production

```sh
pnpm build
```

## Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

# To Do

list of things to develop.

- [x] Add use case to register user
- [x] Add mock to register user
- [x] Add use case implementation to register
- [x] Add adapters to register
- [x] Add implemententation and repository to rest
- [ ] Add plugin to use firebase
- [ ] Add Authenticaction with firebase
- [ ] Add test to login
- [ ] Add test to register
- [ ] Update Readme with architecture section
