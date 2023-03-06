# vite-vue-template

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

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

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

> 底下為範本程式碼介紹

## axios 範本串接

#### 流程步驟

- 首先先在 Post Man 建立 MockServer [精選好文](https://tzuhui.io/2022/05/13/tool/postman-mock-server/)
- 安裝套件 `npm install --save axios vue-axios` 在 main.js 註冊並引用
- 可以參考[整合 axios](https://polinwei.com/vue-js-axios-interceptor-and-toast/)
  此篇利用攔截器，攔截錯誤代碼並統整操作
- 參考 **_AxiosTemplateView.vue_** 範本程式碼
