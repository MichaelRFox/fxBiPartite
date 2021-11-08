import {update} from './update.js';
import {default as glb} from './globals.js';
import {init} from './init.js';
import {graphSize, checkCSS} from './utilities.js';
import {parseColor, luminance} from './color.js';
import {bars} from './calculate';
import {startListener, stopListener} from './container.js';
import {mouseOver, mouseOut, click} from './mouse.js';
import {sortKeys} from './sort.js';
import {textColor, splitRgb} from './color.js';

/** The biPartite class */
export class biPartite {

    #dataLoaded = false;
    #containerDefined = false;
    
    /**
     * Instantiates a new biPartite class object with all of the default options.
     * @param {Array} data A two-dimensional array of source (string), target (string),
     * and value (number) tuples. This argument is optional in the constructor, however the data must be 
     * loaded with the [biPartite.data]{@link biPartite#data} method before showing the graph.
     * @param {HTML.div} container An HTML div element which will contain the graph.
     * This argument is optional in the constructor, however the container must be 
     * specified with the [biPartite.container]{@link biPartite#container} method before showing the graph.
     * @returns {biPartite} A biPartite class object.
     * @example <caption>fxBipartite constructor example</caption>
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
     *          <script type="text/javascript" src = 'fxBiPartite.js'></script>
     *      </head>
     *      <body>
     *          <div id = 'chartDiv' class = 'chart'></div>
     *          <script type = 'text/javascript'>
     *              data = [["Lite", "CA",  16],
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
     *              let myGraph = new bBiPartite(data, document.getElementById('chartDiv'));
     *              myGraph.show(); //displays the bipartite graph
     * 
     *          </script>
     *      </body>
     * </html>
     */
    constructor (data, container) {
        switch (arguments.length) {
            case 0:
                break;
            case 1:
                this.data(data);
                break;
            case 2: 
                this.data(data);
                this.container(container);
        };
        glb.graph = this;
    }

    /**
     * Loads data into the graph. If the graph already has data, it will be replaced. A call
     * to[ biPartite.show]{@link biPartite#show} should be made if this is the original data,
     * or [biPartite.update]{@link biPartite#update} if it is replacement data as shown in
     * the example below.
     * @param {Array} data A two-dimensional array of source (string), target (string),
     * and value (number) tuples. **Default**: [].
     * @returns {biPartite} if the data argument is omitted, the current data is returned,
     * otherwise the [biPartite class object]{@link biPartite} is returned.
     * @example <caption>biPartite.data method example</caption>
     * <script type = 'text/javascript'>
     * 
     *      let myGraph = new biPartite(oldData, container);
     *      myGraph.show();
     * 
     *      let newData = [["Lite", "CA",  16],
     *                     ["Small", "CA", 1278],
     *                     ["Medium", "CA", 27],
     *                     ["Plus", "CA", 58],
     *                     ["Grand", "CA", 1551],
     *                     ["Elite", "CA", 141],
     *                     ["Lite", "AZ", 5453],
     *                     ["Small", "AZ", 683],
     *                     ["Medium", "AZ", 862],
     *                     ["Grand", "AZ", 6228],
     *                     ["Lite", "AL", 15001]];
     * 
     *      myGraph.data(newData)
     *          .update();  // must update since we changed the data
     * 
     * </script>
     */
    data (data) {
        if (data == undefined) return glb.data;
        if (!data instanceof Array || data[0].length != 3 || typeof data[0][0] != 'string' || typeof data[0][1] != 'string' || typeof data[0][2] != 'number') {
            console.error('The data is not properly specified. It must be a two-dimensional array with tuples of [string, string, number] in each row.');
        } else {
            glb.data = data;
            glb.refresh = true;
            this.#dataLoaded = true;
        };
        return this;
    }

