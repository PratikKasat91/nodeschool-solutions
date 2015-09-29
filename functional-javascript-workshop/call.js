  function duckCount() {
      // SOLUTION GOES HERE
      if (!arguments.length) return 0;
      var args = Array.prototype.filter.call(arguments, function(arg) {
          return Object.prototype.hasOwnProperty.call(arg, 'quack');
      });
      return args.length;
  }

  module.exports = duckCount