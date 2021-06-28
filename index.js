function receivesAFunction (aFunction) {
    return aFunction();
} 

function namedFunction () {
    return "I do something";
}

function returnsANamedFunction() {
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function() {
        return "I am anonymous";
    }
}