    /**
     * The container (usually a div element) defines the width, height and position in the
     * document for the bipartite graph. You must explicitly set the width and height of the
     * container element using valid CSS in the style section of an HTML file, or a separate
     * CSS file. The example below sets the width and height of the container element to 90%
     * of the document body's width and height. If you use relative units such as *vh* or
     * *percent* the bipartite graph will automatically rescale to fill the container element
     * with the container element's size changes. If you are changing the container, the old
     * container should be removed from the DOM and a new call to [biPartite.update]{@link biPartite#update}
     * should be made.
     * @param {HTML.div} container An HTML element within which to place the bipartite graph.
     * **Default**: undefined.
     * @returns {(biPartite | HTML.div)} if the container argument is omitted, the current
     * container is returned, otherwise the [biPartite class object]{@link biPartite} is returned.
     * @example <caption>biPartite.container method example</caption>
     * let myGraph = new bBiPartite(data);
     * <!DOCTYPE html>
     *      <head>
     *          <style>
     *              .chart { <!--class styles for the container must specify height and width -->
     *                  width: 90vw;
     *                  height: 90vh;
     *                  margin: 0 auto;
     *              }
     *          </style>
     *          <script type="text/javascript" src = 'fxBiPartite.js'></script>
     *      </head>
     *      <body>
     *          <div id = 'myDiv' class = 'chart'></div>
     * 
     *          <script type = 'text/javascript'>

     *              data = [["Lite", "CA",  16],
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
     *              let myGraph = new bBiPartite(data);
     *              myGraph.container(document.getElementById('myDiv'));    
     *              myGraph.show(); //displays the bipartite graph
     * 
     *          </script>
     *      </body>
     * </html>

     */
    container (container) {
        if (container == undefined) return glb.container;
        
        let containerBackground = 'rgb(255, 255, 255)'; // default
        const color = window.getComputedStyle(container, null).getPropertyValue('background-color');
        const rgb = splitRgb(color);
        if (rgb != null && rgb[3] != 0) {
            if (checkCSS('color', `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`)) {
                containerBackground = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
            };
        };

        glb.container = container;
        glb.containerBackground = containerBackground;
        glb.labelColor = textColor([containerBackground]);
        glb.refresh = true;
        this.#containerDefined = true;
        startListener();
        return this;
    }

    /**
     * The show method displays the biPartite graph. Any options set after the show method is
     * called will not be displayed until the [biPartite.update]{@link biPartite#update} method
     * is called.
     * @returns {biPartite} The [biPartite class object]{@link biPartite}.
     * @example <caption>biPartite.show method example</caption>
     * new biPartite(data, container)
     *          .show();
     */
    show () {
        if (this.#containerDefined && this.#dataLoaded) {
            init();
            this.update();
        } else {
            console.error('Both the data must be loaded and the container be set before the graph can be shown');
        };
        return this;
    }

    /**
     * During runtime, you may need to change one of the biPartite options such as the data. After
     * changing one of the options invoking the update method will refresh the graph with the new options.
     * @param {boolean} noDelay This parameter is used internally during screen resizing and should not
     * be explicitly set by the user.
     * @returns {biPartite} The [biPartite class object]{@link biPartite}.
     * @example <caption>biPartite.update method example</caption>
     * <script type = 'text/javascript'>
     * 
     *      let myGraph = new biPartite(data, container);
     *      myGraph.show();
     * 
     *      // here we change one of the defaults so we must update the graph
     *      myGraph.edgeMode('straight')
     *          .update();
     * 
     * </script>
     */
     update (noDelay = false) {
        if (this.#containerDefined && this.#dataLoaded) {
            if (glb.refresh == false) return;

            [glb.width, glb.height, glb.minWidth, glb.minHeight, glb.LabelOffset] = graphSize();
            sortKeys(this.data());
            update(bars(), noDelay);
            glb.refresh = false;
        } else {
            console.error('Both the data must be loaded and the container be set before the graph can be updated');
        };
        return this;
    }

    /**
     * The *vertical* option will orient the node names vertically and the edges will cross from left to
     * right. The *horizontal* option will orient the node names from left to right and the edges from
     * top to bottom.
     * @param {string} orient A string indicating the orientation of the graph - one of
     * ['vertical' | 'horizontal']. **Default**: 'vertical',
     * @returns {(biPartite |string)} If the orient argument is omitted, the current
     * orientation is returned, otherwise the [biPartite class object]{@link biPartite} is returned.
     * @example <caption>biPartite.orient method example</caption>
     * new biPartite(data, container)
     *      .orient('horizontal')
     *      .show();
     */
    orient (orient){
        if (orient == undefined) return glb.orient;
        if (['horizontal', 'vertical'].indexOf(orient) == -1) {
            console.error("The orient parameter should be one of ['horizontal' | 'vertical']");
        } else {
            glb.orient = orient;
            glb.refresh = true;
        };
        return this;
    }

