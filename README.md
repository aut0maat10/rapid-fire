# rapid-fire

`rapid-fire` is a quiz template for e-commerce and more. The questions are specified in a `json` file, and the data and quiz components are dynamically rendered with Vue.js.

[See live demo here](https://d1tk1bfpsixa20.cloudfront.net/)

In `v0.0.0`, includes `StartScreen` and `StandardQuestion` components as well as an `EmailPrompt` component for user name and email collection. This demo version uses a custom `EndScreen` component with results calculated based on user input. A default end screen and several other components will be added eventually. 

Here is the `json` data template used for the demo version:

```json
[
  {
    "type": "standard-question",
    "question": "What's your favorite view?",
    "options": ["The beach", "The mountains", "The city"]
  },
  {
    "type": "standard-question",
    "question": "What would you like to eat?",
    "options": ["pizza", "chocolate", "seafood"]
  },
  {
    "type": "standard-question",
    "question": "Which activity would you like to try?",
    "options": ["Hiking", "Barhopping", "Sailing"]
  }
]
```

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
