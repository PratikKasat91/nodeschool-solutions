function foo() {
    var bar;
    quux = 3;

    return function zip() {
        bar = true;
        var quux = 2;
    }

}

foo();