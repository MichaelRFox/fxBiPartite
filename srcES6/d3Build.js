import {select, selectAll, mouse, event} from 'd3-selection';
import {transition} from 'd3-transition';
import {easeLinear} from 'd3-ease';
// import {format} from 'd3-format';

export default {
	select,
	selectAll,
    mouse,
    transition,
    easeLinear,
    // format,
	get event() { return event }
};