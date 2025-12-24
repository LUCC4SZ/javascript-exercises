const fibonacci = function(pos) {
    let fib = 0;
    let ant1 = 0;
    let ant2 = 1;
    if (pos < 0) {
        return "OOPS";
    } else {
        for (let i = 1; i <= pos; i++) {
            fib = ant1 + ant2;
            ant2 = ant1;
            ant1 = fib;
        }
    }
    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
