var i = 0;

function reduce(arr, fn, initial) {
    if (!arr.length) return initial;
    var curr = arr[0];
    var prev = fn(initial, curr, ++i, arr);
    return reduce(arr.slice(1), fn, prev);

}

module.exports = reduce


//Right Solution

/*function reduce(arr, fn, initial) {
    return (function reduceOne(index, value) {
            if (index > arr.length - 1) return value // end condition
            return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
        })(0, initial) // IIFE. kick off recursion with initial values
} */