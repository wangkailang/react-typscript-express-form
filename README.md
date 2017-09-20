# react-typscript-express-form

[![Build Status](https://travis-ci.org/wangkailang/react-typscript-express-form.svg?branch=master)](https://travis-ci.org/wangkailang/react-typscript-express-form)
form example with react typescript as client, and express as server

## 记录
1. package.json 设置proxy指向server端口。这样可以通过fetch('/api/resource')获取server api。
2. npm library concurrently 同时开启多个端口。

## 资源
1. https://github.com/Microsoft/TypeScript-React-Starter
2. https://github.com/piotrwitek/react-redux-typescript-guide#create-store

## data fetch (whatwg-fetch)
```typescript
// fetch example
fetch('/api/hello').then(res => res.json()).then(json => {
  console.log('parsed', json);
}).catch(ex => {
  throw new Error(ex);
});

// async await
async function fetchApi(url: string) {
  const datas = await fetch(url).then(res => res.json());;
}
fetchApi('/api/hello');
```

## use redux-devtools
link: https://github.com/piotrwitek/react-redux-typescript-guide#create-store
```typescript
declare const window: Window & { devToolsExtension: any,  __REDUX_DEVTOOLS_EXTENSION__: any };
const store = createStore<StoreState>(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);
```
