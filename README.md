# Basic Router

Tests on a SPA (Single Page Application) basic navigation router based on a blog entry written by [Raffaele Pizzari](https://dev.to/pixari): _[Build a very basic SPA JavaScript router](https://dev.to/pixari/build-a-very-basic-spa-javascript-router-2k4p)_

Uses `hashchange` and `load` window events

The idea is to write a bundled app using modern CSS and EcmaScript, processed to run on IE (10 minimum)

Mainly managed by [npm](https://www.npmjs.com), [webpack](https://webpack.js.org), [postcss](https://postcss.org), and [babel](https://babeljs.io)

# Technical Details about Packaging

List of supported browsers in file `.browserslistrc` (each line is or-*ed*)

Orchestrated by *Webpack* whose configuration is split into three files (common, development, and production). Production is a bundle, development runs an in-memory hot server with webpack-dev-server

Transpiled from code in ES6+ to be compatible with Internet Explorer 10/11 (maybe 9) by *babel*

Use of [Animate.css](https://animate.style) in a separate bundle (vendor)

Use of [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*), transpiled with *postcss* loader (*postcss-custom-properties*)

CSS files are separated from JS by *mini-css-extract-plugin*

All bundled files minified (HTML by *html-webpack-plugin*, JS by [terser](https://terser.org), CSS by *optimize-css-assets-webpack-plugin*) minified and with JS [sources maps](https://www.npmjs.com/package/source-map)

Assets (image) copied by two plugins: *html-loader* (which takes care of assets declared in pure HTML style, not 'require' style), and *file-loader* to copy them into the bundle in a dedicated sub-folder

Bundle is also cleaned of any unnecessary files with *clean-webpack-plugin*

# Installation and Usage

From `package.json` root dir:

- install: `npm install`
- make bundle: `npm run build`
- start live dev server: `npm start` stop with *ctrl-C*

