var human = /** @class */ (function () {
    function human(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    return human;
}());
function printProps(obj, indent) {
    if (indent === void 0) { indent = ''; }
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            var propValue = obj[prop];
            var propType = Array.isArray(propValue) ? 'Array' : typeof propValue;
            if (propType === 'object') {
                console.log("".concat(indent).concat(prop, ":"));
                printProps(propValue, indent + '    ');
            }
            else {
                console.log("".concat(indent).concat(prop, " (").concat(propType, "): ").concat(propValue));
            }
        }
    }
}
var individuals = [];
for (var i = 1; i <= 5; i++) {
    var address = {
        street: "street_".concat(i),
        city: "city_".concat(i),
        state: "state_".concat(i),
        country: "country_".concat(i),
    };
    individuals.push(new human("human_".concat(i), 20 + i, address));
}
console.log('Array of Individuals:');
individuals.forEach(function (individual) {
    printProps(individual);
});
var a = {
    street: "string",
    city: "string",
    state: "string",
    country: "string",
};
console.log(typeof a);
