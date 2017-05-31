## react技术栈
- react react-router4 redux react-redux
## 初始化package.json
```
$ npm init -y
```
## webpack
```
npm install webpack webpack-dev-server
```
## babel
```
npm install babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 babel-preset-react css-loader style-loader less less-loader html-webpack-plugin -D
```
## react
```
npm install react redux react-redux react-router-dom  react-dom -S
```
## fetch
```npm install es6-promise whatwg-fetch -D

```
## express
```
npm install express -S
```
##swipe
```
npm install swipe-js-iso react-swipe
```
## scripts
```
"start","webpack-dev-server --port 5000 --open --progress --colors",
"build","webpack -p"
```
## 目录结构
- components 组件 木偶组件
- containers 页面组件,或者自己的subpage目录下
    - Home
        - subpage 智能组件
        - index.js
- index.js 用来控制显示哪一个页面

- store onlyOne
- actions 用户发布动作
- reducers 定义规则的
- action-types action的名字
