# <a id='top'>fxBipartite</a>

fxBipartite is a significantly revamped clone of a library which I believe was once part of the vizjs library (https://visjs.org/), but seems no longer to be part of it.

* [Installation](#installation)
* [Overview](#overview)
*   - [Dependencies](#dependancies)
*   - [Conventions](#conventions)
*   - [Data](#data)
* [Usage](#usage)
* [Options](#options)
*   - [The biPartitie Object](#bipartite)
*   - [Data](#data)
*   - [Container](#container)
*   - [Fill Colors](#fillcolors)
*   - [Sorting](#sort)
*   - [Orientation](#orient)
*   - [Padding](#pad)
*   - [Duration](#duration)
*   - [Edge Opacity](#edgeOpacity)
*   - [Edge Mode](#edgeMode)
*   - [Event](#event)
*   - [Update](#update)
* [CSS Styling](#css)
* [License](#license)

## <a id="installation">Installation</a>
```console
npm install fxbipartite --save

-or-

npm install -g fxbipartite  //install globally
```
[:house: top](#top)

## <a id="overview">Overview</a>
fxBiPartite is a library designed to create an interactive bipartite graph in the browser.  It should work on any modern browser (i.e., not Internet Explorer 8.0 and earlier).

[:house: top](#top)

### <a id="dependencies">Dependencies</a>
fxBipartite uses d3.js for selections and transitions. Note that we did not used the newest d3js libraries (v6.0.0) to retain compatibility with Internet Explorer...yes a few die hards still use it. It should be compatible with d3.js v6.0.0, however, so if that is important to you (and Internet Explorer isn't), fork the repository, change the dependency versions in the package.json, and rebuild. fxSimplex is required to optimize the graph to fill the container.

- d3-ease
- d3-interpolate-path
- d3-selection
- d3-transition
- fxsimplex

[:house: top](#top)

### <a id="conventions">Conventions</a>
fxBiPartite uses method chaining and only requires one option to be set for use with the defaults (data). 
```html
<!DOCTYPE html>
<head>
    <title>Simple example</title>
    <script type="text/javascript" src = 'fxBiPartite.js'></script>
</head>
<body>
    <script>
        var bP = fxBiPartite.fxBiPartite().data(data); //loads the data 
        bP(); //displays the bipartite graph
    </script>
</body>
</html>
```

[:house: top](#top)

### <a id="data">Data </a>
Data should be an array of arrays, each one containing the label of the source in element zero, the target in element one, and the value in element two. Other elements in each array will be ignored.

```html
<!DOCTYPE html>
    <head>
        <title>Data example</title>
        <script type="text/javascript" src = 'fxBiPartite.js'></script>
    </head>
    <body>
        <script>
            data = [
                    ["Lite", "CA",  16],
                    ["Small", "CA", 1278],
                    ["Medium", "CA", 27],
                    ["Plus", "CA", 58],
                    ["Grand", "CA", 1551],
                    ["Elite", "CA", 141],
                    ["Lite", "AZ", 5453],
                    ["Small", "AZ", 683],
                    ["Medium", "AZ", 862],
                    ["Grand", "AZ", 6228],
                    ["Lite", "AL", 15001]
                    ];
            var bP = fxBiPartite.fxBiPartite().data(data); //loads the data 
            bP(); //displays the bipartite graph
        </script>
    </body>
</html>                
```

[:house: top](#top)

## <a id='usage'>Usage</a>
Include fxBipartite in your project in one of two ways:

You can include a reference to the built version of the library
```html
<!DOCTYPE Html>
    <head>
        <body>
            <script type = 'text/javascript' src = 'fxBipartite.js'></script>
            .
            .
            .
        </body>
    </head>
</html>
```

Or you can include it in your JavaScript build
```javascript
import {fxBipartite} from 'fxbipartite';
```

[:house: top](#top)

## <a id="options">Options</a>

### <a id="bipartite">The biPartite object</a>
All options are accessed using method chaining (see examples) and only the data option is required. The fxBipartite function returns a bipartite object which contains all of the biPartite options.

[:house: top](#top)

### <a id ='data'>bipartite.data (data)</a>
* **data** (array) - array of source, target, and value tuples.
* **default** - []
* **returns** - if the data argument is omitted, the current data is returned, otherwise a [bipartite object](#bipartite) is returned.
* **description** - the data option is the only required option to display a bipartite graph with all of the defaults.

[:house: top](#top)

### <a id='container'>bipartite.container (container)</a>
* **container** (HTML element) - an HTML element within which to place the bipartite graph.
* **default** - document.documentElement
* **returns** - if the container argument is omitted, the current container is returned, otherwise a [bipartite object](#bipartite) is returned.
* **description** - the container (usually a div element) defines the width, height and position in the document for the bipartite graph. You must explicitly set the width and height of the container element using valid CSS in the style section of an HTML file, or a separate CSS file. The example below sets the width and height of the container element to 90% of the document body's width and height. If you use relative units such as *vh* or *percent* the bipartite graph will automatically rescale to fill the container element id the container element's size changes.

```html
<!DOCTYPE html>
    <head>
        <script type="text/javascript" src = 'fxBiPartite.js'></script>
        <style>
            .chart {
                width: 90vw;
                height: 90vh;
                margin: 0 auto;
                outline: 1pt solid black;
            }
        </style>
    </head>
    <body>
         <div id = 'chartDiv' class = 'chart'></div>
    <script>
        var bP = fxBiPartite.fxBiPartite()
            .data(faip_data)
            .container(document.getElementById('chartDiv'))
        bP();    
    </script>
    <body>
</html>
```

[:house: top](#top)

### <a id='fillcolors'>bipartite.fillColors(fillColors)</a>
* **fillColors** (array) - an array of valid CSS color strings.
* **default** - ['#66c2a5','#fc8d62','#8da0cb','#e78ac3','#a6d854','#ffd92f','#e5c494','#b3b3b3']
* **returns** - if the fillColors argument is omitted, the current fillColors are returned, otherwise a [bipartite object](#bipartite) is returned.
* **description** - any valid CSS color strings may be used to define the colors in the bipartite graph. Ensure that the count of the colors is equal or greater than the number of source nodes in the data.

[:house: top](#top)

### <a id='sort'>bipartite.sort(sort)</a>
* **sort** (string) - a string indicating the type of sorting to use - one of ['alpha' | 'barycentric' | 'sh' | 'none'].
* **default** - 'alpha'
* **returns** - if the sort argument is omitted, the current sort method is returned, otherwise a [bipartite object](#bipartite) is returned.
* **description** - varying methods to sort the data for aesthetics and to minimize edge crossings. If the *'alpha'* option is selected, the source and target nodes are sorted alphabetically. If the *'barycentric'* option is selected, the nodes are sorted using the barycentric heuristic to minimize edge crossings. This option is a good choice for large graphs as it is efficient and produces acceptable results. If the *'sh'* option is selected, the nodes are sorted using the stochastic hill climbing method\*. This method generally produces better results than the barycentric method, but has a longer runtime. Therefore, it may not be suitable for large graphs. If the *'none'* option is selected, the nodes are rendered in the order in the *data* option.

> \*Newton, M., Sýkora, O., Withall, M., & Vrt’o, I. (2003, June). A parallel approach to row-based VLSI layout using stochastic hill-climbing. In International Conference on Industrial, Engineering and Other Applications of Applied Intelligent Systems (pp. 750-758). Springer, Berlin, Heidelberg.

[:house: top](#top)

### <a id='orient'>bipartite.orient(orient)</a>
* **orient** (string) - a string indicating the orientation of the graph - one of ['vertical' | 'horizontal'].
* **default** - 'vertical'
* **returns** - if the orient argument is omitted, the current orient method is returned, otherwise a [bipartite object](#bipartite) is returned.
* **description** - the vertical option will orient the node names vertically and the edges will cross from left to right. The *horizontal* option will orient the node names from left to right and the edges from top to bottom.

[:house: top](#top)

### <a id='pad'>bipartite.pad(pad)</a>
* **pad** (integer) - the number of pixels between nodes as well as between the node labels and the edges of the container.
* **default** - 1
* **returns** - if the pad argument is omitted, the current pad is returned, otherwise a [bipartite object](#bipartite) is returned.
* **description** - the pad option should be used to enhance readability of the graph. However, in large graphs, too big of a pad may preclude rendering of the entire graphs within the container.

[:house: top](#top)

### <a id='duration'>bipartite.duration(duration)</a>
* **duration** (integer) - the number of milliseconds to complete a transition when focusing on individual nodes.
* **default** - 750
* **returns** - if the duration argument is omitted, the current duration is returned, otherwise a [bipartite object](#bipartite) is returned.
* **description** - self explanatory.

[:house: top](#top)

### <a id='edgeOpacity'>bipartite.edgeOpacity(edgeOpacity)</a>
* **edgeOpacity** (float) - the opacity of the edges - [0 | 1].
* **default** - 0.4
* **returns** - if the edgeOpacity argument is omitted, the current edgeOpacity is returned, otherwise a [bipartite object](#bipartite) is returned.
* **description** - If edge opacity is set to 1 edge crossings will be obscured.

[:house: top](#top)

### <a id='edgeMode'>bipartite.edgeMode(edgeMode)</a>
* **edgeMode** (string) - the drawing mode of the edges - ['straight' | 'curved'].
* **default** - 'curved'
* **returns** - if the edgeMode argument is omitted, the current edgeMode is returned, otherwise a [bipartite object](#bipartite) is returned.
* **description** - self explanatory.

[:house: top](#top)

### <a id='event'>bipartite.event(event)</a>
* **event** (string) -the event which triggers focusing on a particular node - one of ['hover' | 'click' | 'doubleClick'].
* **default** - 'hovers'
* **returns** - if the event argument is omitted, the current event is returned, otherwise a [bipartite object](#bipartite) is returned.
* **description** - self explanatory.

[:house: top](#top)

### <a id='update'>bipartite.update()</a>
* **returns** - returns a [bipartite object](#bipartite).
* **description** - during runtime, you may need to change one of the bipartite options such as the data. After changing one of the options invoking the update method will refresh the graph with the new options.

[:house: top](#top)

## <a id='css'>CSS Styling</a>
fxBipartite uses several CSS styles which you may customize either in-line in an HTML file or in a separate CSS style sheet.

- biPartite: styles the svg *g* element which contains the bipartite graph
- biPartitle-mainBar: styles the container for all nodes. The svg *rect* elements generally don't need any styling
- biPartite-subBar: styles the nodes. The fill color for these svg *rect* elements are controlled through the [biPartitel.fillColors()](#fillcolors) method.
- biPartite-edge: styles the edges. The fill color for these svg *path* elements are controlled through the [biPartitel.fillColors()](#fillcolors) method, and their edge opacity is controlled through the [biPartite.edgeOpacity()](#edgeOpacity) method.
- biPartite-label: styles the text element for the node labels. One may wish to customize the label size, font, fill, etc., by using this CSS style.
- biPartite-percentage: styles the percentage labels for each node. Similar to the biPartite-label class, one may wish to customize the percentage size, font, fill, etc., by using this CSS style.

```css
    .biPartite-percentage, .biPartite-label {
        user-select: none;
        font-family: tahoma, sans;
    }
        .biPartite-percentage {
            text-anchor: middle;
            font-size: 1em;
        }
        .biPartite-label {
            font-size: 1.5em;
        }
```

[:house: top](#top)

# License
MIT

[:house: top](#top)