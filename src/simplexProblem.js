export function buildSimplexProblem(data, min, available) {
    if (0 == data.length) return [ [], [] ];
    var sum = data.reduce(function(a, b) {
        return a + b;
    });
    var objective = 'Maximize Z = r';
    var constraints = [];
    var totalConstraint = ''.concat(sum, 'r');
    data.forEach(function(d, i) {
        constraints.push(''.concat(d, 'r + x').concat(i, ' >= ').concat(min));
        totalConstraint += ' + x'.concat(i);
    });
    constraints.push(''.concat(totalConstraint, ' <= ').concat(available));
    return [ objective, constraints ];
}