export function buildSimplexProblem (data, min, available) {

	if (data.length == 0) return [[],[]];
    
    let sum = data.reduce((a, b) => {return a + b});
    let objective = 'Maximize Z = r';
    let constraints = [];
    let totalConstraint = `${sum}r`;

    data.forEach ((d, i) => {
    	constraints.push(`${d}r + x${i} >= ${min}`);
    	totalConstraint += ` + x${i}`;
    });
    constraints.push(`${totalConstraint} <= ${available}`);

    return [objective, constraints];

}