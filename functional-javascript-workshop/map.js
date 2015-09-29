function doubleAll(numbers) {
    // SOLUTION GOES HERE
    var result = numbers.map(function(element) {
        return (element * 2);
    });
    return result;
}
module.exports = doubleAll