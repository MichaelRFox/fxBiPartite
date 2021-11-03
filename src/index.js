/**
 * @author Michael.R.Fox, Ph.D. <fox.michael.r@gmail.com>
 * @copyright Michael R. Fox, Ph.D., 2020, 2021
 * @license MIT
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 * and associated documentation files (the 'Software'), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute,
 * sub-license, and/or sell copies of the Software, and to permit persons to whom the Software
 * is furnished to do so, subject to the following conditions:
 * - The above copyright notice and this permission notice shall be included in all copies or
 * substantial portions of the Software:
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 * @overview
 * 
 * [![npm version](https://badge.fury.io/js/fxbipartite.svg)](https://badge.fury.io/js/fxbipartite)
 * ![npm bundle size](https://img.shields.io/bundlephobia/min/fxbipartite)
 * ![npm](https://img.shields.io/npm/dw/fxbipartite)
 * ![GitHub last commit](https://img.shields.io/github/last-commit/MichaelRFox/fxBiPartite)
 * ![GitHub top language](https://img.shields.io/github/languages/top/MichaelRFox/fxBiPartite)
 * ![NPM](https://img.shields.io/npm/l/fxbipartite)
 * 
 * ---
 * 
 * > [Overview](#overview)
 * 
 * > [Installation](#installation)
 * 
 * > [Demonstration](#demonstration)
 * 
 * > [Dependencies](#dependencies)
 * 
 * > [Usage](#usage)
 * 
 * > [CSS Styling](#css)
 * 
 * > [Responsiveness](#responsiveness)
 * 
 * ---
 * 
 * # <a id='overview'>Overview</a>
 * 
 * fxBiPartite is a library designed to create an interactive bipartite graph in the browser.
 * It should work on any modern browser (i.e., not Internet Explorer 8.0 and earlier).
 * 
 * fxBipartite is a significantly revamped clone of a library which I believe was once part of the
 * [vizjs]{@link https://visjs.org/} library, but seems no longer to be part of it.
 * 
 * # <a id='installation'>Installation</a>
 * 
 * ```bash
 * npm install fxbipartite --save
 * ```
 *
 * -or-
 *
 * ```bash
 * npm install -g fxbipartite  //install globally
 * ```
 * 
 * # <a id='demonstration'>Demonstration</a>
 * 
 * - [Demonstration of fxBiPartitite]{@link https://michaelrfox.github.io/demos/fxBiPartiteDemos/}
 *
 * # <a id='dependencies'>Dependencies</a>
 * 
 * fxBipartite uses d3.js for selections and transitions and d3-interpolate-path to animate the initial display of the graph edges.
 * It also uses fxSimplex to perform constrained optimization to compute graph size and position parameters.
 * 
 * ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/MichaelRFox/fxBiPartite/fxsimplex?style=plastic)
 * 
 * ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/MichaelRFox/fxBiPartite/d3-interpolate-path?style=plastic)
 * 
 * ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/MichaelRFox/fxBiPartite/d3-selection?style=plastic)
 * 
 * ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/MichaelRFox/fxBiPartite/d3-ease?style=plastic)
 * 
 * ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/MichaelRFox/fxBiPartite/d3-transition?style=plastic)
 *
 * # <a id ='usage'>Usage</a>
 * 
 * Include fxBiPartite in your project in one of two ways:
 *
 * You can include a reference to the built version of the library
 * 
 * ```html
 * <!DOCTYPE Html>
 *   <html>
 *       <head>
 *           <body>
 *               <script type = 'text/javascript' src = 'fxBiPartite.min.js'></script>
 *               .
 *               <!--   or   -->
 *               .
 *               <script type = 'text/javascript' src = 'https://cdn.jsdelivr.net/npm/fxBiPartie@latest/dist/fxBiPartitie.js'></script>
 *               .
 *           </body>
 *       </head>
 *   </html>
 * ```
 * 
 * Or you can include it in your JavaScript build
 * 
 * ```javascript
 * import {default as biPartite} from './node_modules/fxbipartite';
 * ```
 * 
 * if you use this option note that the source files are in ES6 (unlike the distribution files which have been transpiled).
 * In this case, if you need to support older browsers you may want to edit your *.babelrc.json* file to specifically transpile fxBiPartite:
 * 
 * ```json
 * {
 *      "exclude": "/node_modules\/(?!fxbipartite)/"
 * }
 * ```
 * 
 * fxBipartite exports a single class object named [biPartite]{@link biPartite}.
 * The [biPartite class object constructor]{@link biPartite#constructor} takes
 * two arguments: *data* (A two-dimensional array of source (string), target (string),
 * and value (number) tuples) and *container* (an HTML div element that will contain
 * the graph. The [biPartite class object]{@link biPartite} exposes several methods
 * to alter the default behavior of the graph. It also supports method chaining as
 * in the following example:
 * 
 * ```html
 * <!DOCTYPE html>
 *      <head>
 *          <title>fxBiPartite example</title>
 *          <style>
 *              .chart { <!-- class styles for the container must specify height and width -->
 *                  width: 90vw;
 *                  height: 90vh;
 *                  margin: 0 auto;
 *              }
 *          </style>
 *          <script type="text/javascript" src = 'fxBiPartite.js'></script> <!-- link to fxBiPartite -->
 *      </head>
 *      <body>
 *          <div id = 'chartDiv' class = 'chart'></div> <!-- this will be the graph container -->
 *          <script type = 'text/javascript'>
 *              
 *              data = [["Lite", "CA",  16], //data for the graph [source, target, value]
 *                      ["Small", "CA", 1278],
 *                      ["Medium", "CA", 27],
 *                      ["Plus", "CA", 58],
 *                      ["Grand", "CA", 1551],
 *                      ["Elite", "CA", 141],
 *                      ["Lite", "AZ", 5453],
 *                      ["Small", "AZ", 683],
 *                      ["Medium", "AZ", 862],
 *                      ["Grand", "AZ", 6228],
 *                      ["Lite", "AL", 15001]];
 * 
 *              new bBiPartite(data, document.getElementById('chartDiv'))
 *                  .sort('barycentric')    // method chaining to set options
 *                  .edgeMode('straight')
 *                  .show();                // use the show method last to display the graph
 *          </script>
 *      </body>
 * </html> 
 * ```
 * 
 * See the [biPartite class object]{@link biPartite} documentation for additional details on using fxBiPartite options.
 * 
 * # <a id='css'>CSS Styling</a>
 * 
 * fxBipartite uses several CSS styles which you may customize either in-line in an HTML file or in a separate CSS style sheet.
 * 
 * - .biPartite: styles the svg *g* element which contains the bipartite graph. There is probably no need to style this element.
 * - .biPartitle-mainBar: styles the container for all nodes. The svg *rect* elements generally don't need any styling.
 * - .biPartite-subBar: styles the nodes. The fill color for these svg *rect* elements are controlled through the
 * [biPartite.fillColors()]{@link biPartite#fillColors} method.
 * - .biPartite-edge: styles the edges. The fill color for these svg *path* elements are controlled through the
 * [biPartite.fillColors()]{@link biPartite#fillColors} method, and their edge opacity is controlled through the
 * [biPartite.edgeOpacity()]{@link biPartite#edgeOpacity) method.
 * - .biPartite-label: styles the text element for the node labels. One may wish to customize the label size,
 * font, fill, etc., by using this CSS style.
 * - .biPartite-percentage: styles the percentage labels for each node. Similar to the biPartite-label class,
 * one may wish to customize the percentage size, font, fill, etc., by using this CSS style.
 * 
 * ```css
 * body {
 *      font-size: calc(6px + (16 - 6) * ((100vw - 600px) / (1920 - 400)));
 * }
 * 
 * .biPartite-mainBar:hover {
 *      cursor: pointer;
 * }
 * 
 * .biPartite-percentage, .biPartite-label {
 *      user-select: none;
 *      font-family: tahoma, sans;
 * }
 *     
 * .biPartite-percentage {
 *      text-anchor: middle;
 *      font-size: 1em;
 * }
 * .biPartite-label {
 *      font-size: 1.5em;
 * }
 * ```
 * 
 * # <a id='responsiveness'>Responsiveness</a>
 * 
 * fxBiPartite is designed to be responsive to changes in container size. However,
 * fxBiPartite will only scale the size of the graph and not the label text.
 * Since fxBiPartite sets margins and minimum sizes for the bars (node rectangles)
 * based on font size, to be more responsive you may want to enable *fluid typography*
 * in your CSS. In the above example the body font-size adjusts to the document viewport
 * width and the font sizes for the biPartite-percentage and biPartite-label classes are
 * expressed in *em* units, a relative unit.
 * 
 */

// import {biPartite} from './biPartite.js';
export {biPartite} from './biPartite.js';