interface Address {
    street: string;
    city: string;
    state: string;
    country: string;
}

class human {
    constructor(
        public name: string,
        public age: number,
        public address: Address
    ) {}
}

function printProps(obj: any, indent: string = ''): void {
    for (const prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            const propValue = obj[prop];
            const propType = Array.isArray(propValue) ? 'Array' : typeof propValue;

            if (propType === 'object') {
                console.log(`${indent}${prop}:`);
                printProps(propValue, indent + '    ');
            } else {
                console.log(`${indent}${prop} (${propType}): ${propValue}`);
            }
        }
    }
}

const individuals: human[] = [];

for (let i = 1; i <= 5; i++) {
    const address: Address = {
        street: `street_${i}`,
        city: `city_${i}`,
        state: `state_${i}`,
        country: `country_${i}`,
    };
    individuals.push(new human(`human_${i}`, 20 + i, address));
}

console.log('Array of Individuals:');
individuals.forEach((individual) => {
    printProps(individual);
});

const a: Address = {
    street: "string",
    city: "string",
    state: "string",
    country: "string",
};

console.log(typeof a);
