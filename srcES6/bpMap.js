import {buildSimplexProblem} from './simplexProblem.js';
import {simplex} from 'fxsimplex';

export function bpMap (a/*array*/, p/*pad*/, m/*min*/, s/*start*/, e/*end*/) {

    let ret = [];

    let data = a.reduce((a, b) => {return b.value > 1e-5 ? a.concat(b.value) : a}, []);
    let len = data.length;
    let totalPad = len * p * 2;
    let availableSize = e - s - totalPad;
    let t = data.reduce((a, b) => {return a + b}, 0);

    const [objective, constraints] = buildSimplexProblem(data, m, availableSize);
    let {solution, result} = simplex(objective, constraints);
   
    let ratio;
    switch (result) {
        case 'unbounded':
        case 'infeasible': 
            ratio = availableSize / t;
            break;
        case '':
            ratio = 0;
            break;
        default:
            ratio = solution.reduce((a,b) => {return b[0] == 'r' ? b[1] : a}, 0);
    };

    let b = s;
    let o = ratio;
    a.forEach (d => { 
        let v = d.value * o;
        let adjustedMin = d.value < 1e-5 ? 0 : m;
        let adjustedP = d.value < 1e-5 ? 0 : p;
        ret.push({
            s: b + adjustedP + (v < adjustedMin ? 0.5 * (adjustedMin - v) : 0),
            e: b + adjustedP + (v < adjustedMin ? 0.5 * (adjustedMin + v) : v),
            p: t < 1e-5 ? 0 : d.value / t
        }); 
        b += 2 * adjustedP + (v < adjustedMin ? adjustedMin : v); 
    }); 
    return ret;
}