    /**
     * The event which triggers interaction with the graph.
     * @param {string} event The event which triggers focusing on a particular node - one of
     * ['hover' | 'click' | 'doubleClick']. **Default**: 'hover'.
     * @returns {(biPartite |string)} If the event argument is omitted, the current
     * event is returned, otherwise the [biPartite class object]{@link biPartite} is returned.
     * @example <caption>biPartite.event method example</caption>
     * new biPartite(data, container)
     *      .event('doubleClick')
     *      .show();
     */
    event (event) {
        if (event == undefined) return glb.event;
        if (['hover', 'click', 'doubleClick'].indexOf(event) == -1) {
            console.error(`The event, ${event} is not valid. Event must be one of ['hover' | 'click' | 'doubleClick']`);
        } else {
            glb.event = event;
            switch (event) {
                case 'hover' :
                    glb.eventTypeOver = 'mouseenter';
                    glb.eventTypeOut = 'mouseleave';
                    glb.eventListenerOver = mouseOver;
                    glb.eventListenerOut = mouseOut;
                    break;
                case 'click' :
                    glb.eventTypeOver = 'click';
                    glb.eventTypeOut = 'click';
                    glb.eventListenerOver = click;
                    glb.eventListenerOut = click;
                    break;
                case 'doubleClick' :
                    glb.eventTypeOver = 'dblclick';
                    glb.eventTypeOut = 'dblclick';
                    glb.eventListenerOver = click;
                    glb.eventListenerOut = click;
                    break;
            };
        };
        return this;
    }

    /**
     * Provides varying methods to sort the data for aesthetics and to minimize edge crossings. If the
     * *'alpha'* option is selected, the source and target nodes are sorted alphabetically. If the
     * *'barycentric'* option is selected, the nodes are sorted using the barycentric heuristic to
     * minimize edge crossings. This option is a good choice for large graphs as it is efficient and
     * produces acceptable results. If the *'sh'* option is selected, the nodes are sorted using the
     * *'stochastic hill climbing method'*. This method generally produces better results than the
     * barycentric method, but has a longer runtime. Therefore, it may not be suitable for large graphs.
     * If the *'none'* option is selected, the nodes are rendered in the order in the *data* option.
     * @param {string} sort A string indicating the type of sorting to use - one of
     * ['alpha' | 'barycentric' | 'sh' | 'none']. **Default**: 'alpha'.
     * @returns {(biPartite |string)} If the sort argument is omitted, the current
     * sort is returned, otherwise the [biPartite class object]{@link biPartite} is returned.
     * @example <caption>biPartite.sort method example</caption>
     * new biPartite(data, container)
     *      .sort('barycentric')
     *      .show();
     */
    sort (sort) {
        if (sort == undefined) return glb.sort;
        if (['alpha', 'barycentric', 'sh', 'none'].indexOf(sort) == -1) {
            console.error(`The sort, ${sort} is not valid. Event must be one of ['alpha' | 'barycentric' | 'sh' | 'none']`);
        } else {
            glb.sort = sort;
            glb.refresh = true;
        };
        return this;
    }

    /**
     * Sets whether the graph is rendered with straight line or curves.
     * @param {string} edgeMode The rendering of the edges - ['straight' | 'curved'].
     * **default**: 'curved'.
     * @returns {(biPartite |string)} If the edgeMode argument is omitted, the current
     * edgeMode is returned, otherwise the [biPartite class object]{@link biPartite} is returned.
     * @example <caption>biPartite.edgeMode method example</caption>
     * new biPartite(data, container)
     *      .edgeMode('straight')
     *      .show();
     */
    edgeMode (edgeMode) {
        if (edgeMode == undefined) return glb.edgeMode;
        if (['straight', 'curved'].indexOf(edgeMode) == -1) {
            console.error(`The edge model, ${edgeMode} is not valid. The edge mode must be one of ['straight' | 'curved']`)
        } else {
            glb.edgeMode = edgeMode;
            glb.refresh = true
        };
        return this;
    }

    /**
     * If edge opacity is set to 1 edge crossings will be obscured.
     * @param {number} edgeOpacity The opacity of the edges - [0...1]. **Default**: 0.4.
     * @returns {(biPartite |string)} If the edgeOpacity argument is omitted, the current
     * edgeOpacity is returned, otherwise the [biPartite class object]{@link biPartite} is returned.
     * @example <caption>biPartite.edgeOpacity method example</caption>
     * new biPartite(data, container)
     *      .esgeOpacity(0.8)
     *      .show();
     */
    edgeOpacity (edgeOpacity) {
        if (edgeOpacity == undefined) return glb.edgeOpacity;
        if (typeof edgeOpacity != 'number' || edgeOpacity < 0 || edgeOpacity > 1) {
            console.error(`The edge opacity, ${edgeOpacity} is not valid. The edge opacity must be a number between 0 and 1 inclusive`);
        } else {
        glb.edgeOpacity = edgeOpacity;
        glb.refresh = true;
        };
        return this;
    }

