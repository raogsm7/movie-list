#Webpack.setup

0. 'git init', 'npm-init'
1. copy the trhee files form webpack main page (src/index.js. src/bar.js, webpack.config.js)
2. ***install webpack npm install webpack
3. ***because webpack is a local install, to run it, we need to use 'npx webpack'
4. it will prompt you to install webpack-cli, just say y or yes (should result in a dist/bundle.js)
5. copy final file from webpack mainpage (page.html)
6. confirm bundle and html are linked by opening html page in browser and checking console
--------WEBPACK is setup But not react------
7. ***go to babel-loader documentation install ..https://www.npmjs.com/package/babel-loader - `npm install -D babel-loader @babel/core @babel/preset-env webpack`
8. copy past config object into webpack.config
//https://babeljs.io/docs/en/next/babel-preset-react
9. install react, react-dom and babel react preset `npm install react react-don and npm install-save-dev @babel/preset-react
--------WEBPACK IS SETUP for REACT now we need to actually add react--------
10. add @bable/preset-react to our list of presets react
]1. Make a srec/components/App.jsx file (copy from react tutorial if needed)
12 refactor index.js to import App and rectdom.render App (add appropriate dom element with appropriate id to page.html) 
13. rename page.hjtml to index.html, delete bar.js
--------REACT IS SETUP, but full stack not
14. move all client code into a client folder  (but not webpack config or pacakge.joson) and adjust file path in webpack.config