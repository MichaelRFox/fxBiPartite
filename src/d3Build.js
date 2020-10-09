import { select, selectAll, mouse, event } from 'd3-selection';

import { transition } from 'd3-transition';

import { easeLinear } from 'd3-ease';

export default {
    select,
    selectAll,
    mouse,
    transition,
    easeLinear,
    get event() {
        return event;
    }
};