Make new github repo & clone locally
Pick node version
make .nvmrc
nvm use to switch to that version

npm install -g yarn
npm install -g webpack
npm install -g webpack-dev-server
npm install -g typescript
npm install -g tsd

make package.json
make .gitignore
make webpack.config.js

yarn init
yarn add webpack
yarn add react @types/react
yarn add react-dom @types/react-dom
yarn add webpack-dev-server
yarn add babel-loader babel-core
yarn add typescript
yarn add ts-loader
yarn add source-map-loader
yarn add jest
yarn add babel-jest babel-polyfill
yarn add babel-preset-es2015
yarn add babel-preset-react
yarn add enzyme
yarn add react-addons-test-utils
yarn add react-router @types/react-router
yarn add lodash @types/lodash

tsd init
tsd install react --save

webpack
webpack-dev-server
http://localhost:8080/webpack-dev-server/index.html
