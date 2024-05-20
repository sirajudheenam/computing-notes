# Configure ESlint for Vite App : to be done manually.

```
pnpm install eslint vite-plugin-eslint eslint-config-react-app --save-dev
```

## create a new config file called .eslintrc.json on the root directory

```
{
"extends": "react-app"
}
```

## Add an entry to vite config file

```

import eslint from 'vite-plugin-eslint';
export default defineConfig({
  plugins: [react(), eslint()],
});
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