    /**
     * Any valid CSS color strings may be used to define the colors in the bipartite graph. Ensure
     * that the count of the colors is equal or greater than the number of source nodes in the data,
     * otherwise data indices greater than the number of colors available will wrap around and reuse
     * colors beginning with index zero.
     * @param {Array} fillColors An array of valid CSS color strings. **Default**:
     * ['rgb(102, 194, 165)', 'rgb(252, 141, 98)', 'rgb(141, 160, 203)', 'rgb(231, 138, 195)',
     * 'rgb(166, 216, 84)', 'rgb(255, 217, 47)', 'rgb(229, 196, 148)', 'rgb(179, 179, 179)'].
     * @returns {(biPartite | Array)} If the fillColors argument is omitted, the current
     * fillColors are returned, otherwise the [biPartite class object]{@link biPartite} is returned.
     * @example <caption>biPartite.fillColors method example</caption>
     * new biPartite(data, container)
     *      .fillColors(['#a6cee3','#1f78b4','#b2df8a','#33a02c','#fb9a99','#e31a1c','#fdbf6f','#ff7f00'])
     *      .show();
     */
    fillColors (fillColors) {
        if (fillColors == undefined) return glb.fillColors;

        if (!fillColors instanceof Array) {
             console.error(`The fillColors, ${fillColors} are not valid. They must be an array of valid CSS colors`)           
        } else if (fillColors.every(d => checkCSS('color', d))) {
            glb.fillColors = fillColors.map (d => parseColor(d));
            glb.refresh = true;
        };

        return this;
    }

    /**
     * Defines the color of text to be used over dark backgrounds.
     * @param {string} lightTextColor Any valid CSS color. **Default**: 'rgb(255, 255, 255)'.
     * @returns {(biPartite | string)} If the lightTextColor argument is omitted, the current
     * lightTextColor is returned, otherwise the [biPartite class object]{@link biPartite} is returned.
     * @since v2.0.0
     * @example <caption>biPartite.lightTextColor method example</caption>
     * new biPartite(data, container)
     *      .lightTextColor('#FFFFFF')
     *      .show();
     */
     lightTextColor (lightTextColor) {
        if (lightTextColor == undefined) return glb.lightTextColor;
        if (checkCSS('color', lightTextColor)) {
            glb.lightTextColor = parseColor(lightTextColor);
            const rgb = splitRgb(glb.lightTextColor);
            glb.lightTextLuminance = luminance(rgb[0], rgb[1], rgb[2]);
        };
        return this;
     }

    /**
     * Defines the color of text to be used over light backgrounds.
     * @param {string} darkTextColor Any valid CSS color. **Default**: 'rgb(0, 0, 0').
     * @returns {(biPartite | string)} If the lightTextColor argument is omitted, the current
     * lightTextColor is returned, otherwise the [biPartite class object]{@link biPartite} is returned.
     * @since v2.0.0
     * @example <caption>biPartite.darkTextColor method example</caption>
     * new biPartite(data, container)
     *      .darkTextColor('#FFFFFF')
     *      .show();
     */
     darkTextColor (darkTextColor) {
        if (darkTextColor == undefined) return glb.darkTextColor;
        if (checkCSS('color', darkTextColor)) {
            glb.darkTextColor = parseColor(darkTextColor);
            const rgb = splitRgb(glb.darkTextColor);
            glb.darkTextLuminance = luminance(rgb[0], rgb[1], rgb[2]);
        };
        return this;
     }


    /**
     * The pad option sets the spacing between elements of the graph, The pad option should be used
     * to enhance readability of the graph. However, in large graphs, too big of a pad may preclude
     * rendering of the entire graphs within the container.
     * @param {number} pad The number of pixels between nodes as well as between the node labels
     * and the edges of the container. **Default**: 1.
     * @returns {(biPartite | number)} If the pad argument is omitted, the current
     * pad is returned, otherwise the [biPartite class object]{@link biPartite} is returned.
     * @example <caption>biPartite.pad method example</caption>
     * new biPartite(data, container)
     *      .pad(3)
     *      .show();
     */
    pad (pad) {
        if (pad == undefined) return glb.pad;
        if (typeof pad != 'number') {
            console.error(`The pad argument, ${pad} is not valid. It must be a number of pixels`)
        } else {
            glb.pad = pad;
            glb.refresh = true;
        };
        return this;
    }

    /**
     * The amount of time in milliseconds between transitions.
     *@param {number} duration The number of milliseconds to complete a transition when focusing on
     * individual nodes. **Default**: 750.
     * @returns {(biPartite | number)} If the duration argument is omitted, the current
     * duration is returned, otherwise the [biPartite class object]{@link biPartite} is returned.
     * @example <caption>biPartite.duration method example</caption>
     * new biPartite(data, container)
     *      .duration(500)
     *      .show();
     */
    duration (duration) {
        if (duration == undefined) return glb.duration;
        if (typeof duration != 'number') {
            console.error(`The duration argument, ${duration} is not valid. It must be a number in milliseconds`)
        } else {
            glb.duration = duration;
            glb.refresh = true;
        };
        return this;
    }

}