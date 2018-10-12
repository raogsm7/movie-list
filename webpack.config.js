const path = require('path');

module.exports = {
  entry: './client/src/index.js', // where whould webpack start looking for files
  output: { //where should webpack put the bundle
    path: path.resolve(__dirname, 'client/dist'), //what folder
    filename: 'bundle.js' //webpack will put our bundle at ./dist/bundle.js
  },
  module: {
	  rules: [
	    {
	      test: /\.jsx?$/, //which files should this loader run on? regular expression tjat means .js or jsx.. change this to jsx
	      // question mark will take care of both js and jsx, remove m 
	      //https://www.npmjs.com/package/babel-loader
	      exclude: /(node_modules|bower_components)/, // don't trnaspile node modules
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['@babel/preset-env', '@babel/preset-react'] // preset-env transllates es6 yo es5 (for older browsers)
	        }
	      }
	    }
	  ]
  },
  mode: 'development',
};